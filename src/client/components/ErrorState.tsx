import React from "react";
import { Link } from "react-router-dom";

interface ErrorStateProps {
  message: string;
  showBackButton?: boolean;
  backButtonText?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = React.memo(
  ({ message, showBackButton = false, backButtonText = "← برگشت به لیست" }) => {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="text-red-600 text-lg mb-4">{message}</div>
          {showBackButton && (
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 active:scale-[0.98] transition-all duration-200 min-h-[44px]"
            >
              {backButtonText}
            </Link>
          )}
        </div>
      </main>
    );
  }
);

ErrorState.displayName = "ErrorState";
