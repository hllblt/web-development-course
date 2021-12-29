const leftButton = document.querySelector(".left");
const aside = document.getElementsByTagName("aside")[0];
const iframe = document.getElementsByTagName("iframe")[0];
const links = document.getElementsByClassName("links");
const codes = document.getElementsByClassName("codes");
const hyperText = document.getElementsByTagName("html")[0];
const codeSection = document.getElementsByClassName("codeSection")[0];
const codePre = document.getElementsByTagName("pre")[0];
const rightSection = document.getElementsByClassName("rightSection");

//IFRAME İÇİN
for(let i = 0;i<links.length;i++){
    links[i].addEventListener("click",()=>{
        iframe.style.display = "block";
        codeSection.style.display = "none";
        iframe.src = links[i].attributes.info.value+"/lesson-1.html";
    })
}




let leftCondition = true;
leftButton.addEventListener("click", () => {
    if (leftCondition) {
        leftButton.style.transform = "rotate(180deg)";
        leftButton.style.left = "10px";
        aside.style.width = "0%";
        // aside.style.visibility = "hidden";
        rightSection[0].style.width = "100%";
        rightSection[1].style.width = "100%";
        leftCondition = !leftCondition;
    } else {
        leftButton.style.transform = "rotate(0deg)";
        leftButton.style.left = "260px";
        aside.style.width = "20%";
        // aside.style.visibility = "visible";
        rightSection[0].style.width = "80%";
        rightSection[1].style.width = "80%";
        leftCondition = !leftCondition;
    }
});
