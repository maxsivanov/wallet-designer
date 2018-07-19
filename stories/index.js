import React from 'react';
import { storiesOf } from '@storybook/react';
import { WalletDesigner } from '../components/WalletDesigner';
import def1 from './story.json';
import logoPlusText from './logo_plus_text.json';

storiesOf('WalletDesigner', module)
    .add('Front with logo alone', () => (
        <WalletDesigner definition={def1} number="000001" side={0}/>
    ))
    .add('Front with logo and logoText', () => (
        <WalletDesigner definition={logoPlusText} number="000001" side={0}/>
    ))
    .add('Back', () => (
        <WalletDesigner definition={def1} side={1}/>
    ));
