'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

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
            Sudeep
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 text-sm font-light text-muted-foreground sm:flex">
            <li className="transition-colors hover:text-foreground">
              <Link href="/posts">
                Posts
              </Link>
            </li>

            <li className="transition-colors hover:text-foreground">
              <Link href="/projects">
                Projects
              </Link>
            </li>

            <li className="transition-colors hover:text-foreground">
              <Link href="/contact">
                Contact
              </Link>
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
                <span aria-hidden="true" className="text-xl">
                  ×
                </span>
              ) : (
                <span aria-hidden="true" className="text-xl">
                  ☰
                </span>
              )}
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div
            id="mobile-nav"
            className="mt-4 border-t pt-4 sm:hidden"
          >
            <ul className="flex flex-col gap-4 text-sm font-light text-muted-foreground">

              <li className="transition-colors hover:text-foreground">
                <Link
                  href="/posts"
                  onClick={() => setMenuOpen(false)}
                >
                  Posts
                </Link>
              </li>

              <li className="transition-colors hover:text-foreground">
                <Link
                  href="/projects"
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </Link>
              </li>

              <li className="transition-colors hover:text-foreground">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>

            </ul>
          </div>
        )}

      </nav>
    </header>
  )
}