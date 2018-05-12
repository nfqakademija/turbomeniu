<?php

namespace App\Controller;

use App\Entity\Restaurant;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
// Serializer groups
use Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory;
// For serializer group annotations
use Doctrine\Common\Annotations\AnnotationReader;
use Symfony\Component\Serializer\Mapping\Loader\AnnotationLoader;

class ReactController extends AbstractController
{
    /**
     * @Route("/index/{minLat}/{maxLat}/{minLon}/{maxLon}", name="index")
     * @throws \Doctrine\Common\Annotations\AnnotationException
     */
    public function index($minLat, $maxLat, $minLon, $maxLon)
    {
        $restaurants = $this->getDoctrine()->getRepository(Restaurant::class)->findAllClose(
            $minLat,
            $maxLat,
            $minLon,
            $maxLon
        );

        $classMetadataFactory = new ClassMetadataFactory(new AnnotationLoader(new AnnotationReader()));
        // Call normalizer
        $normalizer = new ObjectNormalizer($classMetadataFactory);
        $dateTimeNorm = new DateTimeNormalizer();
        $normalizer->setCircularReferenceHandler(function ($restaurant) {
            return $restaurant->getId();
        });
        $serializer = new Serializer([$dateTimeNorm, $normalizer]);

        //        Normalize datetime and object
        $normalized = $serializer->normalize($restaurants, null, ['groups' => ['group1']]);

        return JsonResponse::create($normalized);
    }

    /**
     * @Route("/modal/{id}", name="modal")
     * @throws \Doctrine\Common\Annotations\AnnotationException
     */
    public function modal($id)
    {
        $restaurant = $this->getDoctrine()->getRepository(Restaurant::class)->find($id);

        $classMetadataFactory = new ClassMetadataFactory(new AnnotationLoader(new AnnotationReader()));
        // Call normalizer
        $normalizer = new ObjectNormalizer($classMetadataFactory);
        $dateTimeNorm = new DateTimeNormalizer();
        $normalizer->setCircularReferenceHandler(function ($restaurant) {
            return $restaurant->getId();
        });
        $serializer = new Serializer([$dateTimeNorm, $normalizer]);

        //        Normalize datetime and object
        $normalized = $serializer->normalize($restaurant, null, ['groups' => ['group2']]);

        return JsonResponse::create($normalized);
    }

    /**
     * @Route("/search/{query}", name="search")
     * @throws \Doctrine\Common\Annotations\AnnotationException
     */
    public function search($query)
    {
        $restaurants = $this->getDoctrine()->getRepository(Restaurant::class)->searchAll($query);

        $classMetadataFactory = new ClassMetadataFactory(new AnnotationLoader(new AnnotationReader()));
        // Call normalizer
        $normalizer = new ObjectNormalizer($classMetadataFactory);
        $dateTimeNorm = new DateTimeNormalizer();
        $normalizer->setCircularReferenceHandler(function ($restaurant) {
            return $restaurant->getId();
        });
        $serializer = new Serializer([$dateTimeNorm, $normalizer]);

        //        Normalize datetime and object
        $normalized = $serializer->normalize($restaurants, null, ['groups' => ['group1']]);

        return JsonResponse::create($normalized);
    }
}
