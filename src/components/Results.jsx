import React from 'react';

function Results({ data, onBack }) {
  const {
    gender,
    age,
    sleep,
    pressure,
    satisfaction,
    coping,
    campusSupport,
    talkToCounselor,
    feelsLonely,
    GPA,
    mentalHealthAffectsGPA,
  } = data;

  return (
    <div className="results">
      <h2>Personal Insights 💡</h2>
      <p><strong>Gender:</strong> {gender}, Age: {age}</p>
      <p><strong>Sleep:</strong> {sleep} hrs — {sleep < 6 ? '⚠️ Try sleeping more for better recovery.' : '✅ Good sleep hygiene!'}</p>
      <p><strong>Academic Pressure:</strong> {pressure} / 5</p>
      <p><strong>Study Satisfaction:</strong> {satisfaction} / 5</p>
      <p><strong>GPA:</strong> {GPA}</p>
      <p><strong>Coping Methods:</strong> {coping.join(', ')}</p>
      <p><strong>Mental Health Affects GPA:</strong> {mentalHealthAffectsGPA}</p>
      <p><strong>Access to Campus Support:</strong> {campusSupport}</p>
      <p><strong>Talked to Counselor:</strong> {talkToCounselor}</p>
      <p><strong>Feels Lonely:</strong> {feelsLonely}</p>

      <h3>🎓 Recommendations to University</h3>
      <ul>
        {campusSupport === 'No' && <li>Establish dedicated mental health centers or helplines on campus.</li>}
        {talkToCounselor === 'No' && <li>Offer free or subsidized counseling sessions regularly.</li>}
        {feelsLonely === 'Yes' && <li>Introduce peer support or buddy programs.</li>}
        {pressure >= 4 && <li>Allow flexible deadlines and conduct stress management workshops.</li>}
        {satisfaction <= 2 && <li>Collect anonymous academic feedback for improvements.</li>}
        {sleep < 6 && <li>Conduct awareness campaigns on importance of sleep and health.</li>}
        {mentalHealthAffectsGPA === 'Yes' && <li>Provide targeted academic support for students under mental stress.</li>}
      </ul>

      <button onClick={onBack}>← Back to Survey</button>
    </div>
  );
}

export default Results;
