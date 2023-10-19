<?php



namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

/**
 * Controller para a funcionalidade de Consulta de Veículos.
 * 
 * Este controller é responsável por gerenciar todas as ações 
 * relacionadas à consulta de veículos com base na tabela FIPE.
 */


class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;
}
