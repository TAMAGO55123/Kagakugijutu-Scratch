var onelist=[];
var twolist=[];

var onehtml=[];
var twohtml=[];


window.addEventListener('load', ()=>{
    //var one = getScID(1);
    var one={grade:'1',ID:[[366353052]],Name:[['スイカゲーム　チート版！']],length:1};
    //var two = getScID(2);
    var two={grade:'2',ID:[[366353052]],Name:[['スイカゲーム　チート版！']],length:1};
    $('h1#yomikomi')[0].style='display:none';
    //$('h1#yomikomi').css('display','none');
    
    var i;
    for(i=0;i<one.length;i++){
        onelist[i]=[];
        onelist[i][0]=one.ID[i][0].toString();
        onelist[i][1]=one.Name[i][0];
        onelist[i][2]='https://uploads.scratch.mit.edu/get_image/project/'+onelist[i][0]+'_288x216.png';
    }
    for(i=0;i<two.length;i++){
        twolist[i]=[];
        twolist[i][0]=two.ID[i][0].toString();
        twolist[i][1]=two.Name[i][0];
        twolist[i][2]='https://uploads.scratch.mit.edu/get_image/project/'+twolist[i][0]+'_288x216.png';
    }

    
    var onediv=document.querySelector('div#one');
    var twodiv=document.querySelector('div#two');
    var num=[
        '\\0030','\\0031','\\0032','\\0033','\\0034','\\0035','\\0036','\\0037','\\0038','\\0039',
        '\\0031\\0030','\\0031\\0031','\\0031\\0032','\\0031\\0033','\\0031\\0034','\\0031\\0035','\\0031\\0036','\\0031\\0037','\\0031\\0038','\\0031\\0039',
    ];
    onelist.forEach(function (value,index){
        onehtml[index]=[];
        onehtml[index][0]=document.createElement('div');
        onehtml[index][0].id=index.toString();
        onediv.appendChild(onehtml[index][0]);
        onehtml[index][1]=document.createElement('h3');
        onehtml[index][1].innerText=value[1];
        i='div#'+num[index];
        document.querySelector(i).appendChild(onehtml[index][1]);
        onehtml[index][2]=document.createElement('a');
        onehtml[index][2].href='#page02?data='+value[0];
        onehtml[index][2].onclick=iframedata;
        document.querySelector(i).appendChild(onehtml[index][2]);
        onehtml[index][2].classList.add(index.toString());
        onehtml[index][3]=document.createElement('img');
        onehtml[index][3].src=value[2];
        document.querySelector(`a.${num[index]}`).appendChild(onehtml[index][3]);
    });
    
});
function iframedata(){
    let data=document.querySelector('div#iframe iframe');
    var queryString = window.location.search;
    var queryObject = new Object();
    if(queryString){
        queryString = queryString.substring(1);
        var parameters = queryString.split('&');

        for (var i = 0; i < parameters.length; i++) {
            var element = parameters[i].split('=');

            var paramName = decodeURIComponent(element[0]);
            var paramValue = decodeURIComponent(element[1]);

            queryObject[paramName] = paramValue;
        }
    }
    data.style.width='70%'
    data.contentDocument.location.replace(`https://turbowarp.org/embed/${queryObject.data}`);
}