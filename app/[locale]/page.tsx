"use client";
import { useCallback, useEffect, useState } from "react";

import PageSection from "@/ui/Sections";
import COMPONENTS_LIST from "@/utils/components";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/ui/Accordion";

export default function Home() {
  const [userAgentInfo, setUserAgentInfo] = useState(null);

  const getUserAgent = useCallback(async () => {
    const response = await fetch("/api/cenas");
    const userAgentInfo = await response.json();
    console.log(userAgentInfo);

    return userAgentInfo;
  }, []);

  useEffect(() => {
    getUserAgent().then((info) => setUserAgentInfo(info));
  }, [getUserAgent]);

  return (
    <div>
      <Accordion>
        {userAgentInfo && (
          <AccordionItem>
            <AccordionTrigger>Device Info</AccordionTrigger>
            <AccordionContent>
              {Object.entries(userAgentInfo || {}).map(([key, value]: any) => (
                <p key={`${key}-${value}`}>
                  {key}: {JSON.stringify(value)}
                </p>
              ))}
            </AccordionContent>
          </AccordionItem>
        )}
      </Accordion>
      <h1 className="mt-10 text-2xl font-bold">UI Components</h1>

      <div className="mt-20 flex flex-col divide-y-2 px-10">
        {COMPONENTS_LIST.map((section: any, index: number) => (
          <PageSection key={index} {...section} className="py-20">
            <section.exampleComponent />
          </PageSection>
        ))}
      </div>
    </div>
  );
}
