function getScID(grade){
    $.ajax({
        type: "GET",
        url: "https://script.google.com/macros/s/AKfycbx03lTqQg5mazmCyq-SsPmVBQYHhtKdYFT3X1kkHdsZK7qX80gpfoOeK-4myVW9sGYi/exec",
        data:{"grade":grade},
        dataType:"json",
        async:false
    })
    .done(function (json){
        consoleif.log(json);
        return json
    })
    .fail(function (){
        consoleif.error('エラーが発生しました');
        return null;
    })
}
