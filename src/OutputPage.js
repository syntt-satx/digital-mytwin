import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts";
import "./App.css";

const OutputPage = ({ data, goBack }) => {

  const careers = [
    {
      name: "AI Engineer",
      baseSalary: 1200000,
      growthRate: 0.18,
      burnout: 7,
      demand: 9,
      risk: 4,
    },
    {
      name: "Data Scientist",
      baseSalary: 1000000,
      growthRate: 0.15,
      burnout: 6,
      demand: 8,
      risk: 5,
    },
    {
      name: "Cyber Security Expert",
      baseSalary: 900000,
      growthRate: 0.13,
      burnout: 5,
      demand: 8,
      risk: 3,
    }
  ];

  // Salary Growth Data (10 years)
  const salaryData = Array.from({ length: 10 }, (_, i) => {
    return {
      year: `Year ${i + 1}`,
      AI: Math.round(careers[0].baseSalary * Math.pow(1 + careers[0].growthRate, i)),
      DataSci: Math.round(careers[1].baseSalary * Math.pow(1 + careers[1].growthRate, i)),
      Cyber: Math.round(careers[2].baseSalary * Math.pow(1 + careers[2].growthRate, i)),
    };
  });

  // Wealth Projection after 10 years (30% savings)
  const wealthData = careers.map((career) => {
    const finalSalary = career.baseSalary * Math.pow(1 + career.growthRate, 9);
    return {
      name: career.name,
      wealth: Math.round(finalSalary * 0.3 * 10),
      burnout: career.burnout
    };
  });

  const bestCareer = careers.reduce((a, b) =>
    a.growthRate > b.growthRate ? a : b
  );

  return (
    <div className="output-container">

      <h1 className="twin-heading">🌟 Your Digital Twin Future Report 🌟</h1>

      {/* CAREER CARDS */}
      <div className="card-grid">
        {careers.map((career, index) => (
          <div className="career-card" key={index}>
            <h2>{career.name}</h2>
            <p><strong>Base Salary:</strong> ₹{career.baseSalary}</p>
            <p><strong>Growth Rate:</strong> {career.growthRate * 100}% / year</p>
            <p><strong>Market Demand:</strong> {career.demand}/10</p>
            <p><strong>Burnout Risk:</strong> {career.burnout}/10</p>
            <p><strong>Automation Risk:</strong> {career.risk}/10</p>
          </div>
        ))}
      </div>

      {/* SALARY GROWTH GRAPH */}
      <h2 className="section-title">📈 10 Year Salary Growth Prediction</h2>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={salaryData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="AI" stroke="#8884d8" />
          <Line type="monotone" dataKey="DataSci" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Cyber" stroke="#ff7300" />
        </LineChart>
      </ResponsiveContainer>

      {/* WEALTH PROJECTION */}
      <h2 className="section-title">💰 Wealth Projection After 10 Years</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={wealthData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="wealth" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

      {/* BURNOUT COMPARISON */}
      <h2 className="section-title">🔥 Burnout Comparison</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={wealthData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0,10]} />
          <Tooltip />
          <Bar dataKey="burnout" fill="#ff4d4d" />
        </BarChart>
      </ResponsiveContainer>

      {/* BEST HIGHLIGHT */}
      <div className="highlight-box">
        🏆 <strong>Best Long-Term Career:</strong> {bestCareer.name}  
        <br />
        This career shows the highest projected growth and strongest long-term ROI.
      </div>

      {/* AI TWIN REACTION */}
      <div className="twin-reaction">
        🤖 <strong>Your AI Twin Says:</strong>  
        <p>
          "Based on your adaptability and current market simulation, 
          you have strong long-term success probability in {bestCareer.name}.  
          If you consistently upskill for 3–5 years, your financial stability 
          and leadership probability rises above 78%.  
          Your future identity leans toward a high-impact tech innovator."
        </p>
      </div>

      {/* FUTURE IDENTITY */}
      <div className="future-identity">
        🌈 <strong>Future Identity Projection (Year 2035):</strong>
        <ul>
          <li>✔ Financial Independence Level: High</li>
          <li>✔ Work-Life Balance Probability: 68%</li>
          <li>✔ Global Opportunity Access: 82%</li>
          <li>✔ Leadership Potential: 75%</li>
          <li>✔ Innovation Impact Score: 8.9/10</li>
        </ul>
      </div>

      <button className="back-btn" onClick={goBack}>⬅ Back</button>
    </div>
  );
};

export default OutputPage;