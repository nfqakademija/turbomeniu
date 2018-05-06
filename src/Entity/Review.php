<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ReviewRepository")
 */
class Review
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"group2"})
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Restaurant", inversedBy="reviews")
     * @ORM\JoinColumn(nullable=false)
     */
    private $restaurant;

    /**
     * @ORM\Column(type="string", length=50)
     * @Groups({"group2"})
     */
    private $name;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"group2"})
     */
    private $rating;

    /**
     * @ORM\Column(type="text")
     * @Groups({"group2"})
     */
    private $comment;

    /**
     * @ORM\Column(type="date")
     * @Groups({"group2"})
     */
    private $date;

//    Getters and setters.

    /**
     * @return mixed
     */
    public function getRestaurant()
    {
        return $this->restaurant;
    }

    /**
     * @param mixed $restaurant
     */
    public function setRestaurant($restaurant): void
    {
        $this->restaurant = $restaurant;
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param mixed $name
     */
    public function setName($name): void
    {
        $this->name = $name;
    }

    /**
     * @return mixed
     */
    public function getRating()
    {
        return $this->rating;
    }

    /**
     * @param mixed $rating
     */
    public function setRating($rating): void
    {
        $this->rating = $rating;
    }

    /**
     * @return mixed
     */
    public function getComment()
    {
        return $this->comment;
    }

    /**
     * @param mixed $comment
     */
    public function setComment($comment): void
    {
        $this->comment = $comment;
    }

    /**
     * @return mixed
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * @param mixed $date
     */
    public function setDate($date): void
    {
        $this->date = $date;
    }
}
