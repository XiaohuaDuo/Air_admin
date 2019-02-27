var isErr = false;
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
        if (text=='') {
            isErr = false;
            document.getElementById("sendPhoneErr").style.visibility="hidden";
        } else {
            isErr = true
            document.getElementById("sendPhoneErr").style.visibility="visible";
        }
    } else if (tyep == 'recept') {
        var receptPhone = document.getElementById('receptPhone').value;
        var text = checkPhone(receptPhone)
        if (text=='') {
            isErr = false;
            document.getElementById("receptPhoneErr").style.visibility="hidden";
        } else {
            isErr = true;
            document.getElementById("receptPhoneErr").style.visibility="visible";
        }
    }
};

function isIdNO() {
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    var idNo = document.getElementById('sendIdNo').value;
    if (!reg.test(idNo)) {
        isErr = true;
        document.getElementById("sendIdNoErr").style.visibility="visible";
    } else {
        isErr = false;
        document.getElementById("sendIdNoErr").style.visibility="hidden";
    }
}


function checkEmpty() {
   var sendName =  document.getElementById('sendName').value;
   var sendPhone = document.getElementById('sendPhone').value;
   var idNo = document.getElementById('sendIdNo').value;
   var sendAddress = document.getElementById('sendAddress').value;
   var sendDetail = document.getElementById('sendDetail').value;
}