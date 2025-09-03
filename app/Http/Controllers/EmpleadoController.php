<?php

namespace App\Http\Controllers;

use App\Models\Empleado;
use App\Models\Area;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EmpleadoController extends Controller
{
    public function index()
    {
        $empleados = Empleado::with('area')->get();
        $areas = Area::all();
        return Inertia::render('Empleados/Index', compact('empleados', 'areas'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:255',
            'apellido' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'area_id' => 'required|exists:areas,id'
        ]);
        Empleado::create($request->all());
        return redirect()->back();
    }

    public function edit(Empleado $empleado)
    {
    $areas = Area::all();
    return Inertia::render('Empleados/Edit', [
        'empleado' => $empleado,
        'areas' => $areas
    ]);
    }

    public function update(Request $request, Empleado $empleado)
    {
    $data = $request->validate([
        'nombre' => 'required|string|max:255',
        'apellido' => 'required|string|max:255',
        'email' => 'required|email|unique:empleados,email,' . $empleado->id,
        'area_id' => 'required|exists:areas,id',
    ]);

    $empleado->update($data);

    return redirect()->route('empleados.index')->with('success', 'Empleado actualizado correctamente.');
    }


    public function destroy(Empleado $empleado)
    {
        $empleado->delete();
        return redirect()->back();
    }
}
