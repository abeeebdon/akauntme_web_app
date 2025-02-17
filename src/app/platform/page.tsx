import { motion } from 'framer-motion';
import { FooterWidget, HeaderWidget } from "@/components/general";



export default function Page() {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            {/* <Head title="Welcome" /> */}
            <main>
                <div className='shadow-md'>
                    <HeaderWidget />
                </div>

                <div className='pt-24'>
                </div>



                <FooterWidget />
            </main>
        </>
    );
}
