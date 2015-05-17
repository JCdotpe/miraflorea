<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Muestra_model extends CI_Model {

    public function __construct() {
        parent::__construct();
    }

    public function insertar_comentario_obra($params) {
        $replyMessage = array(
            'tbl_users_id' => $params['coment_id'],
            'tbl_construccion_id' => $params['commet_obra_id'],
            'comentario' => $params['coment'],
            'fecha_comentario' => date("Y-m-d H:i:s")
        );
        $rtn_1 = $this->db->insert('tbl_mensaje_comentario', $replyMessage);
        if ($rtn_1) {
            $last_id = $this->db->insert_id();
            $sql = "SELECT * FROM tbl_mensaje_comentario WHERE id='" . $last_id . "' ";
            $query = $this->db->query($sql);
        }
        return $query->row();
    }
}
