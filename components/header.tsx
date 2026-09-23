'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './theme-toggle'

type NavLink = {
  href: string
  label: string
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string): boolean => {
    if (path === '/' && pathname === '/') return true
    if (path !== '/' && pathname?.startsWith(path)) return true
    return false
  }

  const navLinks: NavLink[] = [
    { href: '/posts', label: 'Posts' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-5 backdrop-blur-sm">
      <nav
        className="container mx-auto max-w-3xl px-5"
        aria-label="Main navigation"
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-2xl font-bold"
            aria-label="Sudeep Silwal — Home"
          >
            Sudeep.
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 text-sm font-light text-muted-foreground sm:flex">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={`transition-colors hover:text-foreground ${
                  isActive(link.href) ? 'text-foreground' : ''
                }`}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}

            <li className="transition-colors hover:text-foreground">
              <a
                href="https://sudeepsilwal.com.np"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio ↗
              </a>
            </li>
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-2">

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:hidden"
            >
              {menuOpen ? (
                <span aria-hidden="true" className="text-xl">×</span>
              ) : (
                <span aria-hidden="true" className="text-xl">☰</span>
              )}
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div id="mobile-nav" className="mt-4 border-t pt-4 sm:hidden">
            <ul className="flex flex-col gap-4 text-sm font-light text-muted-foreground">
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  className={`transition-colors hover:text-foreground ${
                    isActive(link.href) ? 'text-foreground' : ''
                  }`}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              <li className="transition-colors hover:text-foreground">
                <a
                  href="https://sudeepsilwal.com.np"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                >
                  Portfolio ↗
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}