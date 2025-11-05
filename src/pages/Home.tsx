// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState, useEffect, useCallback } from "react";
import { BiLogoGithub, BiLogoFacebookCircle } from "react-icons/bi";
import { IconType } from "react-icons";

import Seo from "@/components/Seo";
import Data from "@/data/data";

const useTypewriter = (
  phrases: string[],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const typewriterEffect = useCallback(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    if (isPaused) {
      setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return;
    }

    if (isDeleting) {
      if (displayedText === "") {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        return;
      }

      const newText = displayedText.slice(0, -1);
      setDisplayedText(newText);
      return;
    }

    if (displayedText === currentPhrase) {
      setIsPaused(true);
      return;
    }

    const newText = currentPhrase.slice(0, displayedText.length + 1);
    setDisplayedText(newText);
  }, [currentPhraseIndex, displayedText, isDeleting, isPaused, phrases, pauseDuration]);

  useEffect(() => {
    const timer = setTimeout(
      typewriterEffect,
      isDeleting ? deletingSpeed : isPaused ? pauseDuration : typingSpeed,
    );
    return () => clearTimeout(timer);
  }, [typewriterEffect, isDeleting, isPaused, typingSpeed, deletingSpeed, pauseDuration]);

  return displayedText;
};

const SocialLink = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: IconType;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900"
  >
    <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
    <span className="border-b border-dotted border-gray-300 group-hover:border-gray-600">
      {label}
    </span>
  </a>
);

export default function Home() {
  const { phrases, prePhrase, description, experience } = Data.home;
  const { title, desc, name, type } = Data.seo.index;

  const displayedText = useTypewriter(phrases, 100, 50, 2000);

  return (
    <>
      <Seo title={title} description={desc} name={name} type={type} />
      <div className="relative" id="home">
        <div className="mx-auto max-w-6xl pt-20">
          <div className="grid gap-8 md:grid-cols-2 md:gap-8 lg:gap-16">
            {/* Right Column (Avatar) - Moved up for mobile */}
            {/* <div className="relative flex items-center justify-center md:order-2">
              <div className="relative">
                <Avatar className="h-40 w-40 border-8 md:h-64 md:w-64">
                  <AvatarImage src="/me.jpg" alt="@shadcn" className="grayscale" />
                  <AvatarFallback>DI</AvatarFallback>
                </Avatar>
                <div className="absolute -right-20 top-0 -rotate-[25deg] transform rounded-full bg-white px-2 py-1 text-sm shadow-lg transition-all duration-300 hover:scale-105 md:-right-12 md:p-2">
                  <span className="ml-1">{avatarTitle}</span>
                  <span className="animate-wave inline-block origin-[70%_70%]">👋</span>
                </div>
              </div>
            </div> */}

            {/* Left Column - Content */}
            <div className="flex flex-col justify-center space-y-8 md:order-1">
              <div className="space-y-6">
                <div className="py-2 text-sm">🚀 Available for new projects</div>

                <h1 className="!mt-0 text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
                  {prePhrase} <span className="text-gray-900">{displayedText}</span>
                  <span className="animate-blink ml-1 inline-block h-[1em] w-[6px] bg-gray-900"></span>
                </h1>

                <p className="max-w-lg text-justify text-lg text-gray-600">{description}</p>
              </div>
              {/* Social links */}
              <div className="flex flex-wrap gap-6">
                <SocialLink href="https://github.com/mahedikd" icon={BiLogoGithub} label="Github" />
                <SocialLink
                  href="https://facebook.com/mahedikd3"
                  icon={BiLogoFacebookCircle}
                  label="Facebook"
                />
              </div>
              {/* experience */}
              <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-4">
                {experience.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
