import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: ${({ description }) => (description === true ? "400" : "250px")};
  width: ${({ description }) => (description === true ? "300px" : "250px")};

  padding: 5px;
  margin: 30px;

  border: none;
  border-radius: 8px;
  transition: 300ms ease-in-out;
  text-align: center;

  background-image: linear-gradient(
    to top right,
    ${(props) => props.theme.colors.PrimaryLight},
    ${(props) => props.theme.colors.PrimaryLightPlus}
  );

  :hover {
    border: 2px solid ${(props) => props.theme.colors.Secundary};
    transform: scale(1.1);
    transition: 300ms;
    cursor: pointer;
  }

  * {
    margin: 20px;
  }
`;

export const Text = styled.span`
  font-size: 1rem;
  transition: 300ms;

  ${({ Tittle }) =>
    Tittle &&
    css`
      font-size: 1.3rem;
    `}
`;
