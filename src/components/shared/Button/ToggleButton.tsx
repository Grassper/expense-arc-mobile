import React from 'react';
import {Switch} from 'react-native';

import Colors from '@/root/src/constants/colors';

interface PropsTypes {
    isEnabled: boolean;
    onClick: () => void;
}

export const ToggleButton: React.FC<PropsTypes> = ({isEnabled, onClick}) => {
    return (
        <Switch
            ios_backgroundColor={Colors.white}
            onValueChange={onClick}
            thumbColor={isEnabled ? Colors.dodgerBlue : Colors.liteGray}
            trackColor={{false: Colors.white, true: Colors.white}}
            value={isEnabled}
        />
    );
};
