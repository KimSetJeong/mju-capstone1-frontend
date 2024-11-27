import Axios from './Axios';

export const AxiosResult = async () => {
  const token = localStorage.getItem('accessToken');
  try {
    const response = await Axios.get(`/api/feedback-result`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.data;
  } catch (error) {
    alert('결과 페이지를 불러오는데 실패했습니다 ㅠ.ㅠ');
    console.error('결과 페이지 로드 실패:', error);
  }
};
