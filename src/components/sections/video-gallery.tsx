"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Clock3, Film } from "lucide-react";
import { siteData } from "@/data/site";
import type { VideoItem } from "@/data/types";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, StaggerItem } from "@/components/motion";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

/** Auto-generated thumbnail from the bare YouTube video ID. */
const thumbUrl = (video: VideoItem) =>
  `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;

/** Auto-generated embed URL from the bare YouTube video ID. */
const embedUrl = (video: VideoItem) =>
  `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`;

const hasVideo = (video: VideoItem) => video.youtubeId.trim().length > 0;

/**
 * Responsive video gallery — cards with auto-generated YouTube thumbnails.
 * Clicking a card opens a modal that lazily loads the YouTube embed
 * (iframe only mounts on open — no third-party scripts on page load).
 * Entries without a youtubeId render a "Video Coming Soon" placeholder.
 */
export function VideoGallery() {
  const [active, setActive] = useState<VideoItem | null>(null);

  return (
    <section id="videos" className="scroll-mt-header bg-muted/40 py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Featured Videos"
          title="Watch the show"
          description="Live moments, wedding sets and viral clips. Click any video to watch."
        />

        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteData.videos.map((video) => (
            <StaggerItem key={video.id}>
              <article
                className={cn(
                  "group flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300",
                  hasVideo(video)
                    ? "cursor-pointer hover:-translate-y-1 hover:shadow-xl"
                    : "hover:shadow-md"
                )}
              >
                {hasVideo(video) ? (
                  <button
                    type="button"
                    onClick={() => setActive(video)}
                    aria-label={`Play video: ${video.title}`}
                    className="relative block aspect-video w-full overflow-hidden bg-brand-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
                  >
                    <Image
                      src={thumbUrl(video)}
                      alt={`${video.title} — video thumbnail`}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 grid place-items-center bg-black/30 transition-colors group-hover:bg-black/40">
                      <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-yellow shadow-lg shadow-brand-yellow/40 transition-transform duration-300 group-hover:scale-110">
                        <Play className="ml-0.5 h-6 w-6 fill-brand-black text-brand-black" />
                      </span>
                    </span>
                    {video.duration && (
                      <Badge className="absolute bottom-3 right-3" variant="dark">
                        <Clock3 className="h-3 w-3" />
                        {video.duration}
                      </Badge>
                    )}
                  </button>
                ) : (
                  <div className="relative grid aspect-video w-full place-items-center overflow-hidden bg-brand-black">
                    <div className="flex flex-col items-center gap-3 px-4 text-center">
                      <span className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-brand-yellow">
                        <Film className="h-5 w-5" />
                      </span>
                      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white/70">
                        Video Coming Soon
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h3 className="font-semibold leading-snug">{video.title}</h3>
                  <p className="line-clamp-2 text-sm text-muted-foreground">
                    {video.description}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>

      {/* Video modal — iframe mounts lazily on open */}
      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="sm:max-w-4xl">
          <DialogHeader>
            <DialogTitle>{active?.title}</DialogTitle>
            <DialogDescription className="sr-only">
              Video player — {active?.title}
            </DialogDescription>
          </DialogHeader>
          {active && (
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-brand-black">
              <iframe
                src={embedUrl(active)}
                title={active.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
