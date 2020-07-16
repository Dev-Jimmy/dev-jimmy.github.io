$(function () {
    $(":radio").click(clicked);
    $("#nextblob").click(nextPet);
});

let members = "";
let index = 0;

function clicked () {
    let breed = this.id;
    let breedURL = (breed == "dogs")? "dogs.txt" : "cats.txt";
    $.ajax({
        url: breedURL,
        type: "GET",
        success: gotList
    });
    index = 0;
}

function gotList(data) {
    members = data.split(/[\n\r]+/);
    let list = "";

    for(let i = 0; i < members.length; i++){
        list += "<li id='" + i + "'>" + members[i] + "</li>";
    }

    $("#breeds").empty();
    $("#breeds").append(list);
    $( "li" ).each(function( index ) {
        $( this ).click(traverse);
    });
    displayInfo();
}

function displayInfo() {
    let member = "";
    for(let i = 0; i < members[index].length; i++){
        if(members[index][i] == " "){
            member += "_";
        }else {
            member += members[index][i];
        }
    }
    let infoURL = ("breeds/" + member + ".html").toLowerCase();
    let imageURL = ("breeds/" + member + ".jpg").toLowerCase();
    $("#pet").attr("src", imageURL);

    $.ajax({
        url: infoURL,
        type: "GET",
        success: fillInfo
    });

   document.getElementById(index.toString()).className = "selected";

   readyNext();
}

function fillInfo(data) {
    $("#show").empty();
    $("#show").append(data);
}

function nextPet() {

    $( "li" ).each(function( index ) {
        $( this ).removeClass();
    });

    index += 1;
    if(index >= members.length){
        index = 0;
    }
    displayInfo();
}

function readyNext() {

    let next = (index == members.length-1)? 0 : index+1;
    let nextMember = "";
    for(let i = 0; i < members[next].length; i++){
        if(members[next][i] == " "){
            nextMember += "_";
        }else {
            nextMember += members[next][i];
        }
    }
    let nextImageURL = ("breeds/" + nextMember + ".jpg").toLowerCase();
    $("#next").attr("src", nextImageURL);
}
function traverse() {
    $( "li" ).each(function( index ) {
        $( this ).removeClass();
    });
    index = this.id;
    displayInfo();
}

