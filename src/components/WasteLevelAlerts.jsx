import React from "react";

const WasteLevelAlerts = ({ bins }) => {
  // Filter bins that are over 90% full
  const alertBins = bins.filter(bin => bin.level > 90);

  if (alertBins.length === 0) return null;

  return (
    <div className="my-4 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded">
      <h2 className="text-xl font-bold mb-2">⚠️ Critical Waste Level Alerts</h2>
      {alertBins.map((bin, index) => (
        <div key={index} className="mb-1">
          <p>🚨 <strong>{bin.location}</strong> is <strong>{bin.level}%</strong> full! Immediate collection required.</p>
        </div>
      ))}
    </div>
  );
};

export default WasteLevelAlerts;
