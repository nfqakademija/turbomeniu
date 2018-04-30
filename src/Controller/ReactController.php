<?php

namespace App\Controller;

use App\Entity\Restaurant;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ReactController extends AbstractController
{
    /**
     * @Route("/index", name="index")
     */
    public function index()
    {
        $id = 402;
        $restaurants = $this->getDoctrine()->getRepository(Restaurant::class)->findAll();
        $restaurant = $this->getDoctrine()->getRepository(Restaurant::class)->find($id);
        return $this->render('home/blank.html.twig', ['restaurants' => $restaurants, 'restaurant' => $restaurant]);
    }
}
