const orderId = document.querySelector(".orderId span");

orderId.innerText = localStorage.getItem("orderId");

localStorage.clear();


