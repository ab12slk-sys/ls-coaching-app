import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js';
import { 
    getFirestore, 
    doc, 
    setDoc, 
    getDoc, 
    collection, 
    addDoc, 
    onSnapshot 
} from 'https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js';
import { 
    getAuth, 
    signInAnonymously, 
    onAuthStateChanged 
} from 'https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js';

/**
 * LS Coaching - Database Service (v1.0)
 * Gestionează salvarea și preluarea datelor din Firebase Firestore.
 */

// Configurația Firebase (va fi populată automat în mediul de execuție)
const firebaseConfig = JSON.parse(__firebase_config);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const appId = typeof __app_id !== 'undefined' ? __app_id : 'ls-coaching-default';

/**
 * Inițializează autentificarea și returnează utilizatorul
 */
export const initAppAuth = async () => {
    return new Promise((resolve) => {
        signInAnonymously(auth).then(() => {
            onAuthStateChanged(auth, (user) => {
                if (user) resolve(user);
            });
        });
    });
};

/**
 * Salvează sau actualizează profilul utilizatorului (Faza 1)
 */
export const saveUserProfile = async (userId, profileData) => {
    if (!userId) return;
    try {
        const userRef = doc(db, 'artifacts', appId, 'users', userId, 'profile', 'main');
        await setDoc(userRef, {
            ...profileData,
            lastUpdated: new Date().toISOString()
        }, { merge: true });
        console.log("Profil salvat cu succes.");
    } catch (error) {
        console.error("Eroare la salvarea profilului:", error);
    }
};

/**
 * Salvează un antrenament nou (Faza 4 - Integrare Dispozitive)
 */
export const saveWorkout = async (userId, workoutData) => {
    if (!userId) return;
    try {
        const workoutsRef = collection(db, 'artifacts', appId, 'users', userId, 'workouts');
        const docRef = await addDoc(workoutsRef, {
            ...workoutData,
            createdAt: new Date().toISOString()
        });
        return docRef.id;
    } catch (error) {
        console.error("Eroare la salvarea antrenamentului:", error);
    }
};

/**
 * Ascultă în timp real pentru evenimentele comunității (Sebeșul Aleargă)
 */
export const subscribeToCommunityEvents = (callback) => {
    const eventsRef = collection(db, 'artifacts', appId, 'public', 'data', 'events');
    return onSnapshot(eventsRef, (snapshot) => {
        const events = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        callback(events);
    }, (error) => {
        console.error("Eroare la ascultarea evenimentelor:", error);
    });
};

// Exemplu de logică pentru integrare
const runStorageExample = async () => {
    const user = await initAppAuth();
    
    // Exemplu: Salvare profil bazat pe schema JSON creată anterior
    await saveUserProfile(user.uid, {
        name: "Lică Sinc",
        experience: "Advanced",
        target: "Maraton Zlatna"
    });
};
