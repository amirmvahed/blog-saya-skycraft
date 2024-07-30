import {blog_data} from "@/assets/assets";
import BlogItem from "@/components/BlogItem";
import {blogItem} from "@/types";

export default function BlogList() {
    return (
        <>
            <div className={'flex justify-center gap-6 my-10'}>
                <button className={'bg-black text-white py-1 px-4 rounded-sm'}>All</button>
                <button>Technology</button>
                <button>Startup</button>
                <button>LifeStyle</button>
            </div>
            <div className={'flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'}>
                {
                    blog_data.map((item: blogItem) => {
                        return <BlogItem key={item.id} title={item.title} category={item.category}
                                         description={item.description}
                                         image={item.image}/>
                    })
                }
            </div>
        </>
    );
}
