"use client";
import { ReactNode, useCallback, useMemo, useState } from "react";

import { twMerge } from "tailwind-merge";

import COUNTRIES from "@/utils/countries";
import IconArrowDown from "@/ui/Icons/ArrowDown";
import DialCodeCountryList from "@/ui/DialCode/list";
import DropdownContentPrimitive from "@/ui/Dropdown/Primitives/content";

interface Props {
  onCountryChange?: (country: any) => void;
  children?: ReactNode;
  className?: string;
  searchInputClassName?: string;
  dropdownClassName?: string;
}

export default function DialCode({ children, onCountryChange, className = "" }: Props) {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState(COUNTRIES[0]);
  const [isOpen, setIsOpen] = useState(false);
  const filteredCountries = useMemo(
    () =>
      COUNTRIES.filter(
        (country) => country.name.toLowerCase().includes(query.toLowerCase()) || country.dial_code.includes(query)
      ),
    [query]
  );
  const handleSelectCountry = useCallback(
    (country: any) => {
      setCountry(country);
      setIsOpen(false);
      setQuery("");
      onCountryChange?.(country.dial_code);
    },
    [onCountryChange]
  );

  return (
    <div className={twMerge("", className)}>
      <div className="flex">
        <div
          className="clickable input flex max-w-max items-center space-x-2 !rounded-r-none px-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p>{country.emoji}</p>
          <p>{country.dial_code}</p>
          <IconArrowDown className="w-3" />
        </div>
        {children}
      </div>
      <DropdownContentPrimitive isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="w-[20rem] space-y-5 py-5">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            autoFocus
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded border border-muted bg-transparent p-2"
          />
          <DialCodeCountryList className="h-80" countries={filteredCountries} onClick={handleSelectCountry} />
        </div>
      </DropdownContentPrimitive>
    </div>
  );
}
