export type ProcessStep = {
  id: string;
  title: string;
  description: string;
  /** Step visual: "destination" | "install" | "connect" */
  variant: "destination" | "install" | "connect";
};

export const processSteps: ProcessStep[] = [
  {
    id: "1",
    title: "Choose destination & package",
    description: "Sajilo Sim offers eSIM packages for 190+ countries.",
    variant: "destination",
  },
  {
    id: "2",
    title: "Install eSIM",
    description:
      "Instantly get your eSIM and configure it in your eSIM compatible device.",
    variant: "install",
  },
  {
    id: "3",
    title: "Enjoy high speed connectivity",
    description:
      "Once eSIM is configured, you can enjoy high speed roaming data connectivity.",
    variant: "connect",
  },
];
