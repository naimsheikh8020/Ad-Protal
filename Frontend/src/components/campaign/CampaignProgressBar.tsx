import React from "react";

interface CampaignStep {
  id: number;
  label: string;
}

interface CampaignProgressBarProps {
  currentStep: number;
}

const STEPS: CampaignStep[] = [
  { id: 1, label: "Platforms" },
  { id: 2, label: "Objective" },
  { id: 3, label: "Audience" },
  { id: 4, label: "Budget" },
  { id: 5, label: "Creative" },
  { id: 6, label: "Review" },
];

const CampaignProgressBar: React.FC<CampaignProgressBarProps> = ({
  currentStep,
}) => {
  return (
    <div className="rounded-xl border bg-white p-6">
      <div className="flex items-center justify-between relative">
        {STEPS.map((step, index) => {
          const isCompleted = step.id < currentStep;
          const isActive = step.id === currentStep;
          const isLastStep = index === STEPS.length - 1;

          return (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center gap-2 relative z-10">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-all
                    ${
                      isCompleted
                        ? "bg-green-500 text-white"
                        : isActive
                        ? "bg-blue-600 text-white"
                        : "border border-slate-300 bg-white text-slate-400"
                    }
                  `}
                >
                  {isCompleted ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  ) : (
                    step.id
                  )}
                </div>

                <span
                  className={`text-xs font-medium ${
                    isActive || isCompleted
                      ? "text-slate-900"
                      : "text-slate-600"
                  }`}
                >
                  {step.label}
                </span>
              </div>

              {/* Connecting line between steps */}
              {!isLastStep && (
                <div className="flex-1 px-2 relative" style={{ top: '-10px' }}>
                  <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ease-in-out ${
                        step.id < currentStep
                          ? "bg-green-500 w-full"
                          : "bg-slate-200 w-0"
                      }`}
                    ></div>
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default CampaignProgressBar;