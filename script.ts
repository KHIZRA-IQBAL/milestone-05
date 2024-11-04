let myname:any = document.getElementById("name");
let desig :any= document.getElementById("desig");
let education:any = document.getElementById("education");
let email:any = document.getElementById("Email");
let experience:any = document.getElementById("experience");
let skills1:any = document.getElementById("skills1");
let skills2:any = document.getElementById("skills2");
let skills3:any = document.getElementById("skills3");
let skills4 :any= document.getElementById("skills4");
let interest:any = document.getElementById("Interest");
let pic:any = document.getElementById("pic");
let Github:any = document.getElementById("github-url");
let submitbtn:any=document.getElementById("submit");
let form:any=document.getElementById("form");

form?.addEventListener("submit",(e:any)=>{
       e.preventDefault();
       localStorage.setItem("name",myname.value);
       localStorage.setItem("desig",desig.value);
       localStorage.setItem("education",education.value);
       localStorage.setItem("email",email.value);
       localStorage.setItem("experience",experience.value);
       localStorage.setItem("skills1",skills1.value);
       localStorage.setItem("skills2",skills2.value);
       localStorage.setItem("skills3",skills3.value);
       localStorage.setItem("skills4",skills4.value);
       localStorage.setItem("interest",interest.value);
       localStorage.setItem("Github",Github.value);

       if(pic.files && pic.files[0]){
          let reader=  new FileReader()
              reader.addEventListener("load",()=>{
                     let textImg:any=reader.result
                     localStorage.setItem("profile_pic",textImg)
                      })
                      reader.readAsDataURL(pic.files[0])
                      }
       window.location.href="./resume/resume.html"
})





