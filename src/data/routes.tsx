import { DashboardSVG, SettingSVG, AxieSVG, ScholarSVG } from '~/assets/svg';

const routes = [
  {
    label: 'Dashboard',
    url: '/dashboard',
    icon: DashboardSVG,
  },
  {
    label: 'Scholar',
    url: '/scholar',
    icon: ScholarSVG,
  },
  {
    label: 'Axie',
    url: '/axie',
    icon: AxieSVG,
  },
  {
    label: 'Setting',
    url: '/setting',
    icon: SettingSVG,
  },
];

export default routes;
