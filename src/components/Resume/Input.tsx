import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Delete } from '../../assets/images/Delete.svg';

interface InputProps {
  index: number;
  title: string;
  content: string;
  onChange?: (index: number, field: 'title' | 'content', value: string) => void;
  onRemove?: (index: number) => void;
  readOnly?: boolean;
}

const Input: React.FC<InputProps> = ({
  index,
  title,
  content,
  onChange,
  onRemove,
  readOnly = false,
}) => {
  return (
    <Container>
      <Title
        placeholder="질문을 입력해주세요"
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange?.(index, 'title', e.target.value)
        }
        readOnly={readOnly}
      />
      <ContentWrapper>
        <Content
          placeholder="답변을 입력해주세요"
          value={content}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            onChange?.(index, 'content', e.target.value)
          }
          readOnly={readOnly}
        />
      </ContentWrapper>
      {onRemove && <RemoveButton onClick={() => onRemove(index)} />}
    </Container>
  );
};

export default Input;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
`;

const Title = styled.input<{ readOnly: boolean }>`
  width: 1000px;
  height: 24px;
  font-size: 20px;
  font-weight: 500;
  border: none;
  outline: none;
  overflow: hidden;
  cursor: ${({ readOnly }) => (readOnly ? 'not-allowed' : 'text')};
  user-select: ${({ readOnly }) => (readOnly ? 'none' : 'auto')};
`;

const ContentWrapper = styled.div`
  width: 1043px;
  height: 164px;
  border: 1px solid ${({ theme }) => theme.color.BLUE500};
  border-radius: 20px;
  padding: 19px 23px;
  box-sizing: border-box;
  overflow: hidden;
`;

const Content = styled.textarea<{ readOnly: boolean }>`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  resize: none;
  overflow-y: auto;
  box-sizing: border-box;
  padding: 0;
  cursor: ${({ readOnly }) => (readOnly ? 'not-allowed' : 'text')};
  user-select: ${({ readOnly }) => (readOnly ? 'none' : 'auto')};
`;

const RemoveButton = styled(Delete)`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  cursor: pointer;
`;
