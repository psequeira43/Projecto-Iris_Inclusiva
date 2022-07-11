<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       
        Schema::create('associados', function (Blueprint $table) {
            $table->id();
            $table->string('nome_associado');
            $table->integer('nmr_associado');
            $table->string('email_associado');
            $table->timestamps();
            $table->timestamp('created_at2')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('associados');
    }
};
