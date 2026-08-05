import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getSiteContentApi, updateSiteContentApi } from "../api/site.api";
import { DEFAULT_SITE, mergeSite } from "../data/siteDefaults";

const SiteContentContext = createContext(null);

export function SiteContentProvider({ children }) {
  const [site, setSite] = useState(DEFAULT_SITE);
  const [loading, setLoading] = useState(true);
  const [fromApi, setFromApi] = useState(false);
  const [error, setError] = useState(null);

  const refresh = useCallback(async () => {
    try {
      setError(null);
      const data = await getSiteContentApi();
      setSite(mergeSite(data));
      setFromApi(true);
      return true;
    } catch (err) {
      console.warn("Site content API unavailable, using local defaults:", err);
      setError(err?.message || "API unavailable");
      setFromApi(false);
      setSite(DEFAULT_SITE);
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const updateSite = useCallback(async (partial) => {
    const data = await updateSiteContentApi(partial);
    const merged = mergeSite(data);
    setSite(merged);
    setFromApi(true);
    return merged;
  }, []);

  const value = useMemo(
    () => ({
      ...site,
      loading,
      fromApi,
      error,
      refresh,
      updateSite,
    }),
    [site, loading, fromApi, error, refresh, updateSite],
  );

  return (
    <SiteContentContext.Provider value={value}>
      {children}
    </SiteContentContext.Provider>
  );
}

export function useSite() {
  const ctx = useContext(SiteContentContext);
  if (!ctx) {
    throw new Error("useSite must be used within SiteContentProvider");
  }
  return ctx;
}

export function useBusiness() {
  return useSite().business;
}
