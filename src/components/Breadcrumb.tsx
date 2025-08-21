import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  // Static mapping for main site sections
  const sectionMap: Record<string, string> = {
    "": "Home",
    "collaboration": "Collaboration",
    "services": "Services",
    "products": "Products",
    "teams": "Teams",
    "blogs": "Blogs",
    "gallery": "Gallery",
    "contact": "Contact",
  };

  // Only show breadcrumbs for main sections
  const mainSections = [
    "",
    "collaboration",
    "services",
    "products",
    "teams",
    "blogs",
    "gallery",
    "contact",
  ];

  // Filter and build crumbs for main sections only
  const crumbs = mainSections
    .filter((section) => section === "" || pathSegments.includes(section))
    .map((section) => {
      const href = section === "" ? "/" : `/${section}`;
      return { href, label: sectionMap[section] };
    });

  return (
    <nav aria-label="Breadcrumb" className="my-4">
      <ol className="flex items-center space-x-2 text-sm text-gray-500">
        {crumbs.map((crumb, idx) => (
          <li key={crumb.href} className="flex items-center">
            {idx !== 0 && <span className="mx-2">/</span>}
            {idx === crumbs.length - 1 ? (
              <span className="text-gray-700 font-semibold">{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className="hover:underline text-blue-600 font-medium">{crumb.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
