<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Models\Headers;

class HeadersController extends Controller
{
    //
    public function index(Request $request)
    {
        return $this->respondWithSuccess($data);
        return $this->respondWithError($data);
    }

    public function get(Request $request, $id)
    {
        return $this->respondWithSuccess($data);
        return $this->respondWithError($data);
    }

    public function add(Request $request)
    {
        $validator = Validator::make($request->all(),
                [
                'customer_id' => 'required',
                'support_category_id' => 'required',
                'assigned_user_id' => 'required',
                'support_status_id' => 'required',
                'message' => 'required',
        ]);

        if (!$validator->fails()) {
        }
        $data['data'] = array('message' => $validator->errors()->all());
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
