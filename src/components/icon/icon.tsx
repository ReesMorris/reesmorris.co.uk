import React from 'react';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import Styles from './icon.styles';

export interface IconProps {
  icon: IconName;
  weight?: IconPrefix;
  title?: string;
}
interface LocalIconProps extends IconProps {
  className?: string;
}

const Icon = ({ icon, weight = 'fal', title, className }: LocalIconProps) => {
  return (
    <Styles.Icon
      icon={[weight, icon]}
      title={title}
      className={className}
      width='16'
    />
  );
};

export default Icon;
