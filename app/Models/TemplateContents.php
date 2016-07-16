<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TemplateContents extends Model
{
    //
    protected $table = 'template_content';
    public $timestamps = true;
    protected $fillable = ['template_types_id', 'tech_content_id', 'section_id', 'project_id', 'tech_types_id', 'education_id', 'header_id'];

    public static function add($record) {
        return self::create($record);
    }

    public static function del($id) {
        $row = self::find($id);
        return $row->delete();
    }
    public static function delAllWithTemplateTypeId($templateTypesId) {
         return self::where('template_types_id', '=', $templateTypesId)
                    ->delete();    
    }

    public static function getHeaders($id) {
        return self::where('header_id', '>', 0)
                    ->where('template_types_id', '=', $id)
                    ->get();    
    }

    public static function getEducations($id) {
        return self::where('education_id', '>', 0)
                    ->where('template_types_id', '=', $id)
                    ->get();    
    }

    public static function getCA($id) {
        return self::where('section_id', '=', 3)
                    ->where('project_id', '=', 0)
                    ->where('template_types_id', '=', $id)
                    ->get();    
    }

    public static function getCH($id) {
        return self::where('section_id', '=', 2)
                    ->where('project_id', '=', 0)
                    ->where('template_types_id', '=', $id)
                    ->get();    
    }

    public static function getOrbit($id) {
        return self::where('section_id', '=', 4)
                    ->where('project_id', '=', 1)
                    ->where('template_types_id', '=', $id)
                    ->get();    
    }

    public static function getFish($id) {
        return self::where('section_id', '=', 4)
                    ->where('project_id', '=', 2)
                    ->where('template_types_id', '=', $id)
                    ->get();    
    }

    

    //scrap
    /* public static function getAll() {
        return self::all();
    }

    public static function get($id) {
        return self::find($id);
    }

    public static function edit($id, $record) {
        $row = self::find($id);
        $row->name = $record['name'];
        return $row->save();
    }

    public static function deleteAll() {
        return self::truncate();
    } */
}
