import NewsItem from "../components/News/NewsItem";

const News = () => {
  return (
    <>
      <div className="container mx-auto min-h-screen p-8 antialiased">
        <div>
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </div>
      </div>
    </>
  );
};

export default News;
