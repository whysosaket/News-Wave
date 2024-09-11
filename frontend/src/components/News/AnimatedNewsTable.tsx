import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useGetNewsQuery } from '@/features/news/newsApiSlice'
import FailedToLoadNews from './failed-to-load-news'
import LoadingComponent from './LoadingComponent'
import {NewsInterface} from "@/features/news/newsApiSlice"


const NewsItem = ({ item }: {item: NewsInterface}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [isFake, setIsFake] = useState<boolean>(false)

  const toggleExpand = () => setIsExpanded(!isExpanded)

  const checkFakeNews = () => {
    setIsChecked(true)
    setIsFake(true)
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
              <h3 className="text-lg font-semibold">{
                isExpanded?item.title:item.title.substring(0,50)+"....."
                }</h3>
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
                {isChecked && (
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

  const [newsItems, setNewsItems] = useState<NewsInterface[]>([]);
  const handleRetry = () => {
    // Implement your retry logic here
    console.log('Retrying to load news...')
  }

  const { data, isError, isLoading, isSuccess } = useGetNewsQuery(1);

  useEffect(() => {
    if (!isLoading && isSuccess && data) {
      setNewsItems(data.news);
    }
  }, [isLoading, isSuccess, data]); 

  if(isLoading){
    return (
      <>
        <h1 className="text-3xl font-bold mb-6 text-center text-white">Latest News</h1>
        <LoadingComponent />
        <LoadingComponent />
        <LoadingComponent />
      </>
    )}

  if(isError){
    return (
      <>
        <FailedToLoadNews onRetry={handleRetry} />
      </>
    )
  }

  if(isSuccess){
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Latest News</h1>
      <div className="space-y-4">
        {newsItems.map((item) => (
          <NewsItem key={item._id} item={item} />
        ))}
      </div>
    </>
  )}
}