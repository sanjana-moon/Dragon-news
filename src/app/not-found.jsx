import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#f4f1ea] text-black px-4 text-center">
            <h1 className="text-5xl font-extrabold tracking-wide border-b-2 border-black pb-2">
                404
            </h1>
            <h2 className="text-2xl mt-4 font-semibold">
                Page Not Found
            </h2>
            <p className="mt-2 text-sm max-w-md">
                This article is missing from today’s edition.
            </p>
            <Link
                href="/"
                className="mt-6 px-5 py-2 border border-black hover:bg-black hover:text-white transition">
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;