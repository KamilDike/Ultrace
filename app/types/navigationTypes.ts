import {HomeScreenEnum} from '../enums/navigation/ScreenEnum';

type userIdType = {
  userId: string;
};
export type homeScreenNavigationProp = {
  navigate: (value: HomeScreenEnum.PROFILE, {userId}: userIdType) => void;
};
