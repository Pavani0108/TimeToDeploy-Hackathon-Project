import logo from "../../assets/Sonata_Software_Logo.svg";

export default function SonataFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-white dark:bg-darkbg">
      <div
        className="
          w-full
          px-4 sm:px-6 lg:px-12
          py-3
          flex flex-col gap-2
          sm:flex-row sm:items-center sm:justify-between
          text-xs sm:text-sm
          text-gray-500 dark:text-gray-400
        "
      >
        {/* Left */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Sonata"
            className="h-5 sm:h-6"
          />
          <span>Powered by Sonata Software Limited</span>
        </div>

        {/* Right */}
        <div className="text-left sm:text-right">
          © Sonata Software. All rights reserved {year}.
        </div>
      </div>
    </footer>
  );
}
