/* eslint-disable no-sequences */
import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: ${({ clicked }) => (clicked ? "0" : "-100%")};
  width: 360px;
  height: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #1f434c;
  transition: all 1s ease-in-out;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const NavClose = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  cursor: pointer;
  background: none;
  border: none;
  color: #ddd;
`;

export const List = styled.ul`
  list-style: none;
  text-align: start;
  margin: 0;
  padding: 0;
  margin-top: 50px;
`;

export const ListItem = styled.li`
  margin-bottom: 3rem;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.5s;

  :hover {
    color: #000;
  }
`;
