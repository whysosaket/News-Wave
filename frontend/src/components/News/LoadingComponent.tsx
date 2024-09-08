const LoadingComponent = () => {
  return (
    <div className="w-full animate-pulse border-white/40 border rounded-md h-20 mb-4 p-4">
    <div className="flex justify-between">
        <div className="w-36 h-6 bg-gray-200/40 animate-pulse"></div>
        <div className="w-6 h-6 bg-gray-200/40 animate-pulse"></div>
    </div>
    
    <div className="w-44 mt-2 h-3 bg-gray-400/40 animate-pulse"></div>
  </div>
  )
}

export default LoadingComponent