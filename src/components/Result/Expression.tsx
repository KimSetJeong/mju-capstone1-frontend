import { ReactComponent as Smile } from '../../assets/images/Smile.svg';
import { ReactComponent as Sad } from '../../assets/images/Sad.svg';
import { ReactComponent as Neutral } from '../../assets/images/Neutral.svg';
import styled from 'styled-components';

const Expression = () => {
  return (
    <Container>
      <Wrapper>
        <Smile />
        <Text $color="#179415">긍정</Text>
        <Text $color="#179415">70%</Text>
      </Wrapper>
      <Wrapper>
        <Neutral />
        <Text $color="#F5D428">중립</Text>
        <Text $color="#F5D428">20%</Text>
      </Wrapper>
      <Wrapper>
        <SadIcon />
        <Text $color="#FF0000">부정</Text>
        <Text $color="#FF0000">10%</Text>
      </Wrapper>
    </Container>
  );
};

export default Expression;

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface TextProps {
  $color: string;
}

const Text = styled.p<TextProps>`
  font-weight: 700;
  font-size: 25px;
  color: ${(prop) => prop.$color};
`;

const SadIcon = styled(Sad)`
  margin: 5px 0;
`;
