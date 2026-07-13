/* ==========================================
   PROFILE
========================================== */

const logoutBtn = document.querySelector("#logoutBtn");

logoutBtn.addEventListener("click", () => {

    localStorage.removeItem("rememberEmail");

    showToast(

        "success",

        "Logout",

        "See you again!"

    );

    setTimeout(() => {

        window.location.href = "login.html";

    }, 1500);

});
