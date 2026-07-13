/* ==========================================
   AUTH SCRIPT
   TR_TokoBunga
========================================== */

const loginForm = document.querySelector("#loginForm");
const signupForm = document.querySelector("#signupForm");

/* ==========================================
   VALIDATION
========================================== */

function validateEmail(email) {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);

}

/* ==========================================
   LOGIN PAGE
========================================== */

if (loginForm) {

    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const remember = document.querySelector("#remember");
    const togglePassword = document.querySelector("#togglePassword");

    /* remember me */

    const savedEmail = localStorage.getItem("rememberEmail");

    if (savedEmail) {

        email.value = savedEmail;

        remember.checked = true;

    }

    /* show / hide password */

    togglePassword.addEventListener("click", () => {

        const icon = togglePassword.querySelector("i");

        if (password.type === "password") {

            password.type = "text";

            icon.setAttribute("data-lucide", "eye-off");

        } else {

            password.type = "password";

            icon.setAttribute("data-lucide", "eye");

        }

        lucide.createIcons();

    });

    /* submit */

    loginForm.addEventListener("submit", (e) => {

        e.preventDefault();

        if (email.value.trim() === "") {

            showToast("error", "Email Required", "Please enter your email.");

            email.focus();

            return;

        }

        if (!validateEmail(email.value)) {

            showToast("error", "Invalid Email", "Please enter a valid email address.");

            email.focus();

            return;

        }

        if (password.value.length < 6) {

            showToast("error", "Invalid Password", "Password must contain at least 6 characters.");

            password.focus();

            return;

        }

        if (remember.checked) {

            localStorage.setItem("rememberEmail", email.value.trim());

        } else {

            localStorage.removeItem("rememberEmail");

        }

        showToast("success", "Login Success", "Welcome back to Bloomify.");

        setTimeout(() => {

            window.location.href = "../index.html";

        }, 1500);

    });

}

/* ==========================================
   SIGN UP PAGE
========================================== */

if (signupForm) {

    const fullname = document.querySelector("#fullname");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const confirm = document.querySelector("#confirmPassword");
    const agree = document.querySelector("#agree");

    const togglePassword = document.querySelector("#togglePassword");
    const toggleConfirm = document.querySelector("#toggleConfirm");

    [togglePassword, toggleConfirm].forEach(button => {

        if (!button) return;

        button.addEventListener("click", () => {

            const input = button.previousElementSibling;

            const icon = button.querySelector("i");

            if (input.type === "password") {

                input.type = "text";

                icon.setAttribute("data-lucide", "eye-off");

            } else {

                input.type = "password";

                icon.setAttribute("data-lucide", "eye");

            }

            lucide.createIcons();

        });

    });

    signupForm.addEventListener("submit", (e) => {

        e.preventDefault();

        if (fullname.value.trim().length < 3) {

            showToast("error", "Full Name", "Please enter your full name.");

            return;

        }

        if (!validateEmail(email.value)) {

            showToast("error", "Email", "Please enter a valid email.");

            return;

        }

        if (password.value.length < 6) {

            showToast("error", "Password", "Password must contain at least 6 characters.");

            return;

        }

        if (password.value !== confirm.value) {

            showToast("error", "Password", "Passwords do not match.");

            return;

        }

        if (!agree.checked) {

            showToast("error", "Agreement", "Please accept Terms & Conditions.");

            return;

        }

        showToast("success", "Account Created", "Redirecting to Login...");

        setTimeout(() => {

            window.location.href = "login.html";

        }, 1800);

    });

}
