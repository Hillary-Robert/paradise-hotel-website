import { ButtonProps } from "@/interface";

function Button({ children, disabled, className, onClick }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`px-4 py-2 rounded-lg font-medium transition-colors 
        ${
          disabled
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-[#8A6E45] text-white hover:bg-[#6d5636]"
        } 
        ${className}`}
        onClick={onClick}
    >
      {children}
    </button>
  );
}


export default Button;