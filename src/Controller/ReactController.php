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
     * @Route("/index/{minLat}/{maxLat}/{minLon}/{maxLon}", name="index")
     * @param $minLat
     * @param $maxLat
     * @param $minLon
     * @param $maxLon
     * @param NormalizerCallService $normalizerCallService
     * @return JsonResponse
     * @throws \Doctrine\Common\Annotations\AnnotationException
     */
    public function index($minLat, $maxLat, $minLon, $maxLon, NormalizerCallService $normalizerCallService)
    {
        $restaurants = $this->getDoctrine()->getRepository(Restaurant::class)->findAllClose(
            $minLat,
            $maxLat,
            $minLon,
            $maxLon
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
