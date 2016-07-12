<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesResources;

class Controller extends BaseController
{
    use AuthorizesRequests, AuthorizesResources, DispatchesJobs, ValidatesRequests;

    public function respondWithSuccess($data)
    {
        $data = [
            'code' => 200,
            'status' => 'success',
            'data' => $data['data'],
        ];

        return response()->json($data);
    }

    
    public function respondWithError($data)
    {
        $data = [
            'code' => 400,
            'status' => 'error',
            'data' => $data['data'],
        ];

        return response()->json($data);
    }
}
