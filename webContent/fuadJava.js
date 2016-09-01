//Fuad Java

// Fuad's javascript coding! 

// $('#bio').click(function() {
//     $("html, body").animate({scrollTop: 0}, 600);
//     return false;
// }); 



// $(window).on("scroll", function(){
//   if($("body").scrollTop() === 1000){
//     $(window).off("scroll");
//     // Do some stuff here ..
//   }
// }
// // slow scroll jquery code

// var checkScroll = function() {
//   if ($('#beeramid')[0]) {
//     var el = $('#beeramid');
//     var top_of_object = el.offset().top;
//     var bottom_of_object = el.offset().top + el.outerHeight();
//     var top_of_window = $(window).scrollTop();
//     var bottom_of_window = $(window).scrollTop() + $(window).height();

//     if (top_of_window <= bottom_of_object && bottom_of_window >= top_of_object) {
//       $('.menubar2').show();
//       $('.navigation2').show();
//       $('#menubarbak2').show();
//     } else {
//       $('.menubar2').hide();  
//       $('.navigation2').hide();  
//       $('#menubarbak2').hide();
//     }
//   }
// };

// $(window).on('scroll', function() {checkScroll()});

// show and hide side menu jquery code

// window.onscroll(function(){
//     document.getElementById("menubarbak2").style.display = "block";
// }


// function testScroll() {
//     if (window.pageYOffset > 200) {
//         alert("scrolled to 500px");
//     }
// }

// var didScroll = false;

// window.onscroll = doThisStuffOnScroll;

// function doThisStuffOnScroll() {
//     didScroll = true;
// }

// setInterval(function() {
//     if(didScroll) {
//         didScroll = false;
//         alert('You scrolled');
//     }
// // }, 100);


// var didScroll = false;

// window.onscroll = doThisStuffOnScroll, function() {alertFunk()};

// function doThisStuffOnScroll() {
//     didScroll = true;
    
// }
// setInterval(function() {
//         if(didScroll) {
//             didScroll = false;
//             alert('You scrolled');
//         }
//     }, 100);


// window.onscroll = function() {alertFunk();};    

// function alertFunk() {
//     if (document.body.scrollTop > 570 || document.documentElement.scrollTop > 270) {
//         document.querySelector(".menubar2").style.visibility = "visible";
          

//     } else if (document.body.scrollTop < 570 || document.documentElement.scrollTop < 270) {
//         document.querySelector(".menubar2").style.visibility = "hidden";
//     }
  
// }
