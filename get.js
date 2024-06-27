
function getScID(grade){
    
    var jsondatagrade;
    $.getJSON(`https://yawara.tamago55.f5.si/json/grade${grade}.json`, (data) =>{
        jsondatagrade=data;
    });
    return jsondatagrade
}


