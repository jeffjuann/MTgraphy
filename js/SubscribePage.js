const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const country = document.getElementById("country");
const tnc = document.getElementById("tnc");
const button = document.getElementById("button");

const nameerr = document.getElementById("nameerror");
const emailerr = document.getElementById("emailerror");
const phoneerr = document.getElementById("phoneerror");
const countryerr = document.getElementById("countryerror");

button.addEventListener("click", (i) => 
{
    form = true;
    if(name.value == "")
    {
        form = false;
        nameerr.innerHTML = "Please Input Your Name";
    }
    else nameerr.innerHTML = "";

    if(email.value == "")
    {
        form = false;
        emailerr.innerHTML = "Please Input Your Email";
    }
    else if(!email.value.endsWith("@binus.ac.id"))
    {
        form = false;
        emailerr.innerHTML = "email must ends with @binus.ac.id";
    }
    else emailerr.innerHTML = "";
    
    if(phone.value == "")
    {
        form = false;
        phoneerr.innerHTML = "Please Input Your Phone Number";
    }
    else phoneerr.innerHTML = "";
    
    if(country.value == "")
    {
        form = false;
        countryerr.innerHTML = "Please Choose Your Country";
    }
    else countryerr.innerHTML = "";
    
    i.preventDefault();
    if(form == false) return;

    if(tnc.checked == false)
    {
        form = false;
        alert("Please Agree With Terms & Conditions");
    }
    
    if(form == true) alert("You Have Successfully Subscribed !");
    i.preventDefault();
})