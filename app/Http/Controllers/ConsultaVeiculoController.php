<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

/**
 * Componente de Consulta de Veículos.
 * 
 * Este componente é responsável por renderizar a interface de consulta 
 * de veículos com base na tabela FIPE.
 */

class ConsultaVeiculoController extends Controller
{
    public function index()
    {
        return Inertia::render('ConsultaVeiculoPage');
    }
}
