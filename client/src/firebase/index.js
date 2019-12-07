import firebase from 'firebase/app';
import 'firebase/storage';
const dotenv = require('dotenv');
dotenv.config();


// Initialize Firebase
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.apiKey,
	authDomain: 'image-uploader-9ee98.firebaseapp.com',
	databaseURL: 'https://image-uploader-9ee98.firebaseio.com',
	projectId: 'image-uploader-9ee98',
	storageBucket: 'image-uploader-9ee98.appspot.com',
	messagingSenderId: '260110689022',
	appId: '1:260110689022:web:3ebdee2a64cc4b38fcbbaf',
	measurementId: 'G-0GJT13RV94'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
