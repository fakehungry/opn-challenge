import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  position: relative;
  width: 500px;

  img {
    border-radius: 8px 8px 0 0;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  .row {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }

  h2 {
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.tertiary};
  }

  .overlay {
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.tertiary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .overlay-anim {
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    animation-name: overlay-anim;
    opacity: 0;
  }

  @keyframes overlay-anim {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  svg {
    cursor: pointer;
    position: absolute;
    right: 30px;
    top: 30px;
  }

  .column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .radio-group {
    display: flex;
    gap: 16px;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 300px;

    img {
      height: 150px;
    }

    h2 {
      font-size: 14px;
    }
  }
`;
