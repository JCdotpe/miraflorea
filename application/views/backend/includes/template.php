<?php $this->load->view('backend/includes/header'); ?>

<?php 
	if(isset($window)){
?>
		<body class="login-layout light-login">	
			<div class="main-container">
				<div class="main-content">
					<div class="row">
						<div class="col-sm-10 col-sm-offset-1">
							<div class="login-container">
								<div class="center">
										<div class="space-6"></div>
										<img alt="HospitalVillaSalud" height="100px" src="<?php echo base_url('img/gm.png'); ?>">				
										<h4 class="blue" id="id-company-text">&copy; Gestores Medicos SAC</h4>
								</div>

								<div class="space-6"></div>
	 
								<div class="position-relative">	


<?php }else{ ?>

	<body class="no-skin">

<?php } ?>	





<?php 
if(isset($nav))
	$this->load->view('backend/includes/nav'); 
?>


<?php 
	if(!isset($window)){
?>

<div class="main-container" id="main-container">
	<script type="text/javascript">
		try{ace.settings.check('main-container' , 'fixed')}catch(e){}
	</script>


<?php } ?>	



<?php 
	if(isset($sidebar)){
		$this->load->view('backend/includes/sidebar'); 
	}
?>


<?php 
	if(!isset($window)){ ?>
			<div class="main-content">
				<div class="main-content-inner">
<?php 
		 $this->load->view('backend/includes/breadcrumb'); 
 	} 
 ?>	


<?php $this->load->view($main_content); ?>



<?php 
	if(!isset($window)){ ?>

				</div>
			</div><!-- /.main-content -->
<?php } ?>	



<?php 

	if(!isset($window)){

		$this->load->view('backend/includes/landfooter'); ?>

		</div><!-- /.main-container -->

<?php }else{

		$this->load->view('backend/includes/footer'); 
} ?>



<?php 
	if(!isset($window)){
		$this->load->view('backend/includes/scripts'); 
	}
?>