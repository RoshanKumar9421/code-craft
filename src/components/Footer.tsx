
import { Blocks, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="relative border-t border-gray-800/50 mt-auto">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gray-900 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left side */}
          <div className="flex items-center gap-2 text-gray-400">
            <Blocks className="size-5" />
            <span>Built for developers, by Roshan Kumar</span>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/RoshanKumar9421"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="size-5 gap-4" />
            </a>

            <a
              href="https://x.com/cseroshan2028"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="X / Twitter"
            >
              <Twitter className="size-5 gap-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/roshankumaryadav-/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-5 gap-4" />
            </a>
          </div>

          {/* Footer links */}
          <div className="flex items-center gap-6">
            <Link href="/support" className="text-gray-400 hover:text-gray-300 transition-colors">
              Support
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-gray-300 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-gray-300 transition-colors">
              Terms
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
