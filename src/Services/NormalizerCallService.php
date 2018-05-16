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
// Serializer groups
use Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory;
// For serializer group annotations
use Doctrine\Common\Annotations\AnnotationReader;
use Symfony\Component\Serializer\Mapping\Loader\AnnotationLoader;

class NormalizerCallService
{
    /**
     * @return Serializer
     * @throws \Doctrine\Common\Annotations\AnnotationException
     */
    public function callNormalizer()
    {
//        Load annotations
        $classMetadataFactory = new ClassMetadataFactory(new AnnotationLoader(new AnnotationReader()));
        // Call normalizer
        $normalizer = new ObjectNormalizer($classMetadataFactory);
        $dateTimeNorm = new DateTimeNormalizer();
        $normalizer->setCircularReferenceHandler(function ($restaurant) {
            return $restaurant->getId();
        });
        $readyNormalizer = new Serializer([$dateTimeNorm, $normalizer]);

        return $readyNormalizer;
    }
}