export const useAmIAdmin = () => {
  const token = localStorage.getItem("auth_token");
  return !!token;
};
