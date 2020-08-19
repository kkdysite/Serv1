<?php
/* 这个文件为了兼容旧版本 */
ini_set("error_reporting","E_ALL & ~E_NOTICE");
header('Cache-Control:no-cache,must-revalidate');   
header('Pragma:no-cache');   
header("Expires:0"); 

header('Content-type:text/javascript');  


if ( (! empty($_SERVER['REQUEST_SCHEME']) && $_SERVER['REQUEST_SCHEME'] == 'https') || (! empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') || (! empty($_SERVER['SERVER_PORT']) && $_SERVER['SERVER_PORT'] == '443') ) {

    $_SERVER['REQUEST_SCHEME'] = 'https';
    
    } else {
    
    $_SERVER['REQUEST_SCHEME'] = 'http';
    
    }
if ($_SERVER["SERVER_PORT"]==80 ||$_SERVER["SERVER_PORT"]==0 || $_SERVER["SERVER_PORT"]==""){
    $myurl= $_SERVER["REQUEST_SCHEME"].'://'.$_SERVER['SERVER_NAME'];

}else{
    $myurl= $_SERVER["REQUEST_SCHEME"].'://'.$_SERVER['SERVER_NAME'].':'.$_SERVER["SERVER_PORT"];

}

?>
temp_Loader_var=1;
window.location.href = '<?php echo $myurl;?>/?v=AndroidAndPc20191207';