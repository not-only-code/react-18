const handleLoad = ({ currentTarget }) => currentTarget.classList.add('loaded');

const Image = (props) => <img {...props} loading="lazy" onLoad={handleLoad} />;

export default Image;