<?php
/**
 * Created by PhpStorm.
 * User: rokas
 * Date: 5/8/18
 * Time: 11:03 AM
 */

namespace App\EventListener;

use App\Entity\Review;
use App\Entity\Restaurant;
use Doctrine\ORM\Event\LifecycleEventArgs;

class ReviewListener
{
    public function postPersist(LifecycleEventArgs $args)
    {
        $entity = $args->getEntity();
        $entityManager = $args->getEntityManager();

        if ($entity instanceof Review) {
            $id = $entity->getRestaurant()->getId();
            $repo = $entityManager->getRepository('App:Review');
            $query = $repo->createQueryBuilder('r')
                ->select("avg(r.rating) as score_avg")
                ->where('r.restaurant = :restaurant')
                ->setParameter('restaurant', $id)
                ->getQuery();
            $avgRating = $query->getResult();
        }
    }
}
