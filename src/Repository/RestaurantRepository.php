<?php

namespace App\Repository;

use App\Entity\Restaurant;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Restaurant|null find($id, $lockMode = null, $lockVersion = null)
 * @method Restaurant|null findOneBy(array $criteria, array $orderBy = null)
 * @method Restaurant[]    findAll()
 * @method Restaurant[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RestaurantRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Restaurant::class);
    }

    /**
     * @param $latitude
     * @param $longitude
     * @param $distance
     * @return array
     */
    public function findAllClose($latitude, $longitude, $distance): array
    {
        $qb = $this->createQueryBuilder('r')
            ->select('r')
            ->addSelect(
                '( 3959 * acos(cos(radians(' . $latitude . '))' .
                '* cos( radians( r.latitude ) )' .
                '* cos( radians( r.longitude )' .
                '- radians(' . $longitude . ') )' .
                '+ sin( radians(' . $latitude . ') )' .
                '* sin( radians( r.latitude ) ) ) ) AS HIDDEN distance'
            )
            ->having('distance < :distance')
            ->setParameter('distance', $distance)
            ->orderBy('distance', 'ASC')
            ->getQuery();
        return $qb->execute();
    }

    /**
     * @param $query
     * @param $latitude
     * @param $longitude
     * @param $distance
     * @return array
     */
    public function searchAll($query, $latitude, $longitude, $distance): array
    {
        $qb = $this->createQueryBuilder('r')
            ->select('r')
            ->innerJoin('r.meals', 'm')
            ->where('r.name LIKE :query')
            ->orWhere('m.foodName LIKE :query')
            ->setParameter('query', '%'.$query.'%')
            ->addSelect(
                '( 3959 * acos(cos(radians(' . $latitude . '))' .
                '* cos( radians( r.latitude ) )' .
                '* cos( radians( r.longitude )' .
                '- radians(' . $longitude . ') )' .
                '+ sin( radians(' . $latitude . ') )' .
                '* sin( radians( r.latitude ) ) ) ) AS HIDDEN distance'
            )
            ->having('distance < :distance')
            ->setParameter('distance', $distance)
            ->orderBy('distance', 'ASC')
            ->getQuery();
        return $qb->execute();
    }

    public function differentThan($foodName, $latitude, $longitude, $distance)
    {
        $searches = explode(',', $foodName);
//        TODO make query use each search record.
        $qb = $this->createQueryBuilder('r')
            ->select('r')
            ->innerJoin('r.meals', 'm')
            ->where('m.foodName != :searches')
            ->setParameter('searches', $searches)
            ->addSelect(
                '( 3959 * acos(cos(radians(' . $latitude . '))' .
                '* cos( radians( r.latitude ) )' .
                '* cos( radians( r.longitude )' .
                '- radians(' . $longitude . ') )' .
                '+ sin( radians(' . $latitude . ') )' .
                '* sin( radians( r.latitude ) ) ) ) AS HIDDEN distance'
            )
            ->having('distance < :distance')
            ->setParameter('distance', $distance)
            ->orderBy('distance', 'ASC')
            ->getQuery();
        return $qb->execute();
    }

//    /**
//     * @return Restaurant[] Returns an array of Restaurant objects
//     */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('r.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Restaurant
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
