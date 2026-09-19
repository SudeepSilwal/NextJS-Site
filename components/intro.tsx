import Image from "next/image"

export default function Intro() {
  return (
    <section className="flex flex-col gap-8 pb-20 md:flex-row md:items-center md:gap-10">

      {/* Image */}
      <div className="flex shrink-0 justify-center md:order-2 md:justify-end">
        <Image
          className="w-32 rounded-lg grayscale sm:w-36 md:w-44"
          src="/images/sudeep.webp"
          alt="Sudeep Silwal"
          width={175}
          height={175}
          priority
        />
      </div>

      {/* Text */}
      <div className="flex-1 md:order-1">
        <h1 className="title no-underline">
          Hey, I&#39;m Sudeep.
        </h1>

        <p className="mt-3 font-light leading-7 text-muted-foreground">
          I’m Sudeep, a developer from Kathmandu, Nepal. I enjoy building
          things for the web, exploring new technologies, and turning random
          ideas into projects. A lot of my learning comes from simply trying
          things out, making mistakes, fixing them, and seeing where it takes
          me.
        </p>

        <p className="mt-4 font-light leading-7 text-muted-foreground">
          I mostly work with JavaScript, React, and Next.js, and I’m currently
          exploring backend development as well. I also enjoy writing about
          what I learn, the projects I build, and other things that catch my
          interest on my blog.
        </p>

        <p className="mt-4 font-light leading-7 text-muted-foreground">
          This site is basically my little corner of the internet where I keep
          my projects, blog posts, and things I’m learning along the way.
        </p>
      </div>

    </section>
  )
}