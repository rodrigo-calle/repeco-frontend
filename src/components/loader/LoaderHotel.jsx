/* eslint-disable react/prop-types */
import React from 'react';
import Lottie from 'react-lottie';
import loaderHotel from './loader.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  redererSettings: {
    preserveAspectRatio: 'xMidYmid slice',
  },
  animationData: loaderHotel,
};

const LoaderHotel = ({ widthLoader, heightLoader }) => {
  return (
    <div
      style={{
        width: widthLoader || '700px',
        height: heightLoader || '500px',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        margin: 'auto',
      }}
    >
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default LoaderHotel;
