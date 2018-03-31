import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ChatListPage } from '../components/ChatListPage/ChatListPage';

storiesOf('ChatListPage', module)
  .add('no modifiers', () => (
    <ChatListPage />
  ));
