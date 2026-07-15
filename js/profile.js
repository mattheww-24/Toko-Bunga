const logoutBtn = document.querySelector("#logoutBtn");

logoutBtn.addEventListener("click", () => {

    localStorage.removeItem("rememberEmail");

    logoutBtn.disabled = true;

    logoutBtn.textContent = "Logging out...";

    showToast(

        "success",

        "Logout",

        "See you again!"

    );

    setTimeout(() => {

        window.location.href = "login.html";

    }, 1200);

});
