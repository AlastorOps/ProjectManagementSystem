import { Outlet } from 'react-router-dom'
import { LayoutProvider } from './LayoutContext'
import { Sidebar } from './Sidebar'
import './AppLayout.css'

export function AppLayout() {
  return (
    <LayoutProvider>
      <div className="app-shell">
        <Sidebar />
        <main className="app-main">
          <div className="app-content">
            <Outlet />
          </div>
        </main>
      </div>
    </LayoutProvider>
  )
}
