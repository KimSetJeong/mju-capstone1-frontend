import Axios from './Axios';

type FormValues = {
  username: string;
  password: string;
};

type IdExist = {
  username: string;
};

export const AxiosSignUp = async (data: FormValues) => {
  try {
    await Axios.post('/api/auth/sign-up', {
      memberId: data.username,
      password: data.password,
    });
    alert('회원가입 성공!');
  } catch (error) {
    console.error('회원가입 실패:', error);
    alert('회원가입 실패 ㅠ.ㅠ');
  }
};

export const AxiosIdExists = async (data: IdExist) => {
  try {
    const response = await Axios.get(`/api/email/${data.username}/exists`);
    if (response.data.data) {
      alert('이미 사용중인 아이디입니다 ㅠ.ㅠ');
    } else {
      alert('사용이 가능한 아이디입니다!');
    }
  } catch (error) {
    alert('사용이 불가능한 아이디입니다 ㅠ.ㅠ');
    console.error('아이디 사용 불가', error);
  }
};
