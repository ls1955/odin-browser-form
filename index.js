const emailInput = document.querySelector('input[name="email"]');
const ZIPInput = document.querySelector('input[name="zip-code"]');
const passwordInput = document.querySelector('input[name="password"]');
const confirmPasswordInput = document.querySelector(
  'input[name="confirm-password"]'
);
const inputs = [emailInput, passwordInput, confirmPasswordInput];

const submitBtn = document.querySelector("button");

// Suppose the input is already invalid, it is probably not nice seeing
// the input staying red (when input become valid) until user move to next input.
inputs.forEach((input) =>
  input.addEventListener("input", () => input.setCustomValidity(""))
);

emailInput.addEventListener("change", () => validateEmail());
passwordInput.addEventListener("change", () => validatePassword());
confirmPasswordInput.addEventListener("change", () =>
  validateConfirmPassword()
);
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  validateEmail();
  validatePassword();
  validateConfirmPassword();

  for (const input of inputs) {
    if (!input.reportValidity()) return;
  }

  console.log("Successful submitted the form");
});

function validateEmail() {
  if (emailInput.value === "") {
    emailInput.setCustomValidity("Please include email. Ex: john@odin.com");
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailInput.value)) {
    emailInput.setCustomValidity("Incorrect email format. Ex: john@odin.com");
  } else {
    emailInput.setCustomValidity("");
  }
}

function validatePassword() {
  if (passwordInput.value === "") {
    passwordInput.setCustomValidity(
      "Please fill out the password (minimum length: 4)"
    );
  } else {
    passwordInput.setCustomValidity("");
  }
}

function validateConfirmPassword() {
  if (confirmPasswordInput.value === "") {
    confirmPasswordInput.setCustomValidity("Please repeat the above password.");
  } else if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordInput.setCustomValidity(
      "Please ensure both password are identical"
    );
  } else {
    confirmPasswordInput.setCustomValidity("");
  }
}

// DIRECTIONS:
// * Include some style
// * When the form is successfully submit, do something with the page
