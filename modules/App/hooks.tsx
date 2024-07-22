import { useReducer, useCallback, useEffect } from "react";

import { useCurrentLocale, useI18n } from "@/utils/Locales/client";
import { AppContextInterface } from "@/modules/App/context";
import appReducer, { appDefaultValues } from "@/modules/App/reducer";

export default function useAppHook(): AppContextInterface {
  const locale = useCurrentLocale();
  const [state, dispatch] = useReducer(appReducer, {
    ...appDefaultValues,
  });

  const t = useI18n();

  const setIsPending = useCallback((isPending: boolean) => {
    dispatch({ type: "SET_IS_PENDING", isPending });
  }, []);

  const translate = useCallback(
    (key: any, params?: any) => {
      if (params?.identifier) {
        const updatedKey = `${params.identifier}.${key}`;
        return t(updatedKey, params);
      }
      return t(key, params);
    },
    [t],
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(max-width: 1024px)");

    const handleMatchChange = (e: any) => {
      dispatch({ type: "SET_IS_MOBILE", isMobile: e.matches });
    };

    mediaQueryList.addEventListener("change", handleMatchChange);

    dispatch({ type: "SET_IS_MOBILE", isMobile: mediaQueryList.matches });
    dispatch({ type: "SET_IS_READY", isReady: true });

    return () => {
      mediaQueryList.removeEventListener("change", handleMatchChange);
    };
  }, []);

  useEffect(() => {
    dispatch({
      type: "SET_CURRENT_LOCALE",
      currentLocale: locale,
    });
  }, [locale]);

  return {
    ...state,
    setIsPending,
    translate,
  };
}
