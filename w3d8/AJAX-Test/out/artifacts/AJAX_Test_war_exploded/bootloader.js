
$(document).ready(function () {
    $("#loading").hide();
    $( "#load" ).click(function() {
        $.ajax({
            method: "GET",
            url: "http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/bootloader/loader.php",
            success: gotTheImageLink,
            error: failed,
            complete: finished
        });
        $("#boot").empty();
        $("#loading").show();
    });

});

function gotTheImageLink(data) {
    let image = "<img src= 'http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/bootloader/" + data + "'alt='Got It!'/>";
    $("#boot").append(image);
}
function failed(xhr, status, exception) {
    alert(status);
}
function finished() {
    $("#loading").hide();
}