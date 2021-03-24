importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyCPL8_qB98QkgoIDmB3ObWBQJjpmw4tJkk",
    authDomain: "expense-tracker-1aeb0.firebaseapp.com",
    projectId: "expense-tracker-1aeb0",
    storageBucket: "expense-tracker-1aeb0.appspot.com",
    messagingSenderId: "78780774992",
    appId: "1:78780774992:web:420b19c50adf41a7d4af55"
};

firebase.initializeApp(firebaseConfig);
firebase.messaging();