import { CardProps } from "@/interface";
import Link from "next/link";

interface CardLinkProps extends CardProps {
  href?: string;      // optional link for the card
  disabled?: boolean; // disables the link when true
}

function Card({ children, className, contentClassName, href, disabled }: CardLinkProps) {
  const cardContent = (
    <div
      className={`bg-white border rounded-xl shadow-lg overflow-hidden ${
        className
      } ${disabled ? "cursor-not-allowed opacity-80" : "cursor-pointer"}`}
    >
      <div className={`p-4 ${contentClassName}`}>{children}</div>
    </div>
  );

  // Wrap in Link only if href exists and not disabled
  if (href && !disabled) {
    return <Link href={href}>{cardContent}</Link>;
  }

  return cardContent;
}

export default Card;
