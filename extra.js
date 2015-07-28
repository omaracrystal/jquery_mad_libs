$(function() {
  console.log("whee!")

  //event handler
  $("#btn-click").click(function(e){
    e.preventDefault()
    //grab the value from the input box after the button click
    var input= $("input").val()
    //display the value within the browser's JS consold
    console.log(input)
    //add the value to the DOM
    //the .empty() method will clear out the input being appended every time a new one is submitted.
    //without the .empty() tag, all inputs are saved
    $(".results").empty().append(input);
  });

});

var input= $("input").val()
    //display the value within the browser's JS consold
    console.log(input)
    //add the value to the DOM
    //the .empty() method will clear out the input being appended every time a new one is submitted.
    //without the .empty() tag, all inputs are saved
    $(".results").empty().append(input);
  });

});
