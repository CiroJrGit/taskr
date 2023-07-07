import cookies from 'js-cookie';

export function setAuthorization() {
  const token = cookies.get('token');

  const authorization = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return authorization;
}
