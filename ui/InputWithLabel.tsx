"use client";
import DialCode from "@/ui/DialCode";
import IconView from "@/ui/Icons/View";
import IconViewOff from "@/ui/Icons/ViewOff";
import { ReactNode, cloneElement, useCallback, useMemo, useState } from "react";

import { twMerge } from "tailwind-merge";

interface Props {
  label: string;
  name: string;
  type: string;
  methods: any;
  placeholder?: string;
  options?: any;
  isDisabled?: boolean;
  min?: number;
  iconComponent?: ReactNode;
  className?: string;
  labelWrapperClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  iconContainerClassName?: string;
  iconClassName?: string;
  onFocus?: () => void;
}

export default function InputWithLabel({
  label,
  name,
  type = "text",
  methods,
  placeholder,
  options,
  isDisabled = false,
  className = "",
  labelWrapperClassName = "",
  labelClassName = "",
  inputClassName = "",
  iconContainerClassName = "",
  iconClassName = "",
  iconComponent,
  onFocus,
}: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleIconClick = useCallback(() => {
    const element: any = document.querySelector(`input[name="${name}"]`);
    if (element) {
      element.focus();
    }
  }, [name]);

  const toggleVisibility = () => {
    // const element: any = document.querySelector(`input[name="${name}"]`);
    // console.log("element", element);
    // if (element) {
    //   element.type = element.type === "password" ? "text" : "password";
    // }
    setIsPasswordVisible((prev) => !prev);
  };

  const renderInput = useMemo(() => {
    switch (type) {
      case "select":
        return (
          <select
            name={name}
            className={twMerge(
              "input clickable capitalize",
              methods?.formState.errors[name] && "!border !border-danger"
            )}
            {...methods?.register(name)}
          >
            {options.map(({ value, label, isDisabled }: any) => (
              <option key={value} value={value} disabled={isDisabled} className="capitalize">
                {label || value}
              </option>
            ))}
          </select>
        );
      case "textarea":
        return (
          <textarea
            name={name}
            disabled={isDisabled}
            placeholder={placeholder}
            rows={5}
            className={twMerge(
              "input custom-scrollbar capitalize",
              methods?.formState.errors[name] && "!border !border-danger"
            )}
            {...methods?.register(name)}
          />
        );
      case "phone":
        return (
          <DialCode onCountryChange={methods}>
            <input
              type="text"
              name={name}
              disabled={isDisabled}
              placeholder={placeholder}
              className={twMerge(
                "input !rounded-l-none !border-l-0",
                inputClassName,
                methods?.formState.errors[name] && "!border !border-danger"
              )}
              {...methods?.register(name)}
            />
          </DialCode>
        );
      case "password":
        return (
          <div className="relative flex">
            <input
              onFocus={onFocus}
              type={isPasswordVisible ? "text" : "password"}
              name={name}
              disabled={isDisabled}
              placeholder={placeholder}
              className={twMerge("input", inputClassName, methods?.formState.errors[name] && "!border !border-danger")}
              {...methods?.register(name)}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 transform" onClick={toggleVisibility}>
              {isPasswordVisible ? (
                <IconViewOff className="clickable w-4 text-paragraph" />
              ) : (
                <IconView className="clickable w-4 text-paragraph" />
              )}
            </div>
            {iconComponent && (
              <div className={twMerge("absolute right-4 top-1/2 -translate-y-1/2 transform", iconContainerClassName)}>
                {cloneElement(iconComponent as any, {
                  className: twMerge("w-6 h-6 text-accent-primary cursor-pointer", iconClassName),
                  onClick: handleIconClick,
                })}
              </div>
            )}
          </div>
        );
      default:
        return (
          <div className="relative flex">
            <input
              onFocus={onFocus}
              type={type}
              name={name}
              disabled={isDisabled}
              placeholder={placeholder}
              className={twMerge("input", inputClassName, methods?.formState.errors[name] && "!border !border-danger")}
              {...methods?.register(name)}
            />
            {iconComponent && (
              <div className={twMerge("absolute right-4 top-1/2 -translate-y-1/2 transform", iconContainerClassName)}>
                {cloneElement(iconComponent as any, {
                  className: twMerge("w-6 h-6 text-accent-primary cursor-pointer", iconClassName),
                  onClick: handleIconClick,
                })}
              </div>
            )}
          </div>
        );
    }
  }, [
    type,
    name,
    methods,
    options,
    isDisabled,
    placeholder,
    onFocus,
    isPasswordVisible,
    inputClassName,
    iconComponent,
    iconContainerClassName,
    iconClassName,
    handleIconClick,
  ]);

  return (
    <div className={twMerge("flex flex-col space-y-1.5", className)}>
      <div className={twMerge("flex items-center justify-between", labelWrapperClassName)}>
        <label htmlFor={name} className={twMerge("label", labelClassName)}>
          {label}
        </label>
        {methods?.formState.errors[name] && (
          <p className="text-xs font-bold uppercase text-danger">{methods?.formState.errors[name].message}</p>
        )}
      </div>
      {renderInput}
    </div>
  );
}
