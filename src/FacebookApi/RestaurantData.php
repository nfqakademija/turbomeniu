<?php
/**
 * Created by PhpStorm.
 * User: rokas
 * Date: 4/21/18
 * Time: 5:03 PM
 */

namespace App\FacebookApi;

use Facebook\Exceptions\FacebookResponseException;
use Facebook\Exceptions\FacebookSDKException;
use \Facebook\Facebook;
use App\Entity\Restaurant;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class RestaurantData extends Controller
{
    /**
     * @throws FacebookSDKException
     */
    public function getRestaurantList()
    {
        $fb = new Facebook([
            'app_id'                => '{app-id}',
            'app_secret'            => '{app-secret}',
            'default_graph_version' => 'v2.12',
        ]);

        $fb->setDefaultAccessToken('EAAOEVyj4HugBAJf8yRvhlZCQDHL5q68D3mrdEZB46oKaG6OqVzpWZA0zXFZBm2s1uGLPAiIUEWgoGvpK4jh1dr4mZBBrG1h9e6WuLOG9ZCJeQ3xQW3alQcluiSZB6UczZB6R6aCZBx7ngXYEXBDf4sftFclzEQfLC4nHYCQfri9NmJcoJgs3N2XpZA6oMFDU23wNMZD');

        try {
            $query = $fb->request('GET', 'search?q=restaurant&type=place&center=54.872996, 23.903980&distance=2000');
        } catch (FacebookResponseException $e) {
            // When Graph returns an error
            echo 'Graph returned an error: ' . $e->getMessage();
            exit;
        } catch (FacebookSDKException $e) {
            // When validation fails or other local issues
            echo 'Facebook SDK returned an error: ' . $e->getMessage();
            exit;
        }
        var_dump($query);
    }

    public function saveRestaurantList($query)
    {
        $restaurant = new Restaurant();
        $entityManager = $this->getDoctrine()->getManager();
    }
}
