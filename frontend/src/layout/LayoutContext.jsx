import { useState } from 'react'
import { LayoutContext } from './layoutContextStore'

export function LayoutProvider({ children }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const value = {
    mobileNavOpen,
    openMobileNav: () => setMobileNavOpen(true),
    closeMobileNav: () => setMobileNavOpen(false),
    toggleMobileNav: () => setMobileNavOpen((v) => !v),
  }

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
}
