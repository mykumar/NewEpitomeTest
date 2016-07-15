<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTechContentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tech_content', function (Blueprint $table) {
            $table->increments('id');
            $table->bigInteger('tech_types_id');
            $table->string('content');
            $table->bigInteger('section_id');
            $table->bigInteger('project_id')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('tech_content');
    }
}
