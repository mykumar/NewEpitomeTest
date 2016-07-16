<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\Http\Requests;
use App\Models\TemplateContents;
use App\Http\Lib\CommonLib;
use Log;

class TemplateContentsController extends Controller
{
    public function getTemplateContentByTemplateTypeId(Request $request, $id) 
    {
        $data['data']  = CommonLib::createMasterStruct($id);
        return $this->respondWithSuccess($data);
    }

    public function delAllWithTemplateTypeId(Request $request, $templateTypesId)
    {
        TemplateContents::delAllWithTemplateTypeId($templateTypesId);
        $data['data'] = array('message' => 'Delete Operation on ID:' . $templateTypesId . ' is Successfull');    
        return $this->respondWithSuccess($data);
    }
    
    public function add(Request $request)
    {
        $validator = Validator::make($request->all(),
            [
                'template_types_id' => 'required',
                'tech_content_id' => 'required',
                'section_id' => 'required',
                'tech_types_id' => 'required',
            ]
        );
        if (!$validator->fails()) {
            $result = TemplateContents::add($request->all());
            $data['data'] = array('id' => $result['id'], 'message' => 'Record Successfully Inserted');
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
        if (is_null(TemplateContents::del($id))) {
            $data['data'] = array('message' => 'Delete Operation on ID:' . $id . ' is Successfull');    
            return $this->respondWithSuccess($data);
        }
        $data['data'] = array('message' => 'Delete Operation on ID: ' . $id . ' Failed');    
        return $this->respondWithError($data);
    }



    //scrap
    /* 
    *  Sample Input  
    *
    *  Sample Output 
    */
    // public function index(Request $request)
    // {
    //     $data['data']  = TemplateContents::getAll();
    //     return $this->respondWithSuccess($data);
    // }
    /* 
    *  Sample Input  
    *
    *  Sample Output 
    */
    // public function get(Request $request, $id)
    // {
    //     $data['data']  = TemplateContents::get($id);
    //     return $this->respondWithSuccess($data);
    // }

    // Sample Input  
    // {
    //     "name" : "Chnaged Trademe"
    // }
    // Sample Output 
    // public function edit(Request $request, $id)
    // {
    //     $validator = Validator::make($request->all(),
    //         [
    //             'name' => 'required',
    //         ]
    //     );
    //     if (!$validator->fails()) {
    //         TemplateContents::edit($id, $request->all());
    //         $data['data'] = array('message' => 'Record Successfully Edited');
    //         return $this->respondWithSuccess($data);
    //     }
    //     $data['data'] = array('message' => $validator->messages());
    //     return $this->respondWithError($data);
    // } 

    // public function deleteAll(Request $request)
    // {
    //     TemplateContents::deleteAll();
    //     $data['data'] = array('message' => 'All Records Deleted Successfull');    
    //     return $this->respondWithSuccess($data);
    // }   
}
