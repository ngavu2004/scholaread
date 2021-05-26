import { reactive, readonly } from "vue";
import firebase from "firebase";
import { db } from "./firebaseDb";
const state = reactive({
    user: {}
})

const addUser = function (user) {
    db.collection("user")
        .doc(user.uid)
        .get()
        .then((docSnapshot) => {
            if (!docSnapshot.exists) {
                db.collection("user")
                    .doc(user.uid)
                    .set({
                        email: user.email,
                        userName: user.displayName,
                        profileImage: user.photoURL,
                    })
                    .then(() => {
                        console.log("Document successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });
            } else {
                console.log("User existed");
            }
        });
}

const checkSigninState = function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log(user);
            console.log(user.isAnonymous);
            console.log("User logged in");
        } else {
            console.log("User is not logging in");
        }
    });
}

const signOut = function () {
    firebase
        .auth()
        .signOut()
        .then(() => {
            console.log("Signed out successfully");
            this.loginState = false;
        })
        .catch((error) => {
            console.log(error);
        });
}

const signIn = function (social) {
    let provider = null;
      if (social == "facebook") {
        provider = new firebase.auth.FacebookAuthProvider();
      } else {
        provider = new firebase.auth.GoogleAuthProvider();
      }
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          let token = result.credential.accessToken;
          let user = result.user;
          let isNewUser = result.user.isAnonymous;
          console.log("Token: ", token); // Token
          console.log("Is this new user ?", isNewUser);
          console.log("User ID: ", user.uid); // User that was authenticated
          this.createDocument(user);
          this.loginState = true;
          this.$router.push("Personal");
        })
        .catch((err) => {
          console.log(err); // This will give you all the information needed to further debug any errors
        });
}
export default {
    state: readonly(state),
    checkSigninState,
    addUser,
    signOut,
    signIn
}