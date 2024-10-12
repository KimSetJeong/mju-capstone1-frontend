import styled from 'styled-components';

interface JobTypeBtnProps {
  children: string;
}

const JobTypeBtn: React.FC<JobTypeBtnProps> = ({ children }) => {
  return <Button>{children}</Button>;
};

export default JobTypeBtn;

const Button = styled.button`
  width: 130px;
  height: 130px;
  border-radius: 15px;
  box-shadow: 0px 4px 10px 0 rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.color.WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
`;
