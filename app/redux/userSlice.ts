import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import {FirestoreEnum} from '../enums/FirestoreEnum';
import auth from '@react-native-firebase/auth';
import {IUser} from '../interfaces/IUser';

type SliceStateType = {
  loading: boolean;
  user: IUser | undefined;
  error: string | undefined;
};

const initialState: SliceStateType = {
  loading: false,
  user: undefined,
  error: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchUser.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload as IUser;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.user = undefined;
      state.error = action.error.message;
    });
    builder.addCase(createUser.pending, state => {
      state.loading = true;
    });
    builder.addCase(createUser.fulfilled, state => {
      state.loading = false;
    });
    builder.addCase(createUser.rejected, state => {
      state.loading = false;
    });
  },
  reducers: {}
});

export const fetchUser = createAsyncThunk('fetchUser', async () => {
  const userRef = await firestore()
    .collection(FirestoreEnum.USERS)
    .doc(auth().currentUser?.uid)
    .get();
  return userRef.data();
});

export const createUser = createAsyncThunk('createUser', async (name: string) =>
  firestore().collection(FirestoreEnum.USERS).doc(auth().currentUser?.uid).set({
    id: auth().currentUser?.uid,
    name: name,
    posts: []
  })
);

export default userSlice.reducer;
