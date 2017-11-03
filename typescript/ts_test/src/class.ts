// class.ts
// <reference path="./typings/jquery/jquery.d.ts" />
// import $ = require('jquery');
import * as $ from "jquery";

export class TestClass {
    private text: string;

    constructor(text: string) {
        this.text = text;
    }

    display(): void {

        window.addEventListener('scroll', function (e) {
            // console.log(window.scrollY);
            // let elements = document.getElementsByClassName('imgBox');
            let elements = $('.imgBox');
            let winHeight = (window.innerHeight / 2);

            $.each(elements, function (key, value) {
                // alert(key + ": " + value);
                let rect = value.getBoundingClientRect();
                let winHeight =  (window.innerHeight / 2);
                console.dir("imgBox:" + rect.top);
                if (winHeight > rect.top) {
                    $(value).find(".imgBg").addClass("move");
                }
            });



            // let rect = elements[0].getBoundingClientRect();
            // let winHeight =  (window.innerHeight / 2);
            // // console.dir("imgBox:" + rect.top);
            // // console.log("window.pageXOffset" + window.pageXOffset);
            
            // if (window.scrollY > rect.top) {
            //     elements.find(".imgBg").addClass("move");
            //     // elements[0].childNodes("imgBg").className += "move";
            // } else {
            //     console.log("さよなら");
            // }
        });










        console.log("dekudssstaa");
        $.ajax({
            url: "test.html",
            dataType: 'html',
        }).done(function (data) {
            // var out_html = $($.parseHTML(data));

            var result = $('<div />').append(data).find('#text').html();
            console.log(result);
            $('#textP').html(result);

            // var out_html = $($.parseHTML(data));//parse
            // $('#textP').empty().append(out_html.filter('#text')[0].innerHTML);//insert

            // $("#text").html($(data).find('#text').text());
            // $('p').append("kore");
            $(this).addClass("done");
        });
        // $('p').append(this.text);
    }




}
