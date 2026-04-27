import LeftSidebar from "@/component/homePage/LeftSidebar";
import NewsCard from "@/component/homePage/NewsCard";
import RightSidebar from "@/component/homePage/RightSidebar";
import { getCategories, getNewsByCategories } from "@/lib/data";

const NewsCategoryPage = async ({ params }) => {
    const { id } = await params;

    const categories = await getCategories();
    const news = await getNewsByCategories(id);

    return (
        <div className="grid grid-cols-12 container mx-auto my-15 gap-4">
            <div className="col-span-3">
                <LeftSidebar categories={categories} activeId={id} />
            </div>
            <div className="col-span-6">
                <h2 className="text-lg font-bold">All news</h2>
                <div className="space-y-4">
                    {
                        news.length ? news.map(n => {
                            return <NewsCard
                                key={n._id} news={n}>
                            </NewsCard>
                        })
                            :
                            <h2 className="text-2xl font-bold my-20 text-center">No news found</h2>
                    }
                </div>
            </div>
            <div className="col-span-3">
                <RightSidebar />
            </div>
        </div>
    )
};

export default NewsCategoryPage;