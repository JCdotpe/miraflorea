<?php 

class Postulante_model extends CI_MODEL{
    public function __construct()
    {
        parent::__construct();
    }

    function save($data){
        $this->db->insert('postulante', $data);
         $r = false;
        if($this->db->affected_rows() > 0)
            $r = $this->db->insert_id();
        return $r;       
       
    }   

    function checkid($email){
        $this->db->where('email',$email);
        $q =  $this->db->get('postulante');
        return $q;
    }  

}