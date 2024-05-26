import Blogimg from '../img/prof.jpg'
const posts = [
    {
        id: 1,
        title: 'جلوگیری از دندون درد',
        href: '#',
        description:
           'HTML مخفف Hyper Text Markup Language بوده و در فارسی به آن زبان نشانه‌ گذاری ابرمتن می‌گویند. دقت کنید که HTML یک زبان برنامه نویسی نیست، بلکه یک زبان نشان‌گذاری یا Markup language به حساب می‌آید. کدنویسی با HTML قدم گذاشتن در جای پای بزرگان وب و شروع ساخت سایت‌های شگفت‌انگیز است.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'HTML', href: '#' },
        author: {
            name: 'مبین کاظمی',
            role: 'FrontEnd',
            href: '#',
            imageUrl: Blogimg,
        },
    },
    {
        id: 1,
        title: 'جلوگیری از دندون درد',
        href: '#',
        description:
            'Tailwind CSS یک فریمورک CSS است که برای اولین بار به کاربران امکان می ‌دهد تا برنامه ‌ها را سریع تر و آسان ‌تر ایجاد کنند. می‌ توانید از کلاس ‌های کاربردی برای کنترل آرایش اجزا، رنگ ، فاصله، تایپوگرافی، سایه‌ ها و موارد دیگر استفاده کنید تا یک طراحی کامپوننت کاملا سفارشی بدون این که محیط‌HTML تان را ترک کنید یا حتی یک خط CSS سفارشی بنویسید ، ایجاد کنید.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'CSS', href: '#' },
        author: {
            name: 'مبین کاظمی',
            role: 'FrontEnd',
            href: '#',
            imageUrl: Blogimg,
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
        category: { title: 'Tailwind', href: '#' },
        author: {
            name: 'مبین کاظمی',
            role: 'FrontEnd',
            href: '#',
            imageUrl: Blogimg,
        },
    },
    // More posts...
]

export default function BlogBar() {
    return (
        <div className="bg-white py-10" style={{ 'direction': 'rtl' }}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-teal-700 sm:text-4xl">بلاگ ها</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        بلاگ های برتر روز
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-teal-500 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between border border-teal-500 py-5 px-4 rounded-3xl">

                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={post.datetime} className="text-gray-500">
                                    {post.date}
                                </time>
                                <a
                                    href={post.category.href}
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    {post.category.title}
                                </a>
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
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <a href={post.author.href}>
                                            <span className="absolute inset-0" />
                                            {post.author.name}
                                        </a>
                                    </p>
                                    <p className="text-gray-600">{post.author.role}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

        </div>
    )
}
