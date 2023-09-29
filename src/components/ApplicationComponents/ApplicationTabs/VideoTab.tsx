const VideoTab = () => {
  return (
    <div
      id="video"
      className="w-full bg-white rounded-2xl p-5 flex flex-col gap-6 items-start justify-start"
    >
      <div className="w-full flex items-center justify-between gap-5">
        <h2 className="text-sm font-semibold text-dark">
          Additional Questions
        </h2>
        <div className="w-[200px] h-10 border border-[#EBEBEB] rounded-lg px-3 flex items-center justify-start select-none cursor-pointer">
          <span className="text-sm font-normal text-dark">Sort</span>
        </div>
      </div>
    </div>
  );
};

export default VideoTab;
