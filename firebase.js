<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>

<script>
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "rr-college-app.firebaseapp.com",
  projectId: "rr-college-app",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
</script>