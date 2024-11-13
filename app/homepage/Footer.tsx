import SocialMediaIcons from './SocialMediaIcons';

export default function Footer() {

    return (
        <div className="bg-[#151414] xs:mt-7">
            <div className="grid mx-auto sm:grid-cols-3 xs:grid-cols-2 xs:w-10/12 xl:w-7/12 py-5">
                <div className="lg:items-center sm:text-center xs:text-left">
                    <h1 className="font-light xs:text-2xl sm:text-5xl lg:text-4xl mb-0 ">CINEMAers</h1>
                    <p className="xs:text-[10px] xs:text-center sm:text-sm mt-0">Alright reserved © 2024</p>
                </div>
                <div className="text-left xs:row-span-2">
                    <h2 className="font-light xs:text-[15px] sm:text-2xl">ROYAL UNIVERSITY OF PHNOM PENH</h2>
                    <p className="xs:text-[10px] sm:text-sm my-2">CINEMAER@ABC.COM</p>
                    <p className="xs:text-[10px] sm:text-sm my-2">+855 12 345 6789</p>
                    <p className="xs:text-[10px] sm:text-sm my-2">Russian Federation Boulevard, Toul Kork, Phnom Penh, Cambodia.</p>
                </div>
                <div className="md:text-left text-center">
                    <div className="flex flex-col items-end">
                        <div className="lg:text-left">
                        <h2 className="font-light xs:text-[15px] sm:text-2xl">FOLLOW US ON SOCIAL</h2>
                            <SocialMediaIcons />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}