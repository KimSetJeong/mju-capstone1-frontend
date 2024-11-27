import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

interface BtnProps {
  id: number;
  title: string;
  date: string;
}

const ContentBtn: React.FC<BtnProps> = ({ id, title, date }) => {
  const naviagate = useNavigate();
  const handleGoReport = () => {
    naviagate(`/mypage/${id}`); // 수정 필요
  };
  return (
    <>
      <Button onClick={handleGoReport}>
        <Title>{title}</Title>
        <Date>{date}</Date>
      </Button>
    </>
  );
};

export default ContentBtn;

const Button = styled.button`
  width: 300px;
  height: 150px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.BLUE500};
  display: flex;
  flex-direction: column;
  gap: 11px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px 0 rgba(00, 00, 00, 0.1);
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 36px;
  color: ${({ theme }) => theme.color.WHITE};
`;

const Date = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: #d9d9d9;
`;
