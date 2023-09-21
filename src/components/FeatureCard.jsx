import PropTypes from 'prop-types';

const FeatureCard = ({ title, content, link, onHover }) => (
  <a href={link} target="_blank" rel="noreferrer" className="block" onMouseEnter={onHover}>
    <div className="flex flex-row p-6 rounded-[20px] mb-6 feature-card hover:bg-[#0f172a] hover:text-white cursor-pointer">
      <div className={`w-[64px] h-[64px] rounded-full flex justify-center items-center bg-[#082f49]`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className=" dark:text-white text-black text-2xl leading-[23.4px] mb-1">
          {title}
        </h4>
        <span className="text-gray-500">
          {content}
        </span>
      </div>
    </div>
  </a>
);

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  onHover: PropTypes.func
};

export default FeatureCard;
