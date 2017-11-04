// class.ts
// <reference path="./typings/jquery/jquery.d.ts" />
// import $ = require('jquery');
import * as $ from "jquery";
import { TweenMax, TweenLite, Power2, TimelineLite } from "gsap";

export class SildeShow {
    private currentNum: number;
    private duration: number;

    constructor(private _duration?: number) {
        // this.duration = duration;
        $(document).ready(() => {
            // console.log('ts 1');
            // TweenLite.from(".mt", 2, { x: '-=200px', autoAlpha: 0 });
        });
    }

    get Duration() {
        return this._duration;
    }

    init(): void {

        var myVar;
        console.log(this.Duration);
        function myFunction(timer:number) {
            myVar = setInterval(alertFunc, timer);
        }
        function alertFunc() {
            // alert("Hello!");
            console.log("Hello");
        }
        myFunction(this.Duration);


        // var element = document.getElementById('text');
        // TweenLite.to(element, 1, { 
        //     css: { 
        //         top: "100px", 
        //         left: "50px", 
        //         backgroundColor: "#ff0000", 
        //         fontSize: "12px" 
        //     }, 
        //     delay: 0.5 
        // });

        // var nam = document.getElementsByName('mt');


        // TweenMax.set(".mt", { autoAlpha: 0 });
        // TweenLite.to(".mt", 1,
        // {
        //     autoAlpha: 1,
        //     delay: function (index, target) {
        //         return (index + 1) * 1000
        //     },
        //     x: function (index, target) {
        //         console.log(index, target);
        //         return (index + 1) * 100 // 100, 200, 300
        //     }
        // })


        // TweenLite.to(nam, 1, { opacity: 0.5, rotation: 45 });




    //     console.log("dekudssstaa");
    //     $.ajax({
    //         url: "test.html",
    //         dataType: 'html',
    //     }).done(function (data) {
    //         // var out_html = $($.parseHTML(data));

    //         var result = $('<div />').append(data).find('#text').html();
    //         console.log(result);
    //         $('#textP').html(result);

    //         // var out_html = $($.parseHTML(data));//parse
    //         // $('#textP').empty().append(out_html.filter('#text')[0].innerHTML);//insert

    //         // $("#text").html($(data).find('#text').text());
    //         // $('p').append("kore");
    //         $(this).addClass("done");
    //     });
    //     // $('p').append(this.text);
  }




}
