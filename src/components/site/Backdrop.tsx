/**
 * A looping, muted background video with its still as the fallback.
 * Visitors who prefer reduced motion see only the still (handled in CSS).
 */
export function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <video
        className="backdrop-video"
        src="/media/sea-storm.mp4"
        poster="/media/sea-storm.webp"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="backdrop-shade" />
    </div>
  );
}
