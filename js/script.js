const slides = document.querySelectorAll('.slides');
const arrows = document.querySelectorAll('.arrow');
const indicator = document.querySelectorAll('.indicator');

flag = 0; // this is the index number of current slide


// Main Slider Function 
let slidesShow = (index) =>{
    if(index == slides.length){
        flag = 0;
        index = 0;
    }else if(index < 0){
        flag = slides.length -1;
        index = slides.length -1;
    }else{
    }
    // Hide Other Slides and change the color of inactive indicators
    slides.forEach(function(v,i){
        slides[i].style.display = "none";
        indicator[i].style.background = "transparent";
        indicator[i].style.border = "1px solid gray";
    });
    // Show a particluar slide of a given parameter
    slides[index].style.display = "block";
    indicator[index].style.background = 'gray';
}
slidesShow(flag);


// Arrow Settings
let arrow = (num) =>{
    flag = flag + num;
    slidesShow(flag);
}

// Indicators Settings
let indicators = (ind) =>{
    slidesShow(ind);
    indicator.forEach(function(v,i){
        indicator[i].style.border = "1px solid gray";
        indicator[ind].style.background = 'transparent';
    });
    indicator[ind].style.background = 'gray';
}