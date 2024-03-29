import styles from "@/app/page.module.css";

export default function PlusIcon() {
  return (
    <svg
      width="104"
      height="111"
      viewBox="0 0 104 111"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.plus}
    >
      <g filter="url(#filter0_f_61_7890)">
        <circle
          cx="52"
          cy="52"
          r="32"
          fill="url(#paint0_linear_61_7890)"
          fillOpacity="0.4"
        />
      </g>
      <g filter="url(#filter1_ddi_61_7890)">
        <circle cx="52" cy="52" r="29" fill="url(#paint1_linear_61_7890)" />
        <circle
          cx="52"
          cy="52"
          r="28.9"
          stroke="url(#paint2_linear_61_7890)"
          strokeWidth="0.2"
        />
      </g>
      <mask
        id="mask0_61_7890"
        style={{ maskType: "alpha" }} // Changed style="mask-type:alpha" to style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="23"
        y="23"
        width="58"
        height="58"
      >
        <circle cx="52" cy="52" r="29" fill="url(#paint3_linear_61_7890)" />
      </mask>
      <g mask="url(#mask0_61_7890)">
        <g filter="url(#filter2_f_61_7890)">
          <path
            d="M81 52C81 68.0163 68.0163 81 52 81C35.9837 81 23 68.0163 23 52C23 35.9837 35.9837 23 52 23C68.0163 23 81 35.9837 81 52ZM25.9 52C25.9 66.4146 37.5854 78.1 52 78.1C66.4146 78.1 78.1 66.4146 78.1 52C78.1 37.5854 66.4146 25.9 52 25.9C37.5854 25.9 25.9 37.5854 25.9 52Z"
            fill="url(#paint4_linear_61_7890)"
          />
        </g>
        <path
          d="M40.2693 52.1289C40.2693 53.2773 41.199 54.207 42.3474 54.207H49.9353V61.7949C49.9353 62.9297 50.8513 63.873 51.9998 63.873C53.1482 63.873 54.0779 62.9297 54.0779 61.7949V54.207H61.6658C62.8005 54.207 63.7302 53.2773 63.7302 52.1289C63.7302 50.9941 62.8005 50.0645 61.6658 50.0645H54.0779V42.4766C54.0779 41.3418 53.1482 40.3984 51.9998 40.3984C50.8513 40.3984 49.9353 41.3418 49.9353 42.4766V50.0645H42.3474C41.199 50.0645 40.2693 50.9941 40.2693 52.1289Z"
          fill="#48319D"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_61_7890"
          x="19"
          y="19"
          width="66"
          height="66"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="0.5"
            result="effect1_foregroundBlur_61_7890"
          />
        </filter>
        <filter
          id="filter2_f_61_7890"
          x="21"
          y="21"
          width="62"
          height="62"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="1"
            result="effect1_foregroundBlur_61_7890"
          />
        </filter>
        <linearGradient
          id="paint0_linear_61_7890"
          x1="31.5"
          y1="33"
          x2="70.5"
          y2="79"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stopColor="white" stopOpacity="0.76" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_61_7890"
          x1="37"
          y1="31"
          x2="68.5"
          y2="75.8333"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F5F5F9" />
          <stop offset="1" stopColor="#DADFE7" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_61_7890"
          x1="31.8333"
          y1="32.8333"
          x2="66.1667"
          y2="78.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#AEAEAE" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_61_7890"
          x1="37"
          y1="31"
          x2="68.5"
          y2="75.8333"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F5F5F9" />
          <stop offset="1" stopColor="#DADFE7" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_61_7890"
          x1="27.7911"
          y1="33.2008"
          x2="52"
          y2="81"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="#BBBFC7" />
        </linearGradient>
      </defs>
    </svg>
  );
}
