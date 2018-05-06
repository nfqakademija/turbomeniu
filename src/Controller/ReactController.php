<?php

namespace App\Controller;

use App\Entity\Restaurant;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;

class ReactController extends AbstractController
{
    /**
     * @Route("/index", name="index")
     */
    public function index()
    {
        // Set id of test object.
        $id = 1;
        $restaurants = $this->getDoctrine()->getRepository(Restaurant::class)->findAll();
        $restaurant = $this->getDoctrine()->getRepository(Restaurant::class)->find($id);

        $encoder = new JsonEncoder();
        // Normalizer
        $normalizer = new ObjectNormalizer();
        $dateTimeNorm = new DateTimeNormalizer();
        $normalizer->setCircularReferenceHandler(function ($restaurant) {
            return $restaurant->getId();
        });
        // Serialized string
        $serializer = new Serializer([$dateTimeNorm, $normalizer], [$encoder]);
        $serialized = $serializer->serialize($restaurant, 'json');
        // JsonResponse normalized test
        $normalized = $serializer->normalize($restaurant);
        $jsonresponse = new JsonResponse($normalized);
        // Alternative
        $jsonresponse2 = JsonResponse::fromJsonString($serialized);

        return $this->render('home/blank.html.twig', ['jsonresponse' => $jsonresponse, 'serialized' => $serialized, 'restaurants' => $restaurants, 'restaurant' => $restaurant]);
    }
}
