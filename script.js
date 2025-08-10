/* MindMetrics - client-only SPA
   - GSAP for subtle animations
   - Chart.js for radar visualization
   - Meaningful option labels map to values 1..5
*/

const questions = [
  {
    key: "academicPressure",
    title: "How often do you feel stressed because of studies?",
    subtitle: "Pick the option that best fits your experience.",
    options: [
      {v:1, emoji:"🌿", title:"Totally Chill", desc:"I feel completely at ease with my studies"},
      {v:2, emoji:"🙂", title:"Mostly Relaxed", desc:"I rarely feel stressed about academics"},
      {v:3, emoji:"😐", title:"Balanced", desc:"I manage stress but it’s part of my routine"},
      {v:4, emoji:"😰", title:"Overwhelmed Often", desc:"I often feel overwhelmed by my workload"},
      {v:5, emoji:"💥", title:"Constantly Stressed", desc:"My studies constantly keep me on edge"}
    ]
  },
  {
    key: "studySatisfaction",
    title: "How happy are you with your learning experience?",
    subtitle: "How engaged and motivated do you feel?",
    options: [
      {v:1, emoji:"😞", title:"Extremely Disengaged", desc:"I’m disconnected and unhappy"},
      {v:2, emoji:"😕", title:"Often Unsatisfied", desc:"I’m dissatisfied most of the time"},
      {v:3, emoji:"😐", title:"Neutral", desc:"It’s okay — could be better"},
      {v:4, emoji:"🙂", title:"Generally Satisfied", desc:"I’m motivated and learning"},
      {v:5, emoji:"🌟", title:"Love It", desc:"I love my learning experience every day"}
    ]
  },
  {
    key: "sleepQuality",
    title: "How would you rate your sleep quality?",
    subtitle: "Rest matters — choose what matches you.",
    options: [
      {v:1, emoji:"🌙", title:"Barely Sleeping", desc:"I feel tired throughout the day"},
      {v:2, emoji:"😴", title:"Often Poor", desc:"I frequently have bad sleep"},
      {v:3, emoji:"🛌", title:"Average", desc:"My sleep is okay most days"},
      {v:4, emoji:"🌅", title:"Good", desc:"I usually feel rested"},
      {v:5, emoji:"✨", title:"Refreshed", desc:"I sleep deeply and wake refreshed"}
    ]
  },
  {
    key: "supportSystem",
    title: "Do you have people to talk to when you feel low?",
    subtitle: "Emotional support availability.",
    options: [
      {v:1, emoji:"🫥", title:"No One", desc:"I have no one to talk to"},
      {v:2, emoji:"🙁", title:"Very Limited", desc:"Support is minimal"},
      {v:3, emoji:"🤝", title:"Sometimes Supported", desc:"I sometimes get the support I need"},
      {v:4, emoji:"💬", title:"Strong Circle", desc:"I have reliable friends/family"},
      {v:5, emoji:"🌈", title:"Always Supported", desc:"I’m surrounded by supportive people"}
    ]
  },
  {
    key: "campusEnvironment",
    title: "How supportive is your university environment?",
    subtitle: "Policies, staff, and peer culture.",
    options: [
      {v:1, emoji:"🚫", title:"Completely Unsupportive", desc:"I feel the campus ignores students' wellbeing"},
      {v:2, emoji:"⚠️", title:"Slightly Supportive", desc:"Some support exists but it’s limited"},
      {v:3, emoji:"🔄", title:"Neutral", desc:"It’s functional but not caring"},
      {v:4, emoji:"👍", title:"Supportive", desc:"Campus is encouraging and helpful"},
      {v:5, emoji:"🏆", title:"Student-Focused", desc:"Campus prioritizes student wellbeing"}
    ]
  },
  {
    key: "financialPressure",
    title: "How often do money worries affect your mental health?",
    subtitle: "Financial stress level.",
    options: [
      {v:1, emoji:"💸", title:"Never Concerned", desc:"Finances are stable"},
      {v:2, emoji:"👌", title:"Rarely", desc:"Occasional small worries"},
      {v:3, emoji:"🤔", title:"Sometimes", desc:"I think about money sometimes"},
      {v:4, emoji:"😟", title:"Often", desc:"Money affects me regularly"},
      {v:5, emoji:"⚠️", title:"Constant Stress", desc:"It’s a major source of stress"}
    ]
  },
  {
    key: "mentalHealth",
    title: "How do you feel about your current mental health?",
    subtitle: "General self-assessment.",
    options: [
      {v:1, emoji:"💔", title:"Very Poor", desc:"I am in a critical state"},
      {v:2, emoji:"😟", title:"Struggling", desc:"I’m struggling and need help"},
      {v:3, emoji:"😐", title:"Okay", desc:"I’m managing but not great"},
      {v:4, emoji:"🙂", title:"Good", desc:"I feel mentally well most days"},
      {v:5, emoji:"🌸", title:"Excellent", desc:"I’m thriving emotionally"}
    ]
  },
  // new attributes for depth:
  {
    key: "socialLife",
    title: "How balanced is your social life vs academics?",
    subtitle: "Time for friends, hobbies, and fun.",
    options: [
      {v:1, emoji:"🔕", title:"No Social Life", desc:"I rarely have time for friends"},
      {v:2, emoji:"🙃", title:"Limited", desc:"Barely any social time"},
      {v:3, emoji:"⚖️", title:"Some Balance", desc:"I manage some social time"},
      {v:4, emoji:"🎉", title:"Balanced", desc:"I regularly socialize and unwind"},
      {v:5, emoji:"🌟", title:"Vibrant", desc:"Active social life & hobbies"}
    ]
  },
  {
    key: "physicalActivity",
    title: "How active are you (exercise, sports)?",
    subtitle: "Physical activity level.",
    options: [
      {v:1, emoji:"🛋️", title:"Sedentary", desc:"Almost no physical activity"},
      {v:2, emoji:"🚶", title:"Low", desc:"Occasional walks"},
      {v:3, emoji:"🏃", title:"Moderate", desc:"I exercise sometimes"},
      {v:4, emoji:"🏋️", title:"Active", desc:"I exercise regularly"},
      {v:5, emoji:"💪", title:"Very Active", desc:"High activity routine"}
    ]
  },
  {
    key: "screenTime",
    title: "How would you describe your daily screen time?",
    subtitle: "Impact on sleep and focus.",
    options: [
      {v:1, emoji:"📵", title:"Minimal", desc:"Low screen usage"},
      {v:2, emoji:"📱", title:"Under Control", desc:"Moderate and healthy usage"},
      {v:3, emoji:"⌛", title:"Average", desc:"Standard everyday usage"},
      {v:4, emoji:"🔋", title:"High", desc:"Long hours online"},
      {v:5, emoji:"🌐", title:"Excessive", desc:"Screens interfere with daily life"}
    ]
  },
  {
    key: "counselingAccess",
    title: "Do you have easy access to counseling/support services?",
    subtitle: "Availability & ease of access.",
    options: [
      {v:1, emoji:"❌", title:"No Access", desc:"No counseling services available"},
      {v:2, emoji:"⚠️", title:"Very Limited", desc:"Hard to access help"},
      {v:3, emoji:"🔎", title:"Some Access", desc:"Services exist but aren’t popular"},
      {v:4, emoji:"✅", title:"Good Access", desc:"Counseling is available and approachable"},
      {v:5, emoji:"🌟", title:"Excellent Access", desc:"Proactive and easy-to-use support"}
    ]
  }
];

