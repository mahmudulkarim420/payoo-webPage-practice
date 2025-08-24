// Add Money 

const validPin = 2468;
const transactionData = [];

document.getElementById("add-money-btn").addEventListener("click", function(e){
    e.preventDefault();
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = parseInt(document.getElementById("amount").value);
    const pinNumber = parseInt(document.getElementById("pin-number").value);
    const mainBalance = parseInt(document.getElementById("main-balance").innerText);
    if(accountNumber.length < 11){
        alert("please provide a valid account number")
        return;
    }

    if(pinNumber !=validPin){
        alert("please enter valid pin number")
        return;
    }
    const totalBalance = amount + mainBalance;
    document.getElementById("main-balance").innerText = totalBalance;

    const data = {
      name:"Add Money",
      date:new Date().toLocaleTimeString()
    }

    transactionData.push(data)
    
  });

  document.getElementById("transaction-button").addEventListener('click', function() {
    const transactionContainer = document.getElementById('transaction-container');
    transactionContainer.innerText = "";

    for(const data of transactionData){
      const div = document.createElement('div')

      div.innerHTML=`
              <div class=" bg-white rounded-xl p-3 flex justify-between items-center mt-3">
          <div class="flex items-center ">
            <div class="p-3 rounded-full bg-[#0808080d]">
              <img class="mx-auto" src="assets/wallet1.png" alt="">
            </div>
            <div class="ml-4">
              <h1>${data.name}</h1>
              <p>${data.date}</p>
            </div>
          </div>
          <i class="fa-solid fa-ellipsis-vertical text-gray-500 text-[18px]"></i>
        </div>
      `

      transactionContainer.appendChild(div)
    }
  });

// Withdraw Money

document.getElementById("withdraw-button").addEventListener("click", function(e){
    e.preventDefault();

    const agentNumberValidation = document.getElementById("agent-number").value;
    const withdrawPinValidation = parseInt(document.getElementById("pin-validation").value);

        if(agentNumberValidation.length < 11){
        alert("please provide a valid agent number")
        return;
    }
        if(withdrawPinValidation !=validPin){
        alert("please enter valid pin number")
        return;
    }


    const amount = parseInt(document.getElementById("withdraw-amount").value);

    const availableBalance = parseInt(document.getElementById("main-balance").innerText);

    const totalAvailableBalance = availableBalance - amount;

    document.getElementById("main-balance").innerText = totalAvailableBalance;

    
    const data = {
      name:"Cash Out",
      date:new Date().toLocaleTimeString()
    }

    transactionData.push(data)
});







// Toggle Section

  // document.getElementById("add-money-button").addEventListener("click", function(){
  //   document.getElementById("cashout-section").style.display = "none";

  //   document.getElementById("add-money-section").style.display = "block";
  //   document.getElementById("transfer-money-section").style.display = "none";
  // });
  

  // document.getElementById("cashout-button").addEventListener("click", function(){
  //   document.getElementById("add-money-section").style.display = "none";
    
  //   document.getElementById("cashout-section").style.display = "block";
  //   document.getElementById("transfer-money-section").style.display = "none";
  // });

  // document.getElementById("transfer-money-button").addEventListener("click", function(){
  //   document.getElementById("add-money-section").style.display = "none";
  //   document.getElementById("cashout-section").style.display = "none";
  //   document.getElementById("transfer-money-button").style.display = "block";
  // });
  

  // Toggle 2nd Method

  document.getElementById("add-money-button").addEventListener("click", function(){
    const forms = document.getElementsByClassName("form")

    for(const form of forms){
      form.style.display = "none"
    }
    document.getElementById("add-money-section").style.display = "block";
  });
  document.getElementById("cashout-button").addEventListener("click", function(){
    const forms = document.getElementsByClassName("form")

    for(const form of forms){
      form.style.display = "none"
    }
    document.getElementById("cashout-section").style.display = "block";
  });
  document.getElementById("transfer-money-button").addEventListener("click", function(){
    const forms = document.getElementsByClassName("form")

    for(const form of forms){
      form.style.display = "none"
    }
    document.getElementById("transfer-money-section").style.display = "block";
  });
  document.getElementById("get-bonus-button").addEventListener("click", function(){
    const forms = document.getElementsByClassName("form")

    for(const form of forms){
      form.style.display = "none"
    }
    document.getElementById("get-bonus-section").style.display = "block";
  });
  document.getElementById("get-bonus-button").addEventListener("click", function(){
    const forms = document.getElementsByClassName("form")

    for(const form of forms){
      form.style.display = "none"
    }
    document.getElementById("get-bonus-section").style.display = "block";
  });
  document.getElementById("pay-bill-button").addEventListener("click", function(){
    const forms = document.getElementsByClassName("form")

    for(const form of forms){
      form.style.display = "none"
    }
    document.getElementById("pay-bill-section").style.display = "block";
  });
  document.getElementById("transaction-button").addEventListener("click", function(){
    const forms = document.getElementsByClassName("form")

    for(const form of forms){
      form.style.display = "none"
    }
    document.getElementById("transaction-section").style.display = "block";
  });





