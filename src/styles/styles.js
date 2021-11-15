import styled from 'styled-components';


export const StyledButton = styled.button`
  background-color: #F2243A;
  color: #FFF;
  font-weight: bold;
  font-size: 18px;
  padding: 30px;
  border: none;
  border-radius: 10px;
  width: 260px;
  height: 50px;
  cursor: pointer;


  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NotFoundTitle = styled.h1`
  color: ${props => props.fontColor};
  text-align: center;
`;

export const Title = styled.h1`
  color: ${props => props.fontColor};
  font-size: 50px;
  text-align: center;
  margin: 50px;
  text-align: center;
`;