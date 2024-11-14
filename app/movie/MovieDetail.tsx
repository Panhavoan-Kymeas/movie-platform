import React from 'react'

export default function MovieDetail() {
  return (
    <div className="flex items-center justify-center mx-auto my-12 xs:w-10/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12">
    <div className="grid grid-cols-2 gap-0 w-full">
        <div className="w-full">
            <div className="h-full object-cover rounded">
                <img
                    src={`https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001618`}
                    className="lg:w-[50%] object-cover rounded"
                />
                <div className="flex items-center gap-2 mt-2">
                    <span className="text-2xl font-normal text-white">Trap</span>
                </div>
            </div>
        </div>
        <div className="w-full">
            <div className="h-full object-cover rounded">
                <img
                    src={`https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001618`}
                    className="lg:w-[50%] object-cover rounded"
                />
                <div className="flex items-center gap-2 mt-2">
                    <span className="text-2xl font-normal text-white">Trap</span>
                </div>
            </div>
        </div>
    </div>
</div>


  )
}
