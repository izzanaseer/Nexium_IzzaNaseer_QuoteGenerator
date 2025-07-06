import { memo } from "react";

type QuoteCardProps = {
  quote: string;
};

const QuoteCard = memo(function QuoteCard({ quote }: QuoteCardProps) {
  return (
    <div className="bg-white text-gray-800 p-6 rounded-xl shadow-md w-full sm:w-80 h-44 flex items-center justify-center">
      <p className="text-base italic text-center">"{quote}"</p>
    </div>
  );
});

export default QuoteCard;