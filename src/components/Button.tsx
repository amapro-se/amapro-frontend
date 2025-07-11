type ButtonProps = {
  label: string;
  disabled?: boolean;
  variant?: string;
};

export function Button({ label }: ButtonProps) {
  return <button className="px-4 py-2 bg-blue-500 text-white rounded">{label}</button>;
}
