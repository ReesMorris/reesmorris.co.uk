import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { BorderRadius, ForwardLayout } from '..';

export interface ImageProps
  extends NextImageProps,
    Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'placeholder' | 'src'> {
  radius?: BorderRadius;
}

export const Image = (props: ImageProps) => {
  return (
    <ForwardLayout borderRadius={props.radius}>
      <NextImage {...props} />
    </ForwardLayout>
  );
};
