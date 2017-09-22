'use strict'

jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
    


    $('#closeWindow1').click(function () {

            $("#1").hide();
    });

    $('#closeWindow2').click(function () {

            $("#2").hide();

    });

    $('#closeWindow3').click(function () {

            $("#3").hide();
    });

    $('#closeWindow4').click(function () {

            $("#4").hide();
    });

    $('#addCharts').click(function () {

            $("#1").show();
            $("#2").show();
            $("#3").show();
            $("#4").show();
    });
    
    
    var clicks = 0;

$('#rastaBtn').click(function () {
    clicks++;

    var x = (clicks / 2);

    if (x % 1 == 0) {
    
        $('#audio').trigger("pause");
        $("#colorBtn").show();
        
    } else {
        
        alert("Don't take me seriously, I am just the Rasta Mode! Watch me while you are high and the design will be alright.");
        
        $('#audio').trigger("play");
        $("#colorBtn").hide();
        
    }
});
 
    $("#rastaBtn").hide();

$('#colorBtn').click(function () {
    clicks++;

    var x = (clicks / 2);

    if (x % 1 == 0) {
        
        $("#rastaBtn").show();
        
    } else {
        
        
        
    }
});
     
});


let colorBtn = document.getElementById('colorBtn')

function swappCSS() {
    
    let styles = document.getElementById('styleSheet');
    
    if(styles.getAttribute("href") == "css/style_dark.css") {
        
        styles.setAttribute("href", "css/style.css");
    }else {
        styles.setAttribute("href", "css/style_dark.css")
    }
}

colorBtn.addEventListener('click', swappCSS);

//function pause(){
//    
//       var audio = document.getElementById("audio");
//    
//       audio.pause();
//    
//                 }

//colorBtn.addEventListener('click', pause);




let rastaBtn = document.getElementById('rastaBtn')

function rastaCSS() {
    
    let styles = document.getElementById('styleSheet');
    
    if(styles.getAttribute("href") == "css/style_rasta.css") {
        
        styles.setAttribute("href", "css/style.css");
    }else {
        styles.setAttribute("href", "css/style_rasta.css")
    }
}

rastaBtn.addEventListener('click', rastaCSS);
