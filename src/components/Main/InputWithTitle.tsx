import styled from 'styled-components';
import JobTypeBtn from './JobTypeBtn';

const InputWithTitle = () => {
  const Data = [
    {
      id: 0,
      type: '기획 · 전략',
    },
    {
      id: 1,
      type: '마케팅 · 광고 · MD',
    },
    {
      id: 2,
      type: '인사 · HR',
    },
    {
      id: 3,
      type: '회계 · 세무',
    },
    {
      id: 4,
      type: '개발 · 데이터',
    },
  ];
  return (
    <>
      <Wrapper>
        <Title>STEP 01. 제목과 희망 직무 설정하기</Title>
        <SubTitle>제목과 직무를 선택하고 시작하기 버튼을 눌러주세요 !</SubTitle>
        <Input placeholder="여기에 제목을 입력해주세요 :)" />
        <BtnArea>
          {Data.map((data) => (
            <JobTypeBtn key={data.id}>{data.type}</JobTypeBtn>
          ))}
          <SubmitBtn>시작하기</SubmitBtn>
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
`;
