import { useState } from "react";

function Stepper({ steps }) {
  const [currentStep, setCurrentStep] = useState(0);

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleContinue = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="stepper">
      <h1 className="heading">Stepper</h1>
      <div className="main">
        <div>
          {steps.map(({ label }, index) => (
            <div className="stepper_container" key={label}>
              <div
                className={`step_number ${
                  index <= currentStep ? "active" : ""
                }`}
              >
                {index + 1}
                {index < steps.length - 1 && (
                  <div
                    className={`step_line ${
                      index < currentStep ? "active" : ""
                    }`}
                  ></div>
                )}
              </div>
              <div className="stepper_label">{label}</div>
            </div>
          ))}
        </div>
        <div className="stepper_content">{steps[currentStep].content}</div>
      </div>
      <div className="stepper_controls">
        <button
          className="btn"
          onClick={handlePrevious}
          disabled={currentStep === 0}
        >
          Previous
        </button>
        <button
          className="btn"
          onClick={handleContinue}
          disabled={currentStep === steps.length - 1}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Stepper;
