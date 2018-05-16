<?php

namespace App\Controller;

use App\Entity\Restaurant;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Services\NormalizerCallService;

class ReactController extends AbstractController
{
    /**
     * @Route("/index/{latitude}/{longitude}/{distance}", name="index")
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

        //        Normalize datetime and object
        $normalized = $normalizer->normalize($restaurants, null, ['groups' => ['group1']]);

        return JsonResponse::create($normalized);
    }

    /**
     * @Route("/modal/{id}", name="modal")
     * @param $id
     * @param NormalizerCallService $normalizerCallService
     * @return JsonResponse
     * @throws \Doctrine\Common\Annotations\AnnotationException
     */
    public function modal($id, NormalizerCallService $normalizerCallService)
    {
        $restaurant = $this->getDoctrine()->getRepository(Restaurant::class)->find($id);

        $normalizer = $normalizerCallService->callNormalizer();

        //        Normalize datetime and object
        $normalized = $normalizer->normalize($restaurant, null, ['groups' => ['group2']]);

        return JsonResponse::create($normalized);
    }

    /**
     * @Route("/search/{query}", name="search")
     * @param $query
     * @param NormalizerCallService $normalizerCallService
     * @return JsonResponse
     * @throws \Doctrine\Common\Annotations\AnnotationException
     */
    public function search($query, NormalizerCallService $normalizerCallService)
    {
        $restaurants = $this->getDoctrine()->getRepository(Restaurant::class)->searchAll($query);

        $normalizer = $normalizerCallService->callNormalizer();

        //        Normalize datetime and object
        $normalized = $normalizer->normalize($restaurants, null, ['groups' => ['group1']]);

        return JsonResponse::create($normalized);
    }
}
