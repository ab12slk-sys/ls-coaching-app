/**
 * LS Coaching - Motorul de calcul al zonelor de puls (Metoda Karvonen)
 * Acest script calculeaza zonele de antrenament conform metodologiei UESCA.
 */

function calculateKarvonenZones(userProfile) {
    const { resting_heart_rate, max_heart_rate } = userProfile.physiology;
    const hr_rest = resting_heart_rate;
    const hr_max = max_heart_rate.value;
    
    // Pulsul de Rezerva (Heart Rate Reserve)
    const hrr = hr_max - hr_rest;

    /**
     * Definirea pragurilor de intensitate (%) conform standardelor de anduranta
     * Zone 1: Recupere / Incalzire (50-60% HRR)
     * Zone 2: Baza Aeroba (60-70% HRR) - "The Engine Room"
     * Zone 3: Tempo / Aerobic moderat (70-80% HRR)
     * Zone 4: Prag Lactat / Hard (80-90% HRR)
     * Zone 5: Anaerobic / Max (90-100% HRR)
     */
    const zoneThresholds = [
        { zone: 1, min: 0.50, max: 0.60, description: "Recuperare activa si incalzire" },
        { zone: 2, min: 0.60, max: 0.70, description: "Baza aeroba - Ardere grasimi" },
        { zone: 3, min: 0.70, max: 0.80, description: "Capacitate aeroba si tempo" },
        { zone: 4, min: 0.80, max: 0.90, description: "Prag lactat - Crestere viteza" },
        { zone: 5, min: 0.90, max: 1.00, description: "Efort maximal - Sprint/Intervale scurte" }
    ];

    const calculatedZones = zoneThresholds.map(threshold => {
        return {
            zone: threshold.zone,
            minHR: Math.round((hrr * threshold.min) + hr_rest),
            maxHR: Math.round((hrr * threshold.max) + hr_rest),
            description: threshold.description
        };
    });

    return {
        userId: userProfile.full_name,
        timestamp: new Date().toISOString(),
        heartRateReserve: hrr,
        zones: calculatedZones
    };
}

// Exemplu de utilizare cu datele tale (date de test):
const myProfile = {
    full_name: "Lica Sinc",
    physiology: {
        resting_heart_rate: 50, // Presupunem un puls de repaus de sportiv
        max_heart_rate: { value: 185 }
    }
};

const myZones = calculateKarvonenZones(myProfile);

console.log("=== LS COACHING - ZONELE TALE DE ANTRENAMENT ===");
myZones.zones.forEach(z => {
    console.log(`Zona ${z.zone}: ${z.minHR} - ${z.maxHR} BPM (${z.description})`);
});
