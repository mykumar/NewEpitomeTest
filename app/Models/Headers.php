<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Log;

class Headers extends Model
{
    protected $table = 'headers';
    public $timestamps = true;
    protected $fillable = ['tag_name', 'value'];

    public static function getAll() {
    	return self::all();
    }

    public static function get($id) {
    	return self::find($id);
    }

    public static function add($record) {
        return self::create($record);
    }

    public static function edit($id, $record) {
        $row = self::find($id);
        $row->tag_name = $record['tag_name'];
        $row->value = $record['value'];
        return $row->save();
    }

    public static function del($id) {
        $row = self::find($id);
        return $row->delete();
    }
    public static function deleteAll() {
        return self::truncate();
    }
}
