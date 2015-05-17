<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	function __construct()
	{
		parent::__construct();
		$this->load->model('Suscripcion_model');	
	}


	public function index()
	{
		$data['num'] = 666;
		$this->load->view('index_view',$data);

	}

	// public function suscripcion()
	// {
	// 	$c_data['email']  = $this->input->post('email');
	// 	$is_ajax = $this->input->post('ajax');
	// 	$c_data['estado']  = 1;
	// 	$c_data['created'] = date('Y-m-d H:i:s');

	// 	if($is_ajax){
	// 		$flag = 0;
	// 		$msg = 'Error inesperado, por favor intentalo nuevamente';		

	// 		// if($this->Suscripcion_model->checkid($this->input->post('email')){	
	// 			$id = $this->Suscripcion_model->save($c_data);			
	// 			if($id > 0){
	// 				$msg = 'Se registró el archivo correctamente.';
	// 				$flag = 1;
	// 			}

	// 		// }else{
	// 		// 	$flag = 2;			
	// 		// 	$msg = "Su correo ya esta registrado en nuestra base de datos. Gracias";			
	// 		// }		

	// 		$datos['flag'] = $flag;	
	// 		$datos['msg'] = $msg;	

	// 		$data['datos'] = $datos;
	// 		$this->load->view('backend/json/json_view', $data);		

	// 	}else{
	// 		show_404();
	// 	}
	// }
}
