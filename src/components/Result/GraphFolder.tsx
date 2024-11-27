import { styled } from 'styled-components';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
interface GraphData {
  [key: string]: number;
}

const GraphFolder = ({ data }: { data: GraphData }) => {
  const options: ApexOptions = {
    chart: {
      type: 'bar',
      height: '100%',
      width: '100%',
      parentHeightOffset: 0,
    },
    xaxis: {
      categories: Object.keys(data),
    },
    yaxis: {
      min: 0,
      max: 100,
    },
  };

  const series = [
    {
      name: '답변 지수',
      data: Object.values(data),
    },
  ];

  return (
    <Container>
      <Header>답변 지수 그래프</Header>
      <Box>
        <ChartWrapper>
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height="300px"
            width="400px"
          />
        </ChartWrapper>
        <GuideText>* 상위 3가지 지수만 출력됩니다</GuideText>
      </Box>
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
  height: 300px;
  padding: 40px 25px;
  color: ${({ theme }) => theme.color.BLACK};
  background-color: ${({ theme }) => theme.color.WHITE};
  border-radius: 10px;
  position: relative;
  font-size: 15px;
  font-weight: 400;
  line-height: 130%;
  left: 20px;
  z-index: 1;
  box-shadow: 0px 4px 10px 0 rgba(0, 0, 0, 0.1);
  flex-direction: column;
  align-items: center;
`;

const ChartWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GuideText = styled.p`
  font-size: 13px;
  font-weight: 500px;
  margin-top: 5px;
  color: #8a8a8a;
`;
