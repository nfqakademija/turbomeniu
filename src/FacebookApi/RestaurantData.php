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
     * @throws FacebookSDKException | FacebookResponseException
     */
    public function getRestaurantList()
    {
        $fb = new Facebook([
            'app_id'                => '{app-id}',
            'app_secret'            => '{app-secret}',
            'default_graph_version' => 'v2.12',
        ]);

//        TODO Graph returned an error: (#200) Access to this data is temporarily disabled for non-active apps or apps that have not recently accessed this data due to changes we are making to the Facebook Platform. https://developers.facebook.com/status/issues/205942813488872/
        $fb->setDefaultAccessToken('989934814502632|WsEN-mXRwWmzX9TUy9XdnjSC_YM');

        try {
            $request = $fb->get(
                'search?q=restaurant&type=place&center=54.872996, 23.903980&distance=2000',
                $fb->getDefaultAccessToken(),
                '',
                $fb->getDefaultGraphVersion()
            );
        } catch (FacebookResponseException $e) {
            // When Graph returns an error
            echo 'Graph returned an error: ' . $e->getMessage();
            exit;
        } catch (FacebookSDKException $e) {
            // When validation fails or other local issues
            echo 'Facebook SDK returned an error: ' . $e->getMessage();
            exit;
        }
        $list = $request->getRequest();
        var_dump($list);
    }

//    TODO Finish saveRestaurantList method.
    public function saveRestaurantList($list)
    {
        $restaurant = new Restaurant();
        $entityManager = $this->getDoctrine()->getManager();
    }
}
