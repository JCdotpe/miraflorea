		<div id="navbar" class="navbar navbar-default">
			<script type="text/javascript">
				try{ace.settings.check('navbar' , 'fixed')}catch(e){}
			</script>
			

			<div class="navbar-container" id="navbar-container">
				<button type="button" class="navbar-toggle menu-toggler pull-left" id="menu-toggler" data-target="#sidebar">
					<span class="sr-only">Toggle sidebar</span>

					<span class="icon-bar"></span>

					<span class="icon-bar"></span>

					<span class="icon-bar"></span>
				</button>

				<div class="navbar-header pull-left">
					<a href="<?php echo base_url(); ?>" class="navbar-brand">
						<small>
							<i class="fa fa-leaf"></i>
							Hospital Villa Salud
						</small>
					</a>
				</div>

<?php 
		if($this->ion_auth->logged_in()){

 ?>

				<div class="navbar-buttons navbar-header pull-right" role="navigation">
					<ul class="nav ace-nav">

						<li class="light-blue">
							<a data-toggle="dropdown" href="#" class="dropdown-toggle">
								<img class="nav-user-photo" src="<?php echo base_url('assets/avatars/avatar5.png'); ?>" alt="Jason's Photo" />
								<span class="user-info">
									<small>Bienvenido,</small>
									<?php echo $this->ion_auth->user()->row()->first_name; ?>
								</span>

								<i class="ace-icon fa fa-caret-down"></i>
							</a>

							<ul class="user-menu dropdown-menu-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
<!-- 								<li>
									<a href="#">
										<i class="ace-icon fa fa-cog"></i>
										Opciones
									</a>
								</li> -->

<!-- 								<li>
									<a href="#">
										<i class="ace-icon fa fa-user"></i>
										Perfil
									</a>
								</li> -->

								<li class="divider"></li>

								<li>
									<a href="<?php echo base_url('auth/logout'); ?>">
										<i class="ace-icon fa fa-power-off"></i>
										Cerrar Sesión
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
<?php } ?>



			</div><!-- /.navbar-container -->
		</div>
			<?php //print_r($this->ion_auth->user()->row()); ?>