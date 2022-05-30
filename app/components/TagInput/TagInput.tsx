import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
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
          onEndEditing={e => {
            setTags(new Set(tags.add(e.nativeEvent.text)));
            setIsInputActive(false);
          }}
          style={TagInputStyles.tagsTextContainer}
        />
      ) : (
        <Text style={TagInputStyles.tagsTextContainer}>
          {[...tags].map(tag => (
            <TouchableOpacity
              key={tag}
              onPress={() => {
                const newTags = new Set(tags);
                newTags.delete(tag);
                setTags(newTags);
              }}>
              <Text>{tag} </Text>
            </TouchableOpacity>
          ))}
        </Text>
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
