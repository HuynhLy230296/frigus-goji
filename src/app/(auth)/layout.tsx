import { MasterTemplate } from '@/templates/MasterTemplate';

export default function AuthLayout(
  props: Readonly<{ children: React.ReactNode }>,
) {
  return <MasterTemplate>{props.children}</MasterTemplate>;
}
