/**
 * LS Coaching - Faza 4: Device Integration Engine (v1.0)
 * Acest modul gestionează conexiunile cu Garmin, Coros, Strava și Apple Health.
 */

const DEVICE_CONFIG = {
    GARMIN: {
        name: "Garmin Connect",
        api_endpoint: "https://api.garmin.com/training-api/v1/",
        scopes: ["activity", "heart_rate", "training_plans"]
    },
    COROS: {
        name: "Coros API",
        api_endpoint: "https://api.coros.com/v1/",
        scopes: ["workout_data", "physiological_metrics"]
    },
    STRAVA: {
        name: "Strava",
        api_endpoint: "https://www.strava.com/api/v3/",
        scopes: ["activity:read_all", "profile:read_all"]
    },
    APPLE_HEALTH: {
        name: "Apple HealthKit",
        platform: "iOS",
        metrics: ["HKQuantityTypeIdentifierHeartRate", "HKQuantityTypeIdentifierDistanceWalkingRunning"]
    }
};

/**
 * Simulează procesul de autentificare OAuth2 pentru un dispozitiv
 */
async function connectDevice(deviceKey) {
    const device = DEVICE_CONFIG[deviceKey];
    if (!device) throw new Error("Dispozitiv nesuportat.");

    console.log(`Inițiere conexiune cu ${device.name}...`);
    
    // În realitate, aici se deschide o fereastră de log-in a producătorului
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                status: "CONNECTED",
                deviceId: `LS-${deviceKey}-${Math.random().toString(36).substr(2, 9)}`,
                lastSync: new Date().toISOString(),
                accessToken: "SECURE_TOKEN_STUB"
            });
        }, 1500);
    });
}

/**
 * Funcție pentru preluarea datelor de antrenament
 */
async function fetchLatestWorkout(deviceKey, token) {
    console.log(`Sincronizare date din ${deviceKey}...`);
    
    // Mock data care simulează ce am primi de la Garmin/Coros
    return {
        timestamp: new Date().toISOString(),
        distance_km: 5.42,
        duration_sec: 1860, // 31 min
        avg_hr: 138,
        max_hr: 155,
        location: "Sebeș, Parcul Arini",
        cadence_avg: 172
    };
}

/**
 * Verifică dacă datele primite respectă Planul LS Coaching (Zona 2)
 */
function validateWorkoutAgainstPlan(workout, targetZone) {
    const isSuccess = workout.avg_hr <= targetZone.maxHR;
    return {
        isValid: isSuccess,
        feedback: isSuccess ? "Perfect! Ai rămas în zona aerobă." : "Ai depășit pulsul țintă. Redu ritmul data viitoare."
    };
}

// Exemplu de utilizare a motorului de integrare
(async () => {
    try {
        const connection = await connectDevice("COROS");
        console.log("Status Conexiune:", connection.status);
        
        const workout = await fetchLatestWorkout("COROS", connection.accessToken);
        console.log(`Activitate detectată: ${workout.distance_km}km la ${workout.avg_hr} BPM.`);
    } catch (error) {
        console.error("Eroare integrare:", error.message);
    }
})();
