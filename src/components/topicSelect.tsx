"use client";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger,
    SelectValue } from "@/components/ui/select";
import quotesData from "@/app/_data/quotes.json";
import { useState } from "react";

type TopicSelectProps = {
  onTopicChange: (topic: string) => void;
};

export function TopicSelect({ onTopicChange }: TopicSelectProps) {
    const [selected, setSelected] = useState("");

    const handleChange = (value: string) => {
        setSelected(value);
        onTopicChange(value);
    };

    return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="w-full sm:w-64 md:w-80 lg:w-96">
        <SelectValue placeholder="Select a topic" />
      </SelectTrigger>

      <SelectContent>
        {quotesData.map((item) => (
          <SelectItem key={item.topic} value={item.topic}>
            {item.topic}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
