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
        //Headers
        DB::table('headers')->insert([
            'tag_name' => 'name',
            'value' => 'shiva',
        ]);
        DB::table('headers')->insert([
            'tag_name' => 'email',
            'value' => 'abc@abc.com',
        ]);

        //sections
        DB::table('sections')->insert([
            'name' => 'Headers',
            'type' => 'Headers',
        ]);
        DB::table('sections')->insert([
            'name' => 'Career Highlights',
            'type' => 'single',
        ]);
        DB::table('sections')->insert([
            'name' => 'Career Achievements',
            'type' => 'single',
        ]);
        DB::table('sections')->insert([
            'name' => 'Professional Experience',
            'type' => 'projects',
        ]);
        DB::table('sections')->insert([
            'name' => 'Education Qualification',
            'type' => 'Educations',
        ]);
        DB::table('sections')->insert([
            'name' => 'Technical Skills',
            'type' => 'Another',
        ]);

        //projects
        DB::table('projects')->insert([
            'name' => 'FishPond Limited',
            'desc' => 'It is No. 1 company in NZ',
            'duration' => 'Oct 2014 to Present',
            'clients' => 'Trademe',
            'outsourced' => '',
        ]);

        //Education
        DB::table('educations')->insert([
            'course_name' => 'PG. DIploma',
            'uni_name' => 'Unitec',
            'year' => 'Oct 2014 to Nov. 2015',
            'percentage_marks' => '89%',
        ]);

        //tech_types
        DB::table('tech_types')->insert([
            'name' => 'ReactJS',
        ]);

        //template_types
        DB::table('template_types')->insert([
            'name' => 'My REACTJS with extra Modules ',
        ]);

        //epitome_types
        DB::table('epitome_types')->insert([
            'name' => 'MYREACTJS_RESUME',
        ]);

    }
}
