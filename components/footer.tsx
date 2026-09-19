import Link from 'next/link'
import { JSX, SVGProps } from 'react'
import { BLOG_URL, SITE_URL } from '@/lib/constants'

const navigation = [
  {
    name: 'Mail',
    href: 'mailto:thesudeepsilwal@gmail.com',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill='currentColor' viewBox='0 0 512 512' {...props}>
        <path d='M502.3 190.8 327.4 338c-41.3 34.7-101.5 34.7-142.8 0L9.7 190.8C3.6 185.7 0 178.2 0 170.3V112C0 73.6 31.6 42 70 42h372c38.4 0 70 31.6 70 70v58.3c0 7.9-3.6 15.4-9.7 20.5zM0 214.5v185.2C0 438.4 31.6 470 70 470h372c38.4 0 70-31.6 70-70.3V214.5L350.1 367.1c-54.9 46.1-133.3 46.1-188.2 0L0 214.5z' />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://np.linkedin.com/in/sudeepsilwal',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill='currentColor' viewBox='0 0 448 512' {...props}>
        <path d='M100.28 448H7.4V148.9h92.88zm-46.49-340.7C24.09 107.3 0 83.2 0 53.6A53.6 53.6 0 0153.79 0c29.7 0 53.8 24.1 53.8 53.8 0 29.4-24.1 53.5-53.8 53.5zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z' />
      </svg>
    ),
  },
  {
    name: 'X',
    href: 'https://x.com/thesudeepsilwal',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z' />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/SudeepSilwal',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path d='M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.41 7.86 10.94.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 015.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .3.21.65.79.54A11.52 11.52 0 0012 23.5c6.35 0 11.5-5.15 11.5-11.5S18.35.5 12 .5z' />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@thesudeepsilwal',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path d='M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.6 15.9V8.1l6.5 3.9-6.5 3.9z' />
      </svg>
    ),
  },
]

const pageLinks = [
  {
    name: 'Portfolio',
    href: '/',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Blog',
    href: BLOG_URL,
    external: true,
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]

export default function Footer() {
  return (
    <footer className='py-8'>
      <div className='container max-w-3xl'>
        <div className='md:flex md:items-center md:justify-between'>
          <div className='flex justify-center space-x-6 md:order-2'>
            {navigation.map(item => (
              <a
                key={item.name}
                href={item.href}
                {...(item.href.startsWith('mailto:')
                  ? {}
                  : {
                      target: '_blank',
                      rel: 'noreferrer noopener',
                    })}
                className='text-muted-foreground hover:text-foreground'
              >
                <span className='sr-only'>{item.name}</span>
                <item.icon aria-hidden='true' className='h-5 w-5' />
              </a>
            ))}
          </div>

          <div className='mt-8 md:order-1 md:mt-0'>
            <nav
              aria-label='Footer navigation'
              className='mb-3 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs'
            >
              {pageLinks.map(link =>
                link.external ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target='_blank'
                    rel='noreferrer noopener'
                    className='text-muted-foreground hover:text-foreground'
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className='text-muted-foreground hover:text-foreground'
                  >
                    {link.name}
                  </Link>
                )
              )}
            </nav>

            <p className='text-center text-xs leading-5 text-muted-foreground'>
              &copy; {new Date().getFullYear()} Sudeep Silwal. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}