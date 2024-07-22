import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  onClick?: () => void;
}

export default function IconView({ className = "", onClick }: Props) {
  return (
    <svg
      className={twMerge("fill-current", className)}
      onClick={onClick}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7654 5.77172C11.7481 5.73375 11.3375 4.82203 10.4304 3.915C9.21685 2.70328 7.68732 2.0625 5.99982 2.0625C4.31232 2.0625 2.78279 2.70328 1.5706 3.915C0.663568 4.82203 0.252943 5.73375 0.234193 5.77172C0.202436 5.84372 0.186035 5.92154 0.186035 6.00023C0.186035 6.07893 0.202436 6.15675 0.234193 6.22875C0.251537 6.26719 0.662162 7.17844 1.56966 8.08547C2.78279 9.29719 4.31232 9.9375 5.99982 9.9375C7.68732 9.9375 9.21685 9.29719 10.4286 8.08547C11.3361 7.17844 11.7467 6.26719 11.764 6.22875C11.796 6.15685 11.8127 6.07907 11.8129 6.00038C11.8131 5.92169 11.797 5.84381 11.7654 5.77172ZM9.60638 7.31859C8.59997 8.30953 7.38685 8.8125 5.99982 8.8125C4.61279 8.8125 3.39966 8.30953 2.39466 7.31812C1.9992 6.92683 1.65902 6.48335 1.38357 6C1.6591 5.51684 1.99927 5.07353 2.39466 4.68234C3.40013 3.69047 4.61279 3.1875 5.99982 3.1875C7.38685 3.1875 8.59951 3.69047 9.60497 4.68234C10.0004 5.0735 10.3406 5.51681 10.6161 6C10.3406 6.48332 10.0004 6.92679 9.60497 7.31812L9.60638 7.31859ZM5.99982 3.9375C5.59189 3.9375 5.19313 4.05846 4.85395 4.28509C4.51478 4.51172 4.25042 4.83384 4.09432 5.21072C3.93821 5.58759 3.89737 6.00229 3.97695 6.40237C4.05653 6.80246 4.25296 7.16996 4.54141 7.45841C4.82986 7.74685 5.19736 7.94329 5.59744 8.02287C5.99753 8.10245 6.41223 8.06161 6.7891 7.9055C7.16598 7.7494 7.48809 7.48504 7.71472 7.14586C7.94135 6.80669 8.06232 6.40792 8.06232 6C8.0617 5.45318 7.8442 4.92894 7.45754 4.54228C7.07088 4.15562 6.54664 3.93812 5.99982 3.9375ZM5.99982 6.9375C5.8144 6.9375 5.63314 6.88252 5.47897 6.7795C5.3248 6.67649 5.20464 6.53007 5.13368 6.35877C5.06272 6.18746 5.04416 5.99896 5.08033 5.8171C5.11651 5.63525 5.20579 5.4682 5.33691 5.33709C5.46802 5.20598 5.63506 5.11669 5.81692 5.08051C5.99878 5.04434 6.18728 5.06291 6.35858 5.13386C6.52989 5.20482 6.67631 5.32498 6.77932 5.47915C6.88233 5.63332 6.93732 5.81458 6.93732 6C6.93732 6.24864 6.83855 6.4871 6.66273 6.66291C6.48691 6.83873 6.24846 6.9375 5.99982 6.9375Z"
        fill="currentColor"
      />
    </svg>
  );
}
