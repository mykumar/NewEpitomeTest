<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\Http\Requests;
use App\Models\Projects;
use Log;

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

    
    // Sample Input  
    // {

    //     "name" : "Trademe",
    //     "desc" : "It is the World wide trademe company",
    //     "duration" : "Oct 2014 to Present",
    //     "clients" : "Fishpond, rayme",
    //     "outsourced" : "Orion Health"

    // }
    // Sample Output 
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
            $result = Projects::add($request->all());
            $data['data'] = array('id' => $result['id'], 'message' => 'Record Successfully Inserted');
            return $this->respondWithSuccess($data);
        }    
        $data['data'] = array('message' => $validator->messages());
        return $this->respondWithError($data);
    }

    // {
    //     "name" : "Chnaged Trademe",
    //     "desc" : "Chnaged It is the World wide trademe company",
    //     "duration" : "Chnaged  Oct 2014 to Present",
    //     "clients" : "Chnaged  Fishpond, rayme",
    //     "outsourced" : "Chnaged  Orion Health"
    // }
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
    public function deleteAll(Request $request)
    {
        Log::info("ProjectsController::deleteAll");
        $result = Projects::deleteAll();
        Log::info(json_encode($result));
        $data['data'] = array('message' => 'All Records Deleted Successfull');    
        return $this->respondWithSuccess($data);
    }      
}
