import React, { useState } from 'react';

function SurveyForm({ onSubmit }) {
  const [form, setForm] = useState({
    gender: '',
    age: '',
    sleep: 6,
    pressure: 3,
    satisfaction: 3,
    coping: [],
    campusSupport: '',
    talkToCounselor: '',
    feelsLonely: '',
    GPA: '',
    mentalHealthAffectsGPA: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setForm({
        ...form,
        coping: checked
          ? [...form.coping, value]
          : form.coping.filter((item) => item !== value),
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="survey-form" onSubmit={handleSubmit}>
      <h2>Student Mental Health Survey</h2>

      <label>Gender:</label>
      <select name="gender" value={form.gender} onChange={handleChange} required>
        <option value="">Select</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <label>Age:</label>
      <input type="number" name="age" value={form.age} onChange={handleChange} required />

      <label>Hours of Sleep:</label>
      <input type="number" name="sleep" value={form.sleep} min="3" max="12" onChange={handleChange} />

      <label>Academic Pressure (1–5):</label>
      <input type="range" name="pressure" min="1" max="5" value={form.pressure} onChange={handleChange} />

      <label>Study Satisfaction (1–5):</label>
      <input type="range" name="satisfaction" min="1" max="5" value={form.satisfaction} onChange={handleChange} />

      <label>Do you have access to mental health support on campus?</label>
      <div>
        <label><input type="radio" name="campusSupport" value="Yes" onChange={handleChange} /> Yes</label>
        <label><input type="radio" name="campusSupport" value="No" onChange={handleChange} /> No</label>
      </div>

      <label>Have you talked to a counselor in the past 6 months?</label>
      <div>
        <label><input type="radio" name="talkToCounselor" value="Yes" onChange={handleChange} /> Yes</label>
        <label><input type="radio" name="talkToCounselor" value="No" onChange={handleChange} /> No</label>
      </div>

      <label>Do you feel lonely often?</label>
      <div>
        <label><input type="radio" name="feelsLonely" value="Yes" onChange={handleChange} /> Yes</label>
        <label><input type="radio" name="feelsLonely" value="No" onChange={handleChange} /> No</label>
      </div>

      <label>Your GPA:</label>
      <input type="number" name="GPA" value={form.GPA} step="0.01" min="0" max="10" onChange={handleChange} />

      <label>Does your mental health affect your academic performance?</label>
      <select name="mentalHealthAffectsGPA" value={form.mentalHealthAffectsGPA} onChange={handleChange}>
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
        <option value="Maybe">Maybe</option>
      </select>

      <label>Main Coping Strategies (Select all that apply):</label>
      <div>
        {['Meditation', 'Exercise', 'Talking to Friends', 'Religious Activities', 'Music', 'Gaming', 'Journaling', 'Therapy'].map((option) => (
          <label key={option}>
            <input
              type="checkbox"
              name="coping"
              value={option}
              checked={form.coping.includes(option)}
              onChange={handleChange}
            />{' '}
            {option}
          </label>
        ))}
      </div>

      <button type="submit">Get Insights</button>
    </form>
  );
}

export default SurveyForm;