function openBlock (id) {
    var block = document.getElementById(id.substr(10));
    var blocks = document.getElementById("main_content").getElementsByTagName("div");
    var elementId = id;
    for (var y = 0; y < blocks.length; y++) {
        blocks[y].style.display = "none";
    }
    block.style.display = "block";

    $('#menu li').removeClass('active');
    // TODO: remove the "active" class from all of the li elements inside the menu


    // TODO: add the "active" class to the li element that contains the link that was clicked
    $('#' + id).parent().addClass('active');
  }


// TODO: add the "hover" class to the menu items when you hover over them
    ('#menu li').hover(function(){
      $(this).addClass('hover');
    }
function(){
      $(this).removeClass('hover');
});

// TODO: set up the tooltip plugin on all of the links in the menu
$('#menu > li > a').on("click", function(){

  //console.log($(this).attr('id'));
  //console.log($(this).attr('id').substr(10));
  openBlock($(this).attr('id'));

});
