import { ReactNode } from 'react'
import {
  DashboardIcon,
  DebtsIcon,
  ExpensesIcon,
  MarketplaceIcon,
  ReportsIcon,
  SalesIcon,
  SettingsIcon,
  StocksIcon,
} from '@/components/icons'
interface Link {
  id: number
  name: string
  icon: ReactNode
  link: string
  title: string
}
export const links: Link[] = [
  {
    id: 1,
    name: 'Dashboard',
    icon: <DashboardIcon className="size-5 fill-current " type="filled" />,
    link: '/dashboard',
    title: 'Dashboard',
  },
  {
    id: 2,
    name: 'Sales',
    icon: <SalesIcon className="size-5 fill-current" />,
    link: '/sales',
    title: 'Sales',
  },
  {
    id: 3,
    name: 'Debts',
    icon: <DebtsIcon className="size-5 fill-current" />,
    link: '/debts',
    title: 'Debts',
  },
  {
    id: 4,
    name: 'Stocks',
    icon: <StocksIcon className="size-5 fill-current" />,
    link: '/stocks',
    title: 'Stocks',
  },
  {
    id: 5,
    name: 'Marketplace',
    icon: <MarketplaceIcon type="filled" className="size-5 fill-current" />,
    link: '/marketplace',
    title: 'Marketplace',
  },

  {
    id: 6,
    name: 'Expenses',
    icon: <ExpensesIcon className="size-5 fill-current" />,
    link: '/expenses',
    title: 'Expenses',
  },

  {
    id: 7,
    name: 'Reports',
    icon: <ReportsIcon className="size-5 fill-current" />,
    link: '/reports',
    title: 'Reports',
  },

  {
    id: 8,
    name: 'Settings',
    icon: <SettingsIcon className="size-5 fill-current" type="filled" />,
    link: '/settings',
    title: 'Settings',
  },
]
