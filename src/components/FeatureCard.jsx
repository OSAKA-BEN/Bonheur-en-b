import PropTypes from 'prop-types';

const FeatureCard = ({ title, content, link, onHover }) => (
  <a href={link} target="_blank" rel="noreferrer" className="block" onMouseEnter={onHover}>
    <div className="flex flex-row p-6 rounded-[20px] feature-card hover:bg-white hover:text-white cursor-pointer">
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