// Toggle bg Color

document.getElementById("add-money-button").addEventListener("click", function(e){

  const formBtns = document.getElementsByClassName("form-btn");

  for(const btn of formBtns){
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]", "text-[#0874f2]");
    btn.classList.add("border-gray-200", "text-gray-600");
  }

  const activeBtn = document.getElementById("add-money-button");
  activeBtn.classList.remove("border-gray-200", "text-gray-600");
  activeBtn.classList.add("border-[#0874f2]", "bg-[#0874f20d]", "text-[#0874f2]");
});
document.getElementById("cashout-button").addEventListener("click", function(e){

  const formBtns = document.getElementsByClassName("form-btn");

  for(const btn of formBtns){
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]", "text-[#0874f2]");
    btn.classList.add("border-gray-200", "text-gray-600");
  }

  const activeBtn = document.getElementById("cashout-button");
  activeBtn.classList.remove("border-gray-200", "text-gray-600");
  activeBtn.classList.add("border-[#0874f2]", "bg-[#0874f20d]", "text-[#0874f2]");
});
document.getElementById("transfer-money-button").addEventListener("click", function(e){

  const formBtns = document.getElementsByClassName("form-btn");

  for(const btn of formBtns){
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]", "text-[#0874f2]");
    btn.classList.add("border-gray-200", "text-gray-600");
  }

  const activeBtn = document.getElementById("transfer-money-button");
  activeBtn.classList.remove("border-gray-200", "text-gray-600");
  activeBtn.classList.add("border-[#0874f2]", "bg-[#0874f20d]", "text-[#0874f2]");
});
document.getElementById("get-bonus-button").addEventListener("click", function(e){

  const formBtns = document.getElementsByClassName("form-btn");

  for(const btn of formBtns){
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]", "text-[#0874f2]");
    btn.classList.add("border-gray-200", "text-gray-600");
  }

  const activeBtn = document.getElementById("get-bonus-button");
  activeBtn.classList.remove("border-gray-200", "text-gray-600");
  activeBtn.classList.add("border-[#0874f2]", "bg-[#0874f20d]", "text-[#0874f2]");
});
document.getElementById("pay-bill-button").addEventListener("click", function(e){

  const formBtns = document.getElementsByClassName("form-btn");

  for(const btn of formBtns){
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]", "text-[#0874f2]");
    btn.classList.add("border-gray-200", "text-gray-600");
  }

  const activeBtn = document.getElementById("pay-bill-button");
  activeBtn.classList.remove("border-gray-200", "text-gray-600");
  activeBtn.classList.add("border-[#0874f2]", "bg-[#0874f20d]", "text-[#0874f2]");
});
document.getElementById("transaction-button").addEventListener("click", function(e){

  const formBtns = document.getElementsByClassName("form-btn");

  for(const btn of formBtns){
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]", "text-[#0874f2]");
    btn.classList.add("border-gray-200", "text-gray-600");
  }

  const activeBtn = document.getElementById("transaction-button");
  activeBtn.classList.remove("border-gray-200", "text-gray-600");
  activeBtn.classList.add("border-[#0874f2]", "bg-[#0874f20d]", "text-[#0874f2]");
});


// Go To Login Form
    document.getElementById("logout-btn").addEventListener("click", function() {
    window.location.href = "./loginForm.html"; 
  });