const publicApiKey = "xDPpWs7_uAJ30fRuNhlf5tTxpTj8HZMdyYx-7VMJzWk";

const firebaseConfig = {
    messagingSenderId: "364415810958"
};

firebase.initializeApp(firebaseConfig);

let messaging = firebase.messaging();

function getToken() {
    messaging.getToken({ vapidKey: publicApiKey }).then((currentToken) => {
        if (currentToken) {
            console.log("token = " + currentToken);
            let tokenElement = document.getElementById("token");
            tokenElement.innerHTML = currentToken;
        } else {
            console.log('No registration token available. Request permission to generate one.');
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
    });
}

function requestPermission() {
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      getToken();
      return;
    }
    console.log('Unable to get permission to notify.');
  });
}

requestPermission();