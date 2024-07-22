import { twMerge } from "tailwind-merge";

interface Props {
  countries: any;
  onClick: (country: any) => void;
  className?: string;
}

export default function DialCodeCountryList({ countries, onClick, className = "" }: Props) {
  return (
    <div className={twMerge("custom-scrollbar flex flex-col divide-y divide-muted overflow-y-auto", className)}>
      {countries.map((country: any) => (
        <div
          key={country.code}
          className="clickable grid grid-cols-[70%_30%] py-1 hover:bg-primary-900"
          onClick={() => onClick(country)}
        >
          <div className="flex items-center space-x-2">
            <div>{country.emoji}</div>
            <div>{country.name}</div>
          </div>
          <div className="justify-self-end">{country.dial_code}</div>
        </div>
      ))}
    </div>
  );
}
