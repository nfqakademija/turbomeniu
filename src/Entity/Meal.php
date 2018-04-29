<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\MealRepository")
 */
class Meal
{
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Restaurant", inversedBy="meals")
     * @ORM\JoinColumn(name="restaurant_id", referencedColumnName="id")
     */
    private $restaurant;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer", name="restaurantId")
     */
    private $restaurantId;

    /**
     * @ORM\Column(type="string", length=50, name="foodName")
     */
    private $foodName;

    /**
     * @ORM\Column(type="decimal", precision=3, scale=2)
     */
    private $price;

    /**
     * @ORM\Column(type="string", length=2083)
     */
    private $image;

    /**
     * @ORM\Column(type="date")
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
    public function getRestaurantId()
    {
        return $this->restaurantId;
    }

    /**
     * @param mixed $restaurantId
     */
    public function setRestaurantId($restaurantId): void
    {
        $this->restaurantId = $restaurantId;
    }

    /**
     * @return mixed
     */
    public function getFoodName()
    {
        return $this->foodName;
    }

    /**
     * @param mixed $foodName
     */
    public function setFoodName($foodName): void
    {
        $this->foodName = $foodName;
    }

    /**
     * @return mixed
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * @param mixed $price
     */
    public function setPrice($price): void
    {
        $this->price = $price;
    }

    /**
     * @return mixed
     */
    public function getImage()
    {
        return $this->image;
    }

    /**
     * @param mixed $image
     */
    public function setImage($image): void
    {
        $this->image = $image;
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
