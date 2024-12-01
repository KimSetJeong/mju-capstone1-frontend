import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../components/Resume/Input';
import { AxiosResume, ResumeValues } from '../apis/AxiosResume';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { QuestionsAtom } from '../atoms/Questions';
import Loading from './Loading';

interface InputData {
  title: string;
  content: string;
}

const Resume: React.FC = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState<InputData[]>([
    { title: '', content: '' },
    { title: '', content: '' },
    { title: '', content: '' },
  ]);
  const [questions, setQuestions] = useRecoilState(QuestionsAtom);
  const [isLoading, setIsLoading] = useState(false);
  console.log(questions);
  const handleAddInput = () => {
    if (inputs.length < 5) {
      setInputs([...inputs, { title: '', content: '' }]);
    }
  };

  const handleRemoveInput = (index: number) => {
    if (inputs.length > 3) {
      setInputs(inputs.filter((_, i) => i !== index));
    } else if (inputs.length === 3) {
      alert('자기소개서 문항은 최소 세 개 입니다!');
    }
  };

  const handleChange = (
    index: number,
    field: keyof InputData,
    value: string,
  ) => {
    const updatedInputs = [...inputs];
    updatedInputs[index][field] = value;
    setInputs(updatedInputs);
  };

  const handleSubmit = async () => {
    // 중복 클릭 방지
    if (isLoading) return;

    setIsLoading(true);

    const isValid = inputs.every(
      (input) => input.title.trim() !== '' && input.content.trim() !== '',
    );

    if (!isValid) {
      alert('모든 문항의 제목과 내용을 작성해주세요.');
      setIsLoading(false); // 상태 초기화
      return;
    }

    const data: ResumeValues = {
      inputs,
    };

    try {
      const response = await AxiosResume(data);
      setQuestions(response);

      if (response[0]?.length > 0) {
        alert('성공적으로 제출되었습니다.');
        navigate('/question');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('제출에 실패했습니다.');
    } finally {
      setIsLoading(false); // 상태 초기화
    }
  };

  return isLoading ? (
    <Loading />
  ) : (
    <Container>
      <Top>
        <Title>STEP 02. 자소서 문항 작성하기</Title>
        <SubTitle>3~5개의 질문과 답변을 작성해주세요 !</SubTitle>
      </Top>
      <InputWrapper>
        {inputs.map((input, index) => (
          <Input
            key={index}
            index={index}
            title={input.title}
            content={input.content}
            onChange={handleChange}
            onRemove={handleRemoveInput}
          />
        ))}
      </InputWrapper>
      {inputs.length !== 5 ? (
        <Button onClick={handleAddInput}>항목 추가</Button>
      ) : null}
      <GuideText>
        아래 다음 버튼을 눌러 자소서 기반 예상 질문을 받아보세요 !
      </GuideText>
      <Button onClick={handleSubmit}>다음</Button>
    </Container>
  );
};

export default Resume;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 150px 0 100px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 1040px;
  margin-bottom: 28px;
`;

const Title = styled.p`
  font-size: 25px;
  font-weight: 900;
`;

const SubTitle = styled.p`
  font-size: 17px;
  font-weight: 500;
  margin-top: 6px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 67px;
`;

const Button = styled.button`
  width: 165px;
  height: 56px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.BLUE700};
  color: ${({ theme }) => theme.color.WHITE};
  font-size: 25px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GuideText = styled.p`
  font-size: 23px;
  font-weight: 500;
  margin: 100px 0 40px;
`;
