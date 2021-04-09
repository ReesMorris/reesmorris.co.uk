import jsCookie from 'js-cookie';

export interface ICookieOptions {
  domain?: string;
  expires?: number | Date;
  path?: string;
  sameSite?: 'strict' | 'Strict' | 'lax' | 'Lax' | 'none' | 'None';
  secure?: boolean;
}

// Gets a cookie
export const getCookie = (key: string): string | undefined => {
  return jsCookie.get(key);
};

// Sets a cookie
export const setCookie = (
  key: string,
  value: string,
  options?: ICookieOptions
): void => {
  jsCookie.set(key, value, options);
};
