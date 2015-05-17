							
							</div><!-- /.position-relative -->


						</div>
					</div><!-- /.col -->
				</div><!-- /.row -->
			</div><!-- /.main-content -->
		</div><!-- /.main-container -->

		<!-- basic scripts -->

		<!--[if !IE]> -->
		<script src="<?php echo base_url('assets/js/jquery.2.1.1.min.js'); ?>"></script>

		<!-- <![endif]-->

		<!--[if IE]>
<script src="<?php echo base_url('assets/js/jquery.1.11.1.min.js'); ?>"></script>
<![endif]-->

		<!--[if !IE]> -->
		<script type="text/javascript">
			window.jQuery || document.write("<script src='<?php echo base_url('assets/js/jquery.min.js'); ?>' >"+"<"+"/script>");
		</script>

		<!-- <![endif]-->

		<!--[if IE]>
<script type="text/javascript">
 window.jQuery || document.write("<script src='<?php echo base_url('assets/js/jquery1x.min.js'); ?>' >"+"<"+"/script>");
</script>
<![endif]-->
		<script type="text/javascript">
			if('ontouchstart' in document.documentElement) document.write("<script src='<?php echo base_url('assets/js/jquery.mobile.custom.min.js'); ?>'>"+"<"+"/script>");
		</script>

		<!-- inline scripts related to this page -->
		<script type="text/javascript">


			jQuery(function($) {
			 $(document).on('click', '.toolbar a[data-target]', function(e) {
				e.preventDefault();
				var target = $(this).data('target');
				$('.widget-box.visible').removeClass('visible');//hide others
				$(target).addClass('visible');//show target
			 });
			});
			
			
			
			// you don't need this, just used for changing background
			// jQuery(function($) {


			 // $('#btn-login-dark').on('click', function(e) {
				// $('body').attr('class', 'login-layout');
				// $('#id-text2').attr('class', 'white');
				// $('#id-company-text').attr('class', 'blue');
				
				// e.preventDefault();
			 // });
			 // $('#btn-login-light').on('click', function(e) {
				// $('body').attr('class', 'login-layout light-login');
				// $('#id-text2').attr('class', 'grey');
				// $('#id-company-text').attr('class', 'blue');
				
				// e.preventDefault();
			 // });
			 // $('#btn-login-blur').on('click', function(e) {
				// $('body').attr('class', 'login-layout blur-login');
				// $('#id-text2').attr('class', 'white');
				// $('#id-company-text').attr('class', 'light-blue');
				
				// e.preventDefault();
			 // });
			 
			// });

		</script>
		<script src="<?php echo base_url('js/main.js'); ?>"></script>			
	</body>
</html>	