<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Empleado extends Model
{
    protected $fillable = ['nombre','apellido', 'email', 'area_id'];

    public function area()
    {
        return $this->belongsTo(Area::class);
    }
}
