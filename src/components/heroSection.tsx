"use client";
import { Button } from "@/components/ui/button";
import { TopicSelect } from "./TopicSelect";
import { useState } from "react";

export default function HeroSection() {
  const [selectedTopic, setSelectedTopic] = useState("");

  return (
    <div className="relative">
        {/* Top Section */}
        <div className="h-40 flex flex-col items-center justify-center gap-4">
          <h1 className="text-6xl font-bold text-sky-900">Quote Generator</h1>
          <TopicSelect onTopicChange={(topic) => setSelectedTopic(topic)} />
          <Button>Get Quote</Button>
        </div>

        {/* Curved Divider */}
        <div className="overflow-hidden leading-none rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0e7490" fillOpacity="1" d="M0,192L80,202.7C160,213,320,235,480,218.7C640,203,800,149,960,117.3C1120,85,1280,75,1360,69.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        </div>

        {/* Bottom Section */}
        <div className="bg-cyan-700 h-96 p-8">
          <p className="text-lg text-white">Add here the form, quotes, cards, etc.</p>
        </div>
      </div>
  );
}
