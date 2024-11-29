/*firebase daniel start*/
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const publicApiKey = "xDPpWs7_uAJ30fRuNhlf5tTxpTj8HZMdyYx-7VMJzWk";

const firebaseConfig = {
    apiKey: "AIzaSyBPa1xmcpKA5gCaVSC0gelN9YPSRbpB7TY",
    authDomain: "test-pushes-744ea.firebaseapp.com",
    projectId: "test-pushes-744ea",
    storageBucket: "test-pushes-744ea.firebasestorage.app",
    messagingSenderId: "364415810958",
    appId: "1:364415810958:web:74a40da5bd83183d32b8df",
    measurementId: "G-ER37Y39E4E"
};

const fapp = initializeApp(firebaseConfig);
const messaging = getMessaging(fapp);

getToken(messaging, { vapidKey: publicApiKey })
    .then((currentToken) => {
        if (currentToken) {
            console.log("Firebase Token", currentToken);
            let tokenElement = document.getElementById("token");
            tokenElement.innerHTML = currentToken;
        } else {
            console.log(
                "No registration token available. Request permission to generate one."
            );
        }
    })
    .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
    });

onMessage(messaging, (payload) => {
    console.log("Message received. ", payload);
});


function requestPermission() {
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      return;
    }
    console.log('Unable to get permission to notify.');
  });
}

requestPermission();