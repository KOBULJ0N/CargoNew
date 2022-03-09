import styled from 'styled-components';


import { ReactComponent as Logo } from '../../assets/Icons/Logo.svg';
import { ReactComponent as phone } from '../../assets/Icons/phone.svg';
import { ReactComponent as search } from '../../assets/Icons/search.svg';
import { ReactComponent as hamburger } from '../../assets/Icons/hamburger.svg';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  padding-left: 126px;
  padding-right: 65.61px;
  width: 100%;
  box-shadow: 7px 7px 18px rgba(0,0,0, 0.2);
  background: #fff;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 36px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
`;

export const Button = styled.button`
  border-radius: 50px;
  height: 30px;
  border: none;
  outline: none;
  /* color: #fff; */
  padding: 0 8px;
  background: linear-gradient(90deg, #47abd8 0%, #0071bc 100%);
  cursor: pointer;
`;

export const ButtonOrange = styled.button`
  border-radius: 50px;
  height: 30px;
  border: none;
  outline: none;
  color: #fff;
  padding: 0px 8px;
  background: linear-gradient(179.61deg, #f7931e -194.86%, #ff4242 70.66%);
  cursor: pointer;
`;

export const Brandname = styled(Logo)`
  width: 245.8px;
  height: 45px;
  cursor: pointer;
`;

export const Phone = styled(phone)`
  width: 15.28px;
  cursor: pointer;
  height: 26.88px;
  margin: 6.15px;
`;

export const Search = styled(search)`
  cursor: pointer;

  width: 26.78px;
  height: 26.9px;
  margin: 6.15px;
`;

export const Hamburger = styled(hamburger)`
  cursor: pointer;

  width: 26.78px;
  height: 26.9px;
  margin: 6.15px;
`;

export const Text = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */

  color: #47abd8;
`;
