import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Image as ImageIcon, Save, Trash2, Upload, Video } from "lucide-react";
import {
  DEFAULT_HOME_BANNER_SETTINGS,
  clearHomeBannerFile,
  clearHomeBannerSettings,
  getHomeBannerFile,
  getHomeBannerSettings,
  saveHomeBannerFile,
  saveHomeBannerSettings,
  type HomeBannerSettings,
} from "@/lib/home-banner-store";

export const Route = createFileRoute("/admin-home-banner")({
  component: AdminHomeBannerPage,
});

const ADMIN_EMAIL = "brandline@gmail.com";
const STORAGE_KEY = "brandline_admin_email";

function AdminHomeBannerPage() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [settings, setSettings] = useState<HomeBannerSettings>(DEFAULT_HOME_BANNER_SETTINGS);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [storedBlob, setStoredBlob] = useState<Blob | null>(null);
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const savedEmail = window.localStorage.getItem(STORAGE_KEY)?.trim().toLowerCase();
    if (savedEmail !== ADMIN_EMAIL) {
      navigate({ to: "/admin-login", replace: true });
      return;
    }

    setSettings(getHomeBannerSettings());
    void getHomeBannerFile().then(setStoredBlob).catch(() => setStoredBlob(null));
    setReady(true);
  }, [navigate]);

  const previewUrl = useMemo(() => {
    const source = selectedFile ?? storedBlob;
    return source ? URL.createObjectURL(source) : null;
  }, [selectedFile, storedBlob]);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  function chooseFile(file: File | null) {
    if (!file) return;
    const isVideo = file.type.startsWith("video/");
    const isImage = file.type.startsWith("image/");
    if (!isVideo && !isImage) {
      setMessage("Please select an image or video file.");
      return;
    }

    setSelectedFile(file);
    setSettings((current) => ({
      ...current,
      mediaType: isVideo ? "video" : "image",
      fileName: file.name,
    }));
    setMessage("");
  }

  async function saveChanges() {
    setSaving(true);
    setMessage("");
    try {
      if (selectedFile) {
        await saveHomeBannerFile(selectedFile);
        setStoredBlob(selectedFile);
        setSelectedFile(null);
      }
      saveHomeBannerSettings(settings);
      setMessage("Home banner saved successfully.");
    } catch {
      setMessage("Unable to save the banner. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  async function resetBanner() {
    await clearHomeBannerFile();
    clearHomeBannerSettings();
    setSelectedFile(null);
    setStoredBlob(null);
    setSettings(DEFAULT_HOME_BANNER_SETTINGS);
    setMessage("Banner reset to the default BrandlineTech video.");
  }

  if (!ready) {
    return <main className="grid min-h-screen place-items-center bg-[#080808] text-white/50">Opening banner manager…</main>;
  }

  return (
    <main className="min-h-screen bg-[#080808] px-5 py-8 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 border-b border-white/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <button
              onClick={() => navigate({ to: "/admin" })}
              className="mb-5 inline-flex items-center gap-2 text-sm text-white/45 transition hover:text-white"
            >
              <ArrowLeft size={16} /> Back to admin
            </button>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#EB175D]">Website Content</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Home Banner</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/45">
              Upload an image or video, preview it, control the crop and publish it as the full-screen homepage banner.
            </p>
          </div>

          <button
            onClick={saveChanges}
            disabled={saving}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#EB175D] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#CC527A] disabled:opacity-50"
          >
            <Save size={17} /> {saving ? "Saving…" : "Save banner"}
          </button>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[.78fr_1.22fr]">
          <section className="space-y-6 rounded-2xl border border-white/10 bg-white/[.035] p-6">
            <div>
              <label className="text-sm font-semibold">Banner media</label>
              <label className="mt-3 flex min-h-36 cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[.025] p-6 text-center transition hover:border-[#EB175D]/60 hover:bg-[#EB175D]/[.04]">
                <Upload className="mb-3 text-[#EB175D]" size={24} />
                <span className="text-sm font-semibold">Upload image or video</span>
                <span className="mt-1 text-xs text-white/35">JPG, PNG, WEBP, MP4 or WEBM</span>
                <input
                  type="file"
                  accept="image/*,video/*"
                  className="hidden"
                  onChange={(event) => chooseFile(event.target.files?.[0] ?? null)}
                />
              </label>
              {settings.fileName && (
                <div className="mt-3 flex items-center gap-2 text-xs text-white/45">
                  {settings.mediaType === "video" ? <Video size={14} /> : <ImageIcon size={14} />}
                  <span className="truncate">{settings.fileName}</span>
                </div>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold">Display fit</span>
                <select
                  value={settings.objectFit}
                  onChange={(event) => setSettings((current) => ({ ...current, objectFit: event.target.value as "cover" | "contain" }))}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#111] px-4 py-3 text-sm outline-none focus:border-[#EB175D]/60"
                >
                  <option value="cover">Cover full screen</option>
                  <option value="contain">Show full media</option>
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-semibold">Alignment</span>
                <select
                  value={settings.objectPosition}
                  onChange={(event) => setSettings((current) => ({ ...current, objectPosition: event.target.value }))}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#111] px-4 py-3 text-sm outline-none focus:border-[#EB175D]/60"
                >
                  <option value="center">Center</option>
                  <option value="center top">Top</option>
                  <option value="center bottom">Bottom</option>
                  <option value="left center">Left</option>
                  <option value="right center">Right</option>
                </select>
              </label>
            </div>

            <label className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[.025] p-4">
              <div>
                <div className="text-sm font-semibold">Show home banner</div>
                <div className="mt-1 text-xs text-white/35">Disable this to temporarily hide the banner.</div>
              </div>
              <input
                type="checkbox"
                checked={settings.enabled}
                onChange={(event) => setSettings((current) => ({ ...current, enabled: event.target.checked }))}
                className="size-5 accent-[#EB175D]"
              />
            </label>

            <button
              onClick={resetBanner}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-red-400/20 bg-red-400/[.05] px-4 py-3 text-sm font-semibold text-red-200 transition hover:bg-red-400/10"
            >
              <Trash2 size={16} /> Reset to default banner
            </button>

            {message && (
              <div className="rounded-xl border border-[#EB175D]/20 bg-[#EB175D]/[.07] px-4 py-3 text-sm text-white/75">
                {message}
              </div>
            )}
          </section>

          <section>
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">Live preview</p>
                <p className="mt-1 text-xs text-white/35">Preview uses the same full-screen crop settings as the homepage.</p>
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white/40">
                {settings.mediaType}
              </span>
            </div>

            <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-[#AAA7A7] shadow-2xl">
              {previewUrl ? (
                settings.mediaType === "image" ? (
                  <img src={previewUrl} alt="Banner preview" className={`h-full w-full ${settings.objectFit === "contain" ? "object-contain" : "object-cover"}`} style={{ objectPosition: settings.objectPosition }} />
                ) : (
                  <video src={previewUrl} className={`h-full w-full ${settings.objectFit === "contain" ? "object-contain" : "object-cover"}`} style={{ objectPosition: settings.objectPosition }} autoPlay muted loop playsInline />
                )
              ) : (
                <video src="/brandline-home-banner.mp4" className="h-full w-full object-cover object-center" autoPlay muted loop playsInline />
              )}
            </div>

            <div className="mt-4 rounded-xl border border-amber-300/15 bg-amber-300/[.05] p-4 text-xs leading-6 text-amber-100/65">
              The current Brandline admin stores website settings in the browser. This banner manager follows that existing setup. A shared cloud-storage connection is required for uploads to automatically appear for every visitor on every device.
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
