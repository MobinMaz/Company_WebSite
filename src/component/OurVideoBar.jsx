import Blogimg from '../img/Blogimgtest.jpg'
const posts = [
    {
        id: 1,
        title: 'جلوگیری از دندون درد',
        href: '#',
        description:
            'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'دندون پزشکی', href: '#' },
        author: {
            name: 'مبین کاظمی',
            role: 'سرپرست',
            href: '#',
            imageUrl: Blogimg,
            videoId : 'https://docs.material-tailwind.com/demo.mp4'
        },
    },
    {
        id: 1,
        title: 'جلوگیری از دندون درد',
        href: '#',
        description:
            'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'دندون پزشکی', href: '#' },
        author: {
            name: 'مبین کاظمی',
            role: 'سرپرست',
            href: '#',
            imageUrl: Blogimg,
            videoId : 'https://docs.material-tailwind.com/demo.mp4'
        },
    },
    {
        id: 1,
        title: 'جلوگیری از دندون درد',
        href: '#',
        description:
            'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'دندون پزشکی', href: '#' },
        author: {
            name: 'مبین کاظمی',
            role: 'سرپرست',
            href: '#',
            imageUrl: Blogimg,
            videoId : 'https://www.aparat.com/v/x123313'
            
        },
    },
    // More posts...
]

export default function OurVideoBar() {
    return (
        <div className=" py-9 " style={{ 'direction': 'rtl' }}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-teal-700 sm:text-4xl">ویدیو ها</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        ویدیو های برتر روز
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-teal-500 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between ">
                            <video className="h-full w-full rounded-lg shadow-current" controls>
                                <source src={post.author.videoId} type="video/mp4" />
                                مرورگر شما ویدیو ما را پشتیبانی نمیکند
                            </video>
                            <div className="flex items-center gap-x-4 text-xs">


                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href={post.href}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                            </div>

                        </article>
                    ))}
                </div>
            </div>

        </div>
    )
}
