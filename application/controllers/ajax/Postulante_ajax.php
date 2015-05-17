<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Postulante_ajax extends CI_Controller {

	function __construct()
	{
		parent::__construct();
		//cache
		// $this->output->set_header("Cache-Control: no-store, no-cache, must-revalidate, no-transform, max-age=0, post-check=0, pre-check=0"); 
		// $this->output->set_header("Pragma: no-cache");

		// $this->load->library('ion_auth');
		// $this->load->library('form_validation');
		// $this->lang->load('auth');
		$this->load->model('postulante_model');	
	}


	public function index()
	{
		show_404();
		
	}


	public function save()
	{
		$c_data['email']  = $this->input->post('email');
		$c_data['linkedin']  = $this->input->post('linkedin');
		$c_data['cel']  = $this->input->post('cel');
		$c_data['proyecto1']  = $this->input->post('proyecto1');
		$c_data['proyecto2']  = $this->input->post('proyecto2');
		$is_ajax = $this->input->post('ajax');
		if($is_ajax){
				$flag = 0;
				$msg = 'Error inesperado, por favor intentalo nuevamente.';						

				$c_data['estado']  = 1;
				$c_data['created'] = date('Y-m-d H:i:s');


				if($this->postulante_model->checkid($this->input->post('email'))->num_rows() <= 0){	

						$id = $this->postulante_model->save($c_data);			
						if($id > 0){
							$msg = 'Tu postulación fue exitosa!.';
							$flag = 1;
						}					
				}else{
						$flag = 2;			
						$msg = "El email ya fue registrado para la postulación.";			
				}	
				$datos['flag'] = $flag;	
				$datos['msg'] = $msg;	

				$data['datos'] = $datos;
				$this->load->view('backend/json/json_view', $data);		

		}else{
			show_404();
		}
	}	


}
