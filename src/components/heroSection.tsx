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
      {/* Header Section */}
      <div className="py-16 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8">
          Quote Generator
        </h1>
        <div className="flex flex-col items-center justify-center gap-4">
          <TopicSelect onTopicChange={handleTopicChange} />
          <Button onClick={handleGetQuote}>Get Quote</Button>
        </div>
      </div>

      {/* Quotes Display Section */}
      <section className="min-h-[300px] py-8 flex flex-col items-center justify-start">
        {quotes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {quotes.map((quote, index) => (
              <QuoteCard key={index} quote={quote} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center w-full">
            <QuoteCard quote="Choose a topic to view quotes." />
          </div>
        )}
      </section>
    </div>
  );
}
