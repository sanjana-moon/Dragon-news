import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

export const generateMetadata = async ({ params }) => {
    const { id } = await params;
    console.log(id, "params");
    const news = await getNewsDetailsById(id);
    console.log(news, "news");

    return {
        title: news.title,
        description: news.details,
    };
};

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const news = await getNewsDetailsById(id);
    return (
        <div className="max-w-4xl mx-auto my-8 ">
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">{news.title}</h2>
                </div>
                <figure>
                    <Image src={news.image_url}
                        alt={news.title}
                        width={300}
                        height={300}
                        className="w-full" />
                </figure>
                <p className="text-justify">{news.details}</p>
                <div className="flex items-center justify-between gap-2 m-2 mt-4">
                    <div className="flex items-center gap-2">
                        <h2 className="flex items-center gap-2">
                            <IoIosStar className="text-lg text-yellow-500" />
                            {news.rating?.number}
                        </h2>
                        <h2 className="flex items-center gap-2">
                            <FaEye className="text-lg" />
                            {news.total_view}
                        </h2>
                    </div>

                    <Link href={`/category/${news.category_id}`}>
                        <button className="btn bg-purple-500 text-white">See other news from this category</button>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default NewsDetailsPage;