<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/routes', function () {
    \Illuminate\Support\Facades\Artisan::call('route:list --json');
    $output = json_decode(\Illuminate\Support\Facades\Artisan::output());
    return view('admin.routes', ['data' => $output]);
});

Route::get('/{any}', 'SpaController@index')->where('any', '.*');
