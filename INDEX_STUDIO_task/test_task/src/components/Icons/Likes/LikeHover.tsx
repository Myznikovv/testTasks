import * as React from "react";

function LikeHover(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={22}
            height={19}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M21.375 9.212c-.918 2.303-7.268 7.485-10.329 9.788-2.678-2.111-8.378-6.794-9.755-8.636-1.721-2.303-1.721-5.758 0-8.06C2.532.642 4.734 0 6.456 0c1.948 0 4.59 2.303 4.59 2.303s4.017-3.454 8.034-1.151c3.19 1.829 3.443 5.181 2.295 8.06z"
                fill="#A4A4A4"
            />
        </svg>
    );
}

export default LikeHover;