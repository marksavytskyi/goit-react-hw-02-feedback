import styled from '@emotion/styled';

export const OptionList = styled.ul`
  display: flex;
  padding: 10px;
`;

export const OptionItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  text-transform: uppercase;
  font-weight: 700;
  background-color: #fff;
  width: 100px;
  height: 25px;
  border-radius: 5%;
  border: none;
  transition: transform 200ms ease-out;
  &:hover {
    background-color: rgb(80, 222, 33);
    border-bottom: 1px solid black;
    transform: scale(110%);
  }
`;
