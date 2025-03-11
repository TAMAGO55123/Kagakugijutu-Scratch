//リストを生成
var onelist=[];
var twolist=[];

var onehtml=[];
var twohtml=[];

var num=[
    '\\0030','\\0031','\\0032','\\0033','\\0034','\\0035','\\0036','\\0037','\\0038','\\0039',
    '\\0031\\0030','\\0031\\0031','\\0031\\0032','\\0031\\0033','\\0031\\0034','\\0031\\0035','\\0031\\0036','\\0031\\0037','\\0031\\0038','\\0031\\0039',
    '\\0032\\0030','\\0032\\0031','\\0032\\0032','\\0032\\0033','\\0032\\0034','\\0032\\0035','\\0032\\0036','\\0032\\0037','\\0032\\0038','\\0032\\0039',
];

var ui_btn_ac_data;

//読み込み
var yomikomi=()=>{
    //データを取得
    var one = getScID(1);
    var two = getScID(2);
    
    var i;
    for(i=0;i<one.length;i++){
        //設定用配列の追加
        onelist.push([]);
        onelist[i].push([]);
        onelist[i].push([]);
        onelist[i].push([]);

        //データを入力
        onelist[i][0]=one.ID[i][0].toString();
        onelist[i][1]=one.Name[i][0];
        onelist[i][2]='https://uploads.scratch.mit.edu/get_image/project/'+onelist[i][0]+'_288x216.png';
    }
    for(i=0;i<two.length;i++){
        //設定用配列の追加
        twolist.push([]);
        twolist[i].push([]);
        twolist[i].push([]);
        twolist[i].push([]);

        //データを入力
        twolist[i][0]=two.ID[i][0].toString();
        twolist[i][1]=two.Name[i][0];
        twolist[i][2]='https://uploads.scratch.mit.edu/get_image/project/'+twolist[i][0]+'_288x216.png';
    }
    
    //データを表示する範囲を作成
    var onediv=document.querySelector('div#one');
    var twodiv=document.querySelector('div#two');

    //中身を空にする
    onediv.innerHTML='';
    twodiv.innerHTML='';
    
    //リストの数だけ生成する
    onelist.forEach(function (value,index){
        //設定用配列の作成
        onehtml.push([]);
        onehtml[index].push([]);
        onehtml[index].push([]);
        onehtml[index].push([]);
        onehtml[index].push([]);

        //まとまりの作成
        onehtml[index][0]=document.createElement('div');
        onehtml[index][0].id='a'+index.toString();
        onediv.appendChild(onehtml[index][0]);
        //タイトルを生成
        onehtml[index][1]=document.createElement('h3');
        onehtml[index][1].innerText=value[1];
        i='div#a'+num[index];
        document.querySelector(i).appendChild(onehtml[index][1]);
        //作品に入るためのリンクを生成
        onehtml[index][2]=document.createElement('a');
        onehtml[index][2].href='#page02?data='+value[0];
        onehtml[index][2].dataset.turbo=value[0];
        onehtml[index][2].onclick=iframedata;
        document.querySelector(i).appendChild(onehtml[index][2]);
        onehtml[index][2].classList.add('a'+index.toString());
        //サムネイルの生成
        onehtml[index][3]=document.createElement('img');
        onehtml[index][3].src=value[2];
        onehtml[index][3].alt=value[1];
        document.querySelector(`a.a${num[index]}`).appendChild(onehtml[index][3]);
    });
    
    twolist.forEach(function (value,index){
        //設定用配列の作成
        twohtml.push([]);
        twohtml[index].push([]);
        twohtml[index].push([]);
        twohtml[index].push([]);
        twohtml[index].push([]);
        //まとまりの作成
        twohtml[index][0]=document.createElement('div');
        twohtml[index][0].id='b'+index.toString();
        twodiv.appendChild(twohtml[index][0]);
        //タイトルを生成
        twohtml[index][1]=document.createElement('h3');
        twohtml[index][1].innerText=value[1];
        i='div#b'+num[index];
        document.querySelector(i).appendChild(twohtml[index][1]);
        //作品に入るためのリンクを生成
        twohtml[index][2]=document.createElement('a');
        twohtml[index][2].href='#page02?data='+value[0];
        twohtml[index][2].onclick=iframedata;
        twohtml[index][2].dataset.turbo=value[0];
        document.querySelector(i).appendChild(twohtml[index][2]);
        twohtml[index][2].classList.add('b'+index.toString());
        //サムネイルの生成
        twohtml[index][3]=document.createElement('img');
        if(value[0].indexOf('f') != -1){
            twohtml[index][3].src="https://tamago55123.github.io/data-hokanko/" + value[0] + ".png";
            twohtml[index][3].width=288;
            twohtml[index][3].height=216;
        }
        else {
            twohtml[index][3].src=value[2];
        }
        twohtml[index][3].alt=value[1];
        document.querySelector(`a.b${num[index]}`).appendChild(twohtml[index][3]);
    });
    
    document.querySelector('a#ba').onclick=iframeback;
};

//しっかりと時間内か確認する(check.js)
check(
    () => {window.addEventListener('load', yomikomi);},
    () => {document.getElementById('one').innerHTML='<spam style="color:red;">時間切れ、または設定不良です。</spam>';document.getElementById('two').innerHTML='<spam style="color:red;">時間切れ、または設定不良です。</spam>';}
);
//ロードできたら読み込み中の表示を消す
window.addEventListener('load',function(){$('h1#yomikomi')[0].style='display:none';});

//遊ぶためのページ用の関数
function iframedata(){
    //埋め込みを作成
    let data=document.querySelector('div#iframe iframe');
    consoleif.log(this.dataset.turbo);
    //IDを取得
    let queryObject = this.dataset.turbo;
    //横幅と縦幅を取得
    data.width=document.documentElement.offsetWidth;
    data.height=document.documentElement.offsetHeight-80;
    //ファイルか確認
    if(queryObject.indexOf('f') != -1){
        //ファイル名を取り出す
        file_name = queryObject.substr(1, 6) + ".sb3";
        console.log(file_name)
        url = `https://tamago55123.github.io/data-hokanko/${file_name}`;
        op = queryObject.substr(8);
        op = op.substr(0, op.length - 1);
        console.log(op)
        oplist = op.split('');
        data2 = "https://turbowarp.org/embed/?addons=pause,clones&project_url=" + url
        if(oplist.indexOf('h') != -1)data2 = data2 + "&interpolate";
        if(oplist.indexOf('o') != -1)data2 = data2 + "&offscreen";
        if(oplist.indexOf('c') != -1)data2 = data2 + "&clones=Infinity";
        data.contentWindow.location.replace(data2);
    }
    else{
        data.contentWindow.location.replace(`https://turbowarp.org/${queryObject}/embed/?addons=pause,clones`);
    }
    //時間内か確認する
    check(
        () => {},
        () => {document.getElementById('one').innerHTML='<spam style="color:red;">時間切れ、または設定不良です。</spam>';document.getElementById('two').innerHTML='<spam style="color:red;">時間切れ、または設定不良です。</spam>';}
    );
}

function iframeback(){
    let data=document.querySelector('div#iframe iframe');
    data.contentWindow.location.replace('https://turbowarp.org/984137598/embed?autoplay&turbo&addons=pause,clones');
    check(
        () => {},
        () => {document.getElementById('one').innerHTML='<spam style="color:red;">時間切れ、または設定不良です。</spam>';document.getElementById('two').innerHTML='<spam style="color:red;">時間切れ、または設定不良です。</spam>';}
    );
}