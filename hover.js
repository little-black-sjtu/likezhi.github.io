const siderbar_right_div = document.getElementById("hover_before");
const siderbar_right_after_div = document.getElementById("hover_after");

siderbar_right_div.addEventListener("mouseover", function(){
    siderbar_right_div.style.width = "10rem";
    siderbar_right_div.style.height = "20rem";
    setTimeout(() => {
        siderbar_right_div.style.display = "none";
        siderbar_right_after_div.style.display = "inline-block";
    }, 300);
});


siderbar_right_after_div.addEventListener("mouseleave", function(){
    siderbar_right_div.style.display = "inline-block";
    siderbar_right_after_div.style.display = "none";
    setTimeout(() => {
        siderbar_right_div.style.width = "5rem";
        siderbar_right_div.style.height = "1rem";
    }, 300);
});