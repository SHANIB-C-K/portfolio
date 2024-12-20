function Home() {
  document.getElementById("Home").classList.add("active");
  document.getElementById("About").classList.remove("active");
  document.getElementById("Services").classList.remove("active");
  document.getElementById("Contact").classList.remove("active");
}

function About() {
  document.getElementById("About").classList.add("active");
  document.getElementById("Home").classList.remove("active");
  document.getElementById("Services").classList.remove("active");
  document.getElementById("Contact").classList.remove("active");
}

function Services() {
  document.getElementById("Services").classList.add("active");
  document.getElementById("Home").classList.remove("active");
  document.getElementById("About").classList.remove("active");
  document.getElementById("Services").classList.remove("active");
  document.getElementById("Contact").classList.remove("active");
}

function Contact() {
  document.getElementById("Contact").classList.add("active");
  document.getElementById("Home").classList.remove("active");
  document.getElementById("About").classList.remove("active");
  document.getElementById("Services").classList.remove("active");
  document.getElementById("Contact").classList.remove("active");
}


const form = document.querySelector("form");
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Full Name: ${fullname.value}<br> Email: ${email.value}<br> Phone: ${phone.value}<br> Message: ${mess.value}`;

  Email.send({
    SecureToken: "290f22e8-5d90-450e-a68c-44185c9e8177",
    To: "shanibckcontact@gmail.com",
    From: "shanibckcontact@gmail.com",
    Subject: subject.value,
    Body: bodyMessage,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  });
}

function checkInputs() {
  const items = document.querySelectorAll(".item");
  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (items[1].value != "") {
      checkEmail();
    }

    items[1].addEventListener("keyup", () => {
      checkEmail();
    });

    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

function checkEmail() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  const errorTextEmail = document.querySelector(".error-txt.email");
  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value != "") {
      errorTextEmail.innerText = "Enter a valid email address";
    } else {
      errorTextEmail.innerText = "Email address can't be blank";
    }
  }
  else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
  if (!fullname.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !mess.classList.contains("error")) {
    sendEmail();

    form.reset();
    return false;
  }
});

// age calculator like current age in time
// Age Calculator with Decimal Points
const calculateAge = () => {
  const currentTime = new Date().getTime();
  const birthTime = new Date('2004-10-11').getTime();
  const ageValue = (currentTime - birthTime) / (1000 * 60 * 60 * 24 * 365.25);
  // set all seconds are display in age
  return ageValue.toFixed(12);
};

// Update age display
const updateAgeDisplay = () => {
  const ageElement = document.getElementById('age');
  if (ageElement) {
    ageElement.textContent = calculateAge();
  }
};

// Initial update and set interval
document.addEventListener('DOMContentLoaded', () => {
  // Initial update
  updateAgeDisplay();

  // Update every second
  setInterval(updateAgeDisplay, 1000);

  // Add animation class
  const ageContainer = document.querySelector('.age-container');
  if (ageContainer) {
    ageContainer.classList.add('animate-age');
  }
});