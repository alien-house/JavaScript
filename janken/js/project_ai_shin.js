var urlRsp = "http://192.168.0.15/php/rsp.php";
var urlInsert = "http://192.168.0.15/php/insertrsp.php";
var g_score = 0;
var g_name;

$(function() {
    $("#btnEnd").hide();
    $('.selectImages').hide();
    $('#btnStart').click(function() {
        document.getElementById("yourName1").innerHTML = "";
        document.getElementById("yourName2").innerHTML = "";
        document.getElementById("Result").innerHTML = "";
        document.getElementById("Score1").innerHTML = "";
        document.getElementById("Score2").value = "";
        document.getElementById("End").innerHTML = "";
        g_name = prompt("Please enter your name", "ai");
        document.getElementById("yourName1").innerHTML = g_name;
        document.getElementById("yourName2").value = g_name;
        $('.selectImages').slideDown(1000);
        $("#btnEnd").show();
    });
    $('#btnEnd').click(function() {
        document.getElementById("End").innerHTML = "<p>Game End</p>";
        $('.selectImages').hide();
        $("#btnEnd").hide();
    });
});

function game(personAnswer) {
    while (-300 < g_score && g_score < 300) {
        var result = "";
        var janken = ["Rock", "Scissors", "Pepar"];
        var computerAnswer = janken[Math.floor(Math.random() * janken.length)]; //Computer pic one of those from array
        document.getElementById("imgComputer").src = "img/" + computerAnswer + ".png"; //Show image of computer's answer
        document.getElementById("imgPerson").src = "img/" + personAnswer + ".png"; //Show image of computer's answer
        if (personAnswer == computerAnswer) {
            result = "Tie";
        }
        if (personAnswer == "Rock") {
            if (computerAnswer == "Scissors") {
                result = "Win";
            }
            if (computerAnswer == "Pepar") {
                result = "Lose";
            }
        }
        if (personAnswer == "Scissors") {
            if (computerAnswer == "Rock") {
                result = "Lose";
            }
            if (computerAnswer == "Pepar") {
                result = "Win";
            }
        }
        if (personAnswer == "Pepar") {
            if (computerAnswer == "Rock") {
                result = "Win";
            }
            if (computerAnswer == "Scissors") {
                result = "Lose";
            }
        }
        if (result == "Win") {
            g_score = g_score + 100;
        }
        if (result == "Lose") {
            g_score = g_score - 100;
        }
        document.getElementById("Result").innerHTML = personAnswer + "!! " + result;
        document.getElementById("Score1").innerHTML = g_score;
        document.getElementById("Score2").value = g_score;
        break;
    }
    if (-300 == g_score || g_score == 300) { // if g_score is 300 or -300 game end
        document.getElementById("End").innerHTML = "<p>Game End</p>";
    }
}
// view g_score
$(function() {

    $("#load").on("click", function() {
        $.getJSON(urlRsp, function(data) {
            CreateDomTable(data);
        });
    });
    $("#btnBucket").on("click", function(){
        $.getJSON(urlRsp, function(data){
            btnBucket(data);
        });
    });
    $("#send").on("click", function(){
        var dataInsert = {
            'janken_name': g_name,
            'janken_score': g_score
        };
        btnSend(dataInsert);
    });
    
});

function btnSend(datas) {
    $.ajax({
        type:"POST",             
        url:urlInsert,       
        data:datas,
        dataType: "json", 
        success: function(json_data) { 
            if (!json_data[0]) {
                return;
            }
            // console.log(json_data);
        },
        error: function() { 
            // alert("Server Error. Pleasy try again later.");
        },
        complete: function() {    
            // alert("Complete!"); 
        }
    });
}




// Bucket Sort
function btnBucket(data) {
    var bucket = [];
    var sortData = [];
    var max = 10000; //number of buckets
    for (var i = 0; i < max; i++) { // create max numbert of buckets
        bucket[i] = "";
    }
    for (var i = 0; i < bucket.length; i++) {
        for (var j = 0; j < data.length; j++) {
            if (i == data[j]) {
                bucket[i] = data[j];
            }
        }
    }
    for (var i = 0; i < bucket.length; i++) {
        if (bucket[i] != "") {
            sortData.push(bucket[i]);
        }
    }
    CreateDomTable(sortData);
}

