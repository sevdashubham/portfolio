import Link from "next/link";
import dynamic from "next/dynamic";
import {Suspense} from "react";
import Spinner from "@/components/Spinner";
import About from "@/modules/about/about";
import Header from "@/components/Header";

const DynamicSpline = dynamic(() => import('@/components/Spline'), {
    ssr: false,
    loading: () => <Spinner/>,
})
const DynamicSplineMobile = dynamic(() => import('@/components/SplineMobile'), {
    ssr: false,
    loading: () => <Spinner/>,
})
export default function Home() {
    return (
        <main className="w-full h-full bg-white dark:bg-black">
            <Header/>
            <div className="px-4">
                <div className="hidden lg:flex h-[90vh] w-full items-center justify-center rounded-b-3xl overflow-hidden">
                    <Suspense fallback={<Spinner/>}>
                        <DynamicSpline/>
                    </Suspense>
                </div>
                <div className="lg:hidden h-[70vh] w-full flex items-center justify-center rounded-b-3xl overflow-hidden">
                    <Suspense fallback={<Spinner/>}>
                        <DynamicSplineMobile/>
                    </Suspense>
                </div>
            </div>
            <Link href={'#work'}>
                <div id='work' className="pt-6 pb-6 flex items-center justify-center cursor-pointer">
                    <div className="scroll"/>
                </div>
            </Link>
            <About/>
        </main>
    );
}
