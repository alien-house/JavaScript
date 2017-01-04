
if(this.Sort == undefined) Sort={};

(function(){
    Sort.Main = (function(){
        var _fromGetInstance = false;
        var _instance;
    
        function _construct() {
            if (_fromGetInstance !== true) {
                throw new Error("must use the getInstance.");
            }
            _fromGetInstance = false;
        }
    
        _construct.getInstance = function() {
            if (_instance) {
                return _instance;
            }
            _fromGetInstance = true;
            return _instance = new this();
        }
        return _construct; // execute constructar here
    })();
})();

Sort.Main.prototype = {
    RadixSort:function(data){
        var bucket = [], 
            max_digit_array = [],
            r = 1;
        for (var i = 0; i < 10; i++) {
            bucket[i] = [];
        }
        for (var d = 0; d < max_digit_fnc(data); d++) {
            for(var i = 0; i < data.length; i++){
                bucket[(data[i]["score"] / r) % 10 | 0].push( data[i] );
            }
            for(var i = 0, j = 0; j < bucket.length; j++){
                for (var n = 0; n < bucket[j].length; n++) {
                    data[i++] = bucket[j][n];
                }
            }
            for (i = 0; i < bucket.length; i++) {
              bucket[i] = [];
            }
            r *= 10;
        }
        CreateDomTable(data);
    }
    CreateDomTable:function(data){
        tabledata = "";
        $('tr.add').remove();
        for (i = 0; i < data.length; i++) {
            tabledata += '<tr class="add"><td>'+ data[i]["id"]
                        +'</td><td>'+ data[i]["name"]
                        +'</td><td>'+ data[i]["score"]
                        +'</td></tr>';
        }
        $('#listbox tbody > tr:last').after(tabledata);
    }
}



window.onload = function(){
    var test = Sort.Main.getInstance();
    test.RadixSort("test");
    // Sort.Main.init();
}

// var Sort = {};
// Sort.Main.prototype = (function(){
//         init:function(){
//             alert("a");
//         }

// });

// window.onload = function(){
//     Sort.Main.init();
// }


//最大桁数を取得
function max_digit_fnc(n){
    for( var i = 0; i < n.length; i++ ){
        max_digit_array[i] = String(n[i]["score"]).length;
    }
    return Math.max.apply(null, max_digit_array);
}


// create table
function CreateDomTable(data){
    tabledata = "";
    $('tr.add').remove();
    for (i = 0; i < data.length; i++) {
        tabledata += '<tr class="add"><td>'+ data[i]["id"]
                    +'</td><td>'+ data[i]["name"]
                    +'</td><td>'+ data[i]["score"]
                    +'</td></tr>';
    }
    $('#listbox tbody > tr:last').after(tabledata);
}
