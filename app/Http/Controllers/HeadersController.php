<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
        $headers = new Headers();
        $data['data']  = $headers->getAll();
        return $this->respondWithSuccess($data);
    }
    /* 
    *  Sample Input  
    *
    *  Sample Output 
    */
    public function get(Request $request, $id)
    {
        $headers = new Headers();
        $data['data']  = $headers->get($id);
        return $this->respondWithSuccess($data);
    }

    /* 
    *  Sample Input  
    *
    *  Sample Output 
    */
    public function add(Request $request)
    {
        $obj = (object) $request->json()->all();
        $headers = new Headers();
        if($headers->add($obj) ) {
            $data['data'] = array('message' => "Successfully Inserted Record");    
            return $this->respondWithSuccess($data);
        } 
        $data['data'] = array('message' => "Headers Inseration failed");
        return $this->respondWithError($data);
    }

    public function edit(Request $request, $id)
    {
        $validator = Validator::make($request->all(),
                [
                'customer_id' => 'required',
                'support_category_id' => 'required',
                'assigned_user_id' => 'required',
                'status' => 'required',
        ]);

        if (!$validator->fails()) {
        }
        $data['data'] = array('message' => 'Support Threads Records Editing Failed');
        return $this->respondWithError($data);
    } 

    
    public function delete(Request $request, $id)
    {
    	return $this->respondWithSuccess($data);
    	return $this->respondWithError($data);
    }       	
}
