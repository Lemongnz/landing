import styled from "styled-components";

export const HomeData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h1 {
    margin-bottom: 8px;
  }
`;

export const HomeIcons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  width: 10%;
  min-width: 130px;
  align-items: center;
  justify-content: space-around;

  button {
    background-color: #1f434c;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-size: 30px;
    transition: all 0.4s ease-in-out;
  }

  button a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button:hover {
    box-shadow: 0px 0px 6px 3px rgb(162 138 138 / 20%);
  }
`;
