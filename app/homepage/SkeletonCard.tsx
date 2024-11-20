// NOT READY JUST TEST
const SkeletonCard = () => {
    return (
      <div className="flex flex-col gap-4 h-full group">
        <div className="relative flex-1 w-full overflow-hidden rounded-xl bg-gray-300 animate-pulse">
          <div className="w-full h-full bg-gray-400"></div>
        </div>
        <div className="flex-1">
          <div className="w-3/4 h-6 bg-gray-400 rounded-lg mb-2"></div>
          <div className="w-1/2 h-6 bg-gray-400 rounded-lg"></div>
        </div>
      </div>
    );
  };
  
  export default SkeletonCard;
  