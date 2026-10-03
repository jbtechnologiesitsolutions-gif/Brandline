export type HomeBannerSettings = {
  enabled: boolean;
  mediaType: "video" | "image";
  objectFit: "cover" | "contain";
  objectPosition: string;
  fileName?: string;
};

const DB_NAME = "brandline-site-media";
const STORE_NAME = "media";
const DB_VERSION = 1;
const MEDIA_KEY = "home-banner";
const SETTINGS_KEY = "brandline_home_banner_settings";

export const DEFAULT_HOME_BANNER_SETTINGS: HomeBannerSettings = {
  enabled: true,
  mediaType: "video",
  objectFit: "cover",
  objectPosition: "center",
  fileName: "brandline-home-banner.mp4",
};

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function saveHomeBannerFile(file: File) {
  const db = await openDb();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    tx.objectStore(STORE_NAME).put(file, MEDIA_KEY);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
  db.close();
}

export async function getHomeBannerFile(): Promise<Blob | null> {
  const db = await openDb();
  const result = await new Promise<Blob | null>((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const request = tx.objectStore(STORE_NAME).get(MEDIA_KEY);
    request.onsuccess = () => resolve((request.result as Blob | undefined) ?? null);
    request.onerror = () => reject(request.error);
  });
  db.close();
  return result;
}

export async function clearHomeBannerFile() {
  const db = await openDb();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    tx.objectStore(STORE_NAME).delete(MEDIA_KEY);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
  db.close();
}

export function getHomeBannerSettings(): HomeBannerSettings {
  if (typeof window === "undefined") return DEFAULT_HOME_BANNER_SETTINGS;
  try {
    const saved = window.localStorage.getItem(SETTINGS_KEY);
    if (!saved) return DEFAULT_HOME_BANNER_SETTINGS;
    return { ...DEFAULT_HOME_BANNER_SETTINGS, ...(JSON.parse(saved) as Partial<HomeBannerSettings>) };
  } catch {
    return DEFAULT_HOME_BANNER_SETTINGS;
  }
}

export function saveHomeBannerSettings(settings: HomeBannerSettings) {
  window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  window.dispatchEvent(new CustomEvent("brandline:home-banner-updated"));
}

export function clearHomeBannerSettings() {
  window.localStorage.removeItem(SETTINGS_KEY);
  window.dispatchEvent(new CustomEvent("brandline:home-banner-updated"));
}
