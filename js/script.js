const slides = document.querySelectorAll('.slides');
let arrows = document.querySelectorAll('.arrow');

flag = 0; // this is the index number of current slide


// Show a particluar slide of a given parameter
let slidesShow = (index) =>{
    if(index == slides.length){
        flag = 0;
        index = 0;
    }else if(index < 0){
        flag = slides.length -1;
        index = slides.length -1;
    }else{
    }
    slides.forEach(function(v,i){
        slides[i].style.display = "none";
    });
    slides[index].style.display = "block";
}
slidesShow(flag);

// Indicators Settings
let indicaters = (num) =>{
    flag = flag + num;
    slidesShow(flag);
}