'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { InfoCircledIcon, StarIcon, CodeIcon } from '@radix-ui/react-icons';

export function RadixCard() {
  const cardData = [
    {
      icon: <InfoCircledIcon className="w-6 h-6 text-blue-500" />,
      title: "Getting Started",
      description: "Learn the basics of our Next.js 15 template and get up to speed quickly.",
      link: "#getting-started"
    },
    {
      icon: <StarIcon className="w-6 h-6 text-yellow-500" />,
      title: "Key Features",
      description: "Explore the powerful features built into this modern web application template.",
      link: "#features"
    },
    {
      icon: <CodeIcon className="w-6 h-6 text-green-500" />,
      title: "Developer Tools",
      description: "Discover the integrated development tools and best practices.",
      link: "#developer-tools"
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {cardData.map((card, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center space-x-4">
            {card.icon}
            <CardTitle>{card.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{card.description}</CardDescription>
          </CardContent>
          <CardFooter>
            <a 
              href={card.link} 
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              Learn More
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </a>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}