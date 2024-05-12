function getScID(grade){
    $.ajax({
        type: "GET",
        url: "https://script.google.com/macros/s/AKfycbzZ18jdzpAoMQw7q8Ie9z5ren9Y5QUdv9jAq27gvTTijmc8jLBfg0eomYZJF8JwEpof/exec",
        data:{"grade":grade},
        dataType:"json",
        async:false
    })
    .done(function (json){
        console.log(json);
        return json
    })
    .fail(function (){
        console.error('エラーが発生しました');
        return null;
    })
}
