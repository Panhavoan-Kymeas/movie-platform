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
        <div className="flex justify-center">
            <div className="grid grid-cols-4 gap-12">
                <div className="bg-black w-64 h-auto flex justify-center flex-col items-start">
                    <img src="https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001752" alt="" className="mb-2"/>
                    <div className="flex justify-between items-center w-full pb-2">
                        <div className="text-xl">Bagman</div>
                        <div className="bg-blue-500 w-20 rounded">a</div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2">
                        <div className="bg-white w-20 rounded">a</div>
                        <div className="bg-white w-20 rounded">a</div>
                        <div className="bg-white w-20 rounded">a</div>
                    </div>
                </div>
                <div className="bg-white w-64 h-96 flex items-center justify-center">01</div>
                <div className="bg-white w-64 h-96 flex items-center justify-center">01</div>
                <div className="bg-white w-64 h-96 flex items-center justify-center">01</div>
            </div>
        </div>
    );
}
