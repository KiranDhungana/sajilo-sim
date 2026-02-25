import Link from "next/link";
import { ESimProcessStep } from "./ESimProcessStep";
import { processSteps } from "../data/processSteps";

export function ESimProcessSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-center text-sm text-gray-600">
        Check{" "}
        <Link href="#help" className="font-medium text-[#2563eb] hover:underline">
          Help & FAQs
        </Link>{" "}
        to see if your device supports eSIM.
      </p>
      <div className="mt-12 grid gap-12 md:grid-cols-3">
        {processSteps.map((step) => (
          <ESimProcessStep key={step.id} step={step} />
        ))}
      </div>
    </section>
  );
}
