<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TechContents extends Model
{
    //
    protected $table = 'tech_content';
    public $timestamps = true;
    protected $fillable = ['tech_types_id', 'content','section_id','project_id'];

    public static function getAll() {
    	return self::all();
    }

    public static function get($id) {
    	return self::find($id);
    }

    public static function getAllOnTechTypeId($techtypeId) {
        return self::where('tech_types_id', '=', $techtypeId)->get();
    }

    public static function getAllOnIds($techtypeId, $sectionId, $projectId) {
        return self::where('tech_types_id', '=', $techtypeId)
                    ->where('section_id', '=', $sectionId)
                    ->where('project_id', '=', $projectId)
                    ->get();
    }

    public static function add($record) {
        return self::create($record);
    }

    public static function edit($id, $record) {
        $row = self::find($id);
        foreach ($record as $key => $value) {
            $row->$key = $value; 
        }
        return $row->save();
    }

    public static function del($id) {
        $row = self::find($id);
        return $row->delete();
    }

    public static function deleteAll($techtypeId, $sectionId, $projectId) {
        return self::where('tech_types_id', '=', $techtypeId)
                    ->where('section_id', '=', $sectionId)
                    ->where('project_id', '=', $projectId)
                    ->delete();
    }
}
