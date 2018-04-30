<?php

namespace App\Controller;

use App\Entity\Restaurant;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

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
        $id = 403;
        $restaurants = $this->getDoctrine()->getRepository(Restaurant::class)->findAll();
        $restaurant = $this->getDoctrine()->getRepository(Restaurant::class)->find($id);
        $jsonresponse = new JsonResponse($restaurant);

        $encoder = new JsonEncoder();
        $normalizer = new ObjectNormalizer();
        $normalizer->setCircularReferenceHandler(function ($restaurant) {
            return $restaurant->getId();
        });
        $serializer = new Serializer([$normalizer], [$encoder]);
        $serialized = $serializer->serialize($restaurant, 'json');

        return $this->render('home/blank.html.twig', ['serialized' => $serialized, 'restaurants' => $restaurants, 'restaurant' => $restaurant, 'jsonresponse' => $jsonresponse]);
    }
}
