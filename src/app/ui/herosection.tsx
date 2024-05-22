import Link from "next/link";

import { try_for_free } from "@/app/utils/herosection";
import { learn_more } from "@/app/utils/herosection";

export default function HeroSection(): JSX.Element {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Convert Text to Video with AI
          </h1>
          <p className=" w-full lg:max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            The easiest way to turn text to video with AI is here.Create videos
            for YouTube, Instagram and TikTok with simple text prompts. Just
            type in your idea to generate a video with stock footage, voiceover,
            background music, transitions and more.
          </p>
          <div className="flex flex-col gap-4 min-[400px]:flex-row">
            <Link
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary-600 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href={try_for_free}
            >
              Try for Free
            </Link>
            <Link
              className="inline-flex h-12 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href={learn_more}
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden">
          <iframe
            width="100%"
            className="responsive-iframe"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
