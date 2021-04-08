import React from 'react';
import Styles from './form.styles';

interface FormProps {
  method?: 'get' | 'post';
  action?: string;
  className?: string;
  onSubmit?: ((event: React.FormEvent<HTMLFormElement>) => void) | undefined;
  children: React.ReactNode;
}

const Form = ({ method, action, className, onSubmit, children }: FormProps) => {
  return (
    <Styles.Form
      method={method}
      action={action}
      className={className}
      onSubmit={onSubmit}
    >
      {children}
    </Styles.Form>
  );
};

export default Form;
