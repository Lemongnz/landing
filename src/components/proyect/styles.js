import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: auto;
  width: 70%;
  align-items: center;
  justify-items: center;

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
