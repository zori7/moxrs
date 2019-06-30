<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->truncate();

        $user = [
            'name' => 'Zori',
            'email' => 'zori@gmail.com',
            'password' => bcrypt('123123'),
            'email_verified_at' => now(),
            'remember_token' => Str::random(10)
        ];

        User::create($user);

        factory(App\User::class, 30)->create();
    }
}
