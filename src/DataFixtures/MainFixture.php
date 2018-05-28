<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Faker;
use FakerRestaurant\Provider\en_US\Restaurant;

class MainFixture extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $generator = Faker\Factory::create();
        $generator->addProvider(new Restaurant($generator));
        $populator = new Faker\ORM\Doctrine\Populator($generator, $manager);

//        Add Restaurant Entities
        $populator->addEntity('App:Restaurant', 200, [
            'name' => function () use ($generator) {
                return $generator->company;
            },
            'logo' => function () use ($generator) {
                return $generator->imageUrl('100', '100');
            },
            'phoneNumber' => function () use ($generator) {
                return $generator->e164PhoneNumber;
            },
            'webPage' => function () use ($generator) {
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
            'avgRating' => null
        ]);

//        Add Meal Entities
        $populator->addEntity('App:Meal', 600, [
            'date' => function () use ($generator) {
                return new \DateTime('now');
            },
            'foodName' => function () use ($generator) {
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
        $populator->addEntity('App:Review', 1000, [
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
    }
}
