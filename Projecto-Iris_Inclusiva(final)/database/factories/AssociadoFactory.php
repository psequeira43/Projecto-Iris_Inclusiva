<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Associado>
 */
class AssociadoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'nome_associado' => $this->faker->name(),
            'nmr_associado'  => $this->faker->numberBetween(500000, 5000000),
            'emai_associado' => $this->faker->unique()->safeEmail(),   
        ];
    }
}
