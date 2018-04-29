<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Meal;
use Faker;
use FakerRestaurant\Provider\en_US\Restaurant;

class MealFixture extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create();
        $faker->addProvider(new Restaurant($faker));

        for ($i=0; $i < 1000; $i++) {
            $meal = new Meal();
            $meal->setRestaurantId($faker->numberBetween(0, 200));
            $meal->setDate($faker->dateTime('now', 2));
            $meal->setFoodName($faker->foodName());
            $meal->setFoodType($faker->randomElement(['1','2','3']));
            $meal->setPrice($faker->randomFloat(2, 4, 8));
            $meal->setImage($faker->imageUrl('', '', 'food'));
            $manager->persist($meal);
        }

        $manager->flush();
    }
}
