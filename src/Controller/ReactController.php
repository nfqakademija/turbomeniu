<?php

namespace App\Controller;

use App\Entity\Restaurant;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Serializer;

class ReactController extends AbstractController
{
    /**
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function home()
    {
        return $this->render('home/index.html.twig');
    }

    /**
     * @param $latitude
     * @param $longitude
     * @param $distance
     * @param \Symfony\Component\Serializer\Serializer $serializer
     * @return JsonResponse
     */
    public function index($latitude, $longitude, $distance, Serializer $serializer)
    {
        $restaurants = $this->getDoctrine()->getRepository(Restaurant::class)->findAllClose(
            $latitude,
            $longitude,
            $distance
        );

        $normalized = $serializer->normalize($restaurants, null, ['groups' => ['list']]);

        return new JsonResponse($normalized);
    }

    /**
     * @param $id
     * @param Serializer $serializer
     * @return JsonResponse
     */
    public function modal($id, Serializer $serializer)
    {
        $restaurant = $this->getDoctrine()->getRepository(Restaurant::class)->find($id);

        $normalized = $serializer->normalize($restaurant, null, ['groups' => ['modal']]);

        return new JsonResponse($normalized);
    }

    /**
     * @param $query
     * @param $latitude
     * @param $longitude
     * @param $distance
     * @param Serializer $serializer
     * @return JsonResponse
     */
    public function search($query, $latitude, $longitude, $distance, Serializer $serializer)
    {
        $restaurants = $this->getDoctrine()->getRepository(Restaurant::class)->searchAll(
            $query,
            $latitude,
            $longitude,
            $distance
        );

        $normalized = $serializer->normalize($restaurants, null, ['groups' => ['list']]);

        return new JsonResponse($normalized);
    }

    /**
     * @param Request $request
     * @param Serializer $serializer
     * @return JsonResponse
     */
    public function discoverSomethingNew(Request $request, Serializer $serializer)
    {
        $query = $this->getDoctrine()->getRepository(Restaurant::class)->findDifferent($request->get('foodName'));
        $restaurants = $query->getResult();

        $normalized = $serializer->normalize($restaurants, null, ['groups' => ['list']]);

        return new JsonResponse($normalized);
    }

    /**
     * @param Request $request
     * @param Serializer $serializer
     * @return JsonResponse
     */
    public function restaurantsYouMayLike(Request $request, Serializer $serializer)
    {
        $query = $this->getDoctrine()->getRepository(Restaurant::class)->findSimilar($request->get('foodName'));
        $restaurants = $query->getResult();

        $normalized = $serializer->normalize($restaurants, null, ['groups' => ['list']]);

        return new JsonResponse($normalized);
    }
}
