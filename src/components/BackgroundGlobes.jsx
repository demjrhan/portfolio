export default function BackgroundBlobs() {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            {/* Top-Left Blob */}
            <div className="blob bg-gray-900 top-[10%] left-[10%] scale-[2]" />

            {/* Bottom-Right Blob */}
            <div className="blob bg-gray-500 bottom-[10%] right-[10%] scale-[2]" />

            {/* Center Blob */}
            <div className="blob bg-gray-700 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.5]" />

            {/* Top-Right Blob */}
            <div className="blob bg-gray-800 top-[5%] right-[15%] scale-[2]" />

            {/* Bottom-Left Blob */}
            <div className="blob bg-gray-900 bottom-[5%] left-[20%] scale-[2]" />
        </div>
    );
}
