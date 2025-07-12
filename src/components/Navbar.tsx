"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const popupRef = useRef<HTMLDivElement>(null);
	const pathname = usePathname();
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				popupRef.current &&
				!popupRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);
	// Navbar links
	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About" },
		{ href: "/services", label: "Services" },
		{ href: "/projects", label: "Projects" },
		{ href: "/contact", label: "Contact" },
	];

	return (
		<nav className="shadow-md p-4 sticky top-0 z-50 backdrop-blur-sm bg-black/20 rounded-xl">
			<div className="mx-auto flex justify-between items-center">
				{/* Logo */}
				<h1 className="text-2xl font-bold">
					<Link href="/">
						<Image
							src="https://res.cloudinary.com/degrggosz/image/upload/v1738934587/hslogo_w8997t.png"
							alt="Logo"
							width={100}
							height={50}
							className="invert"
						/>
					</Link>
				</h1>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden text-[#8A2BE2] focus:outline-none"
					onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
				</button>

				{/* Desktop Menu */}
				<ul className="hidden md:flex space-x-6 text-gray-300 font-medium">
					{navLinks.map((item) => (
						<motion.li
							key={item.href}
							whileHover={{ scale: 1.1, color: "#4B0082" }}
							transition={{ duration: 0.1 }}>
							<Link
								href={item.href}
								className={`${
									pathname === item.href
										? "text-[#8551ff] underline underline-offset-4"
										: ""
								}+
										  "hover:text-[#8A2BE2] hover:font-medium hover:underline underline-offset-4 transition duration-100"
								`}>
								{item.label}
							</Link>
						</motion.li>
					))}
					{/* <motion.li whileHover={{ scale: 1.1 }}>
						<Link
							href="/login"
							className="bg-[#8551ff] text-white px-4 py-2 rounded-md hover:bg-[#8A2BE2] transition">
							Login
						</Link>
					</motion.li> */}
				</ul>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						ref={popupRef}
						initial={{ height: 0 }}
						animate={{ height: 352 }}
						exit={{
							height: 0,
							transition: { duration: 0.3 },
						}}
						transition={{ duration: 0.3 }}
						className="md:hidden absolute top-16 left-0 w-full bg-black shadow-lg rounded-b-lg overflow-hidden">
						<ul className="flex flex-col space-y-4 p-4 text-gray-300">
							{navLinks.map((item) => (
								<motion.li
									key={item.href}
									whileHover={{ scale: 1.1, color: "#8A2BE2" }}
									transition={{ duration: 0.1 }}>
									<Link
										href={item.href}
										onClick={() => setIsOpen(false)}
										className={`
											${pathname === item.href ? "text-[#8551ff] underline underline-offset-4" : ""} +
												  "w-full text-center block py-2  hover:text-[#4B0082] transition"
										`}>
										{item.label}
									</Link>
								</motion.li>
							))}
							{/* <motion.li whileHover={{ scale: 1.1 }}>
								<Link
									href="/login"
									className="block bg-[#8A2BE2] text-white px-4 py-2 rounded-md hover:bg-[#4B0082] transition text-center">
									Login
								</Link>
							</motion.li> */}
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
