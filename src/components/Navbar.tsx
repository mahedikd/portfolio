import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { IconType } from "react-icons";

import { cn } from "@/lib/utils";
import Data from "@/data/data";

import { Dock, DockIcon } from "@/components/ui/dock";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";

type NavProps = {
  name: string;
  href: string;
  icon: IconType;
  tooltip: string;
};

type NavItems = {
  pages: NavProps[];
  socials: NavProps[];
};

export default function Navbar() {
  const navItems: NavItems = Data.navItems;
  const location = useLocation();
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    if (location.pathname === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [location.pathname]);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-6 flex h-full max-h-14 origin-bottom">
      <TooltipProvider>
        <Dock className="pointer-events-auto relative z-50 mx-auto flex h-full min-h-full transform-gpu items-center bg-background px-1 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
          {navItems.pages.map((item) => (
            <DockIcon key={item.name}>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full",
                    )}
                  >
                    {isHome && item.href !== "resume" ? (
                      <ScrollLink
                        to={item.href}
                        smooth={true}
                        duration={500}
                        className="cursor-pointer"
                      >
                        <item.icon className="h-4 w-4" />
                      </ScrollLink>
                    ) : !isHome ? (
                      <RouterLink to={item.href === "home" ? "/" : item.href}>
                        <item.icon className="h-4 w-4" />
                      </RouterLink>
                    ) : (
                      <RouterLink to={item.href}>
                        <item.icon className="h-4 w-4" />
                      </RouterLink>
                    )}
                  </div>
                </TooltipTrigger>
                <TooltipContent className="hidden md:block">
                  <p>{item.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />
          {navItems.socials.map((item) => (
            <DockIcon key={item.name}>
              <Tooltip>
                <TooltipTrigger>
                  <RouterLink
                    to={item.href}
                    target="_blank"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full",
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                  </RouterLink>
                </TooltipTrigger>
                <TooltipContent className="hidden md:block">
                  <p>{item.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  );
}
