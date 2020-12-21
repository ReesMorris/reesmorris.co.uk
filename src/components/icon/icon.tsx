import React from 'react';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import Styles from './icon.styles';

export interface IconProps {
  icon: IconName;
  weight?: IconPrefix;
  title?: string;
}

interface LocalIconProps {
  icon: IconName;
  weight?: IconPrefix;
  title?: string;
  className?: string;
}

const Icon: React.FC<LocalIconProps> = ({
  icon,
  weight = 'fal',
  title,
  className
}) => {
  return (
    <Styles.Icon icon={[weight, icon]} title={title} className={className} />
  );
};

export default Icon;
