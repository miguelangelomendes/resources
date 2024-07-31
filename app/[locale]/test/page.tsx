"use client";
import { useCallback, useEffect, useState } from "react";

import { twMerge } from "tailwind-merge";

import { getEnvs } from "@/modules/Actions/get";
import { writeEnvs } from "@/modules/Actions/write";
import PrimaryButton from "@/ui/Buttons/Primary";

export default function Test() {
  const [isPending, setIsPending] = useState(false);

  const [envs, setEnvs] = useState<any>(null);
  const setEnvValue = useCallback(async () => {
    const result = await getEnvs();
    setEnvs(result);
  }, []);

  const writeEnvValue = useCallback(async () => {
    setIsPending(true);
    await writeEnvs(envs);
    setIsPending(false);
  }, [envs]);

  useEffect(() => {
    setEnvValue();
  }, [setEnvValue]);

  return (
    <div className={twMerge("flex flex-grow flex-col space-y-4")}>
      <h1 className="text-2xl" onClick={() => setIsPending(!isPending)}>
        Test
      </h1>
      <button onClick={() => setEnvValue()}>Set env value</button>
      <div className="custom-scrollbar flex h-1 flex-grow flex-col divide-y divide-muted overflow-y-auto">
        {Object.entries(envs || {}).map(([key, value]: any) => (
          <div
            key={`${key}`}
            className={twMerge("grid grid-cols-[40%_60%] px-4 py-2", key.startsWith("#") && "bg-muted")}
          >
            <p>{key}:</p>
            <input
              type="text"
              className="input !bg-transparent"
              value={value}
              onChange={(e) => setEnvs((prev: any) => ({ ...prev, [key]: e.target.value }))}
            />
          </div>
        ))}
      </div>
      <PrimaryButton
        isDisabled={isPending}
        isLoading={isPending}
        className="clickable rounded-md bg-primary-500 px-4 py-2"
        onClick={writeEnvValue}
      >
        Write
      </PrimaryButton>
    </div>
  );
}
