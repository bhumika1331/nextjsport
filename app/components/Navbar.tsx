"use client";

import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileMenu } from "./MobileMenu";

export const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Guestbook', href: '/guestbook' },
  { name: 'Projects', href: '/projects' }
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/">
          <h1 className="text-2xl font-semibold">
            Bhumika <span className="text-purple-500">Sharma</span>
          </h1>
        </Link>
      </div>

      <div className="hidden sm:flex justify-center items-center">
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-4">
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <Link href={item.href} passHref legacyBehavior>
                  <NavigationMenuLink
                    active={pathname === item.href}
                    className={navigationMenuTriggerStyle()}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center space-x-4">
        <Button className="hidden sm:block">
          Contact Me
        </Button>
        <div className="sm:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
