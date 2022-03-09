import React from 'react';
import Kategory from '../../Kategory';
import Block, { Main, Right } from './style';
import Anchor from '../../Generic';

export const Numbers = () => {
    return (
        <Main id='block5'>
            <Block>
                <Block.Left>
                    <Kategory />
                </Block.Left>

                <Right>
                    <Right.Blcok></Right.Blcok>
                    <Right.Blcok></Right.Blcok>
                    <Right.Blcok></Right.Blcok>

                </Right>

            </Block>


        </Main>
    )
}


export default Numbers;