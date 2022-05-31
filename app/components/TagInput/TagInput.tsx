import React, {useState} from 'react';
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import {TagInputStyles} from './TagInputStyles';
import {TextStyles} from '../../styles/TextStyles';

const TagInput = () => {
  const [tags, setTags] = useState<Set<string>>(new Set(['test']));
  const [isInputActive, setIsInputActive] = useState(false);

  return (
    <View style={TagInputStyles.container}>
      {isInputActive ? (
        <TextInput
          autoFocus={true}
          onEndEditing={({nativeEvent: {text}}) => {
            if (text.length > 20) Alert.alert('Message', 'Tag is too long');
            else {
              setTags(new Set(tags.add(text)));
              setIsInputActive(false);
            }
          }}
          style={TagInputStyles.tagsTextContainer}
        />
      ) : (
        <TouchableOpacity
          style={TagInputStyles.tagsTextContainer}
          activeOpacity={1}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text>
              {[...tags].map(tag => (
                <TouchableOpacity
                  key={tag}
                  onPress={() => {
                    const newTags = new Set(tags);
                    newTags.delete(tag);
                    setTags(newTags);
                  }}>
                  <Text>[{tag}] </Text>
                </TouchableOpacity>
              ))}
            </Text>
          </ScrollView>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={TagInputStyles.button}
        onPress={() => setIsInputActive(true)}>
        <Text style={TextStyles.bold}>Add Tag</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TagInput;
