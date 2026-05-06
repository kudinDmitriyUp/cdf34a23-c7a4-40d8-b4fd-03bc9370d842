import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarDropdown from '@/components/ui/NavbarDropdown';

import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Home",
    "href": "#hero"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Menu",
    "href": "#features"
  },
  {
    "name": "Products",
    "href": "#products"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  },
  {
    "name": "FAQ",
    "href": "#faq"
  },
  {
    "name": "Contact",
    "href": "#contact"
  }
];

  return (
    <StyleProvider buttonVariant="default">
      
      <NavbarDropdown
      ctaButton={{
        text: "Order Now",
        href: "#contact",
      }}
      logo="Retro Coffee"
     navItems={navItems} />
      <main className="flex-grow bg-gradient-to-b from-black to-[#f6f0e9]">
        <Outlet />
      </main>
      <FooterSimple
      brand="Retro Coffee"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Our Story",
              href: "#about",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Menu",
          items: [
            {
              label: "Coffee & Espresso",
              href: "#features",
            },
            {
              label: "Pastries",
              href: "#features",
            },
            {
              label: "Sandwiches",
              href: "#features",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact Us",
              href: "#contact",
            },
          ],
        },
      ]}
      copyright="© 2023 Retro Coffee. All rights reserved."
      links={[
        {
          label: "Privacy Policy",
          href: "#",
        },
        {
          label: "Terms of Service",
          href: "#",
        },
      ]}
    />
    </StyleProvider>
  );
}
