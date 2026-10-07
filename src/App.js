import React, { useState, useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import './App.css';

function App() {
  const [view, setView] = useState('input'); // input, loading, output
  const [formData, setFormData] = useState({
    name: 'sathvikha', age: '20', currentStatus: 'Presently Studying', health: 'no',
    career1: 'AI Engineer', career2: 'Product Manager', career3: 'Creative Director',
    learningDuration: 5, learningSpeed: 5, stressTolerance: 5, discipline: 5, riskAppetite: 5
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const startSync = () => {
    setView('loading');
    setTimeout(() => setView('output'), 2500); 
  };

  // 10-Year Growth Simulation Engine
  const simData = useMemo(() => {
    const years = Array.from({ length: 11 }, (_, i) => i);
    return years.map(yr => ({
      year: `Year ${yr}`,
      [formData.career1]: Math.round(95 * Math.pow(1.12 + (formData.learningSpeed * 0.01), yr)),
      [formData.career2]: Math.round(85 * Math.pow(1.09 + (formData.discipline * 0.01), yr)),
      [formData.career3]: Math.round(75 * Math.pow(1.07 + (formData.riskAppetite * 0.02), yr)),
    }));
  }, [formData]);

  if (view === 'loading') {
    return (
      <div className="app-container center">
        <div className="neural-core">
          <div className="ring cyan-ring"></div>
          <div className="ring purple-ring"></div>
          <h2 className="neon-text pulse">SYNCHRONIZING TWIN...</h2>
          <p>Mapping neural success variables for {formData.name}</p>
        </div>
      </div>
    );
  }

  if (view === 'output') {
    return (
      <div className="app-container">
        <div className="report-dashboard slide-up">
          <header className="report-header">
            <h1 className="neon-text">FUTURE <span className="cyan">PROJECTION</span></h1>
            <p className="badge">Digital Twin established for: {formData.name}</p>
          </header>

          <div className="grid-layout">
            {/* BEST CAREER VERDICT CARD */}
            <div className="card verdict-card">
              <div className="card-tag">AI RECOMMENDATION</div>
              <h2>Primary Path: <span className="highlight">{formData.career1}</span></h2>
              <p>Based on your <strong>{formData.discipline}/10 discipline</strong> and <strong>{formData.learningSpeed}/10 speed</strong>, this path offers 94% compatibility.</p>
            </div>

            {/* 10-YEAR SALARY GRAPH */}
            <div className="card graph-card full-width">
              <h3>10-Year Cumulative Salary Growth ($k USD)</h3>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={simData}>
                  <defs>
                    <linearGradient id="colorC1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00f3ff" stopOpacity={0.6}/>
                      <stop offset="95%" stopColor="#00f3ff" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#222" />
                  <XAxis dataKey="year" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip contentStyle={{backgroundColor: '#050a18', border: '1px solid #00f3ff'}} />
                  <Legend />
                  <Area type="monotone" dataKey={formData.career1} stroke="#00f3ff" fillOpacity={1} fill="url(#colorC1)" />
                  <Area type="monotone" dataKey={formData.career2} stroke="#bc13fe" fillOpacity={0} />
                  <Area type="monotone" dataKey={formData.career3} stroke="#ff00ff" fillOpacity={0} />
                </AreaChart>
              </ResponsiveContainer>
              <p className="insight-text">Exponential growth fueled by your {formData.learningDuration}h daily learning commitment.</p>
            </div>

            {/* VITALITY CARD */}
            <div className="card vitality-card">
              <div className="card-tag purple">LIFESTYLE VITALITY</div>
              <ul className="stats-list">
                <li><span>Burnout Risk</span> <span className="val red">{(10 - formData.stressTolerance) * 10}%</span></li>
                <li><span>Automation Risk</span> <span className="val green">Low (12%)</span></li>
                <li><span>Personal Time</span> <span className="val cyan">{12 - formData.learningDuration}h/Day</span></li>
                <li><span>Savings Potential</span> <span className="val green">High</span></li>
              </ul>
            </div>

            {/* SUMMARY CARD */}
            <div className="card summary-card">
              <div className="card-tag cyan">STRATEGIC SUMMARY</div>
              <p>Your current status as <strong>{formData.currentStatus}</strong> is the ideal launchpad. focus on {formData.career1} to maximize living standards while utilizing your {formData.discipline}/10 discipline to maintain emotional stability.</p>
            </div>
          </div>

          <button className="sync-button recal" onClick={() => setView('input')}>RE-CALIBRATE NEURAL DATA</button>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="projection-card">
        <h1 className="title">DIGITAL TWIN <span className="neon-text">PROJECTION</span></h1>
        
        <div className="form-body">
          <label className="lbl">IDENTIFICATION</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          <div className="row">
            <input type="number" name="age" value={formData.age} onChange={handleChange} />
            <select name="currentStatus" value={formData.currentStatus} onChange={handleChange}>
              <option>Presently Studying</option>
              <option>Working</option>
              <option>Freelancing</option>
            </select>
          </div>

          <label className="lbl">CAREER PREFERENCES (THE CONFUSION TRIAD)</label>
          <div className="row triad">
            <input type="text" name="career1" value={formData.career1} onChange={handleChange} />
            <input type="text" name="career2" value={formData.career2} onChange={handleChange} />
            <input type="text" name="career3" value={formData.career3} onChange={handleChange} />
          </div>

          <label className="lbl">HEALTH & VITALITY NOTES</label>
          <textarea name="health" value={formData.health} onChange={handleChange} />

          <div className="sliders">
            <div className="slider-item">
              <div className="info"><span>Learning Speed</span> <span>{formData.learningSpeed}/10</span></div>
              <input type="range" name="learningSpeed" min="1" max="10" value={formData.learningSpeed} onChange={handleChange} />
            </div>
            <div className="slider-item">
              <div className="info"><span>Risk Appetite</span> <span>{formData.riskAppetite}/10</span></div>
              <input type="range" name="riskAppetite" min="1" max="10" value={formData.riskAppetite} onChange={handleChange} />
            </div>
            <div className="slider-item">
              <div className="info"><span>Daily Learning (Hrs)</span> <span>{formData.learningDuration}h</span></div>
              <input type="range" name="learningDuration" min="1" max="16" value={formData.learningDuration} onChange={handleChange} />
            </div>
            <div className="slider-item">
              <div className="info"><span>Stress Tolerance</span> <span>{formData.stressTolerance}/10</span></div>
              <input type="range" name="stressTolerance" min="1" max="10" value={formData.stressTolerance} onChange={handleChange} />
            </div>
            <div className="slider-item full">
              <div className="info"><span>Discipline Level</span> <span>{formData.discipline}/10</span></div>
              <input type="range" name="discipline" min="1" max="10" value={formData.discipline} onChange={handleChange} />
            </div>
          </div>
        </div>

        <button className="sync-button" onClick={startSync}>SYNC MY FUTURE</button>
      </div>
    </div>
  );
}

export default App;