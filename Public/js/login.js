$(function(){
    let user=$('#user');
    let pass=$('#pass');
    let sub=$(':submit');
    sub.on('click',function(){
        let data={user:user.val(),pass:pass.val()};
        /*console.log(form.serializeArray());//格式化表单数据
        console.log(form.serialize());//格式化表单数据*/
        console.log(data)
        $.ajax({
            url:'/php/ktv/index.php/login/check',
            data:data,
            success:function(data){
                if(data=='ok'){
                    alert('success');
                }else if(data=='error'){
                    alert('fail');
                }
            }
        })
        return false;
    })
})