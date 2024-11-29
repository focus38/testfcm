importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyBPa1xmcpKA5gCaVSC0gelN9YPSRbpB7TY",
    authDomain: "test-pushes-744ea.firebaseapp.com",
    projectId: "test-pushes-744ea",
    storageBucket: "test-pushes-744ea.firebasestorage.app",
    messagingSenderId: "364415810958",
    appId: "1:364415810958:web:74a40da5bd83183d32b8df",
    measurementId: "G-ER37Y39E4E"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

//messaging.onMessage((payload) => {
//    console.log('Message received. ', payload);
//    let messageElement = document.getElementById("message");
//    let content = messageElement.innerHTML;
//    if (content !== "") {
//        content += "<br";
//    }
//    content += "<div>"+payload+"</div>";
//    messageElement.innerHTML = content;
//});

messaging.onBackgroundMessage((payload) => {
    console.log(
        '[firebase-messaging-sw.js] Received background message ',
        payload
    );
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});