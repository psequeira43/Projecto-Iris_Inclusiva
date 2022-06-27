<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AssociadosController;



Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/get/associado/lista',
        [AssociadosController::class, 'getListaAssociados'])->name('associado.lista');

 Route::post('/get/individual/associado/detalhes',
        [AssociadosController::class, 'getAssociadosDetalhes'])->name('associado.detalhes');

Route::post('/update/associado/data',
        [AssociadosController::class, 'updateassociadoData']);

Route::delete('/delete/associado/data/{associado}',
        [AssociadosController::class, 'destroy']);

Route::post('/store/associado/data',
        [AssociadosController::class, 'store']);