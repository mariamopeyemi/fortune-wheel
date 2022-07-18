export const getAuthToken = () => {
  return localStorage.getItem('token');
};

export const setAuthToken = (token) => {
  localStorage.setItem('token', token);
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export const setUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};
