<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\Http\Requests;
use App\Models\Headers;
use Log;

class HeadersController extends Controller
{
    /* 
    *  Sample Input  
    *
    *  Sample Output 
    */
    public function index(Request $request)
    {
        $data['data']  = Headers::getAll();
        return $this->respondWithSuccess($data);
    }
    /* 
    *  Sample Input  
    *
    *  Sample Output 
    */
    public function get(Request $request, $id)
    {
        $data['data']  = Headers::get($id);
        return $this->respondWithSuccess($data);
    }

    /* 
    *  Sample Input  
    *  {
    *        "tag_name" : "phone",
    *        "value" : "021443211"
    *  }
    *
    *  Sample Output 
    */
    public function add(Request $request)
    {
        Log::info('HeadersController::add');
        $validator = Validator::make($request->all(),
            [
                'tag_name' => 'required',
                'value' => 'required',
            ]
        );
        if (!$validator->fails()) {
            $result = Headers::add($request->all());
            $data['data'] = array('id' => $result['id'], 'message' => 'Record Successfully Inserted');
            return $this->respondWithSuccess($data);
        }    
        $data['data'] = array('message' => $validator->messages());
        return $this->respondWithError($data);
    }

    /* 
    *  $id Must be passed 
    *  Sample Input  
    *  {
    *        "tag_name" : "phone",
    *        "value" : "021443211"
    *  }
    *
    *  Sample Output 
    */
    public function edit(Request $request, $id)
    {
        $validator = Validator::make($request->all(),
            [
                'tag_name' => 'required',
                'value' => 'required',
            ]
        );
        if (!$validator->fails()) {
            Headers::edit($id, $request->all());
            $data['data'] = array('message' => 'Record Successfully Edited');
            return $this->respondWithSuccess($data);
        }
        $data['data'] = array('message' => $validator->messages());
        return $this->respondWithError($data);
    } 

    /* 
    *  $id Must be passed 
    */
    public function delete(Request $request, $id)
    {
    	if (is_null(Headers::del($id))) {
            $data['data'] = array('message' => 'Delete Operation on ID:' . $id . ' is Successfull');    
            return $this->respondWithSuccess($data);
        }
        $data['data'] = array('message' => 'Delete Operation on ID: ' . $id . ' Failed');    
    	return $this->respondWithError($data);
    }  

    public function deleteAll(Request $request)
    {
        Headers::deleteAll();
        $data['data'] = array('message' => 'All Records Deleted Successfull');    
        return $this->respondWithSuccess($data);
    }      	
}
