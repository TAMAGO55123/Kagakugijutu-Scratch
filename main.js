var onelist=[];
var twolist=[];

var onehtml=[];
var twohtml=[];

var num=[
    '\\0030','\\0031','\\0032','\\0033','\\0034','\\0035','\\0036','\\0037','\\0038','\\0039',
    '\\0031\\0030','\\0031\\0031','\\0031\\0032','\\0031\\0033','\\0031\\0034','\\0031\\0035','\\0031\\0036','\\0031\\0037','\\0031\\0038','\\0031\\0039',
];

var yomikomi=()=>{
    var one = getScID(1);
    //var one={grade:'1',ID:[[366353052]],Name:[['スイカゲーム　チート版！']],length:1};
    var two = getScID(2);
    //var two={grade:'2',ID:[[366353052]],Name:[['スイカゲー ム　チート版！']],length:1};
    
    //$('h1#yomikomi').css('display','none');
    
    var i;
    for(i=0;i<one.length;i++){
        onelist.push([]);
        onelist[i].push([]);
        onelist[i].push([]);
        onelist[i].push([]);

        onelist[i][0]=one.ID[i][0].toString();
        onelist[i][1]=one.Name[i][0];
        onelist[i][2]='https://uploads.scratch.mit.edu/get_image/project/'+onelist[i][0]+'_288x216.png';
    }
    for(i=0;i<two.length;i++){
        twolist.push([]);
        twolist[i].push([]);
        twolist[i].push([]);
        twolist[i].push([]);

        twolist[i][0]=two.ID[i][0].toString();
        twolist[i][1]=two.Name[i][0];
        twolist[i][2]='https://uploads.scratch.mit.edu/get_image/project/'+twolist[i][0]+'_288x216.png';
    }
    
    var onediv=document.querySelector('div#one');
    var twodiv=document.querySelector('div#two');

    onediv.innerHTML='';
    twodiv.innerHTML='';
    
    onelist.forEach(function (value,index){
        onehtml.push([]);
        onehtml[index].push([]);
        onehtml[index].push([]);
        onehtml[index].push([]);
        onehtml[index].push([]);

        onehtml[index][0]=document.createElement('div');
        onehtml[index][0].id='a'+index.toString();
        onediv.appendChild(onehtml[index][0]);
        onehtml[index][1]=document.createElement('h3');
        onehtml[index][1].innerText=value[1];
        i='div#a'+num[index];
        document.querySelector(i).appendChild(onehtml[index][1]);
        onehtml[index][2]=document.createElement('a');
        onehtml[index][2].href='#page02?data='+value[0];
        onehtml[index][2].dataset.turbo=value[0];
        onehtml[index][2].onclick=iframedata;
        document.querySelector(i).appendChild(onehtml[index][2]);
        onehtml[index][2].classList.add('a'+index.toString());
        onehtml[index][3]=document.createElement('img');
        onehtml[index][3].src=value[2];
        onehtml[index][3].alt=value[1];
        document.querySelector(`a.a${num[index]}`).appendChild(onehtml[index][3]);
    });

    
    twolist.forEach(function (value,index){
        twohtml.push([]);
        twohtml[index].push([]);
        twohtml[index].push([]);
        twohtml[index].push([]);
        twohtml[index].push([]);

        twohtml[index][0]=document.createElement('div');
        twohtml[index][0].id='b'+index.toString();
        twodiv.appendChild(twohtml[index][0]);
        twohtml[index][1]=document.createElement('h3');
        twohtml[index][1].innerText=value[1];
        i='div#b'+num[index];
        document.querySelector(i).appendChild(twohtml[index][1]);
        twohtml[index][2]=document.createElement('a');
        twohtml[index][2].href='#page02?data='+value[0];
        twohtml[index][2].onclick=iframedata;
        twohtml[index][2].dataset.turbo=value[0];
        document.querySelector(i).appendChild(twohtml[index][2]);
        twohtml[index][2].classList.add('b'+index.toString());
        twohtml[index][3]=document.createElement('img');
        twohtml[index][3].src=value[2];
        twohtml[index][3].alt=value[1];
        document.querySelector(`a.b${num[index]}`).appendChild(twohtml[index][3]);
    });
    
    document.querySelector('a#ba').onclick=iframeback;
};

check(
    () => {window.addEventListener('load', yomikomi);},
    () => {document.getElementById('tabs').innerHTML='<spam style="color:red;">時間切れ、または設定不良です。</spam>'}
);
window.addEventListener('load',function(){$('h1#yomikomi')[0].style='display:none';});

function iframedata(){
    let data=document.querySelector('div#iframe iframe');
    consoleif.log(this.dataset.turbo);
    let queryObject = this.dataset.turbo;
    data.width=document.documentElement.offsetWidth;
    data.height=document.documentElement.offsetHeight-80;
    data.contentWindow.location.replace(`https://turbowarp.org/${queryObject}/embed/`);
    check(
        () => {},
        () => {document.getElementById('tabs').innerHTML='<spam style="color:red;">時間切れ、または設定不良です。</spam>'}
    );
}

function iframeback(){
    let data=document.querySelector('div#iframe iframe');
    data.contentWindow.location.replace('https://turbowarp.org/984137598/embed?autoplay&turbo');
    check(
        () => {},
        () => {document.getElementById('tabs').innerHTML='<spam style="color:red;">時間切れ、または設定不良です。</spam>'}
    );
}