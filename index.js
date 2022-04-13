const sedan = document.querySelector(".bg-warning");
const sedanBody = document.querySelector(".sedan.text-white");
const sedanIcon = document.querySelector(".sedanIcon.text-white");

sedan.addEventListener("mouseenter",(e)=>{
     sedan.classList.remove("bg-warning");
     sedan.classList.add("border-warning");
     sedanBody.classList.remove("text-white");
     sedanBody.classList.add("text-warning");
     sedanIcon.classList.remove("text-white");
     sedanIcon.classList.add("text-warning");
});

sedan.addEventListener("mouseleave",(e)=>{
     sedan.classList.add("bg-warning");
     sedan.classList.remove("border-warning");
     sedanBody.classList.add("text-white");
     sedanBody.classList.remove("text-warning");
     sedanIcon.classList.add("text-white");
     sedanIcon.classList.remove("text-warning");
});

const suv = document.querySelector(".bg-info");
const suvBody = document.querySelector(".suv.text-white");
const suvIcon = document.querySelector(".suvIcon.text-white");

suv.addEventListener("mouseenter",(e)=>{
     suv.classList.remove("bg-info");
     suv.classList.add("border-info");
     suvBody.classList.remove("text-white");
     suvBody.classList.add("text-info");
     suvIcon.classList.remove("text-white");
     suvIcon.classList.add("text-info");
});

suv.addEventListener("mouseleave",(e)=>{
     suv.classList.add("bg-info");
     suv.classList.remove("border-info");
     suvBody.classList.add("text-white");
     suvBody.classList.remove("text-info");
     suvIcon.classList.add("text-white");
     suvIcon.classList.remove("text-info");
});

const lux = document.querySelector(".bg-success");
const luxBody = document.querySelector(".lux.text-white");
const luxIcon = document.querySelector(".luxIcon.text-white");

lux.addEventListener("mouseenter",(e)=>{
     lux.classList.remove("bg-success");
     lux.classList.add("border-success");
     luxBody.classList.remove("text-white");
     luxBody.classList.add("text-success");
     luxIcon.classList.remove("text-white");
     luxIcon.classList.add("text-success");
});

lux.addEventListener("mouseleave",(e)=>{
     lux.classList.add("bg-success");
     lux.classList.remove("border-success");
     luxBody.classList.add("text-white");
     luxBody.classList.remove("text-success");
     luxIcon.classList.add("text-white");
     luxIcon.classList.remove("text-success");
});