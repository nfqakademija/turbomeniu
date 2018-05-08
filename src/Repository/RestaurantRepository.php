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
     * @param $minLat
     * @param $maxLat
     * @param $minLon
     * @param $maxLon
     * @return array
     */
    public function findAllClose($minLat, $maxLat, $minLon, $maxLon): array
    {
        $parameters = ['minLat' => $minLat, 'maxLat' =>$maxLat, 'minLon' => $minLon, 'maxLon' => $maxLon];
        $qb = $this->createQueryBuilder('r')
            ->where('r.latitude >= :minLat')
            ->andWhere('r.latitude <= :maxLat')
            ->andWhere('r.longitude >= :minLon')
            ->andWhere('r.longitude <= :maxLon')
            ->setParameters($parameters)
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
