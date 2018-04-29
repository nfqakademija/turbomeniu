<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Review;
use Faker;

class ReviewFixture extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create();

        for ($i=0; $i < 10000; $i++) {
            $review = new Review();
            $review->setRestaurantId($faker->numberBetween(0, 200));
            $review->setDate($faker->dateTime('now', '+2'));
            $review->setName($faker->firstName());
            $review->setRating($faker->numberBetween(1, 5));
            $review->setComment($faker->paragraph(6, true));
            $manager->persist($review);
        }

        $manager->flush();
    }
}
