<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', 'AuthController@login');
Route::post('register', 'AuthController@register');

Route::get('time', function (Request $request) {
    return response()->json(now()->toTimeString());
});

Route::middleware('auth:api')->group(function () {
    Route::post('logout', 'AuthController@logout');
    Route::get('user', 'AuthController@user');

    Route::apiResources([
        'posts' => 'PostsController',
        'global-messages' => 'GlobalMessagesController'
    ]);
});
