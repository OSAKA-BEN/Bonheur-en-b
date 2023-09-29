import PropTypes from 'prop-types';

const FeatureCard = ({ title, content, link, onHover }) => (
  <a href={link} target="_blank" rel="noreferrer" className="block my-2" onMouseEnter={onHover}>
    <div className="flex flex-row p-4 rounded-[20px] feature-card hover:border-1 hover:border-white cursor-pointer text-center border border-[#242422] mx-2">
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="text-2xl mb-1 font-bold">
          {title}
        </h4>
        <span className="">
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
