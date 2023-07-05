import { styled } from "styled-components"

export const CardProductsContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 22rem;
  padding: 1rem;
  background-color: white;
  border-radius: 0.25rem;
  transition: box-shadow 200ms ease 0s;
  box-shadow: rgba(40, 41, 61, 0.08) 0px 0px 1px, rgba(96, 97, 112, 0.16) 0px 0.5px 2px;
  cursor: pointer;

  img {
    width: 85%;
    height: 15rem;
    margin-bottom: 1rem; 
  }

  h3 {
    height: 2.5rem;
    margin-bottom: 2.5rem;
    font-size: 0.85em;
    background-color: white;
  }

  p {
    font-weight: bolder;
    color: #FA683F;
    background-color: white;
  }
`;