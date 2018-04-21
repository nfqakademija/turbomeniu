<?php
/**
 * Created by PhpStorm.
 * User: rokas
 * Date: 4/21/18
 * Time: 5:03 PM
 */

namespace App\FacebookApi;

use \Facebook\Facebook;

class RestaurantData
{
    /**
     * @throws \Facebook\Exceptions\FacebookSDKException
     */
    public function getRestaurantData()
    {
        $fb = new Facebook([
            'app_id'                => '{app-id}',
            'app_secret'            => '{app-secret}',
            'default_graph_version' => 'v2.10',
        ]);
    }
}
