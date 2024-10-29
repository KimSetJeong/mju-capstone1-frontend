import { styled } from 'styled-components';

const GraphFolder = () => {
  return (
    <Container>
      <Header>답변 지수 그래프</Header>
      <Box></Box>
    </Container>
  );
};

export default GraphFolder;

const Container = styled.div`
  position: relative;
  padding-top: 22px;
`;

const Header = styled.div`
  display: inline-flex;
  min-width: 260px;
  width: fit-content;
  height: 45px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.color.BLUE700};
  color: ${({ theme }) => theme.color.WHITE};
  font-size: 25px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  white-space: nowrap;
  position: absolute;
  top: 0;
  z-index: 2;
  box-shadow: 0px 4px 10px 0 rgba(0, 0, 0, 0.1);
`;

const Box = styled.div`
  display: inline-flex;
  width: 450px;
  height: fit-content;
  min-height: 300px;
  color: ${({ theme }) => theme.color.BLACK};
  background-color: ${({ theme }) => theme.color.WHITE};
  border-radius: 10px;
  padding: 40px 25px;
  position: relative;
  font-size: 15px;
  font-weight: 400;
  line-height: 130%;
  left: 20px;
  z-index: 1;
  box-shadow: 0px 4px 10px 0 rgba(0, 0, 0, 0.1);
`;
