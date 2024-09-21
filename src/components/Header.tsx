'use client';
import Link from "next/link";
import {scrollWindowTop} from "@/utils/functions";
import useIsMobile from "@/hooks/useIsMobile";
// import {useTheme} from "next-themes";
// import {useEffect} from "react";

export default function Header() {
    const isMobile = useIsMobile();
    // const {setTheme} = useTheme();
    // useEffect(() => {
    //     setTheme('dark')
    // }, [])
    const populateHeaderWidth = () => {
        if (isMobile) {
            return '90%'
        }
        return '80%'
    }

    return (
        <div className="flex items-center justify-center">
            <div className={`fixed z-30 flex flex-row bg-slate-50 px-4 lg:px-8 py-2 w-full h-16 items-center bg-transparent 
                    transition-borderRadius lg:p-4 top-2 header-background`}
                 style={{
                     width: populateHeaderWidth(),
                 }}>
                <div className="flex flex-row justify-between w-full items-center">
                    <Link href={'/'}>
                        <div className="flex flex-row gap-2 items-center">
                            <h3 className="font-bold cursor-pointer text-white" onClick={scrollWindowTop}>Shubham Sevda</h3>
                        </div>
                    </Link>
                    <div className="flex flex-row justify-end items-center">
                        <div className="pl-5">
                            <a href="/#resume">
                                <button type="button"
                                        className="text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full
                   text-sm px-5 py-2.5 text-center font-semibold dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{'Resume'}</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
