window.addEventListener('load', ()=>{
    //var one = getScID(1);
    var one={grade:'1',ID:[[366353052]],Name:[['スイカゲーム　チート版！']],length:1};
    //var two = getScID(2);
    var two={grade:'2',ID:[[366353052]],Name:[['スイカゲーム　チート版！']],length:1};
    $('h1#yomikomi')[0].style='display:none';
    //$('h1#yomikomi').css('display','none');
    
    var onelist=[];
    var twolist=[];
    
    var i;
    for(i=0;i<one.length;i++){
        onelist[i]=[];
        onelist[i][0]=one.ID[i][0].toString();
        onelist[i][1]=one.Name[i][0];
        onelist[i][2]='<img src="'+onelist[i][0]+'">';
    }
    for(i=0;i<two.length;i++){
        twolist[i]=[];
        twolist[i][0]=two.ID[i][0].toString();
        twolist[i][1]=two.Name[i][0];
        twolist[i][2]='<img src="https://uploads.scratch.mit.edu/get_image/project/'+twolist[i][0]+'_288x216.png">';
    }

    var onehtml='';
    var twohtml='';
    
    var num=[
        '\\0030','\\0031','\\0032','\\0033','\\0034','\\0035','\\0036','\\0037','\\0038','\\0039',
        '\\0031\\0030','\\0031\\0031','\\0031\\0032','\\0031\\0033','\\0031\\0034','\\0031\\0035','\\0031\\0036','\\0031\\0037','\\0031\\0038','\\0031\\0039',
    ];
    onelist.forEach(function (value,index){
        onehtml=onehtml+'<a href="#page02" class="'+index+'><h3>'+value[1]+'</h3><br>'+value[2]+'<br></a>';
    });
    twolist.forEach(function (value,index){
        twohtml=twohtml+'<a href="#page02" class="'+index+'><h3>'+value[1]+'</h3><br>'+value[2]+'<br></a>';
    });

    $('#one').innerHTML=onehtml;
    $('#two').innerHTML=twohtml;

    var oneevent=[];
    var twoevent=[];
    var oneif;
    var twoif;

    onelist.forEach(function (value,index){
        oneevent.push(document.querySelector(`#${num[index]}`).addEventListener('click',function (){
            oneif=document.createElement('iframe');
            oneif.src=`https://turbowarp.org/embed/${value[0]}`;
            oneif.style.height='100%';
            oneif.style.width
            document.querySelector('div#page02 div#iframe')
        }));
    });
});