<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTemplateContentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('template_content', function (Blueprint $table) {
            $table->increments('id');
            $table->bigInteger('template_types_id');
            $table->bigInteger('tech_content_id')->default(0);
            $table->bigInteger('section_id')->default(0);
            $table->bigInteger('project_id')->default(0);
            $table->bigInteger('tech_types_id')->default(0);
            $table->bigInteger('education_id')->default(0);
            $table->bigInteger('header_id')->default(0);
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
        Schema::drop('template_content');
    }
}
