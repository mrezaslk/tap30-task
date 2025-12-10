import React from "react";
import { Link } from "react-router-dom";

interface ErrorStateProps {
  message: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ message }) => {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="text-center">
        <p className="text-red-600 text-lg mb-4">{message}</p>
      </div>
    </main>
  );
};
