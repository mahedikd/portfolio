import { useState, useEffect } from "react";

interface CustomImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  layout?: "responsive" | "fixed";
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const CustomImage = ({
  src,
  alt,
  width,
  height,
  layout = "fixed",
  className = "",
  ...props
}: CustomImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      setIsLoading(false);
    };

    img.onerror = () => {
      setError("Failed to load image");
      setIsLoading(false);
    };
  }, [src]);

  if (error) {
    return (
      <div className="flex items-center justify-center rounded" style={{ width, height }}>
        <span className="text-sm text-red-500">{error}</span>
      </div>
    );
  }

  if (isLoading) {
    return <div className="animate-pulse rounded bg-gray-100" style={{ width, height }} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${className} ${layout === "responsive" ? "h-auto w-full" : ""} grayscale`}
      {...props}
    />
  );
};

export default CustomImage;
