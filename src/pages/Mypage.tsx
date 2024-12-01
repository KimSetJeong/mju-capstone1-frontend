import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { AxiosMypage } from '../apis/AxiosMypage';
import ContentBtn from '../components/Mypage/ContentBtn';

interface Record {
  titleId: number;
  title: string;
  createdAt: string;
}

interface RecordData {
  myRecord: Record[];
}

const Mypage = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState<RecordData | null>(null);

  const fetchData = async () => {
    try {
      const response = await AxiosMypage();
      setResponse(response);
    } catch (error) {
      console.error('마이 페이지 에러 발생: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('로그아웃 되었습니다!');
    navigate('/login');
  };

  return (
    <Container>
      <TopWrapper>
        <Text>나의 기록</Text>
        <LogoutBtn onClick={handleLogout}>로그아웃</LogoutBtn>
      </TopWrapper>
      <Line />
      <BtnArea>
        {response?.myRecord.map((data) => (
          <ContentBtn
            key={data.titleId}
            id={data.titleId}
            title={data.title}
            date={new Date(data.createdAt || '').toLocaleString('ko-KR')}
          />
        ))}
      </BtnArea>
    </Container>
  );
};

export default Mypage;

const Container = styled.div`
  width: calc(100% - 164px);
  padding: 77px 82px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;

const TopWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

const Text = styled.p`
  font-weight: 900;
  font-size: 25px;
  color: ${({ theme }) => theme.color.BLACK};
`;

const LogoutBtn = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.BLUE700};
  color: ${({ theme }) => theme.color.WHITE};
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Line = styled.div`
  width: 90%;
  height: 1px;
  background-color: ${({ theme }) => theme.color.BLUE200};
  margin-top: 26px;
`;

const BtnArea = styled.div`
  display: flex;
  width: 970px;
  height: auto;
  gap: 20px 35px;
  flex-wrap: wrap;
  margin-top: 70px;
`;
