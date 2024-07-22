export interface AppProviderState {
  isReady: boolean;
  isPending: boolean;
  currentLocale: any;
  isMobile: boolean;
}

export const appDefaultValues: AppProviderState = {
  isReady: false,
  isPending: false,
  currentLocale: "en",
  isMobile: false,
};

export type InvitesAction =
  | {
      type: "SET_IS_MOBILE";
      isMobile: AppProviderState["isMobile"];
    }
  | {
      type: "SET_CURRENT_LOCALE";
      currentLocale: AppProviderState["currentLocale"];
    }
  | {
      type: "SET_IS_READY";
      isReady: AppProviderState["isReady"];
    }
  | {
      type: "SET_IS_PENDING";
      isPending: AppProviderState["isPending"];
    }
  | {
      type: "RESET_INVITES";
    };

const appReducer = (
  state: AppProviderState,
  action: InvitesAction,
): AppProviderState => {
  switch (action.type) {
    case "SET_IS_MOBILE":
      return {
        ...state,
        isMobile: action.isMobile,
      };
    case "SET_CURRENT_LOCALE":
      return {
        ...state,
        currentLocale: action.currentLocale,
      };
    case "SET_IS_READY":
      return {
        ...state,
        isReady: action.isReady,
      };
    case "SET_IS_PENDING":
      return {
        ...state,
        isPending: action.isPending,
      };
    case "RESET_INVITES":
      return {
        ...appDefaultValues,
        isReady: true,
      };
    default:
      return state;
  }
};

export default appReducer;
