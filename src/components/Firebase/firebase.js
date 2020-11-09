import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCWP5hX4dpsAlAuySznPMlB0n-QipwAdtE",
    authDomain: "fir-24fc5.firebaseapp.com",
    databaseURL: "https://fir-24fc5.firebaseio.com",
    projectId: "fir-24fc5",
    storageBucket: "fir-24fc5.appspot.com",
    messagingSenderId: "1052147295863",
    appId: "1:1052147295863:web:1e8d72644936db6fdf8872",
    measurementId: "G-KKYPZ9J13S"
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.googleProvider = new app.auth.GoogleAuthProvider();
        this.facebookProvider = new app.auth.FacebookAuthProvider();
        this.db = app.firestore();
    }
    doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

    doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);
    doSignInWithFacebook = () => this.auth.signInWithPopup(this.facebookProvider);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);



}

export default Firebase;