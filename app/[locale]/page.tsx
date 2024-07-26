"use client";
import { useCallback, useEffect, useState } from "react";
import SmartBanner from "react-smartbanner";

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

  const testLink = useCallback(() => {
    try {
      const cenas = window.open("partyapp://dashboard", "_blank");
      if (cenas) {
        cenas.onabort = () => alert("abort");
        cenas.onbeforeunload = () => alert("beforeunload");
        cenas.onclose = () => alert("close");
        cenas.onload = () => alert("load");
        cenas.onseeked = () => alert("seeked");
      }
    } catch (e) {
      console.log("BATATA", e);
    }
    // const cenas = window.open("partyapp://dashboard", "_blank");
  }, []);

  useEffect(() => {
    document.cookie = "smartbanner-closed=null; expires=Thu, 18 Dec 2013 12:00:00 UTC";
    document.cookie = "smartbanner-installed=null; expires=Thu, 18 Dec 2013 12:00:00 UTC";
  }, []);

  return (
    <div>
      <div className="h-40 w-40 bg-red-500" onClick={testLink}>
        testLink
      </div>
      <SmartBanner force="ios" title={"Batata"} position="top" />
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
