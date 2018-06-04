<?php
/**
 * Created by PhpStorm.
 * User: rokas
 * Date: 5/16/18
 * Time: 11:21 AM
 */

namespace App\Services;

use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory;
use Doctrine\Common\Annotations\AnnotationReader;
use Symfony\Component\Serializer\Mapping\Loader\AnnotationLoader;

class SerializerFactory
{
    /**
     * @return Serializer
     * @throws \Doctrine\Common\Annotations\AnnotationException
     */
    public function buildSerializer()
    {
        $classMetadataFactory = new ClassMetadataFactory(new AnnotationLoader(new AnnotationReader()));

        $objectNorm = new ObjectNormalizer($classMetadataFactory);
        $dateTimeNorm = new DateTimeNormalizer();
        $objectNorm->setCircularReferenceHandler(function ($restaurant) {
            return $restaurant->getId();
        });

        $serializer = new Serializer([$dateTimeNorm, $objectNorm]);

        return $serializer;
    }
}
