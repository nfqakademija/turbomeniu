<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\RestaurantRepository")
 */
class Restaurant
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\fbId()
     * @ORM\Column(type="integer")
     */
    private $fbId;

    /**
     * @ORM\name()
     * @ORM\Column(type="string", length=50)
     */
    private $name;

    /**
     * @ORM\logo()
     * @ORM\Column(type="string", length=2083)
     */
    private $logo;

    /**
     * @ORM\contactPhone()
     * @ORM\Column(type="string", length=20)
     */
    private $contactPhone;

    /**
     * @ORM\fbLink()
     * @ORM\Column(type="string", length=2083)
     */
    private $fbLink;

    /**
     * @ORM\address()
     * @ORM\Column(type="string", length=100)
     */
    private $address;

    /**
     * @ORM\latitude()
     * @ORM\Column(type="decimal", precision=10, scale=8)
     */
    private $latitude;

    /**
     * @ORM\longitude()
     * @ORM\Column(type="decimal", precision=11, scale=8)
     */
    private $longitude;

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
    public function getFbId()
    {
        return $this->fbId;
    }

    /**
     * @param mixed $fbId
     */
    public function setFbId($fbId): void
    {
        $this->fbId = $fbId;
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
    public function getContactPhone()
    {
        return $this->contactPhone;
    }

    /**
     * @param mixed $contactPhone
     */
    public function setContactPhone($contactPhone): void
    {
        $this->contactPhone = $contactPhone;
    }

    /**
     * @return mixed
     */
    public function getFbLink()
    {
        return $this->fbLink;
    }

    /**
     * @param mixed $fbLink
     */
    public function setFbLink($fbLink): void
    {
        $this->fbLink = $fbLink;
    }

    /**
     * @return mixed
     */
    public function getAddress()
    {
        return $this->address;
    }

    /**
     * @param mixed $address
     */
    public function setAddress($address): void
    {
        $this->address = $address;
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