// UI references
const questionArea = document.getElementById('questionArea');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const resultsPanel = document.getElementById('resultsPanel');
const statusBadge = document.getElementById('statusBadge');
const statusDescription = document.getElementById('statusDescription');
const finalStatus = document.getElementById('finalStatus');
const finalDesc = document.getElementById('finalDesc');
const avgScoreEl = document.getElementById('avgScore');
const studentRecList = document.getElementById('studentRecList');
const uniRecList = document.getElementById('uniRecList');
const radarCanvas = document.getElementById('radarChart').getContext('2d');
const miniRadarCanvas = document.getElementById('miniRadar').getContext('2d');

let current = 0;
const answers = {}; // store numeric answers keyed by question key

// initialize UI
function renderQuestion(i) {
  const q = questions[i];
  progressText.textContent = `Question ${i+1} / ${questions.length}`;
  progressFill.style.width = `${(i / (questions.length)) * 100}%`;

  // build HTML
  questionArea.innerHTML = `
    <div class="q">
      <div class="q-title">${q.title}</div>
      <div class="q-sub">${q.subtitle}</div>
      <div class="options" id="options_${i}"></div>
    </div>
  `;

  const optsWrap = document.getElementById(`options_${i}`);
  q.options.forEach(opt => {
    const d = document.createElement('button');
    d.type = 'button';
    d.className = 'opt';
    d.dataset.value = opt.v;
    d.innerHTML = `<div class="emoji">${opt.emoji}</div><div class="text">${opt.title}<small>${opt.desc}</small></div>`;
    // click handler
    d.addEventListener('click', () => {
      // unselect siblings
      [...optsWrap.children].forEach(c => c.classList.remove('selected'));
      d.classList.add('selected');
      answers[q.key] = opt.v;
      // small pulse animation
      gsap.fromTo(d, {scale:0.96}, {scale:1, duration:0.18, ease:'power2.out'});
    });
    optsWrap.appendChild(d);
  });

  // if there's already an answer, mark it
  if (answers[q.key]) {
    const chosen = [...optsWrap.children].find(c => c.dataset.value == answers[q.key]);
    if (chosen) chosen.classList.add('selected');
  }

  // animate question in
  gsap.fromTo(questionArea, {opacity:0, y:20}, {opacity:1, y:0, duration:0.45});
  // update nav button labels
  prevBtn.style.visibility = (i === 0) ? 'hidden' : 'visible';
  nextBtn.textContent = (i === questions.length - 1) ? 'Finish' : 'Next →';
}

