import React, {useState} from 'react';

import Screen from '../components/Screen';
import AppPicker from '../components/AppPicker';
import AppTextInput from '../components/AppTextInput';

const categories = [
  {label: 'Furniture', value: 1},
  {label: 'Clothing', value: 2},
  {label: 'Cameras', value: 3},
];

const PickerScreen = () => {
  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item: {label: string; value: number}) =>
          setCategory(item)
        }
        items={categories}
        icon="apps"
        placeholder="Category"
      />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
};

export default PickerScreen;
