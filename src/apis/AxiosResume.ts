import Axios from './Axios';

export interface ResumeValues {
  inputs: Array<{
    title: string;
    content: string;
  }>;
}

export const AxiosResume = async (data: ResumeValues) => {
  const token = localStorage.getItem('accessToken');
  const resumeData = data.inputs.map((input) => ({
    question: input.title,
    answer: input.content,
  }));
  try {
    if (resumeData.length < 3 || resumeData.length > 5) {
      throw new Error('자기소개서는 최소 3개, 최대 5개의 문항이어야 합니다.');
    }

    const response = await Axios.post(
      '/api/resume',
      {
        Resume: resumeData,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data.data;
  } catch (error) {
    console.error('제출 실패:', error);
    alert('제출 실패 ㅠ.ㅠ');
    throw error;
  }
};
