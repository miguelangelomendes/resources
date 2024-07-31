import { ReactElement } from "react";

import { I18nProviderClient } from "@/utils/Locales/client";
import AppProvider from "@/modules/App/context";
import Topbar from "@/ui/Topbar";
import Sidebar from "@/ui/Sidebar";

export default function SubLayout({
  params: { locale },
  children,
}: {
  params: { locale: string };
  children: ReactElement;
}) {
  return (
    <I18nProviderClient locale={locale}>
      <AppProvider>
        {/* <Topbar className="fixed left-0 top-0" /> */}
        {/* <Sidebar className="fixed left-0 top-0" /> */}
        {/* <div className="pl-40 pt-20"> */}
        <div className="flex h-screen flex-col">{children}</div>
      </AppProvider>
    </I18nProviderClient>
  );
}
