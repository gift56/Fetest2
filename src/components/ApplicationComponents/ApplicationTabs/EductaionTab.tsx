const EductaionTab = () => {
  return (
    <div
      id="evaluation"
      className="w-full bg-white rounded-2xl p-5 flex flex-col gap-6 items-start justify-start"
    >
      <h2 className="text-sm font-semibold text-dark">Education</h2>
      <div className="w-full flex flex-col gap-6 items-start justify-start">
        {[0, 1].map((item, i) => (
          <div
            key={i}
            className="w-full border-b py-5 flex items-center justify-start gap-5"
          >
            <span className="text-dark w-10 h-10 border border-[#ECECEC] flex items-center justify-center rounded-lg">
              <img
                src="/buildingIcon.png"
                alt="building_icon"
                className="w-6 h-6"
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EductaionTab;
