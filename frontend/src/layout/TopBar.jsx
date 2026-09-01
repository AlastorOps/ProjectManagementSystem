import { Menu, Search, Bell } from 'lucide-react'
import { Avatar } from '../components/ui/Avatar'
import { currentUser } from '../data/mockData'
import { useLayout } from './useLayout'
import './TopBar.css'

export function TopBar({ title, subtitle, actions, showSearch = true }) {
  const { openMobileNav } = useLayout()

  return (
    <header className="topbar">
      <div className="topbar__left">
        <button className="topbar__menu-btn" onClick={openMobileNav} aria-label="Open menu">
          <Menu size={20} />
        </button>
        <div>
          <h1 className="topbar__title">{title}</h1>
          {subtitle && <p className="topbar__subtitle">{subtitle}</p>}
        </div>
      </div>

      <div className="topbar__right">
        {actions}
        {showSearch && (
          <div className="topbar__search">
            <Search size={16} />
            <input type="text" placeholder="Search" />
          </div>
        )}
        <button className="icon-btn topbar__bell" aria-label="Notifications">
          <Bell size={18} />
          <span className="topbar__bell-dot" />
        </button>
        <Avatar initials={currentUser.initials} color="var(--accent-purple)" size={40} />
      </div>
    </header>
  )
}
