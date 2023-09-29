const MoreTab = () => {
  const otherProgramData = [
    {
      title: "Misk Traineeship",
      detail: "Currently At Video Task",
      status: "Active",
    },
    {
      title: "Summer Internship",
      detail: "Currently At Video Task",
      status: "Disqualified",
    },
    {
      title: "XYZ Traineeship",
      detail: "Currently At Video Task",
      status: "Disqualified",
    },
    {
      title: "London Internship",
      detail: "Currently At Video Task",
      status: "Active",
    },
  ];
  return (
    <div
      id="more"
      className="w-full bg-white rounded-2xl p-5 flex flex-col gap-6 items-start justify-start"
    >
      <h2 className="text-sm font-semibold text-dark">
        Enrolled Other Programs
      </h2>
      <div className="w-full flex flex-col items-start justify-start gap-6">
        {otherProgramData.map((item, index) => (
          <div className="w-full border-b py-5 flex items-center justify-between gap-5">
            <div className="w-full  flex items-center justify-start gap-5">
              <span className="text-dark w-10 h-10 border border-[#ECECEC] flex items-center justify-center rounded-lg">
                <img src="/paletteIcon.png" alt="icon" />
              </span>
              <div className="flex flex-col items-start justify-start gap-2">
                <h4 className="text-dark font-medium text-sm">{item.title}</h4>
                <h2 className="text-black font-normal text-sm flex items-center justify-start">
                  {item.detail}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreTab;
