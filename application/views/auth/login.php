
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Sistema</title>
        <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
        <link rel="stylesheet" href="<?php echo base_url() ?>assets_1/css/bootstrap.min.css"  />
        <link rel="stylesheet" href="<?php echo base_url() ?>assets_1/css/font-awesome.min.css"  />
        <link rel="stylesheet" href="<?php echo base_url() ?>assets_1/css/ionicons.min.css"  />
        <link rel="stylesheet" href="<?php echo base_url() ?>assets_1/css/global.css"  />
        <link rel="stylesheet" href="<?php echo base_url() ?>assets_1/css/style.min.css"  />
        <link rel="stylesheet" href="<?php echo base_url() ?>assets_1/css/skins/_all-skins.min.css"  />
        <link rel="stylesheet" href="<?php echo base_url() ?>assets_1/css/select2.css"  />
        <script type="text/javascript">
            var CI = {
                'base_url': '<?php echo base_url() ?>',
                'site_url': '<?php echo base_url() ?>'
            };
        </script>
        <script src="<?php echo base_url() ?>assets_1/js/jquery.min.js" ></script>
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
          <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
        <![endif]-->
    </head>
    <body class="login-page ">
        <div class="wrapper">
            <div class="login-box">
                <div class="login-logo">
                    <!--<p><b>INEI - OTED</b></p>-->
                </div>
                <div class="login-box-body">
                    <p class="login-box-msg">ACCESO AL SISTEMA</p>
                    <form action="<?php echo base_url('auth/login') ?>" method="POST" style="margin-bottom: 20px;" id="form_login_usuario" autocomplete="off">
                        <div class="form-group has-feedback">
                            <input type="text" name="identity" class="form-control" id="identity" placeholder="Ingrese usuario"/>
                            <span class="glyphicon glyphicon-user form-control-feedback"></span>
                        </div>
                        <div class="form-group has-feedback">
                            <input type="password" name="password" id="password" class="form-control" placeholder="Ingresa contraseña"/>
                            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>
                        <div class="row">
                            <div class="col-xs-7">
                                <label><input type="checkbox" name="remember" value="1" id="remember"/></label>
                            </div>
                            <div class="col-xs-5">
                                <button type="submit" name="submit" class="btn btn-block btn-primary btn-flat" >Entrar <span class="fa fa-sign-in"></span></button>
                            </div>
                        </div>
                    </form>
                    <div class="alert-message"></div>
                    <!--        <div class="text-version">
                                <p>Versión v1.0</p>
                            </div>-->
                </div>
            </div>
            <script src="<?php echo base_url() ?>assets_1/js/bootstrap.min.js"></script>
            <script src="<?php echo base_url() ?>assets_1/js/plugins/slimScroll/jquery.slimscroll.min.js"></script>
            <script src="<?php echo base_url() ?>assets_1/js/app.min.js"></script>
            <script src="<?php echo base_url() ?>assets_1/js/select2.min.js"></script>
            <script src="<?php echo base_url() ?>assets_1/js/global.js"></script>
    </body>
</html>

<!--<h1><?php #echo lang('login_heading'); ?></h1>
<p><?php #echo lang('login_subheading'); ?></p>

<div id="infoMessage"><?php #echo $message; ?></div>

<?php #echo form_open("auth/login"); ?>

<p>
    <?php #echo lang('login_identity_label', 'identity'); ?>
    <?php #echo form_input($identity); ?>
</p>

<p>
    <?php #echo lang('login_password_label', 'password'); ?>
    <?php #echo form_input($password); ?>
</p>

<p>
    <?php #echo lang('login_remember_label', 'remember'); ?>
    <?php #echo form_checkbox('remember', '1', FALSE, 'id="remember"'); ?>
</p>


<p><?php #echo form_submit('submit', lang('login_submit_btn')); ?></p>

<?php #echo form_close(); ?>

<p><a href="forgot_password"><?php #echo lang('login_forgot_password'); ?></a></p>
-->

