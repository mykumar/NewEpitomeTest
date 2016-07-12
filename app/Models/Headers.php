<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Log;

class Headers extends Model
{
    protected $table = 'headers';
    public $timestamps = true;

    public function getAll() {
    	return self::all();
    }

    public function get($id) {
    	return self::find($id);
    }

    public function add($object) {
    	foreach ($object as $key => $value) {
    		$headers = new Headers;
	        $headers->tag_name = $key;
	        $headers->value = $value;
	        $headers->save();
    	}		
    	return true;
    }
}
