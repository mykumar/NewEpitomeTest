<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\Http\Requests;
use App\Models\TechContents;
use Log;

class TechContentsController extends Controller
{
    /* 
    *  Sample Input  
    *
    *  Sample Output 
    */
    public function index(Request $request)
    {
        $data['data']  = TechContents::getAll();
        return $this->respondWithSuccess($data);
    }
    /* 
    *  Sample Input  
    *
    *  Sample Output 
    */
    public function get(Request $request, $id)
    {
        $data['data']  = TechContents::get($id);
        return $this->respondWithSuccess($data);
    }

    
    // Sample Input  
    // 	{
	//     "tech_types_id" : 2,
	//     "content" : "This is the cotent",
	//     "section_id" : 23,
	//     "project_id" : 234
	//  }
    // Sample Output 
    public function add(Request $request)
    {
        $validator = Validator::make($request->all(),
            [
                'tech_types_id' => 'required',
                'content' => 'required',
                'section_id' => 'required',
            ]
        );
        if (!$validator->fails()) {
            TechContents::add($request->all());
            $data['data'] = array('message' => 'Record Successfully Inserted');
            return $this->respondWithSuccess($data);
        }    
        $data['data'] = array('message' => $validator->messages());
        return $this->respondWithError($data);
    }

 // 	{
	//     "tech_types_id" : 3,
	//     "content" : "chnagedThis is the cotent",
	//     "section_id" : 323,
	//     "project_id" : 234
	// }
    public function edit(Request $request, $id)
    {
        
        TechContents::edit($id, $request->all());
        $data['data'] = array('message' => 'Record Successfully Edited');
        return $this->respondWithSuccess($data);
    } 

    /* 
    *  $id Must be passed 
    */
    public function delete(Request $request, $id)
    {
        if (is_null(TechContents::del($id))) {
            $data['data'] = array('message' => 'Delete Operation on ID:' . $id . ' is Successfull');    
            return $this->respondWithSuccess($data);
        }
        $data['data'] = array('message' => 'Delete Operation on ID: ' . $id . ' Failed');    
        return $this->respondWithError($data);
    }   
}
