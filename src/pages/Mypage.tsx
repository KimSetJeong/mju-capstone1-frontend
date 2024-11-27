import { styled } from 'styled-components';
import ContentBtn from '../components/Mypage/ContentBtn';

const Mypage = () => {
  const Datas = [
    { id: 0, title: '삼성 합격 기원', date: '2024.09.01 13:50' },
    { id: 1, title: 'LG 합격 기원', date: '2024.09.01 13:50' },
    { id: 2, title: '합격 기원', date: '2024.09.01 13:50' },
    { id: 3, title: '합격 할래 말래', date: '2024.09.01 13:50' },
    { id: 4, title: '어떡할래', date: '2024.09.01 13:50' },
  ];
  return (
    <Container>
      <TopWrapper>
        <Text>나의 기록</Text>
        <LogoutBtn>로그아웃</LogoutBtn>
      </TopWrapper>
      <Line />
      <BtnArea>
        {Datas.map((data) => (
          <ContentBtn
            key={data.id}
            id={data.id}
            title={data.title}
            date={data.date}
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
`;

const TopWrapper = styled.div`
  width: 100%;
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
  width: 100%;
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