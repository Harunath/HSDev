import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white text-center py-6 mt-10">
			<p className="text-sm">
				© {new Date().getFullYear()} HSDev. All rights reserved.
			</p>
			<div className="mt-3 flex justify-center space-x-4">
				<Link
					href="https://twitter.com"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-blue-400 transition">
					<FaTwitter size={20} />
				</Link>
				<Link
					href="https://linkedin.com"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-blue-500 transition">
					<FaLinkedin size={20} />
				</Link>
				<Link
					href="https://github.com"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-gray-400 transition">
					<FaGithub size={20} />
				</Link>
			</div>
			<p className="mt-3 text-sm text-gray-400">
				📞 +91 9133443441 <br />
				📧 hsdev.original@gmail.com
			</p>
			<p className="mt-4 text-sm text-gray-400">
				Developed by{" "}
				<Link
					href="https://sushmasri.netlify.app"
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-400 hover:underline">
					Sushmasri
				</Link>{" "}
				&{" "}
				<Link
					href="https://harunath.netlify.app"
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-400 hover:underline">
					Harunath
				</Link>
			</p>
		</footer>
	);
};

export default Footer;
