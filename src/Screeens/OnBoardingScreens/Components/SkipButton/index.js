import React from 'react';
import {SkipView,SkipViewButton,Text} from './style';
export const SkipButton =(props)=>{
    console.log("props ::::::",props.nextScreen);
    return(
        <SkipView>
            <SkipViewButton>
                <Text>Skip</Text>
            </SkipViewButton>
        </SkipView>
    );
}

