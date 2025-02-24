import React from "react";

const Alerts = ({ alerts }) => {
  if (!alerts || alerts.length === 0) return null;

  return (
    <div className="my-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 rounded">
      <h2 className="text-xl font-bold mb-2">Alerts</h2>
      {alerts.map((alert, index) => (
        <div key={index} className="mb-1">
          <p>{alert.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Alerts;
