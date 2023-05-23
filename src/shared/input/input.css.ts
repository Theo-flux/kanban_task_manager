import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';
import { transition } from '@/utils';

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const StyledCloseIcon = styled(IoClose)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  color: var(--regeant-gray);
  ${transition}

  &:hover {
    color: var(--blue-marguerite);
    transform: scale(0.8);
  }
`;

export const DeletableInputWrapper = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & input {
    width: 92%;
  }
`;

export const InputEl = styled.input`
  width: 100%;
  border: 1px solid var(--input-border);
  background-color: var(--side);
  padding: 0.5rem;
  border-radius: 4px;
  &::placeholder {
    color: var(--input-placeholder);
  }

  &:focus {
    outline: 1px solid var(--blue-marguerite);
  }
`;

export const TextareaEl = styled.textarea`
  width: 100%;
  border: 1px solid var(--input-border);
  background-color: var(--side);
  padding: 0.5rem;
  border-radius: 4px;
  &::placeholder {
    color: var(--input-placeholder);
  }

  &:focus {
    outline: 1px solid var(--blue-marguerite);
  }
  resize: none;
  height: 112px;
`;

export const SelectEl = styled.select`
  width: 100%;
  border: 1px solid var(--input-border);
  background-color: var(--side);
  padding: 0.5rem;
  border-radius: 4px;
  &::placeholder {
    color: var(--input-placeholder);
  }

  &:focus {
    outline: 1px solid var(--blue-marguerite);
  }
`;

export const InputLabel = styled.label`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: var(--input-label);
  margin-bottom: 0.7rem;
`;

export const InputError = styled.small``;
