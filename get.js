function getScID(grade){
    $.ajax({
        type: "GET",
        url: "https://script.google.com/macros/s/AKfycbx03lTqQg5mazmCyq-SsPmVBQYHhtKdYFT3X1kkHdsZK7qX80gpfoOeK-4myVW9sGYi/exec",
        data:{"grade":grade},
        dataType:"json",
        async:false
    })
    .done(function (json){
        console.log(json);
    })
    .fail(function (){
        console.error('エラーが発生しました');
    })
}
