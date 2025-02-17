"use client";
import SearchInnerWidget from './SearchInnerWidget';

export default function SearchWidget() {
    return (
        <>
            <div className='w-full relative hidden md:w-[350px] lg:w-[500px] md:block'>
                <SearchInnerWidget />
            </div>

        </>


    )
}
