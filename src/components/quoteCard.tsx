type QuoteCardProps = {
  quote: string;
};

export default function QuoteCard({ quote }: QuoteCardProps) {
  return (
    <div className="bg-white text-gray-800 p-4 rounded-xl shadow-md w-full sm:w-1/3">
      <p className="text-base italic">"{quote}"</p>
    </div>
  );
}
