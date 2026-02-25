import type { ProcessStep } from "../data/processSteps";

type PhoneMockupProps = {
  variant: ProcessStep["variant"];
};

function DestinationScreen() {
  const countries = [
    { flag: "🇺🇸", name: "USA" },
    { flag: "🇪🇸", name: "Spain" },
    { flag: "🇦🇪", name: "UAE" },
    { flag: "🇫🇷", name: "France" },
    { flag: "🇩🇪", name: "Germany" },
  ];
  return (
    <div className="flex h-full flex-col bg-white p-3">
      <div className="mb-2 h-8 w-full rounded bg-gray-100" />
      <div className="my-1 h-px bg-gray-200" />
      <div className="flex flex-1 flex-col gap-1">
        {countries.map((c) => (
          <div
            key={c.name}
            className="flex items-center justify-between rounded bg-gray-50 px-2 py-1.5"
          >
            <span className="text-sm">{c.flag}</span>
            <span className="text-xs text-gray-700">{c.name}</span>
            <span className="text-gray-400">→</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function InstallScreen() {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-white p-4">
      <div className="relative flex h-24 w-24 items-center justify-center rounded-lg border-2 border-gray-300 bg-white">
        <div className="grid h-16 w-16 grid-cols-4 gap-0.5 bg-black">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className={i % 2 === 0 ? "bg-black" : "bg-white"}
              style={{ minHeight: 4, minWidth: 4 }}
            />
          ))}
        </div>
        <div className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#2563eb] text-[10px] font-bold text-white">
          SS
        </div>
      </div>
      <div className="mt-3 h-2 w-3/4 rounded-full bg-[#2563eb]" />
    </div>
  );
}

function ConnectScreen() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 bg-white p-4">
      <div className="flex gap-0.5">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-1 rounded-sm bg-[#2563eb]"
            style={{ height: 8 + i * 6 }}
          />
        ))}
      </div>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2563eb]">
        <svg
          className="h-5 w-5 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm3.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      </div>
      <div className="h-2 w-3/4 rounded-full bg-[#2563eb]" />
    </div>
  );
}

export function PhoneMockup({ variant }: PhoneMockupProps) {
  const screen =
    variant === "destination" ? (
      <DestinationScreen />
    ) : variant === "install" ? (
      <InstallScreen />
    ) : (
      <ConnectScreen />
    );

  return (
    <div className="mx-auto w-[180px] shrink-0 overflow-hidden rounded-[2rem] border-[8px] border-gray-800 bg-gray-800 shadow-xl">
      <div className="h-[280px] overflow-hidden rounded-[1.25rem]">
        {screen}
      </div>
    </div>
  );
}
