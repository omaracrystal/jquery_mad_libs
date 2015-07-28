$(function() {

  //hide the story from view
  $("#story").hide();

  // ---- event handler ---- //
  $("#btn-click").click(function(e) {
    e.preventDefault()
    // grab the values from the input boxes, then append them to the DOM
    //.person is the class name if it was #person that would target the id name...
    $(".person").empty().append($("input.person").val());
    //.val() grabs the value fromt he form inputs
    //.empty() removes any text from that specific class in the story
    //.append() then adds the new value to the story
    $(".adjective").empty().append($("input.adjective").val());
    $(".noun").empty().append($("input.noun").val());
    $(".insect").empty().append($("input.insect").val());
    $(".noun2").empty().append($("input.plural-noun").val());
    $(".verb").empty().append($("input.verb").val());

    //show the story
    $("#story").show();

    //empty the form's values
    $(":input").val("");

    //hide the questions
    $("#questions").hide();
  });

});

$("#play-btn").click(function(e) {
  $("#questions").show();
  $("#story").hide();
})

//Please note: Instead of using jQuery, $("#story").hide(); to hide the story, you could also use CSS - #story {display: none;}
