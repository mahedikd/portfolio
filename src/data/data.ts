import {
	SiDocker,
	SiJavascript,
	SiTypescript,
	SiPython,
	SiExpress,
	SiMongodb,
	SiReact,
	SiLua,
	SiGnubash,
	SiNodedotjs,
	SiLinux,
	SiGithub,
	SiTailwindcss,
	SiNextdotjs,
	SiWordpress,
	SiWoo,
	SiHtml5,
	SiCss3,
	SiRedux,
	SiPrisma,
	SiNeovim,
	SiFigma,
	SiGit,
	SiNginx,
	SiPostman,
	SiJest,
	SiVite,
	SiPostgresql,
	SiPuppeteer,
	SiReactquery,
	SiGo 
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import { GoHome } from "react-icons/go";
import { FaCode } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import { CgLoadbarDoc } from "react-icons/cg";
import { BiLogoGithub, BiLogoFacebookCircle, BiUser } from "react-icons/bi";

const Data = {
	seo: {
		index: {
			title: "Devitum",
			desc: "Devitum Home Page",
			name: "Home",
			type: "website",
		},
		resume: {
			title: "Devitum Portfolio",
			desc: "Devitum Resume Page",
			name: "Resume",
			type: "website",
		},
	},
	topbar: {
		mail: "itumdev@gmail.com",
		logo: "/logo.svg",
	},
	home: {
		prePhrase: "Building",
		phrases: ["Digital Products", "Apps", "Experience"],
		avatarTitle: "Hi, I'm Mahedi",
		description:
			"I’m a full-stack developer who creates exceptional digital experiences and transforms complex problems into elegant solutions.",
		experience: [
			{ number: "2+", label: "Years of Experience" },
			{ number: "20+", label: "Projects Completed" },
			{ number: "100%", label: "Client Satisfaction" },
		],
	},

	navItems: {
		pages: [
			{ name: "Home", href: "home", icon: GoHome, tooltip: "Home" },
			{ name: "Tech", href: "tech", icon: GrTechnology, tooltip: "Tech" },
			{
				name: "Projects",
				href: "projects",
				icon: FaCode,
				tooltip: "Projects",
			},

			{ name: "About", href: "about", icon: BiUser, tooltip: "About" },
			{
				name: "Resume",
				href: "resume",
				icon: CgLoadbarDoc,
				tooltip: "Resume",
			},
		],
		socials: [
			{
				name: "Github",
				href: "https://github.com/mahedikd",
				icon: BiLogoGithub,
				tooltip: "Github",
			},
			{
				name: "Facebook",
				href: "https://facebook.com/mahedikd3",
				icon: BiLogoFacebookCircle,
				tooltip: "Facebook",
			},
		],
	},

	projects: [
		{
			title: "Url Ping Bot",
			href: "https://t.me/pyurlping_bot",
			image: "/pingbot.png",
			description:
				"A telegram demo bot that monitors URLs and deletes them after 2 hours. Built with Python and Prisma.",
			dates: "July 2025",
			link: "https://t.me/pyurlping_bot",
			links: [{ type: "preview", href: "https://t.me/pyurlping_bot" }],
			iconLists: [SiPython, SiPrisma],
		},
		{
			title: "Invoice App",
			href: "https://invoiceapp-wmzc.onrender.com",
			image: "/invoiceapp.png",
			description:
				"A comprehensive memo management app for e-commerce and f-commerce, supporting CSV uploads, data tracking, permissions, and analytics.",
			dates: "March 2022",
			link: "https://invoiceapp-wmzc.onrender.com",
			links: [
				{ type: "preview", href: "https://invoiceapp-wmzc.onrender.com" },
			],
			iconLists: [
				SiNextdotjs,
				SiReact,
				SiTailwindcss,
				SiTypescript,
				SiNodedotjs,
			],
		},
		{
			title: "NextJS Ecommerce",
			href: "https://jannatbabyfood.com",
			image: "/next-ecom.png",
			description:
				"A NextJS Powered Ecommerce, Baby-Food store enabling custom quantity orders with cash-on-delivery, Bkash, and Nagad payment options",
			dates: "March 2025",
			link: "https://jannatbabyfood.com",
			links: [{ type: "preview", href: "https://jannatbabyfood.com" }],
			iconLists: [
				SiNextdotjs,
				SiReact,
				SiReactquery,
				SiTailwindcss,
				SiTypescript,
				SiNodedotjs,
			],
		},
		{
			title: "Order Maker App",
			href: "https://mahedikd.github.io/foodordermaker",
			image: "/ordermaker.png",
			description:
				"Simplifies order creation for Facebook/WhatsApp businesses with automated calculations and error-free copy-to-clipboard functionality.",
			dates: "August 2023",
			link: "https://mahedikd.github.io/foodordermaker",
			links: [
				{ type: "github", href: "https://github.com/mahedikd/foodordermaker" },
				{ type: "preview", href: "https://mahedikd.github.io/foodordermaker" },
			],
			iconLists: [SiReact, SiTailwindcss, SiTypescript],
		},
		{
			title: "Missing File Finder",
			href: "https://mahedikd.github.io/missing_file",
			image: "/missing.png",
			description:
				"Helps locate missing anime episodes by analyzing file names and ranges, perfect for bulk downloads and organization.",
			dates: "May 2021",
			link: "https://mahedikd.github.io/missing_file",
			links: [
				{ type: "github", href: "https://github.com/mahedikd/missing_file" },
				{ type: "preview", href: "https://mahedikd.github.io/missing_file" },
			],
			iconLists: [SiJavascript, SiHtml5, SiCss3],
		},
		{
			title: "Video Link Scraper",
			href: "https://github.com/mahedikd/9ani_vid_link_scraper",
			image: "/scraper.png",
			description:
				"A script to scrape 9anime download links, generate text/JSON files, download episodes, rename them, or target specific episodes.",
			dates: "September 2021",
			link: "https://github.com/mahedikd/9ani_vid_link_scraper",
			links: [
				{
					type: "github",
					href: "https://github.com/mahedikd/9ani_vid_link_scraper",
				},
			],
			iconLists: [SiPuppeteer, SiNodedotjs],
		},
		{
			title: "Url Link Shortener",
			href: "https://replit.com/@mahedikd/URL-Shortener-Microservice",
			image: "/urlshort.png",
			description:
				"This is a URL shortener microservice built for freeCodeCamp.org. It allows users to shorten long URLs via a simple interface.",
			dates: "September 2021",
			link: "https://replit.com/@mahedikd/URL-Shortener-Microservice",
			links: [
				{
					type: "github",
					href: "https://github.com/mahedikd/url-shortener-microservice",
				},
			],
			iconLists: [SiExpress, SiNodedotjs],
		},
		{
			title: "Sudoku Solver",
			href: "https://replit.com/@mahedikd/sudoku-solver-fcc",
			image: "/sudoku.png",
			description:
				"This Sudoku solver, built for the freeCodeCamp project, automatically solves any given Sudoku puzzle using JavaScript algorithms.",
			dates: "September 2021",
			link: "https://replit.com/@mahedikd/sudoku-solver-fcc",
			links: [
				{
					type: "github",
					href: "https://github.com/mahedikd/sudoku-solver-fcc",
				},
			],
			iconLists: [SiExpress, SiNodedotjs],
		},
	],

	techItems: [
		{ label: "JavaScript", icon: SiJavascript, category: "Technology" },
		{ label: "TypeScript", icon: SiTypescript, category: "Technology" },
		{ label: "Go", icon: SiGo , category: "Technology" },
		{ label: "Python", icon: SiPython, category: "Technology" },
		{ label: "HTML", icon: SiHtml5, category: "Technology" },
		{ label: "CSS", icon: SiCss3, category: "Technology" },
		{ label: "Tailwind", icon: SiTailwindcss, category: "Technology" },
		{ label: "React", icon: SiReact, category: "Technology" },
		{ label: "Redux", icon: SiRedux, category: "Technology" },
		{ label: "Next", icon: SiNextdotjs, category: "Technology" },
		{ label: "Node", icon: SiNodedotjs, category: "Technology" },
		{ label: "Express", icon: SiExpress, category: "Technology" },
		{ label: "Prisma", icon: SiPrisma, category: "Technology" },
		{ label: "Lua", icon: SiLua, category: "Technology" },
		{ label: "Wordpress", icon: SiWordpress, category: "Technology" },
		{ label: "WooCommerce", icon: SiWoo, category: "Technology" },

		// { label: "Go", icon: SiGo, category: "Technology", status: "In Progress" },

		{ label: "Linux", icon: SiLinux, category: "Tools" },
		{ label: "Bash", icon: SiGnubash, category: "Tools" },
		{ label: "Git", icon: SiGit, category: "Tools" },
		{ label: "Github", icon: SiGithub, category: "Tools" },
		{ label: "Visual Studio Code", icon: VscVscode, category: "Tools" },
		{ label: "neovim", icon: SiNeovim, category: "Tools" },
		{ label: "Docker", icon: SiDocker, category: "Tools" },
		{ label: "Nginx", icon: SiNginx, category: "Tools" },
		{ label: "Postman", icon: SiPostman, category: "Tools" },
		{ label: "Vite", icon: SiVite, category: "Tools" },
		{ label: "Jest", icon: SiJest, category: "Tools" },
		{ label: "Figma", icon: SiFigma, category: "Tools" },

		{ label: "MongoDB", icon: SiMongodb, category: "Databases" },
		{ label: "PostgreSQL", icon: SiPostgresql, category: "Databases" },
	],

	experienceData: [
		{
			title: "Full Stack Developer",
			company: "Jannat Baby Foods",
			period: "Jan 2022 - Present",
			description:
				"Full-stack development focusing on web applications and solutions",
		},
		{
			title: "Freelance Developer",
			company: "Self-employed",
			period: "2021 - Present",
			description: "Independent development work for various clients",
		},
	],
};

export default Data;
