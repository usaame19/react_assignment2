import React from "react";
import Engineer from "./engineer";

const Engineers = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mx-8">
      {Engineer.map((engineer, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
          <img
            className="w-44 h-44 rounded-full mx-auto mb-4"
            src={engineer.imageUrl}
            alt={`Engineer ${index + 1}`}
          />
          <h2 className="text-xl font-bold mx-auto">{engineer.name}</h2>
          <p>
            <strong className="mx-auto">Age:</strong> {engineer.age}
          </p>
          <p>
            <strong className="mx-auto">Favorite:</strong> {engineer.fav}
          </p>
          <p>
            <strong className="mx-auto">Language:</strong> {engineer.lang}
          </p>
          <p>
            <strong className="mx-auto">Role:</strong> {engineer.role}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Engineers;
