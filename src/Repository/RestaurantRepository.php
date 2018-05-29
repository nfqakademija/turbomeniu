<?php

namespace App\Repository;

use App\Entity\Restaurant;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Internal\Hydration\ArrayHydrator;
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
     * @return array|string
     */
    public function findSimilar($foodName)
    {
        if ($foodName) {
            $pastFood = explode(',', $foodName);
//        Find restaurants with similar menu.
            $qbSimilar = $this->createQueryBuilder('r')
                ->select('r.id')
                ->join('r.meals', 'm');
            $i = 0;
            foreach ($pastFood as $food) {
                $qbSimilar->orWhere('m.foodName LIKE :food' . $i);
                $qbSimilar->setParameter('food' . $i, '%' . $food[$i] . '%');
                $i++;
            }
            $resultSimilar = $qbSimilar->distinct('id')->getQuery()->getArrayResult();

//        Format query result.
            $formattedResultSimilar = array_column($resultSimilar, 'id');
            return $formattedResultSimilar;
        } else {
            $formattedResultSimilar = 'null';
            return $formattedResultSimilar;
        }
    }
    /**
     * @param $foodName
     * @return mixed
     */
    public function findDifferent($foodName)
    {
        $similar = $this->findSimilar($foodName);
        $qbDifferent = $this->createQueryBuilder('r')
            ->select('r')
            ->join('r.meals', 'm')
            ->where('r.id NOT IN (:similar)')
            ->andWhere('m.foodName IS NOT NULL')
            ->orderBy('r.avgRating', 'DESC')
            ->setParameter('similar', $similar)
            ->getQuery()
            ->getResult();
        return $qbDifferent;
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
