<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Log;

class EpitomeTypes extends Model
{
    protected $table = 'epitome_types';
    public $timestamps = true;
    protected $fillable = ['name'];

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
        $row->name = $record['name'];
        return $row->save();
    }

    public static function del($id) {
        $row = self::find($id);
        return $row->delete();
    }
}
