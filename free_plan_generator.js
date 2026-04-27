/**
 * LS Coaching - Generator Plan Gratuit "Încearcă-mă" (4 Săptămâni)
 * Bazat pe metodologia UESCA și adaptat pentru începători/sănătate.
 */

const workoutTypes = {
    RECOVERY: "Alergare de recuperare ușoară (Zone 1). Accent pe respirație și relaxare.",
    AEROBIC_BASE: "Alergare de bază (Zone 2). Ritmul în care poți purta o conversație.",
    WALK_RUN: "Alternare: 2 min alergare ușoară / 1 min mers.",
    REST: "Odihnă totală. Corpul se reface și devine mai puternic.",
    STRETCHING: "Sesiune de stretching activ și mobilitate (15-20 min)."
};

function generateFourWeekFreePlan(userZones) {
    const zones = userZones.zones;
    const z1 = `${zones[0].minHR}-${zones[0].maxHR}`;
    const z2 = `${zones[1].minHR}-${zones[1].maxHR}`;

    const plan = [
        // SĂPTĂMÂNA 1: Adaptare Anatomică
        {
            week: 1,
            focus: "Adaptare și Consistență",
            days: [
                { day: "Luni", type: workoutTypes.REST },
                { day: "Marți", type: workoutTypes.WALK_RUN, duration: "20 min", intensity: z1 },
                { day: "Miercuri", type: workoutTypes.STRETCHING },
                { day: "Joi", type: workoutTypes.WALK_RUN, duration: "20 min", intensity: z1 },
                { day: "Vineri", type: workoutTypes.REST },
                { day: "Sâmbătă", type: workoutTypes.AEROBIC_BASE, duration: "15 min", intensity: z2 },
                { day: "Duminică", type: "Plimbare activă în natură (30 min)" }
            ]
        },
        // SĂPTĂMÂNA 2: Construirea Bazei
        {
            week: 2,
            focus: "Creșterea Volumului",
            days: [
                { day: "Luni", type: workoutTypes.REST },
                { day: "Marți", type: workoutTypes.WALK_RUN, duration: "25 min", intensity: z1 },
                { day: "Miercuri", type: workoutTypes.STRETCHING },
                { day: "Joi", type: workoutTypes.AEROBIC_BASE, duration: "20 min", intensity: z2 },
                { day: "Vineri", type: workoutTypes.REST },
                { day: "Sâmbătă", type: workoutTypes.AEROBIC_BASE, duration: "25 min", intensity: z2 },
                { day: "Duminică", type: "Plimbare activă (40 min)" }
            ]
        },
        // SĂPTĂMÂNA 3: Încărcare (Peak Trial)
        {
            week: 3,
            focus: "Consolidare",
            days: [
                { day: "Luni", type: workoutTypes.REST },
                { day: "Marți", type: workoutTypes.AEROBIC_BASE, duration: "25 min", intensity: z2 },
                { day: "Miercuri", type: workoutTypes.STRETCHING },
                { day: "Joi", type: workoutTypes.AEROBIC_BASE, duration: "30 min", intensity: z2 },
                { day: "Vineri", type: workoutTypes.REST },
                { day: "Sâmbătă", type: "Alergare continuă (Zone 2)", duration: "35 min", intensity: z2 },
                { day: "Duminică", type: workoutTypes.STRETCHING }
            ]
        },
        // SĂPTĂMÂNA 4: Descărcare și Evaluare (Deload)
        {
            week: 4,
            focus: "Recuperare și Testare",
            days: [
                { day: "Luni", type: workoutTypes.REST },
                { day: "Marți", type: workoutTypes.RECOVERY, duration: "20 min", intensity: z1 },
                { day: "Miercuri", type: workoutTypes.STRETCHING },
                { day: "Joi", type: workoutTypes.RECOVERY, duration: "15 min", intensity: z1 },
                { day: "Vineri", type: workoutTypes.REST },
                { day: "Sâmbătă", type: "TEST: 20 min alergare continuă confortabilă", intensity: z2 },
                { day: "Duminică", type: "Felicitări! Ești gata pentru Programul Premium." }
            ]
        }
    ];

    return {
        coach: "Lică Sinc",
        certification: "UESCA Certified (Target 2027)",
        planName: "LS Coaching - First Steps",
        data: plan
    };
}

// Exemplu de generare pentru profilul tău:
// (Presupunând că avem deja obiectul 'myZones' din hr_calculator.js)
// const finalPlan = generateFourWeekFreePlan(myZones);
// console.log(JSON.stringify(finalPlan, null, 2));
