<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\Http\Requests;
use App\Models\Projects;

class ProjectsController extends Controller
{
    /* 
    *  Sample Input  
    *
    *  Sample Output 
    */
    public function index(Request $request)
    {
        $data['data']  = Projects::getAll();
        return $this->respondWithSuccess($data);
    }
    /* 
    *  Sample Input  
    *
    *  Sample Output 
    */
    public function get(Request $request, $id)
    {
        $data['data']  = Projects::get($id);
        return $this->respondWithSuccess($data);
    }

    /* 
    *  Sample Input  
    *  {
    *        "name" : "phone",
    *        "desc" : "021443211"
    *  }
    *
    *  Sample Output 
    */
    public function add(Request $request)
    {
        $validator = Validator::make($request->all(),
            [
                'name' => 'required',
                'desc' => 'required',
                'duration' => 'required',
            ]
        );
        if (!$validator->fails()) {
            Projects::add($request->all());
            $data['data'] = array('message' => 'Record Successfully Inserted');
            return $this->respondWithSuccess($data);
        }    
        $data['data'] = array('message' => $validator->messages());
        return $this->respondWithError($data);
    }

    /* 
    *  $id Must be passed 
    *  Sample Input  
    *  {
    *        "name" : "phone",
    *        "desc" : "021443211"
    *  }
    *
    *  Sample Output 
    */
    public function edit(Request $request, $id)
    {
        
        Projects::edit($id, $request->all());
        $data['data'] = array('message' => 'Record Successfully Edited');
        return $this->respondWithSuccess($data);
    } 

    /* 
    *  $id Must be passed 
    */
    public function delete(Request $request, $id)
    {
        if (is_null(Projects::del($id))) {
            $data['data'] = array('message' => 'Delete Operation on ID:' . $id . ' is Successfull');    
            return $this->respondWithSuccess($data);
        }
        $data['data'] = array('message' => 'Delete Operation on ID: ' . $id . ' Failed');    
        return $this->respondWithError($data);
    }    
}
