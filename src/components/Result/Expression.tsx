import { ReactComponent as SmileIcon } from '../../assets/images/Smile.svg';
import { ReactComponent as Sad } from '../../assets/images/Sad.svg';
import { ReactComponent as NeutralIcon } from '../../assets/images/Neutral.svg';
import styled from 'styled-components';

interface FaceDatas {
  Positive: number;
  Neutral: number;
  Negative: number;
}

const Expression = ({ Positive, Neutral, Negative }: FaceDatas) => {
  return (
    <Container>
      <Wrapper>
        <SmileIcon />
        <Text $color="#179415">긍정</Text>
        <Text $color="#179415">{`${Positive}%`}</Text>
      </Wrapper>
      <Wrapper>
        <NeutralIcon />
        <Text $color="#F5D428">중립</Text>
        <Text $color="#F5D428">{`${Neutral}%`}</Text>
      </Wrapper>
      <Wrapper>
        <SadIcon />
        <Text $color="#FF0000">부정</Text>
        <Text $color="#FF0000">{`${Negative}%`}</Text>
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
