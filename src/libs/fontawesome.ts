import { library, config } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faMoon,
  faSearch,
  faSun
} from '@fortawesome/pro-light-svg-icons';

config.autoAddCss = false;
library.add(fab, faMoon, faSun, faEnvelope, faSearch);