// Merge Sort (only work for 8 data,,,)
function btnMerge() {
    var leftSlice = data.slice(0, data.length / 2); //divid half
    var rightSlice = data.slice(data.length / 2, data.length);

    function mergeSortLeft() {
        var result = [];
        var slice1 = leftSlice.slice(0, leftSlice.length / 2);
        var slice2 = leftSlice.slice(leftSlice.length / 2, leftSlice.length);
        if (slice1.length <= 2) { // conpair slice[0] & slice[1]
            slice1[0] < slice1[1] ? result.push(slice1[0], slice1[1]) : result.push(slice1[1], slice1[0]);
            slice2[0] < slice2[1] ? result.push(slice2[0], slice2[1]) : result.push(slice2[1], slice2[0]);
            leftSlice = result;
            return leftSlice;
        }
    }

    function mergeSortRight() {
        var result = [];
        var slice1 = rightSlice.slice(0, rightSlice.length / 2);
        var slice2 = rightSlice.slice(rightSlice.length / 2, rightSlice.length);
        if (slice1.length <= 2) {
            slice1[0] < slice1[1] ? result.push(slice1[0], slice1[1]) : result.push(slice1[1], slice1[0]);
            slice2[0] < slice2[1] ? result.push(slice2[0], slice2[1]) : result.push(slice2[1], slice2[0]);
            rightSlice = result;
            return rightSlice;
        }
    }
    var left = mergeSortLeft();
    var right = mergeSortRight();
    var sortData = [];
    while (left.length > 0 && right.length > 0) { //if both.length are not 0, conpair left[0] &right[0]
        if (left[0] < right[0]) {
            sortData.push(left.shift()); //add left[0] to sortData[] & delete left[0]
        } else {
            sortData.push(right.shift()); //add right[0] to sortData[] & delete right[0]
        }
    }
    if (left.length == 0) {
        for (var i = 0; right.length > i; i++) {
            sortData.push(right[i]);
        }
    }
    if (right.length == 0) {
        for (var j = 0; left.length > j; j++) {
            sortData.push(left[j]);
        }
    }
    CreateDomTable(sortData);
}


/* ================================ */
/* # Radix Sort
*/

var bucket = [], //借りバケツ
    max_digit_array = [], //最大桁数
    r = 1;

function RadixSort(data){
    //バケツ用意（10進数なので10個のバケツを用意）
    for (var i = 0; i < 10; i++) {
        bucket[i] = [];
    }
    //k桁数繰り返す（今回は3桁なので3回）
    for (var d = 0; d < max_digit_fnc(data); d++) {
        for(var i = 0; i < data.length; i++){
            //最下位桁の数字から見ていき、そのインデックスに追加していく。全データを移動させたいのでdata[i]に。
            //ビットごとの OR 代入だと整数になる？console.log(1.0123 | 0);
            bucket[(data[i]["score"] / r) % 10 | 0].push( data[i] );
        }
        //元データの配列に上書きしていく。バケツ配列の数分回す。
        for(var i = 0, j = 0; j < bucket.length; j++){
            //同じ桁があった場合は複数入る場合もあるので二重ループ。
            for (var n = 0; n < bucket[j].length; n++) {
                data[i++] = bucket[j][n];
            }
        }
        //借りバケツを空にする
        for (i = 0; i < bucket.length; i++) {
          bucket[i] = [];
        }
        r *= 10; // 桁数を算出 （1, 10, 100）
    }
    CreateDomTable(data);
}

//n桁の数値を求める
// var digit = function(num, n){
//     return ~~(num / Math.pow(10, n)) % 10;
// }

//最大桁数を取得
function max_digit_fnc(n){
    for( var i = 0; i < n.length; i++ ){
        max_digit_array[i] = String(n[i]["score"]).length;
    }
    return Math.max.apply(null, max_digit_array);
}

/* ================================ */
/* # Quicksort
*/

function QuickSortStart(da){
    var d = quickSort(da, 0, da.length-1);
    CreateDomTable(d);
}

function quickSort(a, i, j){
    if(i == j) return;
    // Picking up a pivot
    var axis_num = pivot(a, i, j);
    // If not the all same
    if(axis_num !== -1){
        var k = partition(a, i, j, Number(a[axis_num]["score"])); // cross line index and exchange
        quickSort(a, i, k-1);
        quickSort(a, k, j);
    }
    return a;
}

// Picking up a pivot
function pivot(data, i, j){
    var k = i + 1; // the number of the comparison with next number
    //最大数より小さい、なおかつ、データの数が同じな場合
    while (k <= j && Number(data[i]["score"]) === Number(data[k]["score"])) {
        k++;//繰り返す
    }
    //上限より大きければ-1を返す
    if (k > j) {
        return -1;
    }
    //前後を比較し、前の数値が大きければ そのインデックスを返す
    if (Number(data[i]["score"]) >= Number(data[k]["score"])) {
        return i;
    }
    return k;
}

//comparison, assignment, next of cross line index
function partition(data, i, j, x){
    var l = i, r = j;
    // console.log(x);
    // It lasts until cross
    while(l <= r){
        // check from the first, if the number is smaller than the pivot number, go through.

        while(l <= r && Number(data[l]["score"]) < x){
            l++;
        }
        // check from the last, if the number is bigger than the pivot number, go through.
        while(r >= i && Number(data[r]["score"]) >= x){
            r--;
        }
        if(l > r) break; // if it cross
        //exchange
        swap(data, l, r);
        l++;
        r--;
    }
    return l; // return the number of the cross
}

function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

// create table
function CreateDomTable(data){
    var tabledata = "";
    for (var i = 0; i < data.length; i++) {
        tabledata += '<tr class="add"><td>'+ data[i]["id"]
                    +'</td><td>'+ data[i]["name"]
                    +'</td><td>'+ data[i]["score"]
                    +'</td></tr>';
    }
    $('#listbox tbody > tr:last').after(tabledata);
}
