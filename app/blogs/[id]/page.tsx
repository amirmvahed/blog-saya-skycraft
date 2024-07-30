import {blog_data} from "@/assets/assets";
import Menu from "@/components/Menu";
import Socials from "@/components/Socials";
import Image from "next/image";

const data = blog_data[0]
export default function Blogs({params}) {
    return (data ? <>
                <div className={'bg-gray-200 py-5 px-5 md:px-12 lg:px-28'}>
                    <Menu/>
                    <div className={'text-center my-24'}>
                        <h1 className={'text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'}>{data.title}</h1>
                        <Image className={'mx-auto mt-6 border border-white rounded-full'} src={data.author_img} width={60}
                               height={60} alt={data.author}/>
                        <p className={'mt-1 pb-2 text-lg max-w-[740px] mx-auto'}>{data.author}</p>
                    </div>
                </div>
                <div className={'mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'}>
                    <Image className={'border-4 border-white'} src={data.image} width={1280} heigth={720} alt={data.title}/>
                    <h1 className={'my-8 text-[26px] font-semibold'}>
                        Introduction:
                    </h1>
                    <p>{data.description}</p>
                    <h3 className={'my-5 text-[18px] font-semibold'}>
                        Step 1: Self-Reflection
                    </h3>
                    <p className={'my-3'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ea eveniet illo
                        laudantium nemo omnis praesentium, provident repellendus ullam voluptatem!</p>
                    <p className={'my-3'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ea eveniet illo
                        laudantium nemo omnis praesentium, provident repellendus ullam voluptatem!</p>
                    <h3 className={'my-5 text-[18px] font-semibold'}>
                        Step 2: Self-Reflection
                    </h3>
                    <p className={'my-3'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ea eveniet illo
                        laudantium nemo omnis praesentium, provident repellendus ullam voluptatem!</p>
                    <p className={'my-3'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ea eveniet illo
                        laudantium nemo omnis praesentium, provident repellendus ullam voluptatem!</p>
                    <h3 className={'my-5 text-[18px] font-semibold'}>
                        Step 3: Self-Reflection
                    </h3>
                    <p className={'my-3'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ea eveniet illo
                        laudantium nemo omnis praesentium, provident repellendus ullam voluptatem!</p>
                    <p className={'my-3'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ea eveniet illo
                        laudantium nemo omnis praesentium, provident repellendus ullam voluptatem!</p>
                    <h3 className={'my-5 text-[18px] font-semibold'}>
                        Conclusion
                    </h3>
                    <p className={'my-3'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A id laboriosam nesciunt
                        nisi repellat. Eius hic id perspiciatis rem. A assumenda autem consequuntur deserunt error
                        exercitationem expedita id, iusto mollitia nihil qui quis, temporibus totam!</p>
                    <div className={'my-24'}>
                        <p className={'text-black font font-semibold my-4'}>
                            Share this article on social media
                        </p>
                        <Socials width={50}/>
                    </div>
                </div>
            </>
            : <h1>Error occurred!</h1>
    );
}
