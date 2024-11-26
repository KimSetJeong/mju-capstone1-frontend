import Axios from './Axios';

export interface VideoUploadValues {
  file: File;
}

export const AxiosVideo = async (data: VideoUploadValues) => {
  const token = localStorage.getItem('accessToken');
  const formData = new FormData();
  formData.append('file', data.file);

  try {
    const response = await Axios.post('/api/video', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('제출 실패:', error);
    alert('제출 실패 ㅠ.ㅠ');
    throw error;
  }
};
