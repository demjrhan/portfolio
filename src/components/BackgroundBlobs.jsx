import React from 'react';

export default function BackgroundBlobs() {
    return (
        <>
            {/* Coffee Brown Blobs (hidden on small screens) */}
            <div
                className="hidden md:block absolute bottom-[5%] left-[5%] w-[300px] h-[300px] bg-[#6F4E37] rounded-full filter blur-3xl opacity-35 -z-10"
            />
            <div
                className="hidden md:block absolute top-[10%] right-[10%] w-[350px] h-[350px] bg-[#6F4E37] rounded-full filter blur-3xl opacity-50 -z-10"
            />
        </>
    );
}
