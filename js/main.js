let leftSpan = document.querySelector(".one i");
let rightSpan = document.querySelector(".two i");
let statusText = document.querySelector(".status")

let attr = "fa-solid fa-hand-scissors "

let lis = document.querySelectorAll("ul li");



function rock (){
    del()
    leftSpan.classList.add("fa-solid", "fa-hand-scissors", "fa-flip-horizontal");
}
function paper (){
    del()
    leftSpan.classList.add("fa-solid", "fa-hand-back-fist", "fa-rotate-90");
}
function scissors (){
    del()
    leftSpan.classList.add("fa-solid", "fa-hand", "fa-rotate-90");
}
lis.forEach((e) => {
    e.addEventListener("click", (ele) => {
        lis.forEach((check)=>{
            check.classList.remove("active");
        })
        e.classList.add("active")
        if (ele.currentTarget.dataset.num === "1"){
            rock()
            if (true){
            }
        }
        if (ele.currentTarget.dataset.num === "2"){
            paper()
        }
        if (ele.currentTarget.dataset.num === "3"){
            scissors()
        }
        let cooldown = setInterval(() => {
            statusText.innerHTML = "wait"
            statusText.classList.add("wait")
        }, 0);
        setTimeout(() => {
            clearInterval(cooldown);
            statusText.classList.remove("wait");
            statusText.textContent = "user win"
            var classOptions = [
                "fa-solid fa-hand fa-rotate-270",
                "fa-solid fa-hand-back-fist fa-rotate-270",
                "fa-solid fa-hand-scissors"
            ];
            var randomIndex = Math.floor(Math.random() * classOptions.length);
            var randomClass = classOptions[randomIndex];
            var individualClasses = randomClass.split(' ');
            
            individualClasses.forEach(function(className) {
                rightSpan.classList.add(className);
            });
        }, 1500);

    })

})
function del(){
    leftSpan.removeAttribute("class");
    rightSpan.removeAttribute("class")
}


