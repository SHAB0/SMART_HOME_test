import firebase from "firebase/compat/app";
import "firebase/compat/database";

const config = {
  apiKey: "AIzaSyC7zK5gopY_bNGIFly94Fean7NkZgPXyL0",
  authDomain: "smarthome-bbcf4.firebaseapp.com",
  databaseURL: "https://smarthome-bbcf4-default-rtdb.firebaseio.com",
  projectId: "smarthome-bbcf4"
};
function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
}

initFirebase();

export { firebase };
