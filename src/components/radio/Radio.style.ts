import styled from 'styled-components';

export const StyledRadio = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: inline-grid;
  place-items: center;

  &::after {
    content: '';
    border-radius: 50%;
    width: 4px;
    height: 4px;
  }

  &:checked {
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &:checked::after {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 4px;
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 14px;
  cursor: pointer;
`;
