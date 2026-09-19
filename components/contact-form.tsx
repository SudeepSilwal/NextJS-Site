"use client"

import { Mail } from "lucide-react"

// Split so the address never appears whole in the page's static HTML —
// only assembled in the browser, on click.
const USER = "silwalsudeep139"
const DOMAIN = "gmail.com"
const SUBJECT = "Portfolio Contact"

export default function ContactForm() {
  function handleClick() {
    const email = `${USER}@${DOMAIN}`
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      SUBJECT
    )}`
  }

  return (
    <div className="mt-8 flex flex-col items-start gap-3">
      <button
        type="button"
        onClick={handleClick}
        className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
      >
        <Mail className="h-4 w-4" />
        Email me
      </button>

      <p className="text-sm text-muted-foreground">
        This opens your email app, addressed to the owner of this site.
      </p>
    </div>
  )
}