import styled from "styled-components";

export const Container = styled.div`
  max-width: 300px;
  border: 2px solid red;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 30px auto;

  img {
    width: 100%;
  }

  @media screen and (max-width: 900px) {
    max-width: 400px;
    height: 550px;
  }
`;
export const Title = styled.h3`
  font-size: 1.5rem;
  margin: 0;
`;
export const Description = styled.p``;

export const Source = styled.a`
  width: 35%;
  height: 40px;
  border-radius: 25px;
  border: none;
  transition: 0.5s;
  background-color: #1f434c;
  align-items: center;
  display: flex;
  justify-content: center;
  align-content: center;

  :hover {
  }
`;

export const Tech = styled.div`
  margin-bottom: 15px;
  font-size: 20px;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
