<?php 

class Suscripcion_model extends CI_MODEL{
	
    function save($data){
        $this->db->insert('suscripcion', $data);
         $r = false;
        if($this->db->affected_rows() > 0)
            $r = $this->db->insert_id();
        return $r;       
       
    }   

}