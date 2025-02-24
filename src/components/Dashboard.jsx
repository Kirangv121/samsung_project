import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import WasteLevelAlerts from "./WasteLevelAlerts";

const Dashboard = () => {
  const [bins, setBins] = useState([]);

  useEffect(() => {
    axios.get("https://api.example.com/waste-levels") // Replace with actual API endpoint
      .then((response) => setBins(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Garbage Bin Status</h2>
      <h3>Hello its kisan</h3>

      {/* Waste Level Alerts */}
      <WasteLevelAlerts bins={bins} />

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={bins}>
          <XAxis dataKey="location" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="level" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

      {bins.map((bin) => (
        <div key={bin.id} className={`p-4 mt-2 ${bin.level > 90 ? "bg-red-500 text-white" : "bg-gray-200"}`}>
          <p>{bin.location}: {bin.level}% Full</p>
          {bin.level > 90 && <p>⚠️ Alert: Needs collection!</p>}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
