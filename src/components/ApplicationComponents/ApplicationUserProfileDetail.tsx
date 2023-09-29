const ApplicationUserProfileDetail = () => {
  return (
    <div className="w-full bg-white flex items-start justify-between gap-4 flex-col lg:flex-row p-4 rounded-2xl">
      <div>
        <img
          src="/interviewImage.png"
          alt="application_image"
          className="w-[88px] h-[88px] object-contain rounded-full"
        />
      </div>
    </div>
  );
};

export default ApplicationUserProfileDetail;
