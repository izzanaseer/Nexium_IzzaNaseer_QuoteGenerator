"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { TopicSelect } from "./topicSelect";
import quotesData from "@/app/_data/quotes.json";
import QuoteCard from "./quoteCard";

export default function HeroSection() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [quotes, setQuotes] = useState<string[]>([]);

  const handleTopicChange = (topic: string) => {
    setSelectedTopic(topic);
  };

  const handleGetQuote = () => {
    if (!selectedTopic) return;

    const topicObj = quotesData.find((item) => item.topic === selectedTopic);
    if (topicObj) {
      const shuffled = [...topicObj.quotes].sort(() => 0.5 - Math.random());
      setQuotes(shuffled.slice(0, 3)); // Pick 3 random quotes
    }
  };

  return (
    <div className="relative">
        {/* Top Section */}
        <div className="h-40 flex flex-col items-center justify-center gap-4">
          <h1 className="text-6xl font-bold text-sky-900">Quote Generator</h1>
          <TopicSelect onTopicChange={handleTopicChange} />
          <Button onClick={handleGetQuote}>Get Quote</Button>
        </div>

        {/* Curved Divider */}
        <div className="overflow-hidden leading-none rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0e7490" fillOpacity="1" d="M0,192L80,202.7C160,213,320,235,480,218.7C640,203,800,149,960,117.3C1120,85,1280,75,1360,69.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        </div>

        {/* Bottom Section */}
        <div className="bg-cyan-700 p-8 min-h-[300px] flex flex-col items-center justify-center gap-6">
          {quotes.length > 0 ? (
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                {quotes.map((quote, index) => (
                <QuoteCard key={index} quote={quote} />
                ))}
            </div>
          ) : (
            <p className="text-lg text-white"></p>
          )}
        </div>
      </div>
  );
}
