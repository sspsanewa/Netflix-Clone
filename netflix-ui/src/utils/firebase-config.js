import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
	apiKey: 'AIzaSyAaCxNKh_wcYRRIcvOn7JB1jHNvl7RCHnM',
	authDomain: 'react-netflix-clone-170ec.firebaseapp.com',
	projectId: 'react-netflix-clone-170ec',
	storageBucket: 'react-netflix-clone-170ec.appspot.com',
	messagingSenderId: '1010448023994',
	appId: '1:1010448023994:web:f3ee4fa409e4d0e0099d83',
	measurementId: 'G-QDM3W4HZ0X',
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth =getAuth(app);