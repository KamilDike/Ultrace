/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app/app.json';
import {googleAuthConfig} from './app/services/googleAuthentication';
import React from 'react';
import AppProvider from './app/AppProvider';

googleAuthConfig();
AppRegistry.registerComponent(appName, () => AppProvider);
