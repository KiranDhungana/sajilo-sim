import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  containerClassName?: string;
  rightElement?: React.ReactNode;
};

export function Input({
  className,
  containerClassName,
  rightElement,
  ...props
}: InputProps) {
  return (
    <div
      className={cn(
        "flex items-center overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm",
        containerClassName
      )}
    >
      <input
        className={cn(
          "flex-1 border-0 bg-transparent px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-0",
          rightElement ? "pr-0" : "",
          className
        )}
        {...props}
      />
      {rightElement ? (
        <div className="flex shrink-0 items-center pr-1">{rightElement}</div>
      ) : null}
    </div>
  );
}
