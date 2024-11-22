import styled from 'styled-components';
import JobTypeBtn from './JobTypeBtn';
import { useState } from 'react';
import { AxiosTitleNJob, TitleNJobValues } from '../../apis/AxiosMain';
import { useNavigate } from 'react-router-dom';

const InputWithTitle = () => {
  const Data = [
    { id: 0, type: '영업', submit: '영업' },
    { id: 1, type: '엔지니어링 · 설계', submit: '엔지니어링·설계' },
    { id: 2, type: '제조 · 생산', submit: '제조·생산' },
    { id: 3, type: '기획 · 전략', submit: '기획·전략' },
    { id: 4, type: '개발 · 데이터', submit: '개발·데이터' },
  ];
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!title || !selectedType) {
      alert('제목과 직무를 모두 선택해주세요!');
      return;
    }

    const data: TitleNJobValues = {
      title,
      categoryName: selectedType,
    };

    try {
      const response = await AxiosTitleNJob(data);
      console.log(response);
      alert('성공적으로 제출되었습니다!');
      navigate('/resume');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Wrapper>
        <Title>STEP 01. 제목과 희망 직무 설정하기</Title>
        <SubTitle>제목과 직무를 선택하고 시작하기 버튼을 눌러주세요 !</SubTitle>
        <Input
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          placeholder="여기에 제목을 입력해주세요 :)"
        />
        <BtnArea>
          {Data.map((data) => (
            <JobTypeBtn
              $isSelected={selectedType === data.submit}
              onClick={() => setSelectedType(data.submit)}
              key={data.id}
            >
              {data.type}
            </JobTypeBtn>
          ))}
          <SubmitBtn onClick={handleSubmit}>시작하기</SubmitBtn>
        </BtnArea>
      </Wrapper>
    </>
  );
};

export default InputWithTitle;

const Wrapper = styled.div`
  padding: 160px 53px 0;
`;

const Title = styled.p`
  font-weight: 900;
  font-size: 23px;
`;

const SubTitle = styled.p`
  font-weight: 500;
  font-size: 15px;
  margin-top: 5px;
`;

const Input = styled.input`
  width: 270px;
  height: 24px;
  margin-top: 43px;
  border: none;
  background-color: transparent;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  outline: none;
`;

const SubmitBtn = styled.button`
  width: 130px;
  height: 130px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.color.BLUE700};
  color: ${({ theme }) => theme.color.WHITE};
  font-size: 20px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BtnArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 41px;
  margin-top: 60px;
  justify-content: center;
  width: 600px;
`;
