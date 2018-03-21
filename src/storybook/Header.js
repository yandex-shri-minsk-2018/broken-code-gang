import React from 'react';
import {storiesOf} from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Header } from '../components/Header/Header';

storiesOf('Header', module)
    .add('Chat list page', () => { 
            return <Header buttonExit=" " buttonHeaderRight=" " />
        }
    );
   