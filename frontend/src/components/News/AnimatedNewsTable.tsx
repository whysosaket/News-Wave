import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

// Mock data for the news items
const newsItems = [
  {
    id: 1,
    title: "New AI Breakthrough",
    text: "Researchers have made a significant breakthrough in AI technology, potentially revolutionizing the field.",
    subject: "Technology",
    date: "2023-06-15"
  },
  {
    id: 2,
    title: "Global Climate Summit Announced",
    text: "World leaders are set to meet for a crucial climate summit to address pressing environmental issues.",
    subject: "Environment",
    date: "2023-07-01"
  },
  {
    id: 3,
    title: "Major Economic Reform Proposed",
    text: "A new economic reform package has been proposed, aiming to boost growth and reduce inequality.",
    subject: "Economy",
    date: "2023-06-20"
  },
  {
    id: 4,
    title: "Breakthrough in Quantum Computing",
    text: "Scientists have achieved a major milestone in quantum computing, paving the way for unprecedented computational power.",
    subject: "Science",
    date: "2023-06-18"
  }
]

const NewsItem = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isFake, setIsFake] = useState(null)

  const toggleExpand = () => setIsExpanded(!isExpanded)

  const checkFakeNews = () => {
    setIsFake(Math.random() < 0.5)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="mb-4 overflow-hidden">
        <CardContent className="p-0 bg-[#111111] text-white">
          <div
            className="p-4 cursor-pointer hover:bg-black transition-colors duration-200"
            onClick={toggleExpand}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </div>
            <p className="text-sm text-gray-500">{item.subject} | {item.date}</p>
          </div>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="px-4 pb-4"
            >
              <p className="mb-4">{item.text}</p>
              <div className="flex justify-between items-center">
                <Button onClick={checkFakeNews} variant="outline" className='text-black'>
                  Check if Fake News
                </Button>
                {isFake !== null && (
                  <span className={`font-semibold ${isFake ? 'text-red-500' : 'text-green-500'}`}>
                    {isFake ? 'Fake' : 'True'}
                  </span>
                )}
              </div>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function Component() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Latest News</h1>
      <div className="space-y-4">
        {newsItems.map((item) => (
          <NewsItem key={item.id} item={item} />
        ))}
      </div>
    </>
  )
}