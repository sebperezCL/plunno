import React from 'react';
import {
    Container,
    MainContainer,
    LogoContainer,
    InputContainer,
    LogoImage,
    ButtonContainer,
    ResendButton,
    ResendText,
    ButtomText
} from './style';

const ResetPasswordScreen=()=>{
    return(
        <Container>
            <MainContainer>
                <LogoContainer>
                    <LogoImage source={require("../Assets/Resend.png")}/>
                </LogoContainer>
                <InputContainer>
                    <ButtonContainer>
                        <ResendButton>
                            <ResendText>Resend Email</ResendText>
                        </ResendButton>
                        <ButtomText>Wait 30 seconds before sending it </ButtomText>
                    </ButtonContainer>
                </InputContainer>
            </MainContainer>
        </Container>
    );
}

export default ResetPasswordScreen;