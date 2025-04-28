import { MasterTemplate } from '@/templates/MasterTemplate';

export default function DashboardLayout(props: { children: React.ReactNode }) {
  return <MasterTemplate>{props.children}</MasterTemplate>;
}
