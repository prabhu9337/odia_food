import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB9Jk9bHsEgl6GfKUvvW9-2yJ2le-OOdf8",
  authDomain: "odia-food.firebaseapp.com",
  databaseURL: "https://odia-food-default-rtdb.firebaseio.com",
  projectId: "odia-food",
  storageBucket: "odia-food.appspot.com",
  messagingSenderId: "78122379038",
  appId: "1:78122379038:web:2ad718c31f09ce73844b0f",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
