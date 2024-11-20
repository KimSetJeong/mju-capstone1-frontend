import styled from 'styled-components';

interface JobTypeBtnProps {
  children: string;
  $isSelected: boolean;
  onClick: () => void;
}

const JobTypeBtn: React.FC<JobTypeBtnProps> = ({
  children,
  $isSelected,
  onClick,
}) => {
  return (
    <Button $isSelected={$isSelected} onClick={onClick}>
      {children}
    </Button>
  );
};

export default JobTypeBtn;

const Button = styled.button<{ $isSelected: boolean }>`
  width: 130px;
  height: 130px;
  border-radius: 15px;
  box-shadow: 0px 4px 10px 0 rgba(0, 0, 0, 0.1);
  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.color.BLUE500 : theme.color.WHITE};
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.color.WHITE : theme.color.BLACK};
  display: flex;
  align-items: center;
  justify-content: center;
`;
