<?php

namespace App\Http\Controllers;

use App\Models\Area;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AreaController extends Controller
{
    public function index()
    {
        $areas = Area::all();
        return Inertia::render('Areas/Index', compact('areas'));
    }
    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:255|unique:areas,nombre',
        ], [
            'nombre.unique' => 'El nombre ya existe, ingrese uno diferente.',
        ]);

        Area::create($request->all());

        return redirect()->back()->with('success', 'Área creada correctamente.');
    }

    public function update(Request $request, Area $area)
    {
        $request->validate(['nombre' => 'required|string|max:255']);
        $area->update($request->all());
        return redirect()->back();
    }

    public function destroy(Area $area)
    {
        if ($area->empleados()->count() > 0) {
            return redirect()->back()->withErrors(['error' => 'No se puede eliminar un área con empleados asignados.']);
        }
        $area->delete();
        return redirect()->back();
    }
}
