import React from 'react';

import { MasterTemplate } from '@/templates/MasterTemplate';

const AuthLayout = (props: { children: React.ReactNode }) => {
  return <MasterTemplate>{props.children}</MasterTemplate>;
};

export default AuthLayout;
