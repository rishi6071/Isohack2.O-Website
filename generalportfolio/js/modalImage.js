/********* Modal Image *********/


/* Modal Image 1 */
$("#pop").on("click", function() {
    $('#imagepreview').attr('src', $('#imageresource').attr('src')); // here asign the image to the modal when the user click the enlarge link
    $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});

/* Modal Image 2 */
$("#pop2").on("click", function() {
    $('#imagepreview2').attr('src', $('#imageresource2').attr('src'));
    $('#imagemodal2').modal('show'); 
});

/* Modal Image 3 */
$("#pop3").on("click", function() {
    $('#imagepreview3').attr('src', $('#imageresource3').attr('src'));
    $('#imagemodal3').modal('show');
});

/* Modal Image 4 */
$("#pop4").on("click", function() {
    $('#imagepreview4').attr('src', $('#imageresource4').attr('src'));
    $('#imagemodal4').modal('show'); 
});

/* Modal Image 5 */
$("#pop5").on("click", function() {
    $('#imagepreview5').attr('src', $('#imageresource5').attr('src'));
    $('#imagemodal5').modal('show'); 
});

/* Modal Image 6 */
$("#pop6").on("click", function() {
    $('#imagepreview6').attr('src', $('#imageresource6').attr('src')); 
    $('#imagemodal6').modal('show');
});

/* Modal Image 7 */
$("#pop7").on("click", function() {
    $('#imagepreview7').attr('src', $('#imageresource7').attr('src')); 
    $('#imagemodal7').modal('show');
});

/* Modal Image 8 */
$("#pop8").on("click", function() {
    $('#imagepreview8').attr('src', $('#imageresource8').attr('src')); 
    $('#imagemodal8').modal('show');
});