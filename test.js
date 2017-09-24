var Test = function(){
    var num1 = 1;
    var num2 = 2;

    var plus = function(){
        return num1 + num2;
    }

    this.alertStr = function(param1, param2){
        var str = param1 + param2;
        // alert(plus());
        // alert(str);
    }
}

var obj = {
    test : '1',
    test1 : '2'
}; // 데이터타입 -> 구조체

// alert(obj.test);
// alert(obj.test1);

obj['test'] = '1'; 
// alert(obj['test']);
obj.test = '2';
// alert(obj['test']);

