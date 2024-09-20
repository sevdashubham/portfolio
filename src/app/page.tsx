import Spline from '@splinetool/react-spline/next';
import Link from "next/link";
import {Suspense} from "react";
import Spinner from "@/components/Spinner";
import About from "@/modules/about/about";

export default function Home() {
    return (
        <main className="w-full h-full bg-white dark:bg-black">
            <div className="h-[90vh] w-full flex items-center justify-center">
                <Suspense fallback={<Spinner/>}>
                    <Spline
                        className="h-[80vh] w-full"
                        scene="https://draft.spline.design/7JC1TFvfN2PBV1w4/scene.splinecode"
                    />
                </Suspense>
            </div>
            <Link href={'#work'}>
                <div className="pt-6 pb-6 flex items-center justify-center cursor-pointer">
                    <div className="scroll" />
                </div>
            </Link>
            <About/>
        </main>
    );
}
