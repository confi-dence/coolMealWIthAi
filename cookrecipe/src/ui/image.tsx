import { Image as ExpoImage, ImageProps as ExpoImageProps } from 'expo-image';
import React from 'react';

export interface ImageProps extends ExpoImageProps {}

export const Image = React.forwardRef<ExpoImage, ImageProps>((props, ref) => {
  return <ExpoImage ref={ref} cachePolicy="disk" {...props} />;
});
