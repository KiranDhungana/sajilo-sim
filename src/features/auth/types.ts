// Auth feature types (UI only, no backend)

export type LoginFormValues = {
  email: string;
  password: string;
};

export type RegisterFormValues = LoginFormValues & {
  name: string;
};
