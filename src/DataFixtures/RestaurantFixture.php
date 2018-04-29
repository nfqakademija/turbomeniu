<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Restaurant;
use Faker;

class RestaurantFixture extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create();

        for ($i=0; $i < 200; $i++) {
            $restaurant = new Restaurant();
            $restaurant->setName($faker->company);
            $restaurant->setLogo($faker->imageUrl);
            $restaurant->setRestaurantType($faker->randomElement(['a','b','c']));
            $restaurant->setPhoneNumber($faker->e164PhoneNumber);
            $restaurant->setWebPage($faker->domainName);
            $restaurant->setEmail($faker->safeEmail);
            $restaurant->setLatitude($faker->randomFloat($nbMaxDecimals = null, $min = 54.820330, $max = 54.959620));
            $restaurant->setLongitude($faker->randomFloat($nbMaxDecimals = null, $min = 23.754923, $max = 24.099604));
            $manager->persist($restaurant);
        }

        $manager->flush();
    }
}
