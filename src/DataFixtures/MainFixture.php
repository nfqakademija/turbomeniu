<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Faker;
use FakerRestaurant\Provider\en_US\Restaurant as FakerRestaurant;
use App\Entity\Restaurant;
use App\Entity\Meal;
use App\Entity\Review;

class MainFixture extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $generator = Faker\Factory::create();
        $generator->addProvider(new FakerRestaurant($generator));
        $populator = new Faker\ORM\Propel\Populator($generator);

//        Add Restaurant Entities
        $populator->addEntity('Restaurant', 200, [
            'name' => function () use ($generator) {
                return $generator->company;
            },
            'logo' => function () use ($generator) {
                return $generator->imageUrl('100', '100');
            },
            'restaurant_type' => function () use ($generator) {
                return $generator->randomElement(['a','b','c']);
            },
            'phone_number' => function () use ($generator) {
                return $generator->e164PhoneNumber;
            },
            'web_page' => function () use ($generator) {
                return $generator->domainName;
            },
            'email' => function () use ($generator) {
                return $generator->safeEmail;
            },
            'latitude' => function () use ($generator) {
                return $generator->randomFloat($nbMaxDecimals = null, $min = 54.820330, $max = 54.959620);
            },
            'longitude' => function () use ($generator) {
                return $generator->randomFloat($nbMaxDecimals = null, $min = 23.754923, $max = 24.099604);
            },
        ]);

//        Add Meal Entities
        $populator->addEntity('Meal', 1000, [
            'date' => function () use ($generator) {
                return new \DateTime('now');
            },
            'food_name' => function () use ($generator) {
                return $generator->foodName();
            },
            'image' => function () use ($generator) {
                return $generator->imageUrl('640', '480', 'food');
            },
            'price' => function () use ($generator) {
                return $generator->randomFloat(2, 4, 8);
            },
        ]);

//        Add Review Entities
        $populator->addEntity('Review', 10000, [
            'name' => function () use ($generator) {
                return $generator->firstName();
            },
            'rating' => function () use ($generator) {
                return $generator->numberBetween(1, 5);
            },
            'comment' => function () use ($generator) {
                return $generator->paragraph(6, true);
            },
            'date' => function () use ($generator) {
                return $generator->dateTime('now', '+2');
            },
        ]);

        $populator->execute();

        $manager->flush();
    }
}
