import * as React from "react";

function LikeActive(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={20}
            height={19}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M19.432 9.212c-.834 2.303-6.608 7.485-9.39 9.788-2.434-2.111-7.616-6.794-8.868-8.636-1.565-2.303-1.565-5.758 0-8.06C2.302.642 4.304 0 5.869 0c1.771 0 4.173 2.303 4.173 2.303s3.652-3.454 7.304-1.151c2.9 1.829 3.13 5.181 2.086 8.06z"
                fill="#00A0AB"
            />
        </svg>
    );
}

export default LikeActive;