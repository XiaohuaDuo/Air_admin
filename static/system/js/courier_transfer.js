$('.canClick').click(function () {
    //接口返回前 不可点击
    // $('.canClick').removeClass('noClick');

    //获取下拉框的值
    document.getElementById("goodKind").value; //直接获取索引
    var index=document.getElementById("goodKind").selectedIndex;//获取当前选择项的索引.
    var text = document.getElementById("goodKind").options[index].text;//获取当前选择项的文本.
    var value = document.getElementById("goodKind").options[index].value;//获取当前选择项的文本.
    console.log(text,value)
});

function isPhone(type) {
    if (type == 'send') {
        var sendPhone = document.getElementById('sendPhone').value;
        var text = checkPhone(sendPhone)
    } else if (tyep == 'recept') {
        var receptPhone = document.getElementById('receptPhone').value;
        var text = checkPhone(receptPhone)
    }
};