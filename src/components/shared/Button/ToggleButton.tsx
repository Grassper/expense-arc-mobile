import React from 'react';
import {Switch} from 'react-native';

import Colors from '@/root/src/constants/colors';

interface ToggleTypes {
    isEnabled: boolean;
    onClick: () => void;
}

export const ToggleButton: React.FC<ToggleTypes> = ({isEnabled, onClick}) => {
    return (
        <Switch
            trackColor={{false: Colors.white, true: Colors.white}}
            thumbColor={isEnabled ? Colors.dodgerBlue : Colors.liteGray}
            ios_backgroundColor={Colors.white}
            onValueChange={onClick}
            value={isEnabled}
        />
    );
};
