import Axios from './Axios';

export interface LoginResponse {
  status: number;
  message: string;
  data: {
    accessToken: string;
  };
}

export interface LoginFormValues {
  memberId: string;
  password: string;
}

export const AxiosLogin = async (
  data: LoginFormValues,
): Promise<LoginResponse> => {
  const response = await Axios.post<LoginResponse>('/api/auth/sign-in', {
    memberId: data.memberId,
    password: data.password,
  });

  if (response.data.data.accessToken) {
    localStorage.setItem('accessToken', response.data.data.accessToken);
  }

  return response.data;
};
