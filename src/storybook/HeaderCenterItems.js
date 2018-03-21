import React from 'react';
import {storiesOf} from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { HeaderCenterItems } from '../components/HeaderCenterItems/HeaderCenterItems';

storiesOf('HeaderCenterItems', module)

    .add('Chat page', () => { 
            return <HeaderCenterItems groupName="BrokenCodeGang" participants="8 участников"/>
        }
    )
    .add('Chat pages', () => { 
        return <HeaderCenterItems groupName="Telegram" />
    }
);