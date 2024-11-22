import Axios from './Axios';

export interface TitleNJobValues {
  title: string;
  categoryName: string;
}

export const AxiosTitleNJob = async (data: TitleNJobValues) => {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await Axios.post(
      '/api/categoryAndTitle',
      {
        title: data.title,
        categoryName: data.categoryName,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    return response.data.data;
  } catch (error) {
    console.error('제출 실패:', error);
    alert('제출 실패 ㅠ.ㅠ');
    throw error;
  }
};
