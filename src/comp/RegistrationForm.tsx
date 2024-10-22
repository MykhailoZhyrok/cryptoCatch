import React, { useState } from 'react';
import './RegistrationForm.css'; // You can add your styling here

const RegistrationForm: React.FC = () => {
  const [step, setStep] = useState(1); // Track the current step

  // Helper function to move to the next step
  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  // Helper function to move to the previous step (if needed)
  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  // Progress bar width calculation based on step
  const getProgress = () => {
    switch (step) {
      case 1: return '33%';
      case 2: return '66%';
      case 3: return '100%';
      default: return '0%';
    }
  };

  return (
    <div className="form-container">
      <div className="progress-bar">
        <div className="progress" style={{ width: getProgress() }}></div>
      </div>

      {step === 1 && (
        <div className="form-step">
          <h2>Invoice details</h2>
          <input className='inputText' type="text" placeholder="Username" />
          <input className='inputText' type="email" placeholder="Email" />
          <button onClick={nextStep}>Next Step: Payment Info</button>
        </div>
      )}

      {step === 2 && (
        <div className="form-step">
          <h2>Payment Info</h2>
          {/* Payment fields */}
          <input className='inputText' type="text" placeholder="Credit Card Number" />
          <input className='inputText' type="text" placeholder="Expiry Date" />
          <button onClick={prevStep}>Previous</button>
          <button onClick={nextStep}>Next Step: Confirmation</button>
        </div>
      )}

      {step === 3 && (
        <div className="form-step">
          <h2>Confirmation</h2>
          <p>Review your information and submit</p>
          <button onClick={prevStep}>Previous</button>
          <button>Submit</button>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;

