import * as React from "react";

function GorizontalViewDefault(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={31}
            height={31}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <rect
                x={1.1}
                y={18.1}
                width={28.8}
                height={11.8}
                rx={1.9}
                stroke="#C7C7C7"
                strokeWidth={2.2}
            />
            <rect
                x={1.1}
                y={1.1}
                width={28.8}
                height={11.8}
                rx={1.9}
                stroke="#C7C7C7"
                strokeWidth={2.2}
            />
        </svg>
    );
}

export default GorizontalViewDefault;