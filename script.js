"use strict";
let myname = document.getElementById("name");
let desig = document.getElementById("desig");
let education = document.getElementById("education");
let email = document.getElementById("Email");
let experience = document.getElementById("experience");
let skills1 = document.getElementById("skills1");
let skills2 = document.getElementById("skills2");
let skills3 = document.getElementById("skills3");
let skills4 = document.getElementById("skills4");
let interest = document.getElementById("Interest");
let pic = document.getElementById("pic");
let Github = document.getElementById("github-url");
let submitbtn = document.getElementById("submit");
let form = document.getElementById("form");
form?.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("name", myname.value);
    localStorage.setItem("desig", desig.value);
    localStorage.setItem("education", education.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("experience", experience.value);
    localStorage.setItem("skills1", skills1.value);
    localStorage.setItem("skills2", skills2.value);
    localStorage.setItem("skills3", skills3.value);
    localStorage.setItem("skills4", skills4.value);
    localStorage.setItem("interest", interest.value);
    localStorage.setItem("Github", Github.value);
    if (pic.files && pic.files[0]) {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            let textImg = reader.result;
            localStorage.setItem("profile_pic", textImg);
        });
        reader.readAsDataURL(pic.files[0]);
    }
    window.location.href = "./resume/resume.html";
});
