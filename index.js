const emailInput = document.querySelector('input[name="email"]');
const countryInput = document.querySelector('select[name="country"]');
const zipCodeInput = document.querySelector('input[name="zip-code"]');
const passwordInput = document.querySelector('input[name="password"]');
const confirmPasswordInput = document.querySelector(
  'input[name="confirm-password"]'
);
const inputs = [emailInput, zipCodeInput, passwordInput, confirmPasswordInput];

const submitBtn = document.querySelector("button");

// Suppose the input is already invalid, it is probably not nice seeing
// the input staying red (when input become valid) until user move to next input.
inputs.forEach((input) =>
  input.addEventListener("input", () => input.setCustomValidity(""))
);

emailInput.addEventListener("change", () => validateEmail());
zipCodeInput.addEventListener("change", () => validateZipCode());
passwordInput.addEventListener("change", () => validatePassword());
confirmPasswordInput.addEventListener("change", () =>
  validateConfirmPassword()
);
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  validateEmail();
  validateZipCode();
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

const zipCodeRegexps = {
  us: /^\d{5}$|^\d{5}-\d{4}$/,
  jp: /^\d{3}-?\d{4}$/,
  my: /^\d{5}$/,
  uk: /^[A-Z]{1,2}[0-9R][0-9A-Z]?●[0-9][ABD-HJLNP-UW-Z]{2}$/,
};

const zipCodeErrMsgs = {
  us: "Invalid US zipcode. Ex: 01234 / 01234-5678",
  jp: "Invalid Japan zipcode. Ex: 123-4567 / 1234567",
  my: "Invalid Malaysia zipcode. Ex: 81000",
  uk: "Seems like United Kingdom zipcode is invalid. I have no idea how should it looks like either.",
};

function validateZipCode() {
  if (!zipCodeRegexps[countryInput.value].test(zipCodeInput.value)) {
    zipCodeInput.setCustomValidity(zipCodeErrMsgs[countryInput.value]);
  } else {
    zipCodeInput.setCustomValidity("");
  }
}

function validatePassword() {
  if (passwordInput.value.length < 4) {
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
