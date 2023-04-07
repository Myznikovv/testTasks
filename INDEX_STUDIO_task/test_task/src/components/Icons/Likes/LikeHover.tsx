import * as React from "react";

function LikeHover(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={55}
            height={54}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g filter="url(#prefix__filter0_d_1_376)">
                <path
                    d="M38.347 26.594c-.96 2.648-7.599 8.608-10.799 11.256-2.8-2.428-8.758-7.813-10.198-9.932-1.8-2.648-1.8-6.62 0-9.27C18.647 16.74 20.95 16 22.75 16c2.036 0 4.798 2.648 4.798 2.648s4.2-3.972 8.4-1.323c3.334 2.103 3.599 5.958 2.399 9.269z"
                    fill="#A4A4A4"
                />
            </g>
            <defs>
                <filter
                    id="prefix__filter0_d_1_376"
                    x={0}
                    y={0}
                    width={55}
                    height={53.85}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation={8} />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_376" />
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_376"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
}

export default LikeHover;