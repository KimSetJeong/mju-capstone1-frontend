import { styled } from 'styled-components';
import { ReactComponent as Logo } from '../assets/images/FullLogo.svg';
import { ReactComponent as Icon } from '../assets/images/PeopleIcon.svg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const onClickLogo = () => {
    navigate('/');
  };

  const onClickMypage = () => {
    navigate('/mypage');
  };

  return (
    <>
      <Container>
        <InnerContainer>
          <StyledLogo onClick={onClickLogo} />
          <Icon onClick={onClickMypage} />
        </InnerContainer>
      </Container>
    </>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95px;
  position: sticky;
  top: 0;
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgba(00, 00, 00, 0.1);
`;

const InnerContainer = styled.div`
  width: 1140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLogo = styled(Logo)`
  margin-top: 10px;
`;
