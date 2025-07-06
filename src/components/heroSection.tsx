"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { TopicSelect } from "./topicSelect";
import QuoteCard from "./quoteCard";

export default function HeroSection() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [quotes, setQuotes] = useState<string[]>([]);

  const handleTopicChange = (topic: string) => {
    setSelectedTopic(topic);
  };

  const handleGetQuote = async () => {
    if (!selectedTopic) return;

    const data = await import("@/app/_data/quotes.json").then((mod) => mod.default);
    const topicObj = data.find((item) => item.topic === selectedTopic);
    
    if (topicObj) {
      const shuffled = [...topicObj.quotes].sort(() => 0.5 - Math.random());
      setQuotes(shuffled.slice(0, 3));
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Section */}
      <div className="flex flex-col items-center justify-center gap-8 pt-16 sm:pt-20 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
          Quote Generator
        </h1>
        <TopicSelect onTopicChange={handleTopicChange} />
        <Button onClick={handleGetQuote}>Get Quote</Button>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 pb-8 min-h-[300px] flex flex-col items-center justify-start gap-6">
        {quotes.length > 0 ? (
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {quotes.map((quote, index) => (
              <QuoteCard key={index} quote={quote} />
            ))}
          </div>
        ) : (
          <p className="text-lg text-muted-foreground">Select a topic to view quotes.</p>
        )}
      </div>
    </div>
  );
}