// navigation
prevBtn.addEventListener('click', () => {
  if (current === 0) return;
  current--;
  renderQuestion(current);
});

nextBtn.addEventListener('click', () => {
  // ensure answer exists
  const q = questions[current];
  if (!answers[q.key]) {
    // shake prompt
    gsap.fromTo('#questionArea', {x:-8}, {x:8, duration:0.08, yoyo:true, repeat:3, onComplete:()=>gsap.to('#questionArea',{x:0})});
    return;
  }
  if (current < questions.length - 1) {
    current++;
    renderQuestion(current);
  } else {
    // submit
    finalize();
  }
});

// compute results & show recommendations
function finalize(){
  // progress full
  progressFill.style.width = '100%';
  progressText.textContent = `Completed`;

  // compute average
  const vals = Object.keys(answers).map(k => answers[k]);
  const avg = (vals.reduce((a,b)=>a+b,0) / vals.length);
  const avgRounded = Math.round(avg*10)/10;
  avgScoreEl.textContent = `${avgRounded} / 5`;

  // status mapping
  let status = {name:'', emoji:'', desc:''};
  if (avg < 2.0) {
    status = {name:'Severely Impacted', emoji:'💔', desc:'You appear to be in a critical state and should seek immediate support.'};
  } else if (avg < 3.0) {
    status = {name:'Struggling', emoji:'😟', desc:'You face regular stress — structured help and routines will benefit you.'};
  } else if (avg < 4.0) {
    status = {name:'Managing, but Vulnerable', emoji:'😐', desc:'You are coping but certain areas need attention.'};
  } else if (avg < 4.5) {
    status = {name:'Mentally Stable', emoji:'🙂', desc:'You’re doing well with occasional stress — keep up healthy habits.'};
  } else {
    status = {name:'Flourishing', emoji:'🌸', desc:'You are thriving — consider mentoring and sharing healthy practices.'};
  }

  finalStatus.innerHTML = `${status.emoji} ${status.name}`;
  finalDesc.textContent = status.desc;

  // status badge left
  statusBadge.textContent = `${status.emoji} ${status.name}`;
  statusDescription.textContent = status.desc;

  // build radar dataset
  const labels = questions.map(q => q.title.split(' ')[0]); // short labels
  const data = questions.map(q => answers[q.key] || 3);
  drawRadar(labels, data);

  // build mini radar
  drawMiniRadar(labels, data);

  // generate detailed recommendations
  const studentRecs = generateStudentRecommendations(answers);
  const uniRecs = generateUniversityRecommendations(answers);

  // show lists
  studentRecList.innerHTML = studentRecs.map(li => `<li>${li}</li>`).join('');
  uniRecList.innerHTML = uniRecs.map(li => `<li>${li}</li>`).join('');

  // show results panel (animate)
  resultsPanel.style.display = 'block';
  gsap.fromTo(resultsPanel, {scale:0.98, opacity:0}, {scale:1, opacity:1, duration:0.6});
  // scroll to results
  resultsPanel.scrollIntoView({behavior:'smooth'});
}

