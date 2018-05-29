<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\RestaurantRepository")
 */
class Restaurant
{
    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Meal", mappedBy="restaurant")
     * @ORM\OrderBy({"price" = "ASC"})
     * @Groups({"list", "modal"})
     */
    private $meals;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Review", mappedBy="restaurant")
     * @ORM\OrderBy({"date" = "DESC"})
     * @Groups({"modal"})
     */
    private $reviews;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"list", "modal"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     * @Groups({"list", "modal"})
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=2083)
     * @Groups({"list", "modal"})
     */
    private $logo;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"list", "modal"})
     */
    private $avgRating;

    /**
     * @ORM\Column(type="string", length=20)
     * @Groups({"modal"})
     */
    private $phoneNumber;

    /**
     * @ORM\Column(type="string", length=2083)
     * @Groups({"modal"})
     */
    private $webPage;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"modal"})
     */
    private $email;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=8)
     * @Groups({"list"})
     */
    private $latitude;

    /**
     * @ORM\Column(type="decimal", precision=11, scale=8)
     * @Groups({"list"})
     */
    private $longitude;

//    Constructor

    public function __construct()
    {
        $this->meals = new ArrayCollection();
        $this->reviews = new ArrayCollection();
    }

//    Getters and setters.


    /**
     * @return Collection|Review[]
     */
    public function getReviews(): Collection
    {
        return $this->reviews;
    }

    /**
     * @return Collection|Meal[]
     */
    public function getMeals(): Collection
    {
        return $this->meals;
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
    public function getLogo()
    {
        return $this->logo;
    }

    /**
     * @param mixed $logo
     */
    public function setLogo($logo): void
    {
        $this->logo = $logo;
    }

    /**
     * @return mixed
     */
    public function getAvgRating()
    {
        return $this->avgRating;
    }

    /**
     * @param mixed $avgRating
     */
    public function setAvgRating($avgRating): void
    {
        $this->avgRating = $avgRating;
    }

    /**
     * @return mixed
     */
    public function getPhoneNumber()
    {
        return $this->phoneNumber;
    }

    /**
     * @param mixed $phoneNumber
     */
    public function setPhoneNumber($phoneNumber): void
    {
        $this->phoneNumber = $phoneNumber;
    }

    /**
     * @return mixed
     */
    public function getWebPage()
    {
        return $this->webPage;
    }

    /**
     * @param mixed $webPage
     */
    public function setWebPage($webPage): void
    {
        $this->webPage = $webPage;
    }

    /**
     * @return mixed
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * @param mixed $email
     */
    public function setEmail($email): void
    {
        $this->email = $email;
    }

    /**
     * @return mixed
     */
    public function getLatitude()
    {
        return $this->latitude;
    }

    /**
     * @param mixed $latitude
     */
    public function setLatitude($latitude): void
    {
        $this->latitude = $latitude;
    }

    /**
     * @return mixed
     */
    public function getLongitude()
    {
        return $this->longitude;
    }

    /**
     * @param mixed $longitude
     */
    public function setLongitude($longitude): void
    {
        $this->longitude = $longitude;
    }
}
