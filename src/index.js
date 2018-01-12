import 'components/styles/index.scss';
import 'styles/index';

import 'resolution';
import 'next-hashlize';
import 'next-param';

import {ReduxBoot} from 'next-react-redux';
import App from './app';

ReduxBoot.run(App, 'app');
