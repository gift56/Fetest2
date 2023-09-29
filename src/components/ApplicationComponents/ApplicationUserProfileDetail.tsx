const ApplicationUserProfileDetail = () => {
  const tag = ["#top_candidate", "#top_candidate"];
  const experience = ["New York", "Marketing", "London"];

  return (
    <div className="w-full bg-white flex items-start justify-between gap-4 flex-col lg:flex-row p-4 rounded-2xl">
      <div className="flex-shrink">
        <img
          src="/interviewImage.png"
          alt="application_image"
          className="w-[88px] h-[88px] object-contain rounded-full"
        />
      </div>
      <div className="flex-grow flex flex-col items-start justify-start gap-4">
        <div className="w-full flex lg:items-center justify-between gap-5 flex-col lg:flex-row items-start">
          <div className="flex flex-col items-start justify-start gap-3">
            <h2 className="flex items-center gap-4 text-sm font-semibold text-black">
              <span>Aaliyah Sanderson</span>
              <span className="text-xs font-medium text-[#037092] flex items-center justify-start gap-4">
                {experience.map((item, i) => (
                  <span key={i} className="bg-[#F3FAFC] py-2 px-4 rounded-full">
                    {item}
                  </span>
                ))}
              </span>
            </h2>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationUserProfileDetail;
