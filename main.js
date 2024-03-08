const passGenerator = document.querySelector (".input-seg input");
const lengh = document.querySelector(".lengh input");
const settings = document.querySelectorAll(".settings input")
const genButton = document.querySelector(".bt-generate button")

const generatepass =() =>{

    let staticPass = "",
    randomPass = "",
    excludeDup = false,
    lenghVal = lengh.value;


}


genButton.addEventListener("click", generatepass);
lengh.addEventListener("input",updateLengh);