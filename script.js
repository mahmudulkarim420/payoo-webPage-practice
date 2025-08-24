  document.getElementById("login-btn").addEventListener("click", function(e){
    e.preventDefault();
    const mobileNumber = 1602968749;
    const pinNumber = 2468;
    const mobileNumberValue = document.getElementById("mobile-number").value;
    const mobileNumberValueConverted = parseInt(mobileNumberValue);
    const pinNumberValue = document.getElementById("pin-number").value;
    const pinNumberValueConverted = parseInt(pinNumberValue);
    console.log(mobileNumberValueConverted,pinNumberValueConverted);

    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
        window.location.href="./homePage.html"
    }else{
        alert("invalid information");
    }
  });

