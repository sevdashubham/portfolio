"use client"
import Image from "next/image";

export default function About() {

    const scrollWindowTop = () => {
        if (window) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    }

    return <section>
        <div className="p-4">
            <div
                className="grid grid-cols-1 gap-4 list-none lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4"
            >
                <div
                    className="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8"
                >
                    <div className="relative flex items-center gap-x-4">
                        <div className="h-10 w-10 relative">
                            <Image
                                src={'/images/avatar.jpg'}
                                alt="Picture of the site owner"
                                fill
                                sizes="10vw"
                                className="rounded-full ring-1 dark:ring-white/10 ring-primary/5"
                            />
                        </div>
                        <div className="text-sm leading-6">
                            <p className="font-semibold text-primary dark:text-white">
                                <a href="#">
                                    <span className="absolute inset-0"></span>
                                    Shubham Sevda
                                </a>
                            </p>
                            <p className="text-zinc-500 dark:text-zinc-400">
                                Software Engineer &amp; Entrepreneur
                            </p>
                        </div>
                    </div>
                    <p
                        className="text-3xl mt-6 font-medium lg:text-4xl tracking-tight text-primary dark:text-white"
                    >
                        Hey, welcome to my site!
                    </p>
                    <p
                        className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light lg:text-xl"
                    >
                        Software engineer been pushing code for more than 8 years, helped bring
                        multiple startups&apos; visions to life. Committed to excellence. In the
                        digital world, I craft interfaces and dive into coding intricacies.
                        <br/>
                        <br/>
                        Beyond screens, I find solace and joy spending time with family. My life blends tech and
                        nature, coding sessions & fitness.
                    </p>
                </div>
                <div
                    className="ring-1 dark:ring-white/10 ring-primary/5 rounded-3xl justify-between shadow-xl dark:shadow-thick items-center flex flex-col p-8 h-full bg-white  dark:bg-secondary"
                >
                    <div className="w-full">
                        <p
                            className="text-xl font-normal tracking-tight text-primary dark:text-white lg:text-8xl"
                        >
                            Find me on
                        </p>
                    </div>
                    <div
                        className="grid mt-4 grid-cols-4 md:grid-cols-8 lg:grid-cols-4 gap-y-4 gap-4 justify-center w-full">
                        <a
                            href="mailto:shubhamsevda@gmail.com"
                            className="cursor-pointer flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-mail h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50"
                                viewBox="0 0 24 24"
                                strokeWidth="0.8"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                    d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"
                                ></path>
                                <path d="M3 7l9 6l9 -6"></path>
                            </svg
                            >
                        </a>
                        <a
                            href="https://github.com/sevdashubham"
                            className="cursor-pointer flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-brand-github h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50"
                                viewBox="0 0 24 24"
                                strokeWidth="0.8"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                    d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
                                ></path>
                            </svg
                            >
                        </a>
                        <a
                            href="https://wellfound.com/u/shubham-s-1"
                            className="cursor-pointer flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-brand-threads h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50"
                                viewBox="0 0 24 24"
                                strokeWidth="0.8"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                    d="M19 7.5c-1.333 -3 -3.667 -4.5 -7 -4.5c-5 0 -8 2.5 -8 9s3.5 9 8 9s7 -3 7 -5s-1 -5 -7 -5c-2.5 0 -3 1.25 -3 2.5c0 1.5 1 2.5 2.5 2.5c2.5 0 3.5 -1.5 3.5 -5s-2 -4 -3 -4s-1.833 .333 -2.5 1"
                                ></path>
                            </svg
                            >
                        </a>
                        <a
                            href="https://www.linkedin.com/in/shubham-s-698537120/"
                            className="cursor-pointer flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50 icon-tabler-brand-linkedin"
                                viewBox="0 0 24 24"
                                strokeWidth="0.8"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                    d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
                                ></path>
                                <path d="M8 11l0 5"></path>
                                <path d="M8 8l0 .01"
                                ></path>
                                <path d="M12 16l0 -5"></path>
                                <path
                                    d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                            </svg
                            >
                        </a>
                    </div>
                </div>
                <div
                    className="ring-1 lg:row-span-2 flex flex-col justify-between group hover:ring-primary/10 dark:hover:ring-white/20 duration-300 h-full dark:ring-white/10 ring-primary/5 lg:row-start-2 md:grid-cols-2 md:grid lg:gap-0 md:items-center md:gap-12 lg:grid-cols-none lg:col-start-2 lg:col-span-2 rounded-3xl p-8 bg-white dark:bg-secondary shadow-xl dark:shadow-thick">
                    <div>
                        <p
                            className="ext-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl"
                        >
                            Ferrari
                        </p>
                        <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
                            Not just a beagle.
                            <br/>
                            <br/>
                            Meet Rrari, the four-legged superstar with more energy than a triple-shot espresso! This
                            little furball has mastered the art of zoomies and is on a mission to sniff out every
                            adventure (and snack) life has to offer. Whether it&apos;s chasing squirrels or demanding belly
                            rubs, Rrari knows how to keep things fun and unpredictable. She&apos;s the kind of dog who looks
                            at a toy and thinks, “Can I destroy this in under a minute?” Challenge accepted! So, if
                            you&apos;re ready for endless playdates and a lifetime of wagging tails, Rrari&apos;s got you covered.
                            🐾
                        </p>
                    </div>
                    <div className="mt-8" id="resume">
                        <div className="relative h-full w-full overflow-hidden">
                            <Image
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                                src={'/images/ferrari.jpg'}
                                alt="Picture of ferrari the dog"
                                className="rounded-2xl group-hover:ring-white/20 duration-300 aspect-[4/4] bg-primary/5 dark:bg-primary ring-1 ring-white/10 object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div
                    className="ring-1 dark:ring-white/10  ring-primary/5 flex flex-col justify-between items-center rounded-3xl shadow-xl dark:shadow-thick p-8  bg-white dark:bg-secondary overflow-hidden text-center lg:text-left"
                >
                    <div>
                        <p
                            className="text-xl text-primary dark:text-white lg:text-7xl tracking-tight"
                        >
                            Grab my résumé!
                        </p>
                        <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 md:max-w-xs lg:max-w-none">
                            Unlock the doors to explore the rich tapestry of my professional
                            journey and accomplishments.
                        </p>
                    </div>
                    <div className="w-full mt-8 md:max-w-xs lg:max-w-none">
                        <a href={"/resume/shubham-sevda-resume.pdf"} target="_blank" rel="noopener noreferrer">
                            <button
                                type="button"
                                className="text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary dark:bg-white dark:text-primary dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between"
                            >
                                Download my CV
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-download w-4 h-4"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                        d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                                    <path
                                        d="M7 11l5 5l5 -5"></path>
                                    <path d="M12 4l0 12"></path>
                                </svg
                                >
                            </button>
                        </a>
                    </div>
                </div>
                <div
                    className="cursor-pointer ring-1 lg:row-start-3 items-center h-full flex p-8 flex-col justify-center hover:ring-primary/5 dark:hover:ring-white/20 dark:ring-white/10 ring-primary/5 relative rounded-3xl overflow-hidden bg-white dark:bg-secondary shadow-xl dark:shadow-thick"
                    onClick={scrollWindowTop}
                >
                    <p className="w-24 h-24 lg:w-48 xl:h-64 xl:w-64 lg:h-48 text-7xl flex items-center justify-center">☝️</p>
                    <p
                        className="text-xl  text-primary dark:text-white lg:text-2xl mt-6"
                    >
                        Take me back up
                    </p>
                </div>
                <div
                    className="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 hover:ring-primary/5 bg-white dark:bg-secondary  dark:hover:ring-white/20 overflow-hidden duration-300 shadow-xl dark:shadow-thick rounded-3xl p-8"
                >
                    <div className="-mr-24">
                        <div className="h-64 w-full relative">
                            <Image
                                src={'/images/lexington.png'}
                                alt="Picture of the author"
                                fill
                                sizes="100vw"
                                className="rounded-2xl object-cover ring-1 lg:h-auto dark:ring-white/10 ring-primary/5 bg-tertiary" // just an example
                            />
                        </div>
                    </div>
                    <div className="mt-8">
                        <p
                            className="ext-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl mt-6"
                        >
                            Skills
                        </p>
                        <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light">
                            React, Redux, React Native, Swift, Android, Bluetooth smart, Amazon Web Services, Node, Python, Angular, GraphQL/Apollo, NextJS, TypeScript
                        </p>
                    </div>
                </div>
                <div
                    className="ring-1 dark:ring-white/10 ring-primary/5 flex flex-col p-8 h-full justify-center items-center rounded-3xl overflow-hidden relative lg:col-span-2 lg:row-start-4 bg-white dark:bg-secondary shadow-xl dark:shadow-thick"
                >


                    <div className="relative p-8 text-center w-full">
                        <p
                            className="text-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl"
                        >
                            Subscribe <span className="lg:block">to my newsletter</span>
                        </p>
                        <form className="mt-6 sm:flex w-full lg:max-w-sm mx-auto">
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input
                                type="email"
                                name="email-address"
                                id="email-address"
                                autoComplete="email"
                                required
                                className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Enter your email"
                            />
                            <div className="mt-4 sm:ml-2 sm:mt-0 sm:flex-shrink-0">
                                <button
                                    type="submit"
                                    className="text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary dark:bg-white dark:text-primary dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between"
                                >Subscribe
                                </button
                                >
                            </div>
                        </form>
                    </div>
                </div>
                <div
                    className="ring-1 dark:ring-white/10 ring-primary/5 shadow-xl dark:shadow-thick rounded-3xl p-8 lg:row-start-4 h-full flex flex-col justify-between bg-white dark:bg-secondary"
                >
                    <p
                        className="text-xl tracking-tight font-medium text-primary dark:text-white md:text-5xl"
                    >
                        Testimonials
                    </p>
                    <div className="md:grid md:grid-cols-2 gap-6 lg:grid-cols-1">
                        <div className="mt-4">
                            <p className="text-sm text-pink-500 dark:text-pink-400">
                                &quot;Big fan of his code. Structrured, clean, scalable and
                                efficient.&quot;
                            </p>
                            <p className="text-xs mt-2 text-zinc-500">
                                <span className="block text-xs">Hrushikesh</span>
                                <span className="block text-xs"> Developer</span>
                            </p>
                        </div>
                        <div className="mt-4">
                            <p className="text-sm text-orange-500 dark:text-orange-300">
                                &quot;Love this guy! 5/5&quot;
                            </p>
                            <p className="text-xs mt-2 text-zinc-500">
                                <span className="block text-xs">Matt</span>
                                <span className="block text-xs"> Entrepreneur</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="lg:col-span-2 xl:col-span-1 h-full flex flex-col justify-between lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8"
                >
                    <p
                        className="text-xl tracking-tight font-medium text-primary dark:text-white md:text-3xl"
                    >
                        As a software engineer, my strength lies in building scalable and
                        efficient code that powers innovative digital products.
                        <br/>
                        <br/>
                        I believe that great software development starts with shared goals,
                        communication and a deep respect for the end user’s needs.
                    </p>
                    <p className="text-primary dark:text-white mt-4">Shubham Sevda</p>
                </div>
            </div>
        </div>
    </section>
}
