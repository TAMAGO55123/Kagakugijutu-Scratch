//<mo></mo>を使うと、戻るボタンが設置されます。
//使用ライブラリ
//jquery2.1.4
//      mobile1.4.5
//TAMAGO55ライブラリ:console.js
//        　　　　　 console.jsの設定ファイル（コンソールにデータを表示させるかを設定する。）



let mo=document.querySelectorAll('mo');
mo.forEach(function(item,index){
    consoleif.log(`item=${item},index=${index}`);
    item.innerHTML='<a href="javascript:history.back()" data-icon="back" data-role="button" style="width:75px">戻る</a>';
});