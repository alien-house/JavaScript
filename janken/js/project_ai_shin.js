var urlRsp = "http://192.168.0.15/php/rsp.php";
var urlInsert = "http://192.168.0.15/php/insertrsp.php";
var g_score = 0;
var g_name;
var jsonData = [
    { "id":1, "name": "鈴木", "score": 330 },
    { "id":2, "name": "山田", "score": 21 },
    { "id":3, "name": "佐藤", "score": 56 },
    { "id":4, "name": "駒込", "score": 865 },
    { "id":5, "name": "渓谷", "score": 258 },
    { "id":6, "name": "榊腹", "score": 2 },
    { "id":7, "name": "谷江", "score": 365 }
];

var j_token_val;
$(function() {
    if(!localStorage.getItem("j_token")){
        var j_token_val = token();
        localStorage.setItem("j_token", j_token_val);
    }else{
        j_token_val = localStorage.getItem("j_token", j_token_val);
    }
    // if (typeof(Storage) === "undefined") {
    //     alert("Sorry! No Web Storage support");
    // }
    console.log(j_token_val);
});

// make token
var rand = function() {
    return Math.random().toString(36).substr(2); 
};
var token = function() {
    return rand() + rand(); 
};

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
    var sort = Sort;
    // var sort = Sort.Main.getInstance();

    $("#load").on("click", function() {
        $.getJSON(urlRsp, function(data) {
            CreateDomTable(data);
        });
    });
    $("#btnBubble").on("click", function(){
        $.getJSON(urlRsp, function(data){
            sort.BubbleSort(data);
        });
    });
    $("#btnRadix").on("click", function(){
        $.getJSON(urlRsp, function(data){
            sort.RadixSort(data);
        });
    });
    $("#btnQuick").on("click", function(){
        $.getJSON(urlRsp, function(data){
            sort.QuickSort(data);
        });
    });
    $("#btnBucket").on("click", function(){
        $.getJSON(urlRsp, function(data){
            sort.BucketSort(data);
        });
    });
    $("#btnMerge").on("click", function(){
        $.getJSON(urlRsp, function(data){
            sort.MergeSort(data);
        });
    });
    $("#send").on("click", function(){
        var dataInsert = {
            'janken_name': g_name,
            'janken_score': g_score,
            'janken_token': j_token_val
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
