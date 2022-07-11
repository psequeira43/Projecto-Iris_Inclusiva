<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;
use Exception;
use App\Models\Associado;

class AssociadosController extends Controller
{
    // Get Lista de Associados da base de dados

    public function getListaAssociados()
    {
        try
        {
            $associados = Associado::orderBy('id', 'DESC')->get();
            return response()->json($associados);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }

    public function getAssociadosDetalhes(Request $request)
    {
        try
        {
            $associadoData = Associado::with('pagamento')->findOrFail($request->get('associadoId'));
            return response()->json($associadoData);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }

    public function updateAssociadoData(Request $request)
    {
        try
        {
            $associadoId           = $request->get('associadoId'); 
            $associadoNome         = $request->get('associadoNome'); 
            $associadoNmrAssociado = $request->get('associadoNmrAssociado');  
            $associadoEmail        = $request->get('associadoEmail'); 
     

            Associado::where('id', $associadoId)->update([
                'nome_associado' => $associadoNome,
                'nmr_associado'  => $associadoNmrAssociado,
                'email_associado'=> $associadoEmail 
            ]);

            return response()->json([
                'nome_associado' => $associadoNome,
                'nmr_associado'  => $associadoNmrAssociado,
                'email_associado'=> $associadoEmail 
            ]);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }

    public function destroy(Associado $associado)
    {
        try
        {
            $associado->delete();
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }
    public function store(Request $request)
    {
        try
        {
            $associadoNome         = $request->get('associadoNome'); 
            $associadoNmrAssociado = $request->get('associadoNmrAssociado'); 
            $associadoEmail        = $request->get('associadoEmail');
        
            Associado::create([
                'nome_associado' => $associadoNome,
                'nmr_associado'  => $associadoNmrAssociado,
                'email_associado'=> $associadoEmail 

            ]);

            return response()->json([
                'nome_associado' => $associadoNome,
                'nmr_associado'  => $associadoNmrAssociado,
                'email_associado'=> $associadoEmail 

            ]);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }
}
