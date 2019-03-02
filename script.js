$("button").click(function() {
    var survivor =parseInt($("#survivor").val());
    var alive=20-survivor;
    var gov= $("#gov").val();
    var gun= $("#gun").val();
    var butt=("In the year 2023 you will have"+survivor+"friends left alive"+"the gov will"+gov+"be intact"+"and you will"+gun+",have a gun license");
    $("#answer").show();
    $("h3").text(butt);
});
$("button").click(function() {
    $("body").css("background-image","url('https://media1.tenor.com/images/76db757dbfd6caace78b5d8354920fc6/tenor.gif?itemid=11416963')");
    $("body").css("background-size:auto");
    $("h2").hide();
    $("input").hide();
    $("button").hide();
});