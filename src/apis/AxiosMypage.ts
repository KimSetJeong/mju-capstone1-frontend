import Axios from './Axios';

export const AxiosMypage = async () => {
  const token = localStorage.getItem('accessToken');
  try {
    const response = await Axios.get(`/api/mypage`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.data;
  } catch (error) {
    alert('마이 페이지를 불러오는데 실패했습니다 ㅠ.ㅠ');
    console.error('마이 페이지 로드 실패:', error);
  }
};
