<?php
/**
 * Created by PhpStorm.
 * User: rokas
 * Date: 5/8/18
 * Time: 11:03 AM
 */

namespace App\EventListener;

use App\Entity\Restaurant;
use App\Entity\Review;
use Doctrine\ORM\Event\LifecycleEventArgs;

class ReviewListener
{
    /**
     * @param LifecycleEventArgs $args
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function postPersist(LifecycleEventArgs $args)
    {
        $entity = $args->getEntity();
        $entityManager = $args->getEntityManager();

        if ($entity instanceof Review) {
            $id = $entity->getRestaurant()->getId();
            $repo = $entityManager->getRepository('App:Review');
            $query = $repo->createQueryBuilder('r')
                ->select("avg(r.rating) as avg_rating")
                ->where('r.restaurant = :restaurant')
                ->setParameter('restaurant', $id)
                ->getQuery();
            $avgRating = $query->getResult();
            $insert = $avgRating['0'];

            $restaurant = $entityManager->getRepository(Restaurant::class)->find($id);
            $restaurant->setAvgRating($insert['avg_rating']);
            $entityManager->flush($restaurant);
            $entityManager->detach($restaurant);
        }
    }
}
