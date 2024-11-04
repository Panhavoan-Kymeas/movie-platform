export default function MovieList() {
    const container: React.CSSProperties = {
        height: '476px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        backgroundColor: '#1C1B1B',
    };
    
    return (
        <div className="mt-6 lg:mt-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-20 grid-cols-4">
            <a href="#" className="">
            <div className="flex flex-col gap-4">
                <div className="h-full w-full">
                <img src="https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001752" width="298" height="402" loading="lazy" className="max-w-full transition-opacity opacity-100 h-auto w-full rounded-xl"/>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-2">
                        <p className="text-2xl">Bagman</p>
                        <div className="bg-white h-auto w-10 justify-center"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        <div className="h-6 rounded"><img src="/image/legend.png" className="h-full w-full object-cover" alt=""/></div>
                        <div className="h-6 rounded"><img src="/image/major.png" className="h-full w-full object-cover" alt=""/></div>
                        <div className="h-6 rounded"><img src="/image/prime.png" className="h-full w-full object-cover" alt=""/></div>
                    </div>
                </div>
            </div>
            </a>

            <a href="#" className="">
            <div className="flex flex-col gap-4">
                <div className="h-full w-full">
                <img src="https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001752" width="298" height="402" loading="lazy" className="max-w-full transition-opacity opacity-100 h-auto w-full rounded-xl"/>
                </div>
                <div className="flex flex-col gap-2">
                <p className="text-2xl">Movie Title Here</p>
                <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white rounded">a</div>
                    <div className="bg-white rounded">a</div>
                    <div className="bg-white rounded">a</div>
                </div>
                </div>
            </div>
            </a>

            <a href="#" className="">
            <div className="flex flex-col gap-4">
                <div className="h-full w-full">
                <img src="https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001752" width="298" height="402" loading="lazy" className="max-w-full transition-opacity opacity-100 h-auto w-full rounded-xl"/>
                </div>
                <div className="flex flex-col gap-2">
                <p className="text-2xl">Movie Title Here</p>
                <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white rounded">a</div>
                    <div className="bg-white rounded">a</div>
                    <div className="bg-white rounded">a</div>
                </div>
                </div>
            </div>
            </a>

            <a href="#" className="">
            <div className="flex flex-col gap-4">
                <div className="h-full w-full">
                <img src="https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001752" width="298" height="402" loading="lazy" className="max-w-full transition-opacity opacity-100 h-auto w-full rounded-xl"/>
                </div>
                <div className="flex flex-col gap-2">
                <p className="text-2xl">Movie Title Here</p>
                <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white rounded">a</div>
                    <div className="bg-white rounded">a</div>
                    <div className="bg-white rounded">a</div>
                </div>
                </div>
            </div>
            </a>
        </div>
        </div>


    );
}
