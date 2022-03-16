import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIdB4Ko-hUk84UB2wjNxs5Du0ckDbLt_U",
    authDomain: "photo-tagging-app-2a5e1.firebaseapp.com",
    projectId: "photo-tagging-app-2a5e1",
    storageBucket: "photo-tagging-app-2a5e1.appspot.com",
    messagingSenderId: "1058335082105",
    appId: "1:1058335082105:web:d35e299de98bb2dba236a8",
    databaseURL: "https://photo-tagging-app-2a5e1-default-rtdb.europe-west1.firebasedatabase.app"
};

const app=initializeApp(firebaseConfig);

const database = getDatabase(app);
export default database;