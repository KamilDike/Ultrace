import {GoogleSignin} from '@react-native-google-signin/google-signin';

export function googleAuthConfig() {
  GoogleSignin.configure({
    webClientId:
      '197177936798-fmpmfvr5010hqf4mgpid3qusgjfoprl1.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    hostedDomain: '', // specifies a hosted domain restriction
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    iosClientId:
      '292489887787-103f9pgpkfpd3ok26sar2ao3fr22nk7k.apps.googleusercontent.com', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
  });
}
