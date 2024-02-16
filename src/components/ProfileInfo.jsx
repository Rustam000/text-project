import PropTypes from "prop-types";

const ProfileInfo = ({ profileInfo }) => {
  return (
    <>
      <h2 className="text-black-500 pb-6 pt-10 ml-20 pb-10">
        {profileInfo.title}
      </h2>
      <div className="flex gap-20 border-b-2 pb-10">
        <div className="ml-20">
          <h3 className="text-black-700 font-bold">{profileInfo.firstItem}</h3>
          <p>{profileInfo.firstSubitem}</p>
        </div>
        <div>
          <h3 className="text-black-700 font-bold">
            {profileInfo.secondTitle}
          </h3>
          <p>{profileInfo.secondSubTitle}</p>
        </div>
        <div className="mr-20">
          <h3 className="text-black-700 font-bold">{profileInfo.thirdItem}</h3>
          <p>{profileInfo.thirdSubTitle}</p>
        </div>
      </div>
    </>
  );
};

ProfileInfo.propTypes = {
  profileInfo: PropTypes.object.isRequired,
};

export default ProfileInfo;
