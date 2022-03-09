/** @format */

import styled from 'styled-components';

export const Block = styled.div`
	width: 100%;
	height: 900px;
	display: grid;
	grid-template-columns: 10% 1fr;
	padding-right: 150px;
	padding-top: 120px;
`;
Block.Left = styled.div`
	display: grid;
	align-items: center;
	width: 100%;
`;
export const Main = styled.div`
	padding-top: 70px;
	padding-bottom: 30px;
`;

Block.Right = styled.div`
	padding-right: 60px;
`;




export const Right = styled.div`
    border: 1px solid red;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    

`;
Right.Blcok = styled.div`
    border: 1px solid red;

`;


export default Block;