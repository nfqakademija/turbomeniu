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
        $parameters = ['latitude' => $latitude, 'longitude' => $longitude, 'distance' => $distance];
        $qb = $this->createQueryBuilder('r')
            ->select('r')
            ->join('r.meals', 'm')
            ->where('m.foodName IS NOT NULL')
            ->addSelect(
                '( 3959 * acos(cos(radians( :latitude ))' .
                '* cos( radians( r.latitude ) )' .
                '* cos( radians( r.longitude )' .
                '- radians( :longitude ) )' .
                '+ sin( radians( :latitude ) )' .
                '* sin( radians( r.latitude ) ) ) ) AS HIDDEN distance'
            )
            ->having('distance < :distance')
            ->setParameters($parameters)
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
        $parameters = [
            'latitude' => $latitude,
            'longitude' => $longitude,
            'distance' => $distance,
            'query' => '%' . $query . '%'
        ];
        $qb = $this->createQueryBuilder('r')
            ->select('r')
            ->join('r.meals', 'm')
            ->where('r.name LIKE :query')
            ->orWhere('m.foodName LIKE :query')
            ->andWhere('m.foodName IS NOT NULL')
            ->addSelect(
                '( 3959 * acos(cos(radians( :latitude ))' .
                '* cos( radians( r.latitude ) )' .
                '* cos( radians( r.longitude )' .
                '- radians( :longitude ) )' .
                '+ sin( radians( :latitude ) )' .
                '* sin( radians( r.latitude ) ) ) ) AS HIDDEN distance'
            )
            ->having('distance < :distance')
            ->setParameters($parameters)
            ->orderBy('distance', 'ASC')
            ->getQuery();
        return $qb->execute();
    }

    /**
     * @param $foodName
     * @return \Doctrine\ORM\Query
     */
    public function findSimilar($foodName)
    {
        $qb = $this->createQueryBuilder('r')
            ->join('r.meals', 'm')
            ->orderBy('r.avgRating', 'DESC')
            ->distinct('id');
        if ($foodName) {
            $pastFood = explode(',', $foodName);
//        Find restaurants with similar menu.
            $i = 0;
            foreach ($pastFood as $food) {
                $qb->orWhere('m.foodName LIKE :food' . $i)->setParameter('food' . $i, '%' . $food[$i] . '%');
                $i++;
            }
        }
        return $qb->getQuery();
    }

    /**
     * @param $foodName
     * @return \Doctrine\ORM\Query
     */
    public function findDifferent($foodName)
    {
        $qb = $this->createQueryBuilder('r')
            ->select('r')
            ->join('r.meals', 'm')
            ->where('m.foodName IS NOT NULL')
            ->orderBy('r.avgRating', 'DESC');
        if ($foodName) {
            $qbS = $this->findSimilar($foodName);
            $similar = $qbS->getArrayResult();
            $formattedSimilar = array_column($similar, 'id');
            $qb->andWhere('r.id NOT IN (:similar)')->setParameter('similar', $formattedSimilar);
        }
        return $qb->getQuery();
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
