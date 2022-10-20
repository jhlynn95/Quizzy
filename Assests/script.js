$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        console.log(time, value)
        localStorage.setItem(time, value);
        $(".hide").addClass("show");


    })
});

function time() {
    var currentHour = moment().hours();


    $(".block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("-")[0]);
        if (blockHour < 9 ) {
            currentHour -= 12
        }
        console.log(blockHour, currentHour)
        if (blockHour < currentHour) {
            $(this).addClass("past");
        } else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }

    });
}
time();


$("#9-hour .description").val(localStorage.getItem("9-hour"));
$("#10-hour .description").val(localStorage.getItem("10-hour"));
$("#11-hour .description").val(localStorage.getItem("11-hour"));
$("#12-hour .description").val(localStorage.getItem("12-hour"));
$("#1-hour .description").val(localStorage.getItem("1-hour"));
$("#2-hour .description").val(localStorage.getItem("2-hour"));
$("#3-hour .description").val(localStorage.getItem("3-hour"));
$("#4-hour .description").val(localStorage.getItem("4-hour"));
$("#5-hour .description").val(localStorage.getItem("5-hour"));

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
