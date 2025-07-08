import { memo } from "react";

type QuoteCardProps = {
  quote: string;
};

const QuoteCard = memo(function QuoteCard({ quote }: QuoteCardProps) {
  return (
    <div className="bg-card-foreground text-card p-6 rounded-xl shadow-md w-full sm:w-80 h-44 flex items-center justify-center">
      <p className="text-base italic text-center">&quot;{quote}&quot;</p>
    </div>
  );
});

export default QuoteCard;