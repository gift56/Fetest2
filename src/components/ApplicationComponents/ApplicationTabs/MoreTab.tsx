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
    </div>
  );
};

export default MoreTab;
