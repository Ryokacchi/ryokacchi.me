// @ts-check
"use client";
import config from "@/config.js";
import cn from "@/functions/cn.js";
import useSocial from "@/hooks/useSocial.js";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDiscord, FaGithub } from "react-icons/fa6";

export default function Header() {
	const { data, isPending } = useSocial();

	return (
		<header className="mx-auto w-full relative max-w-4xl lg:px-8 mt-6">
			<div className="flex justify-between items-center px-4 lg:px-0">
				<div className="flex w-1/3 justify-start">

					<Link href={"/"} className={cn("h-10 w-10 rounded-full  p-0.5 shadow-lg shadow-zinc-800/5 ring-1 backdrop-blur-sm bg-zinc-800/90 ring-white/10", isPending && "animate-pulse")}>
						{!isPending && (
							<div className="relative size-9">
								<Image className="rounded-full w-full h-full object-cover" src={`https://cdn.discordapp.com/avatars/${data?.discord.discord_user.id}/${data?.discord.discord_user.avatar}`} alt={data?.discord.discord_user.username} width={36} height={36} />
								{ data?.discord.discord_user.avatar_decoration_data && <Image className="absolute top-0 left-0 w-full h-full object-contain" src={`https://cdn.discordapp.com/avatar-decoration-presets/${data?.discord.discord_user.avatar_decoration_data.asset}`} alt={data?.discord.discord_user.avatar_decoration_data.sku_id} width={36} height={36} />
								}
							</div>
						)}
					</Link>
				</div>
				<div className="w-1/3 flex justify-end gap-x-2">
					<NavLink href={`https://discord.com/users/${config.discord.id}`}>
						<FaDiscord size={16} />
					</NavLink>
					<NavLink href={`https://github.com/${config.github.username}`}>
						<FaGithub size={16} />
					</NavLink>
				</div>
			</div>
		</header>
	);
}

/**
 *
 * @param {React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>} param0
 */
function NavLink({ children, ...props }) {
	return (
		// @ts-ignore
		<Link
			target="_blank"
			className="h-9 w-9 flex items-center justify-center bg-zinc-0 ring-1 text-white/70 hover:text-white cursor-pointer backdrop-blur-sm bg-zinc-800/30 ring-white/10 rounded-full shadow-inner shadow-black/10 relative transition-all"
			{...props}
		>
			{children}
		</Link>
	);
}