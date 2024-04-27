var jsdiv=document.querySelector('div#js');
let liblink=[
    'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy',
    'https://code.jquery.com/jquery-3.7.1.min.js',
    
];
var jslibdata1='';
liblink.forEach(function (item, index){
    jslibdata1=jslibdata1+'<script src="'+item+'"></script>';
});
jsdiv.innerHTML=jslibdata1;
