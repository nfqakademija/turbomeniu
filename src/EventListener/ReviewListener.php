<?php
/**
 * Created by PhpStorm.
 * User: rokas
 * Date: 5/8/18
 * Time: 11:03 AM
 */

namespace App\EventListener;

use App\Entity\Review;
use Doctrine\ORM\Event\LifecycleEventArgs;

class ReviewListener
{
    public function postPersist(LifecycleEventArgs $args)
    {
        $entity = $args->getEntity();
        $entityManager = $args->getEntityManager();

        if ($entity instanceof Review) {
            $restaurant = $entity->getRestaurant();
        }
    }
}
