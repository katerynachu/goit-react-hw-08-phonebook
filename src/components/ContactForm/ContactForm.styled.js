import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const StyledFormik = styled(Form)`
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${p => p.theme.colors.lightBlue};
  padding: 20px;
  border: 1px solid ${p => p.theme.colors.blue};
  border-radius: 5px;
`;

export const Error = styled(ErrorMessage)`
  color: ${p => p.theme.colors.red};
  margin-top: 5px;
  display: block;
`;

export const FormField = styled(Field)`
  display: block;
  padding: 5px 10px;
  margin-top: 10px;
  outline: none;
`;

export const AddButton = styled.button`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  width: 130px;
  padding: 10px;
  background-color: ${p => p.theme.colors.blue};
  color: white; 
  border: 1px solid transparent;
  border-radius: 4px;
  transition: color 0.5s linear, background-color 0.3s linear, border-color 0.4s ease;
  &:hover {
    background-color: transparent;
    color: ${p => p.theme.colors.blue}; 
    border-color: ${p => p.theme.colors.blue}; 
  }
`;
