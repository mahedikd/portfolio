import { Button } from "@/components/ui/button";
import Image from "@/components/Image";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Data from "@/data/data";

export default function TopBar() {
  const { mail, logo } = Data.topbar;
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(mail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="fixed left-0 top-0 z-50 flex w-full justify-between gap-4 bg-gray-50/80 p-2 backdrop-blur-sm">
      <div className="mx-auto flex w-full items-center justify-between gap-4 lg:max-w-5xl">
        <Image
          src={logo}
          alt="logo"
          width={80}
          height={80}
          className="transition-transform duration-300 hover:scale-105"
        />

        <div className="group relative flex h-10 items-center">
          <div className="flex items-center overflow-hidden rounded-l-full border border-r-0 border-gray-200 bg-white transition-all duration-300 group-hover:border-gray-300">
            <p className="truncate px-4 py-2 text-sm font-medium text-gray-600 transition-colors group-hover:text-gray-900">
              {mail}
            </p>
          </div>

          <Button
            onClick={copyToClipboard}
            className={cn(
              "rounded-r-full border border-l-0 border-gray-200 px-4 py-2",
              "transition-all duration-300",
              "bg-white hover:bg-gray-50",
              "focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2",
              "relative overflow-hidden",
            )}
          >
            <div
              className={cn(
                "absolute inset-0 flex items-center justify-center",
                "transition-transform duration-300",
                copied ? "translate-y-0" : "translate-y-full",
              )}
            >
              <Check className="h-4 w-4 text-green-500" />
            </div>
            <div
              className={cn(
                "flex items-center justify-center",
                "transition-transform duration-300",
                copied ? "-translate-y-full" : "translate-y-0",
              )}
            >
              <Copy className="h-4 w-4 text-gray-500" />
            </div>
          </Button>

          {/* Tooltip */}
          <div
            className={cn(
              "absolute -top-8 right-0",
              "rounded-md bg-gray-800 px-2 py-1",
              "text-xs text-white",
              "transition-all duration-200",
              copied ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0",
            )}
          >
            Copied!
          </div>
        </div>
      </div>
    </div>
  );
}
