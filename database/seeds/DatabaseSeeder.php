<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);

        DB::table('headers')->insert([
            'tag_name' => 'name',
            'value' => 'shiva',
        ]);
        DB::table('headers')->insert([
            'tag_name' => 'email',
            'value' => 'abc@abc.com',
        ]);
    }
}
