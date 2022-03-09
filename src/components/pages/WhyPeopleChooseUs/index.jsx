import React from 'react';
import Block, { Main, Right } from './style';
import Anchor from '../../Generic';
import Kategory from '../../Kategory/index'


export const WhyPeopleChooseUs = () => {
    return (
        <Main id='block4'>
            <Block>
                <Block.Left>
                    <Kategory />
                </Block.Left>

                <Right>
                    <Right.Title>WHY PEOPLE CHOOSE US?</Right.Title>

                    <Right.InsetBlock>

                        <Right.ChangeBlock end='200'>
                            <Right.BlockTitle>INDUSTRY LEADERSHIP</Right.BlockTitle>
                            <Right.Block>
                                
                                
                            </Right.Block>
                        </Right.ChangeBlock>

                        <Right.ChangeBlock>
                            <Right.BlockTitle>TECHNOLOGY</Right.BlockTitle>
                            <Right.Block></Right.Block>
                        </Right.ChangeBlock>

                        <Right.ChangeBlock end='200'>
                            <Right.BlockTitle>EXCEPTIONAL CUSTOMER SERVICE</Right.BlockTitle>
                            <Right.Block></Right.Block>
                        </Right.ChangeBlock>

                    </Right.InsetBlock>

                </Right>
                
            </Block>
            <Main.Anchor>
                <Anchor />
            </Main.Anchor>

        </Main>
    )
}

export default WhyPeopleChooseUs;