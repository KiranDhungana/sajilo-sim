import { PhoneMockup } from "./PhoneMockup";
import type { ProcessStep as ProcessStepType } from "../data/processSteps";

type ESimProcessStepProps = { step: ProcessStepType };

export function ESimProcessStep({ step }: ESimProcessStepProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <PhoneMockup variant={step.variant} />
      <h3 className="mt-6 text-lg font-bold text-[#2563eb]">{step.title}</h3>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-600">
        {step.description}
      </p>
    </div>
  );
}
