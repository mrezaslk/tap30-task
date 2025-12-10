import React from "react";

export const LoadingState: React.FC = React.memo(() => {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="text-gray-600 text-lg mb-2">در حال بارگذاری...</div>
      </div>
    </main>
  );
});

LoadingState.displayName = "LoadingState";
