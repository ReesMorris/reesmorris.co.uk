// Fixes the custom Head component breaking the automatic CSS
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

// Our icon imports
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGithub,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import {
  faSun,
  faMoon,
  faEnvelope,
  faSearch
} from '@fortawesome/pro-light-svg-icons';

library.add(
  faSun,
  faMoon,
  faTwitter,
  faGithub,
  faLinkedin,
  faEnvelope,
  faSearch
);
