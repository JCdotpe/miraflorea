<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8">
		<!-- <meta http-equiv="content-type" content="text/html; charset=utf-8"/> -->
		<!-- contentType:"application/x-javascript; charset:ISO-8859-1" -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		<title>
		<?php 
			$title = isset($title) ? ' - ' . $title : '';
			echo 'Hospital Villa Salud' . $title;
		?> 
		</title>

		<meta name="description" content="Inicio de sesión" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

		<!-- bootstrap & fontawesome -->
		<link rel="stylesheet" href="<?php echo base_url('assets/css/bootstrap.min.css'); ?>" />
		<link href="<?php echo base_url('assets/css/bootstrap-responsive.min.css'); ?>" rel="stylesheet" />
		<link rel="stylesheet" href="<?php echo base_url('assets/font-awesome/4.2.0/css/font-awesome.min.css'); ?>" />

		<!-- text fonts -->
		<link rel="stylesheet" href="<?php echo base_url('assets/fonts/fonts.googleapis.com.css'); ?>" />

		<!-- ace styles -->
		<link rel="stylesheet" href="<?php echo base_url('assets/css/jquery-ui-1.10.3.custom.min.css'); ?>" />
		<link rel="stylesheet" href="<?php echo base_url('assets/css/ace.min.css'); ?>" />
		<link rel="stylesheet" href="<?php echo base_url('assets/css/ace-responsive.min.css'); ?>" />
		<link rel="stylesheet" href="<?php echo base_url('assets/css/ace-skins.min.css'); ?>" />
		<!--[if lte IE 9]>
			<link rel="stylesheet" href="<?php echo base_url('assets/css/ace-part2.min.css'); ?>" />
		<![endif]-->
		<link rel="stylesheet" href="<?php echo base_url('assets/css/ace-rtl.min.css'); ?>" />
		<!--[if lte IE 9]>
		  <link rel="stylesheet" href="<?php echo base_url('href="assets/css/ace-ie.min.css"'); ?>" />
		<![endif]-->

		<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
		<link rel="stylesheet" href="<?php echo base_url('css/main.css'); ?>" />


		<link rel="stylesheet" href="<?php echo base_url('css/print.css'); ?>" media="print" />
		<!--[if lt IE 9]>
		<script src="<?php echo base_url('assets/js/html5shiv.min.js'); ?>" ></script>
		<script src="<?php echo base_url('assets/js/respond.min.js'); ?>" ></script>
		<![endif]-->

		<!-- Datatables -->
		<link rel="stylesheet" href="<?php echo base_url('css/jquery.dataTables.min.css'); ?>" />

		<link rel="stylesheet" href="<?php echo base_url('assets/video-js/video-js.css'); ?>" />

		<script src="<?php echo base_url('assets/video-js/video.js'); ?>" ></script>
		
		<script type="text/javascript">
		        <!--
		        	var oTable1;
		            var CI = {
		              'base_url': '<?php echo base_url(); ?>',
		              'site_url': '<?php echo site_url(); ?>',
		              'year' : <?php echo date("Y"); ?>
		            };            
		        -->
			 videojs.options.flash.swf = CI.base_url + "assets/video-js/video-js.swf"
		</script>	



		<script src="<?php echo base_url('assets/js/ace-extra.min.js'); ?>" ></script>

		<!-- basic scripts -->

		<!--[if !IE]> -->
		<script src="<?php echo base_url('assets/js/jquery.2.1.1.min.js'); ?>" ></script>

		<!-- <![endif]-->

		<!--[if IE]>
<script src="assets/js/jquery.1.11.1.min.js"></script>
<![endif]-->

		<!--[if !IE]> -->
		<script type="text/javascript" >
			window.jQuery || document.write("<script src='<?php echo base_url('assets/js/jquery.min.js'); ?>'>"+"<"+"/script>");
		</script>

		<!-- <![endif]-->

		<!--[if IE]>
<script type="text/javascript">
 window.jQuery || document.write("<script src='<?php echo base_url('assets/js/jquery1x.min.js'); ?>' >"+"<"+"/script>");
</script>
<![endif]-->
		<script type="text/javascript">
			if('ontouchstart' in document.documentElement) document.write("<script src='<?php echo base_url('assets/js/jquery.mobile.custom.min.js'); ?>' >"+"<"+"/script>");
		</script>

	</head>
<!-- Small modal -->

<div class="modal fade" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">Mensaje</h4>
      </div>
      <div class="modal-body">
        <p id="mmsg"></p>
      </div>
       <div class="modal-footer">
     	<button class="btn-primary" data-dismiss="modal" aria-hidden="true">Ok</button> 
     </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->



