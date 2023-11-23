import styled from 'styled-components';

export const MarkerInfoModelStyles = styled.div`
  .marker-info-model-container {
    width: 380px;
    height: 100px;
    position: absolute;
    z-index: 100001;
    background-color: #fff;
    bottom: 70px;
    left: calc(50% - 190px);
    border-radius: 8px;
    padding: 18px 16px;
    .image-container {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      border: 1px solid #fefefe;
      margin-right: 16px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
