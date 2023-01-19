import styled from '@emotion/styled';

export const List = styled.ul`
  display: block;
  padding: 20px;
  width: 50%;
  border-radius: 5px;
  background-color: #fff;
  text-align: center;

  margin-bottom: 20px;
`;

export const Item = styled.li`
  font-weight: 500;
  font-size: 16px;
  &:not(:last-child) {
    margin-bottom: 7px;
  }
`;
