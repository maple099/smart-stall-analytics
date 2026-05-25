import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDTfcaUswWzij9Px0iCjGsU-VjCM2Xn9qo",
  authDomain: "smart-stall-analytics.firebaseapp.com",
  databaseURL: "https://smart-stall-analytics-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-stall-analytics",
  storageBucket: "smart-stall-analytics.firebasestorage.app",
  messagingSenderId: "1055023871621",
  appId: "1:1055023871621:web:26499c9c896298ba395bec"
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);