/* Chart drawing */
let radarChart = null;
function drawRadar(labels, data) {
  if (radarChart) radarChart.destroy();
  radarChart = new Chart(radarCanvas, {
    type: 'radar',
    data: {
      labels: [
        "Academic", "Satisfaction", "Sleep", "Support",
        "Campus", "Finance", "Mental", "Social", "Activity", "Screen", "Counsel"
      ],
      datasets: [{
        label: 'Wellness Profile',
        data: data,
        fill: true,
        backgroundColor: 'rgba(158,224,178,0.25)',
        borderColor: 'rgba(47,93,80,0.95)',
        pointBackgroundColor: '#fff',
        pointBorderColor: 'rgba(47,93,80,0.95)',
        pointRadius: 5,
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        r: {
          min: 1,
          max: 5,
          ticks: { stepSize: 1, backdropColor: 'transparent' },
          grid: { color: 'rgba(11,34,28,0.06)' },
          pointLabels: { color: '#154a40', font: {size:12} }
        }
      },
      plugins: {
        legend: { display: false }
      },
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

let miniRadar = null;
function drawMiniRadar(labels, data) {
  if (miniRadar) miniRadar.destroy();
  miniRadar = new Chart(miniRadarCanvas, {
    type: 'radar',
    data: {
      labels: ["Acad","Sat","Sleep","Supp","Camp","Fin","MH","Soc","Act","Scr","Coun"],
      datasets: [{
        label: 'mini',
        data: data,
        fill: true,
        backgroundColor: 'rgba(158,224,178,0.30)',
        borderColor: 'rgba(47,93,80,0.9)',
        pointRadius: 3,
        borderWidth: 1.6
      }]
    },
    options:{scales:{r:{min:1,max:5,ticks:{display:false}}}, plugins:{legend:{display:false}}, maintainAspectRatio:true}
  });
}

/* Recommendation logic (detailed) */
function generateStudentRecommendations(ans){
  const recs = [];
  // Sleep
  if (ans.sleepQuality <= 2){
    recs.push("Sleep hygiene: set consistent sleep/wake times, avoid screens 1 hour before bed, consider short naps and reduce caffeine after 3 PM. Use guided breathing or meditation to fall asleep faster.");
  } else if (ans.sleepQuality === 3){
    recs.push("Sleep maintenance: minor improvements like short evening walk and consistent routine could boost energy.");
  } else {
    recs.push("Good sleep: maintain your sleep schedule and continue habits that help you wake refreshed.");
  }

  // Academic Pressure & Study Satisfaction
  if (ans.academicPressure >= 4){
    recs.push("Academic stress: break tasks into 25–50 minute focused sessions (Pomodoro), prioritize tasks, and set weekly micro-goals. Seek academic counseling for workload planning.");
  } else if (ans.academicPressure <= 2){
    recs.push("Workload stable: continue planning and consider mentoring peers who struggle.");
  }

  if (ans.studySatisfaction <= 2){
    recs.push("Learning engagement: identify 1–2 areas to change (study group, topic focus, instructor feedback). Connect with peers for collaborative learning to increase motivation.");
  } else if (ans.studySatisfaction >= 4){
    recs.push("Study satisfaction strong: continue reflective learning and consider taking leadership roles in peer study groups.");
  }

  // Support System
  if (ans.supportSystem <=2){
    recs.push("Social support: try joining a club, organization, or peer support group; reach out to campus counseling even if it's a short check-in to build support.");
  } else {
    recs.push("Good support: keep open communication, and offer reciprocal help to peers to strengthen relationships.");
  }

  // Financial Pressure
  if (ans.financialPressure >= 4){
    recs.push("Financial stress: seek financial aid options, on-campus part-time roles, or meet financial counselors. Build a simple monthly budget and emergency fund plan.");
  }

  // Screen time
  if (ans.screenTime >= 4){
    recs.push("Digital hygiene: schedule focused offline blocks, blue-light filters after sunset, and consider a daily 'no-phone' hour for decompressing.");
  }

  // Physical Activity & Social Life
  if (ans.physicalActivity <= 2){
    recs.push("Physical health: short daily activity (20–30 min walk/yoga) improves mood and concentration.");
  }
  if (ans.socialLife <=2){
    recs.push("Social balance: arrange weekly small social meetups — consistent interactions reduce sense of isolation.");

  }

  // Counseling Access
  if (ans.counselingAccess <= 2 || ans.mentalHealth <= 2){
    recs.unshift("Immediate step: if you feel unsafe or in crisis, contact emergency services or campus emergency support. Consider booking counseling — even one session can provide coping plans.");
  } else {
    recs.push("Maintain mental wellbeing: keep monitoring, use campus resources proactively for check-ins or workshops.");
  }

  // polish: ensure unique and prioritized
  return [...new Set(recs)].slice(0,10); // top 10
}

/* University-level recommendations based on group signals */
function generateUniversityRecommendations(ans){
  const recs = [];

  // If many weak areas (we're doing single user logic but use thresholds to recommend)
  if (ans.counselingAccess <=2){
    recs.push("Improve counseling access: expand hours, confidential walk-in sessions, and tele-counseling options. Publicize services across campus regularly.");
  }
  if (ans.academicPressure >=4 || ans.studySatisfaction <=2){
    recs.push("Academic policies: introduce flexible deadlines for high-stress periods, optional assignment extensions, and workshops on time and stress management.");
  }
  if (ans.financialPressure >=4){
    recs.push("Financial support: create emergency grants, improve scholarship awareness, and offer budgeting workshops.");
  }
  if (ans.sleepQuality <=2){
    recs.push("Campus environment: consider quiet hours in dorms, late-night study zones with sleep hygiene posters, and reschedule very early classes where possible.");
  }
  if (ans.screenTime >=4){
    recs.push("Digital wellness: run campaigns about healthy screen use, implement digital detox events, and support offline social activities.");
  }
  // universal recs
  recs.push("Student wellbeing strategy: create a cross-department wellbeing committee; run regular mental health weeks; collect anonymized wellbeing data to inform policy.");
  recs.push("Peer programs: fund peer counselors, mentorships, and student-led support groups trained in basic mental health first-aid.");

  return [...new Set(recs)];
}

/* Retake & Download */
document.getElementById('retakeBtn').addEventListener('click', ()=>{
  // reset
  for (let k in answers) delete answers[k];
  current = 0;
  resultsPanel.style.display = 'none';
  renderQuestion(current);
  progressFill.style.width = '0%';
  progressText.textContent = `Question 1 / ${questions.length}`;
});

document.getElementById('downloadBtn').addEventListener('click', ()=> {
  // generate simple text report and download
  const uname = 'User';
  const score = avgScoreEl.textContent;
  const status = finalStatus.textContent;
  const studentTxt = Array.from(studentRecList.children).map(li=> '- '+li.textContent).join('\n');
  const uniTxt = Array.from(uniRecList.children).map(li=> '- '+li.textContent).join('\n');

  const content = `MindMetrics Report\nName: ${uname}\nScore: ${score}\nStatus: ${status}\n\nPersonal Recommendations:\n${studentTxt}\n\nUniversity Recommendations:\n${uniTxt}\n\nGenerated: ${new Date().toLocaleString()}`;
  const blob = new Blob([content], {type:'text/plain'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'mindmetrics-report.txt';
  a.click();
  URL.revokeObjectURL(url);
});

// kick off
renderQuestion(0);
