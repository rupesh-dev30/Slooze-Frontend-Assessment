const IconButton = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <button
    className={`inline-flex items-center justify-center rounded-md px-3 py-1 text-sm font-medium shadow-sm ring-1 ring-inset ring-gray-200 dark:ring-gray-700 ${className}`}
  >
    {children}
  </button>
);

export default IconButton;
