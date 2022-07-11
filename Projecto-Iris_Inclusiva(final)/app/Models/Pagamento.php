<?php

namespace App\Models;

use App\Models\Associado;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Pagamento extends Model
{
    use HasFactory;

    protected $fillable = [
        'valor_pagamento',
        'associado_id',
        /** 'id_associado', */
    ];

    protected $with = ['associado'];
    
    public function associado()
    {
        return $this->belongsTo(Associado::class);
    }
}
