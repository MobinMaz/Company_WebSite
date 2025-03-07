import prof from '../img/DefProf.jpg'
const people = [
    {
        name: 'مبین کاظمی',
        role: 'Front-end',
        imageUrl: prof,
    },
    {
        name: 'مبین کاظمی',
        role: 'Front-end',
        imageUrl: prof,
    },
    {
        name: 'مبین کاظمی',
        role: 'Front-end',
        imageUrl: prof,
    },
    {
        name: 'مبین کاظمی',
        role: 'Front-end',
        imageUrl: prof,
    },
    {
        name: 'مبین کاظمی',
        role: 'Front-end',
        imageUrl: prof,
    },
    {
        name: 'مبین کاظمی',
        role: 'Front-end',
        imageUrl: prof,
    },

    // More people...
]

export default function OurTeam() {
    return (
        <div className=" py-24 sm:py-32" style={{ 'direction': 'rtl' }}>
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-teal-700 sm:text-4xl">تیم ما</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است  ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.


                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16 border border-teal-500 rounded-full" src={person.imageUrl} alt="" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
