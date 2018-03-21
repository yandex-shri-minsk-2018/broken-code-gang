import {configure} from '@storybook/react';

function loadStories() {
    require('./Avatar.js');
    require('./ChatField.js');
    require('./Header.js');
    require('./HeaderCenterItems.js');
}

configure(loadStories, module);