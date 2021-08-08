import {MaterialIcons} from '@expo/vector-icons';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import styled from 'styled-components/native';

import {BackButton} from '@/root/src/components/shared/Button';
import {
    HeadingContainer,
    ScrollContainer
} from '@/root/src/components/shared/Container';
import {Header} from '@/root/src/components/shared/Header';
import Colors from '@/root/src/constants/colors';
import {RootStackParamList} from '@/root/src/types/index';

type DetailsScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'TransactionDetail'
>;

type Props = {
    navigation: DetailsScreenNavigationProp;
};

const IconContainer = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

const Spacer = styled.View`
    padding: 5px;
`;

const Text = styled.Text`
    font-family: 'ms';
    color: ${Colors.white};
`;

const CurrencyText = styled(Text)`
    font-size: 16px;
`;

const CategoryText = styled(Text)`
    font-size: 16px;
    font-family: 'rm';
`;

const DateText = styled(Text)`
    font-size: 16px;
    font-family: 'mm';
`;

const TitleText = styled(Text)`
    font-size: 26px;
    font-family: 'rm';
`;

const FieldHeading = styled(Text)`
    font-size: 16px;
    margin-bottom: 20px;
`;

const FieldText = styled(Text)`
    font-size: 16px;
    font-family: 'mr';
    color: ${Colors.primary};
    background-color: ${Colors.white};
    line-height: 28px;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 20px;
`;

const SubHeadingContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: -10px;
    padding-bottom: 150px;
`;

const Container = styled.View`
    background-color: ${Colors.pink};
    align-items: center;
`;

const ContentContainer = styled.View`
    flex: 1;
    background-color: ${Colors.background};
    align-items: center;
`;

const AppContainer = styled.View`
    width: 90%;
`;

const ImageContainer = styled.View`
    margin-bottom: 20px;
    height: 150px;
    flex: auto;
    border-radius: 7px;
    overflow: hidden;
`;

const Image = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 7px;
    background-color: ${Colors.white};
`;

const DetailsBox = styled.View`
    background-color: ${Colors.darkGray};
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    margin-top: -120px;
`;

export const TransactionDetail: React.FC<Props> = ({navigation}) => {
    const [imageUrl, setImageUrl] = useState(
        'https://images.pexels.com/' +
            'photos/1602726/pexels-photo-1602726.jpeg'
    );
    return (
        <>
            <Container>
                <AppContainer>
                    <Header>
                        <BackButton onClick={() => navigation.goBack()} />
                        <IconContainer>
                            <MaterialIcons
                                name="mode-edit"
                                size={26}
                                color={Colors.white}
                            />
                            <Spacer />
                            <MaterialIcons
                                name="delete"
                                size={26}
                                color={Colors.white}
                            />
                        </IconContainer>
                    </Header>
                    <HeadingContainer header>
                        <TitleText>Swiggy</TitleText>
                        <CurrencyText>$ 3,040</CurrencyText>
                    </HeadingContainer>
                    <SubHeadingContainer>
                        <CategoryText>Food</CategoryText>
                        <DateText>30 oct 2021, 1.35 pm</DateText>
                    </SubHeadingContainer>
                </AppContainer>
            </Container>
            <ContentContainer>
                <AppContainer>
                    <DetailsBox>
                        <ScrollContainer>
                            <FieldHeading>Transfer Type</FieldHeading>
                            <FieldText>Indian bank 1339</FieldText>
                            <FieldHeading>Description</FieldHeading>
                            <FieldText>
                                Sed a magna semper, porta purus eu, ullamcorper
                                ligula. Nam sit amet consectetur sapien. Etiam
                                dui ipsum, viverra vel turpis ut, dignissim
                                elementum mauris.
                            </FieldText>
                            <FieldHeading>Message</FieldHeading>
                            <FieldText>
                                Sed a magna semper, porta purus eu, ullamcorper
                                ligula. Nam sit amet consectetur sapien. Etiam
                                dui ipsum, viverra vel turpis ut, dignissim
                                elementum mauris. Sed dapibus auctor
                                scelerisque. Aenean at leo tellus.
                            </FieldText>
                            {!!imageUrl && (
                                <>
                                    <FieldHeading>
                                        Bill Or Warranty
                                    </FieldHeading>
                                    <ImageContainer>
                                        <Image
                                            source={{
                                                uri: imageUrl
                                            }}
                                            accessibilityLabel="bill image"
                                        />
                                    </ImageContainer>
                                </>
                            )}
                        </ScrollContainer>
                    </DetailsBox>
                </AppContainer>
            </ContentContainer>
        </>
    );
};
