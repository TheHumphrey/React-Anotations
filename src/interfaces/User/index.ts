export type TUserProfile = {
  id: string;
  nome: string;
  email: string;
  login: string;
};

export type TUser = {
  usuario: TUserProfile;
  sessao: string;
  accessToken: string;
};
