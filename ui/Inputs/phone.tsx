"use client";
import DialCode from "@/ui/DialCode";
import { useCallback, useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  initialPhoneNumber?: string;
  className?: string;
  onChange?: (value: string) => void;
}

export default function InputPhone({ onChange, className = "" }: Props) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91");

  const handleInputChange = useCallback(
    (value: string) => {
      setPhoneNumber(value);
      onChange?.(countryCode + value);
    },
    [countryCode, onChange]
  );
  const handleContryChange = useCallback(
    (countryCode: string) => {
      setCountryCode(countryCode);
      onChange?.(countryCode + phoneNumber);
    },
    [phoneNumber, onChange]
  );

  return (
    <div className={twMerge("", className)}>
      <DialCode onCountryChange={handleContryChange}>
        <input
          type="text"
          className={twMerge("input !rounded-l-none !border-l-0")}
          onChange={(e) => handleInputChange(e.target.value)}
        />
      </DialCode>
    </div>
  );
}
