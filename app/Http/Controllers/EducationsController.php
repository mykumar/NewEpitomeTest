<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\Http\Requests;
use App\Models\Educations;
use Log;

class EducationsController extends Controller
{
    /* 
    *  Sample Input  
    *
    *  Sample Output 
    */
    public function index(Request $request)
    {
        $data['data']  = Educations::getAll();
        return $this->respondWithSuccess($data);
    }
    /* 
    *  Sample Input  
    *
    *  Sample Output 
    */
    public function get(Request $request, $id)
    {
        $data['data']  = Educations::get($id);
        return $this->respondWithSuccess($data);
    }

    
    // Sample Input  
    // {
    //     "course_name" : "phone",
    //     "uni_name" : "021443211",
    //     "year" : "phone",
    //     "percentage_marks" : "021443211"
    // }
    // Sample Output 
    public function add(Request $request)
    {
        $validator = Validator::make($request->all(),
            [
                'course_name' => 'required',
                'uni_name' => 'required',
                'year' => 'required',
                'percentage_marks' => 'required',
            ]
        );
        if (!$validator->fails()) {
            Educations::add($request->all());
            $data['data'] = array('message' => 'Record Successfully Inserted');
            return $this->respondWithSuccess($data);
        }    
        $data['data'] = array('message' => $validator->messages());
        return $this->respondWithError($data);
    }

    // {
    //     "course_name" : "chnaged phone",
    //     "uni_name" : "chnaged 021443211",
    //     "year" : "chnaged  phone",
    //     "percentage_marks" : "chnaged  021443211"
    // }
    public function edit(Request $request, $id)
    {
        
        Educations::edit($id, $request->all());
        $data['data'] = array('message' => 'Record Successfully Edited');
        return $this->respondWithSuccess($data);
    } 

    /* 
    *  $id Must be passed 
    */
    public function delete(Request $request, $id)
    {
        if (is_null(Educations::del($id))) {
            $data['data'] = array('message' => 'Delete Operation on ID:' . $id . ' is Successfull');    
            return $this->respondWithSuccess($data);
        }
        $data['data'] = array('message' => 'Delete Operation on ID: ' . $id . ' Failed');    
        return $this->respondWithError($data);
    }   
}
