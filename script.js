import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAQPFncN_Xqy_BsbAtjlqFe-C2xHMcPFDE",
  authDomain: "ahad-e-ride-86602.firebaseapp.com",
  projectId: "ahad-e-ride-86602",
  storageBucket: "ahad-e-ride-86602.firebasestorage.app",
  messagingSenderId: "393011050170",
  appId: "1:393011050170:web:a7e05f971173020d59f483",
  measurementId: "G-FBYWN7H1GS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
  size: "normal"
});

window.recaptchaVerifier.render();

window.login = async function () {
  const mobile = document.getElementById("mobile").value;

  if (mobile.length !== 10) {
    alert("Enter valid 10 digit mobile number");
    return;
  }

  try {
    const confirmationResult = await signInWithPhoneNumber(
      auth,
      "+91" + mobile,
      window.recaptchaVerifier
    );

    window.confirmationResult = confirmationResult;
    alert("OTP Sent Successfully");
  } catch (error) {
    alert(error.message);
  }
};
window.verifyOTP = async function () {
  const otp = document.getElementById("otp").value;

  if (!otp) {
    alert("Please enter OTP");
    return;
  }

  try {
    await window.confirmationResult.confirm(otp);
    alert("Login Successful");
  } catch (error) {
    alert("Invalid OTP");
  }
};

window.startRide = function () {
  const pickup = document.getElementById("pickup").value;
  const drop = document.getElementById("drop").value;
  const vehicle = document.getElementById("vehicle").value;

  if (pickup === "" || drop === "") {
    alert("Please enter Pickup and Drop Location");
    return;
  }

  if (vehicle === "Select Vehicle") {
    alert("Please select a vehicle");
    return;
  }

  alert(
    "Ride Booked!\n\n" +
    "Pickup: " + pickup +
    "\nDrop: " + drop +
    "\nVehicle: " + vehicle
  );
};
