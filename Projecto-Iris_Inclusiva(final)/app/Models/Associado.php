<?php

namespace App\Models;

use App\Models\Pagamento;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Associado extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome_associado',
        'nmr_associado',
        'email_associado',
    ];

    public function pagamento()
    {
        return $this->hasMany(Pagamento::class);
    }
}
