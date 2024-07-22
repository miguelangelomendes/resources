import { getI18n } from "@/utils/Locales/server";

export async function translateServer(key: any, params?: any) {
  const t = await getI18n();
  return t(key, params);
}

export async function getServerItems(prefix: string, index: number, key?: string) {
  const cenas = `${prefix}.${index}${key ? `.${key}` : ""}`;
  const item = await translateServer(cenas);
  if (item === cenas) {
    return null;
  }
  return item;
}
