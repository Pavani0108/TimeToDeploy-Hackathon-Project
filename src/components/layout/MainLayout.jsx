import SonataFooter from "./SonataFooter";

export default function MainLayout({ children }) {
  return (
    <div
      className="
        min-h-screen
        flex flex-col
        bg-background dark:bg-darkbg
        text-gray-900 dark:text-gray-100
        transition-colors duration-700
      "
    >
      {/* Page Content */}
      <main className="flex-1">
        {children}
      </main>

      <SonataFooter />
    </div>
  );
}
