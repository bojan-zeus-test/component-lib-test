import ErrorBoundary from "@/components/ui/error-boundary";
import { Vimeo } from "@/components/ui/vimeo";

export const VideoPlayer = (
  {
    vimeoVideoId
  }: {
    vimeoVideoId: string,
  }
) => {
  return (
    <ErrorBoundary fallback={
      <div className="relative pb-[56.25%] bg-gray-100 flex items-center justify-center text-gray-800 text-lg text-center border border-gray-300 rounded-lg">
        <p>Sorry, the video could not be loaded. Please try again later.</p>
      </div>
    }>
      <Vimeo videoId={vimeoVideoId}/>
    </ErrorBoundary>
  );
}
