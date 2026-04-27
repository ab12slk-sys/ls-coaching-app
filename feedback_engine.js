/**
 * LS Coaching - Feedback Engine (v1.0)
 * Acest modul generează mesaje personalizate de la "LS Coach"
 * bazate pe performanța reală versus planificarea UESCA.
 */

const feedbackRules = {
  PERFECT_MATCH: [
    "Execuție impecabilă! Ai rămas în zona de puls stabilită. Corpul tău se adaptează exact cum am prevăzut.",
    "Excelent! Consistența este cheia succesului. Continuă tot așa!",
    "Bravo! Ai demonstrat disciplină astăzi. Recuperarea va fi mult mai eficientă."
  ],
  TOO_INTENSE: [
    "Atenție: Ai depășit zona de puls țintă. Pentru beneficii aerobe maxime, încearcă să reduci ritmul data viitoare.",
    "Ai forțat puțin cam tare astăzi. Nu uita că baza se construiește cu răbdare, nu cu viteză excesivă.",
    "Pulsul a fost peste limitele Zonei 2. Mâine pune accent pe hidratare și odihnă suplimentară."
  ],
  UNDER_INTENSE: [
    "Efortul de astăzi a fost sub zona țintă. E în regulă pentru recuperare, dar data viitoare încearcă să menții ritmul constant.",
    "O sesiune foarte ușoară. Dacă te simți bine, data viitoare putem crește ușor durata."
  ]
};

function generateAIFeedback(workoutData, targetZone) {
  const avgHR = workoutData.averageHeartRate;
  const minTarget = targetZone.minHR;
  const maxTarget = targetZone.maxHR;

  let category = "";

  if (avgHR >= minTarget && avgHR <= maxTarget) {
    category = "PERFECT_MATCH";
  } else if (avgHR > maxTarget) {
    category = "TOO_INTENSE";
  } else {
    category = "UNDER_INTENSE";
  }

  const messages = feedbackRules[category];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  return {
    coachName: "LS Coach",
    message: randomMessage,
    status: category,
    timestamp: new Date().toISOString()
  };
}

// Exemplu de testare pentru un antrenament în Sebeș (Parcul Arini)
const sampleWorkout = {
  averageHeartRate: 152, // Puls mediu realizat
  duration: 30
};

const sampleTarget = {
  minHR: 131,
  maxHR: 144
};

const feedback = generateAIFeedback(sampleWorkout, sampleTarget);
console.log(`[${feedback.coachName}]: ${feedback.message}`);
