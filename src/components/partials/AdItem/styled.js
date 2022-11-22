import styled from 'styled-components';

export const Item = styled.div`
  a {
    display: block;
    border: ipx solid #ccc;
    margin: 10px;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    color: #000;
    background-color: #fff;
    transition: all ease 0.2s;
    position: relative;

    &:hover {
      background-color: #d9ffcc;
      border: 1px solid #b3ff99;
    }

    .edit-button {
      top: 0;
      position: absolute;
      right: 0;
      border-radius: 50%;
      aspect-ratio: 1 / 1;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: -1px 4px 1px #0003;
      transform: translate(50%, -50%);
      border: 1px solid #0004;
    }

    .itemImage {
      width: 100%;
      img {
        width: 100%;
        border-radius: 5px;
        overflow: hidden;
        object-fit: cover;
        max-width: 260px;
        max-height: 200px;
        object-position: center;
      }
    }

    .itemName {
      font-weight: bold;
    }
  }
`;
