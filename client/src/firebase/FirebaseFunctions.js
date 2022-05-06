// import fromcomp/app";
// import "comp/auth";
// import "comp/firestore";

import firebaseApp from "./Firebase";
import {
    getAuth,
    createUserWithEmailAndPassword,
    credential,
    EmailAuthProvider,
    reauthenticateWithCredential,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
    updatePassword,
    updateProfile,
} from "firebase/auth";

const auth = getAuth(firebaseApp);
const user = auth.currentUser;

/* 
  Will need to take in a user type (E.g. customer vs. restaurant owner)

  This will allow me to make an axios call to the backend to create either 
  a USER document or a RESTAURANT document using the unique id provided by 

  will grab that unique id from the user object.
*/
async function doCreateUserWithEmailAndPassword(email, password, displayName) {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    // await updateProfile(user, { displayName: displayName });
    console.log(user.user.uid);

    console.log("This function finished");
    // Axios call to a backend route
}

// CREATE SEPARATE FUNCTION TO UPDATE PROFILE, I KEEP RUNNING INTO NETWORK ERROR DOING IT CONSECUTIVELY WITH THE FN BEFORE THIS

async function doChangePassword(email, oldPassword, newPassword) {
    let credentials = EmailAuthProvider.credential(email, oldPassword);
    await reauthenticateWithCredential(user, credentials);
    await updatePassword(user, newPassword);
    await doSignOut();
}

async function doSignInWithEmailAndPassword(email, password) {
    await signInWithEmailAndPassword(auth, email, password);
}

/* 
  No social sign ins for now until I figure out how to handle 
  grabbing the user type along with the social sign in pop up
*/
// async function doSocialSignIn(provider) {
//     let socialProvider = null;
//     if (provider === "google") {
//         socialProvider = new authoogleAuthProvider();
//     } else if (provider === "facebook") {
//         socialProvider = new authacebookAuthProvider();
//     }
//     await signInWithPopup(socialProvider);
// }

async function doPasswordReset(email) {
    await sendPasswordResetEmail(email);
}

async function doPasswordUpdate(password) {
    await updatePassword(password);
}

async function doSignOut() {
    await signOut(auth);
}

export {
    doCreateUserWithEmailAndPassword,
    // doSocialSignIn,
    doSignInWithEmailAndPassword,
    doPasswordReset,
    doPasswordUpdate,
    doSignOut,
    doChangePassword,
};
