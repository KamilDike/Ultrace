/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app/app.json';
import {googleAuthConfig} from './app/services/googleAuthentication';

googleAuthConfig();
AppRegistry.registerComponent(appName, () => App);
