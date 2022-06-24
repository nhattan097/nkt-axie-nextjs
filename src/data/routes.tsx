import { DashboardSVG, SettingSVG, AxieSVG, ScholarSVG } from '~/assets/svg';

const routes = [
  {
    label: 'Dashboard',
    url: '/dashboard',
    title: 'Manager Data',
    icon: DashboardSVG,
  },
  {
    label: 'Scholar',
    url: '/scholar',
    title: 'Scholar list',
    icon: ScholarSVG,
  },
  {
    label: 'Axie',
    url: '/axie',
    title: 'Axie list',
    icon: AxieSVG,
  },
  {
    label: 'Setting',
    url: '/setting',
    title: 'Setting',
    icon: SettingSVG,
  },
];

export default routes;
