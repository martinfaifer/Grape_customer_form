<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function success($data, string $message): array
    {
        return [
            'status' => "success",
            'data' => $data,
            'message' => $message
        ];
    }

    public function error(string $message)
    {
        return [
            'status' => "error",
            'message' => $message
        ];
    }
}
