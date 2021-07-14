import firebase from "firebase/app";
import "firebase/firebase-database";

const oDB = firebase
    .initializeApp({
        databaseURL: "https://pwa-vue-first-default-rtdb.firebaseio.com/",
    })
    .database();

export const oTodosinDB = oDB.ref("todos");
