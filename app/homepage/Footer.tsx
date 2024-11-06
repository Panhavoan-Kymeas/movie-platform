import SocialMediaIcons from './SocialMediaIcons';

export default function Footer() {

    return (
        <div className="grid grid-cols-3 bg-[#151414] pt-24 pb-16">
            <div className="text-center">
                <h1 className="font-light text-5xl mb-0">CINEMAers</h1>
                <p className="text-sm mt-0">Alright reserved © 2024</p>
            </div>
            <div className="text-left">
                <h2 className="font-light text-2xl">ROYAL UNIVERSITY OF PHNOM PENH</h2>
                <p className="text-sm my-2">CINEMAER@ABC.COM</p>
                <p className="text-sm my-2">+855 12 345 6789</p>
                <p className="text-sm my-2">Russian Federation Boulevard, Toul Kork, Phnom Penh, Cambodia.</p>
            </div>
            <div className="md:text-left">
                <h2 className="font-light text-2xl">FOLLOW US ON SOCIAL MEDIA</h2>
                <SocialMediaIcons />
            </div>
        </div>
    );
}