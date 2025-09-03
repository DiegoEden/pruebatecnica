<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AreaController;
use App\Http\Controllers\EmpleadoController;

Route::get('/', function () {
    return redirect()->route('areas.index');
});

Route::resource('areas', AreaController::class);

Route::resource('empleados', EmpleadoController::class);
