<?php

namespace App\Controller;

use App\Entity\Restaurant;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;

class ReactController extends AbstractController
{
    /**
     * @Route("/index/{minLat}/{maxLat}/{minLon}/{maxLon}", name="index")
     */
    public function index($minLat, $maxLat, $minLon, $maxLon)
    {
        $restaurants = $this->getDoctrine()->getRepository(Restaurant::class)->findAllClose($minLat, $maxLat, $minLon, $maxLon);

        // Call normalizer
        $normalizer = new ObjectNormalizer();
        $dateTimeNorm = new DateTimeNormalizer();
        $normalizer->setCircularReferenceHandler(function ($restaurant) {
            return $restaurant->getId();
        });
        $serializer = new Serializer([$dateTimeNorm, $normalizer]);

        //        Normalize datetime and object
        $normalized = $serializer->normalize($restaurants);

        return JsonResponse::create($normalized);
    }

    /**
     * @Route("/modal/{id}", name="modal")
     */
    public function modal($id)
    {
        $restaurant = $this->getDoctrine()->getRepository(Restaurant::class)->find($id);

        // Call normalizer
        $normalizer = new ObjectNormalizer();
        $dateTimeNorm = new DateTimeNormalizer();
        $normalizer->setCircularReferenceHandler(function ($restaurant) {
            return $restaurant->getId();
        });
        $serializer = new Serializer([$dateTimeNorm, $normalizer]);

        //        Normalize datetime and object
        $normalized = $serializer->normalize($restaurant);

        return JsonResponse::create($normalized);
    }
}
