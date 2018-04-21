<?php
/**
 * Created by PhpStorm.
 * User: rokas
 * Date: 4/21/18
 * Time: 5:03 PM
 */

namespace App\FacebookApi;

use \Facebook\Facebook;
use App\Entity\Restaurant;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class RestaurantData extends Controller
{
    /**
     * @throws \Facebook\Exceptions\FacebookSDKException
     */
    public function getRestaurantData()
    {
        $fb = new Facebook([
            'app_id'                => '{app-id}',
            'app_secret'            => '{app-secret}',
            'default_graph_version' => 'v2.12',
        ]);

        $fb->setDefaultAccessToken('{access-token}');

        $query = $fb->request('GET', '/search?q=restaurant&type=place&center=54.872996, 23.903980&distance=2000');

        return $query;
    }

    public function saveRestaurantData($query)
    {
        $restaurant = new Restaurant();
        $entityManager = $this->getDoctrine()->getManager();
    }
}
