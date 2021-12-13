$(document).ready(function(){
    //preload images
    $("#image_list").each( (index, link) => {
        const image = new Image();
        image.src = link.href;
    });

    //attach event handlers for links
    $("#image_list").click( evt => {
        //get the clicked <a> tag
        const link = evt.currentTarget;
    })

    //Call bxSlider in order to create the slideshow using the images
    $('.bxslider').bxSlider();


});

