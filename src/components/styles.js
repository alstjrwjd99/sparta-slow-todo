import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  align-items: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const TodoContainer = styled.div`
  height: 100%;
  width: 500px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TodoHeader = styled.span`
  font-size: 30px;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 30px;
  align-items: center;
`;

export const TodoListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  padding: 30px;
  background-color: #f1f6f9;
  min-height: 450px;
  border-radius: 5px;
`;

export const TodoCard = styled.div`
  border-radius: 3px;
  padding: 12px;
  border: 1px solid #9ba4b5;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Button = styled.button`
  background-color: #394867;
  color: #f1f6f9;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
