import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "@/components/Image";
import { Link } from "react-router-dom";
import { IconType } from "react-icons";

type Props = {
  title: string;
  href?: string;
  description: string;
  dates: string;

  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon?: IconType;
    type: string;
    href: string;
  }[];
  iconLists?: IconType[];
  className?: string;
};

export default function ProjectCard({
  title,
  href,
  description,
  dates,
  iconLists,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card
      className={cn(
        "flex h-full flex-col overflow-hidden border transition-all duration-300 ease-out hover:shadow-lg",
        className,
      )}
    >
      <Link to={href || "#"} target="_blank" className={cn("block cursor-pointer", className)}>
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
      </Link>
      <CardHeader className="px-4 py-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-xl">{title}</CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          <div className="font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <p className="dark:prose-invert mb-4 max-w-full text-pretty font-sans text-xs text-muted-foreground">
            {description}
          </p>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col px-4 py-2">
        <div className="flex items-center">
          {iconLists &&
            iconLists.map((Icon, idx) => (
              <div
                key={idx}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-black/[.2] bg-white dark:border-white/[.2] dark:bg-black lg:h-10 lg:w-10"
                style={{
                  transform: `translateX(-${5 * idx + 2}px)`,
                }}
              >
                <Icon />
              </div>
            ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-row-reverse px-4 pb-2 group-hover:text-green-500">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-end gap-1">
            {links?.map((link, idx) => (
              <Link to={link?.href} key={idx} target="_blank">
                <Badge key={idx} variant="outline" className="flex gap-2 px-2 py-1 text-[10px]">
                  {link?.icon && <link.icon />}
                  {link?.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
