import Image from "next/image";
import Link from "next/link";
import { FaEye, FaRegBookmark } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";

const NewsCard = ({ news }) => {
    return (
        <div className="card bg-base-100 shadow-sm p-3 max-w-4xl">
            <div className="card-body">
                <div className="flex justify-between items-center mb-2 bg-slate-200 w-full p-4">
                    <div className="flex gap-2 items-center">
                        <div>
                            <Image
                                src={news.author?.img}
                                alt={news.author.name}
                                height={40}
                                width={40}
                                className="rounded-full" />
                        </div>
                        <div>
                            <p className="font-bold">{news.author?.name}</p>
                            <p>{news.author?.published_date}</p>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center text-xl">
                        <FaRegBookmark />
                        <IoShareSocialOutline />
                    </div>
                </div>
                <h2 className="card-title">{news.title}</h2>
            </div>
            <figure>
                <Image src={news.image_url}
                    alt={news.title}
                    width={300}
                    height={300}
                    className="w-full" />
            </figure>
            <p className="line-clamp-3 text-justify">{news.details}</p>
            <div className="flex items-center justify-between gap-2 m-2 mt-4">
                <div className="flex items-center gap-2">
                    <h2 className="flex items-center gap-2">
                        <IoIosStar className="text-lg text-yellow-500" />
                        {news.rating.number}
                    </h2>
                    <h2 className="flex items-center gap-2">
                        <FaEye className="text-lg" />
                        {news.total_view}
                    </h2>
                </div>

                <Link href={`/news/${news._id}`}>
                    <button className="btn bg-purple-500 text-white">See details</button>
                </Link>
            </div>
        </div>
    );
};

export default NewsCard;