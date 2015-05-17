			<div id="sidebar" class="sidebar                  responsive">
				<script type="text/javascript">
					try{ace.settings.check('sidebar' , 'fixed')}catch(e){}
				</script>

				<ul class="nav nav-list">
					<li class="" >
						<a href="<?php echo base_url('panel'); ?>">
							<i class="menu-icon fa fa-tachometer"></i>
							<span class="menu-text"> Panel de control </span>
						</a>

						<b class="arrow"></b>
					</li>


			<?php
				if($this->ion_auth->logged_in()){
					$roles = $this->ion_auth->get_roles();
					if(!empty($roles)){
			?>
					<?php
						$i = 1;
						foreach ($roles as $role){
							$c = "";
							if($this->uri->segment(1) == $role->url){
								$c = ' class="active"';
							}
					?>
							<li <?php echo $c; ?>>
								<a href="<?php echo base_url($role->url); ?>">
									<i class="menu-icon fa <?php echo $role->role_icon;?>"></i>
									<?php //echo anchor(base_url().strtolower($role->url),utf8_encode($role->role_name)); ?>
									<span class="menu-text"><?php echo $role->role_name; ?></span>
								</a>
							</li>
					<?php
						}
					}
				}
				?>

<!-- 					<li class="">
						<a href="<?php //echo base_url('historias'); ?>">
							<i class="menu-icon fa fa-list-alt"></i>
							<span class="menu-text"> Historias Clínicas </span>
						</a>

						<b class="arrow"></b> 
					</li>

					<li class="">
						<a href="<?php //echo base_url('archivo'); ?>">
							<i class="menu-icon fa fa-pencil-square-o"></i>
							<span class="menu-text"> Archivo </span>
						</a>

						<b class="arrow"></b>
					</li> -->

				</ul><!-- /.nav-list -->

				<div class="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
					<i class="ace-icon fa fa-angle-double-left" data-icon1="ace-icon fa fa-angle-double-left" data-icon2="ace-icon fa fa-angle-double-right"></i>
				</div>

				<script type="text/javascript">
					try{ace.settings.check('sidebar' , 'collapsed')}catch(e){}
				</script>
			</div>