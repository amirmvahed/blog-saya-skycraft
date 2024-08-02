export default function Admin() {
    return (
        <div className={'py-3 px-3 sm:px-6 sm:py-6 flex flex-col gap-3'}>
            <h1 className={'text-2xl mb-4'}>Welcome to admin page</h1>
            <p className={'text-lg'}>if you want to add any blog, please click on <b>&quot;Add blogs&quot;</b> in sidebar</p>
            <p className={'text-lg'}>if you want to see list of blogs, please click on <b>&quot;Blogs list&quot;</b> in sidebar</p>
        </div>
    );
}
