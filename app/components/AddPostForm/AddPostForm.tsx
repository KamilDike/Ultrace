import React from 'react';
import {
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import TagInput from '../TagInput/TagInput';
import {AddPostFormStyles} from './AddPostFormStyles';
import {ContainerStyles} from '../../styles/ContainerStyles';
import {TagInputStyles} from '../TagInput/TagInputStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface AddPostFormProps {
  exit: () => void;
}

const AddPostForm = ({exit}: AddPostFormProps) => {
  return (
    <TouchableWithoutFeedback onPress={exit}>
      <View style={ContainerStyles.modal}>
        <View style={AddPostFormStyles.container}>
          <TextInput placeholder="Post name" style={AddPostFormStyles.input} />
          <TagInput />
          <View style={ContainerStyles.horizontal}>
            <TouchableOpacity
              style={[TagInputStyles.button, TagInputStyles.buttonHalf]}
              onPress={exit}>
              <Ionicons name="exit-outline" size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[TagInputStyles.button, TagInputStyles.buttonHalf]}
              onPress={exit}>
              <Ionicons name="add" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AddPostForm;
