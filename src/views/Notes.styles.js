import FormField from 'components/molecules/FormField/FormField';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 30px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  grid-gap: 30px;
`;

export const FormWrapper = styled.form`
  padding: 40px 30px;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
`;

export const StyledFormField = styled(FormField)`
  height: ${({ isTextarea }) => (isTextarea ? '300px' : 'unset')};
`;
