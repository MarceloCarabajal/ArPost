
const StepIndicator = ({ currentStep = 1 , totalSteps = 4}) => {
    const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);
  
    return (
    <div className="flex flex-col items-center gap-8">
      {steps.map((step) => {
        const isActive = step === currentStep;

        return (
          <div
            key={step}
            className={`w-12 h-12 rounded-full flex items-center justify-center border-2 font-bold text-lg ${
              isActive
                ? "bg-[#152663] border-white text-white"
                : "bg-white border-[#152663] text-[#152663]"
            }`}
            style={isActive ? { boxShadow: "0 0 0 3px #152663" } : {}}
          >
            {step}
          </div>
        );
      })}
    </div>
  )
}

export default StepIndicator