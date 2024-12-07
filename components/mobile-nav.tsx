import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const menuItems = [
  {
    title: "Why Webstacks",
    href: "/why",
  },
  {
    title: "Capabilities",
    items: [
      { title: "Web Development", href: "/capabilities/web-development" },
      { title: "Design", href: "/capabilities/design" },
      { title: "Marketing", href: "/capabilities/marketing" },
    ],
  },
  {
    title: "Solutions",
    items: [
      { title: "Enterprise", href: "/solutions/enterprise" },
      { title: "Startups", href: "/solutions/startups" },
      { title: "E-commerce", href: "/solutions/ecommerce" },
      { title: "SaaS", href: "/solutions/saas" },
    ],
  },
  {
    title: "Company",
    items: [
      { title: "About", href: "/company/about" },
      { title: "Careers", href: "/company/careers" },
      { title: "Blog", href: "/company/blog" },
      { title: "Contact", href: "/company/contact" },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "Documentation", href: "/resources/docs" },
      { title: "Case Studies", href: "/resources/case-studies" },
      { title: "Blog", href: "/resources/blog" },
      { title: "Support", href: "/resources/support" },
    ],
  },
]

export function MobileNav() {
  return (
    <div className="flex flex-col space-y-4">
      <Accordion type="single" collapsible className="w-full">
        {menuItems.map((item, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            {item.items ? (
              <>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2">
                    {item.items.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="text-sm text-muted-foreground hover:text-foreground"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </>
            ) : (
              <Link href={item.href} className="py-4 text-sm font-medium">
                {item.title}
              </Link>
            )}
          </AccordionItem>
        ))}
      </Accordion>
      <Button className="w-full bg-blue-600 hover:bg-blue-700">
        Schedule a discovery call
      </Button>
    </div>
  )
}



