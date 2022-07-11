<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AssociadosController;
use App\Http\Controllers\PagamentosController;
use App\Models\Associado;
use App\Models\Pagamento;

Route::get('/', function () {
        return view('welcome');
});

Route::get('debug', function () {
        $pagamento = Pagamento::find(1);
        dd($pagamento->associado);
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/pagamento', [App\Http\Controllers\HomeController::class, 'pagamento'])->name('pagamento');

/** Rotas lista: associados */

Route::get(
        '/get/associado/lista',
        [AssociadosController::class, 'getListaAssociados']
)->name('associado.lista');

Route::post(
        '/get/individual/associado/detalhes',
        [AssociadosController::class, 'getAssociadosDetalhes']
)->name('associado.detalhes');

Route::post(
        '/update/associado/data',
        [AssociadosController::class, 'updateAssociadoData']
);

Route::delete(
        '/delete/associado/data/{associado}',
        [AssociadosController::class, 'destroy']
);

Route::post(
        '/store/associado/data',
        [AssociadosController::class, 'store']
);

/** Rotas lista: pagamentos */

Route::get(
        '/get/pagamento/listaPagamento',
        [PagamentosController::class, 'getListaPagamentos']
)->name('pagamento.listaPagamento');

Route::post(
        '/get/individual/pagamento/detalhes',
        [PagamentosController::class, 'getPagamentosDetalhes']
)->name('pagamento.detalhes');

Route::post(
        '/update/pagamento/data',
        [PagamentosController::class, 'updatePagamentoData']
);

Route::delete(
        '/delete/pagamento/data/{pagamento}',
        [PagamentosController::class, 'destroy']
);

Route::post(
        '/store/pagamento/data',
        [PagamentosController::class, 'store']
);
