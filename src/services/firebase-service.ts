import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCPL8_qB98QkgoIDmB3ObWBQJjpmw4tJkk",
    authDomain: "expense-tracker-1aeb0.firebaseapp.com",
    projectId: "expense-tracker-1aeb0",
    storageBucket: "expense-tracker-1aeb0.appspot.com",
    messagingSenderId: "78780774992",
    appId: "1:78780774992:web:420b19c50adf41a7d4af55"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export function initializeNotification() {
    Notification.requestPermission()
        .then((permission: string) => {
            if (permission === "granted") {
                messaging.getToken()
                    .then((currentToken: string) => {
                        if (currentToken) {
                            console.log("TOKEN")
                            console.log(currentToken);
                        } else {
                            console.log('No Instance ID token available. Request permission to generate one.');

                        }
                    })
                    .catch((err) => {
                        console.log('An error occurred while retrieving token. ', err);
                    });
            }
        })
}