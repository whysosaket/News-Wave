import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useGetNewsQuery, usePostNewsMutation } from '@/features/news/newsApiSlice'
import FailedToLoadNews from './failed-to-load-news'
import LoadingComponent from './LoadingComponent'
import {NewsInterface} from "@/features/news/newsApiSlice"
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useSearchParams } from 'react-router-dom'


const NewsItem = ({ item }: {item: NewsInterface}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [isFake, setIsFake] = useState<boolean>(false)
  const [postNews] = usePostNewsMutation();

  const toggleExpand = () => setIsExpanded(!isExpanded)

  const checkFakeNews = async () => {
    try {
      const newsItem = {model: "LR", text: item.text}
      const response = await postNews(newsItem).unwrap();
      setIsChecked(true);
      setIsFake(!response.prediction)
    } catch (error) {
      console.error('Failed to post news item:', error);
    }
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
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageNumber, setPageNumber] = useState(Number(searchParams.get("page")) || 1);

  const { data, isError, isLoading, isSuccess } = useGetNewsQuery(pageNumber);

  const handleRetry = () => {
    console.log('Retrying to load news...');
  };

  const handleNext = () => {
    if (data && pageNumber < data.totalPages) {
      const newVal = pageNumber + 1;
      setPageNumber(newVal);
      searchParams.set("page", String(newVal));
      setSearchParams(searchParams);
    }
  };

  const handlePrev = () => {
    if (pageNumber > 1) {
      const newVal = pageNumber - 1;
      setPageNumber(newVal);
      searchParams.set("page", String(newVal));
      setSearchParams(searchParams);
    }
  };

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
      <div className='flex gap-3 justify-center'>
        <Button onClick={handlePrev} className='hover:bg-gray-300 flex justify-center align-middl bg-white text-black'>Back <MdNavigateBefore className='my-auto' size={22} /> </Button>
        <div className='my-auto'>
          {pageNumber}
        </div>
        <Button onClick={handleNext} className='hover:bg-gray-300 flex justify-center align-middl bg-white text-black'>Next <MdNavigateNext className='my-auto' size={22} /> </Button>
      </div>
    </>
  )}
}