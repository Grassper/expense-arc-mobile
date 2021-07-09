import React from 'react';
import {Switch} from 'react-native';

import Colors from '../constants/colors.constant';

interface ToggleTypes {
    isEnabled: boolean;
    onClick: () => void;
}

const ToggleButton: React.FC<ToggleTypes> = ({isEnabled, onClick}) => {
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

export default ToggleButton;
