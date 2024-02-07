declare module "react-hover-video-player" 

export declare const thing: number;


export {};

export default function HoverVideoPlayer({
  videoSrc,
  videoCaptions,
  focused,
  disableDefaultEventHandling,
  hoverTarget,
  onHoverStart,
  onHoverEnd,
  hoverOverlay,
  pausedOverlay,
  loadingOverlay,
  loadingStateTimeout,
  overlayTransitionDuration,
  playbackStartDelay,
  restartOnPaused,
  unloadVideoOnPaused,
  playbackRangeStart,
  playbackRangeEnd,
  muted,
  volume,
  loop,
  preload,
  crossOrigin,
  controls,
  controlsList,
  disableRemotePlayback,
  disablePictureInPicture,
  style,
  hoverOverlayWrapperClassName,
  hoverOverlayWrapperStyle,
  pausedOverlayWrapperClassName,
  pausedOverlayWrapperStyle,
  loadingOverlayWrapperClassName,
  loadingOverlayWrapperStyle,
  videoId,
  videoClassName,
  videoRef: forwardedVideoRef,
  videoStyle,
  sizingMode,
  ...spreadableProps
}: HoverVideoPlayerProps): JSX.Element;
