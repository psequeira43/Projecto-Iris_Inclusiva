<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;
use Exception;
use App\Models\Pagamento;

class PagamentosController extends Controller
{
    // Get Lista de Pagamentos da base de dados

    public function getListaPagamentos()
    {
        try {
            $pagamentos = Pagamento::orderBy('id', 'DESC')->get();
            return response()->json($pagamentos);
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    public function getPagamentosDetalhes(Request $request)
    {
        try {
            $pagamentoData = Pagamento::findOrFail($request->get('pagamentoId'));
            return response()->json($pagamentoData);
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    public function updatePagamentoData(Request $request)
    {
        try {
            $pagamentoId           = $request->get('pagamentoId');
            $pagamentoValor         = $request->get('pagamentoValor');

            Pagamento::where('id', $pagamentoId)->update([
                'valor_pagamento' => $pagamentoValor
            ]);

            return response()->json([
                'valor_pagamento' => $pagamentoValor,
            ]);
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    public function destroy(Pagamento $pagamento)
    {
        try {
            $pagamento->delete();
        } catch (Exception $e) {
            Log::error($e);
        }
    }
    public function store(Request $request)
    {
        try {
            $pagamentoValor = $request->get('pagamentoValor');
            $pagamentoAssociado = $request->get('pagamentoAssociado');

            Pagamento::create([
                'valor_pagamento' => $pagamentoValor,
                'associado_id' => $pagamentoAssociado,
            ]);

            return response()->json([
                'valor_pagamento' => $pagamentoValor,
                'associado_id' => $pagamentoAssociado,
            ]);
        } catch (Exception $e) {
            Log::error($e);
        }
    }
}
