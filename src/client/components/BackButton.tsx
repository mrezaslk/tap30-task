import React from "react";
import { Link } from "react-router-dom";

interface BackButtonProps {
  to?: string;
  text?: string;
}

export const BackButton: React.FC<BackButtonProps> = React.memo(
  ({ to = "/", text = "برگشت به لیست" }) => {
    return (
      <Link
        to={to}
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 font-medium min-h-[44px]"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        {text}
      </Link>
    );
  }
);

BackButton.displayName = "BackButton";
