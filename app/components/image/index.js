'use client';

import NextImage from 'next/image';

const handleLoad = ({ currentTarget }) => currentTarget.classList.add('loaded');

const Image = (props) => <NextImage loading="lazy"  {...props} onLoad={handleLoad} />;

export default Image;