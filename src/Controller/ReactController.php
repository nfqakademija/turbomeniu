<?php

namespace App\Controller;

use App\Entity\Restaurant;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Services\NormalizerCallService;

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
     * @param NormalizerCallService $normalizerCallService
     * @return JsonResponse
     * @throws \Doctrine\Common\Annotations\AnnotationException
     */
    public function index($latitude, $longitude, $distance, NormalizerCallService $normalizerCallService)
    {
        $restaurants = $this->getDoctrine()->getRepository(Restaurant::class)->findAllClose(
            $latitude,
            $longitude,
            $distance
        );

        $normalizer = $normalizerCallService->callNormalizer();
        $normalized = $normalizer->normalize($restaurants, null, ['groups' => ['list']]);

        return JsonResponse::create($normalized);
    }

    /**
     * @param $id
     * @param NormalizerCallService $normalizerCallService
     * @return JsonResponse
     * @throws \Doctrine\Common\Annotations\AnnotationException
     */
    public function modal($id, NormalizerCallService $normalizerCallService)
    {
        $restaurant = $this->getDoctrine()->getRepository(Restaurant::class)->find($id);

        $normalizer = $normalizerCallService->callNormalizer();
        $normalized = $normalizer->normalize($restaurant, null, ['groups' => ['modal']]);

        return JsonResponse::create($normalized);
    }

    /**
     * @param $query
     * @param $latitude
     * @param $longitude
     * @param $distance
     * @param NormalizerCallService $normalizerCallService
     * @return JsonResponse
     * @throws \Doctrine\Common\Annotations\AnnotationException
     */
    public function search($query, $latitude, $longitude, $distance, NormalizerCallService $normalizerCallService)
    {
        $restaurants = $this->getDoctrine()->getRepository(Restaurant::class)->searchAll(
            $query,
            $latitude,
            $longitude,
            $distance
        );

        $normalizer = $normalizerCallService->callNormalizer();
        $normalized = $normalizer->normalize($restaurants, null, ['groups' => ['list']]);

        return JsonResponse::create($normalized);
    }

    /**
     * @param $foodName
     * @param NormalizerCallService $normalizerCallService
     * @return JsonResponse
     * @throws \Doctrine\Common\Annotations\AnnotationException
     */
    public function discoverSomethingNew($foodName, NormalizerCallService $normalizerCallService)
    {
        $restaurants = $this->getDoctrine()->getRepository(Restaurant::class)->differentThan($foodName);

        $normalizer = $normalizerCallService->callNormalizer();
        $normalized = $normalizer->normalize($restaurants, null, ['groups' => ['list']]);

        return JsonResponse::create($normalized);
    }

    public function restaurantsYouMayLike($restaurantName)
    {
        return $this->render('home/blank.html.twig');
    }
}
