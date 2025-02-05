let toastBox = document.getElementById("toastBox");

let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully Submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Something went wrong. Please try again'; 
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid Details';

function showNotification(msg) {
    let toast = document.createElement("div");
    toast.classList.add("toast");

    if (msg.includes("Successfully Submitted")) {
        toast.classList.add("success");
    } else if (msg.includes("Something went wrong")) {
        toast.classList.add("error");
    } else if (msg.includes("Invalid Details")) {
        toast.classList.add("invalid");
    }

    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 6000);
}
