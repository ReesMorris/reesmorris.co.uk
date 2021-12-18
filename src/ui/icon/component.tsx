import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface IconProps {
  name: IconName;
  weight?: IconPrefix;
}

export const Icon = (props: IconProps) => {
  const { name, weight, ...rest } = props;
  return <FontAwesomeIcon icon={[weight || 'fal', name]} {...rest} />;
};
