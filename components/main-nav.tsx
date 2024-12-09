"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const capabilities = {
  "Servers and Storage": {
    description:
      "Stay competitive with cutting-edge tech optimized for speed & performance",
    items: [
      {
        title: "Rack Mount",
        href: "/capabilities/frontend",
        description: "Create engaging user interfaces with modern frameworks",
      },
      {
        title: "GPU",
        href: "/capabilities/backend",
        description: "Build scalable server-side applications",
      },
      {
        title: "Twin",
        href: "/capabilities/api",
        description: "Design and implement robust APIs",
      },
      {
        title: "Blade",
        href: "/capabilities/api",
        description: "Design and implement robust APIs",
      },
      {
        title: "Storage",
        href: "/capabilities/api",
        description: "Design and implement robust APIs",
      },
    ],
    tools: [
      {
        title: "React",
        href: "/tools/react",
        description: "Build interactive UIs",
      },
      {
        title: "Next.js",
        href: "/tools/nextjs",
        description: "The React Framework",
      },
      {
        title: "Node.js",
        href: "/tools/nodejs",
        description: "Server-side JavaScript",
      },
    ],
  },
  Building_Blocks: {
    description: "Create stunning digital experiences that convert",
    items: [
      {
        title: "UI/UX Design",
        href: "/capabilities/ui-ux",
        description: "Create intuitive user experiences",
      },
      {
        title: "Brand Design",
        href: "/capabilities/brand",
        description: "Build a strong brand identity",
      },
      {
        title: "Motion Design",
        href: "/capabilities/motion",
        description: "Add life to your interfaces",
      },
    ],
    tools: [
      {
        title: "Figma",
        href: "/tools/figma",
        description: "Collaborative design",
      },
      {
        title: "Adobe CC",
        href: "/tools/adobe",
        description: "Creative suite",
      },
      {
        title: "Framer",
        href: "/tools/framer",
        description: "Interactive prototypes",
      },
    ],
    tools1: [
      {
        title: "Figmasss",
        href: "/tools/figma",
        description: "Collaborative design",
      },
      {
        title: "Adobe CC",
        href: "/tools/adobe",
        description: "Creative suite",
      },
      {
        title: "Framer",
        href: "/tools/framer",
        description: "Interactive prototypes",
      },
    ],
  },

  Edge: {
    description: "Drive growth with data-driven marketing strategies",
    items: [
      {
        title: "edge and telecom",
        href: "/capabilities/content",
        description: "Create engaging content",
      },
      {
        title: "component",
        href: "/capabilities/seo",
        description: "Improve search visibility",
      },
    ],
    tools: [
      {
        title: "HubSpot",
        href: "/tools/hubspot",
        description: "Marketing automation",
      },
      {
        title: "Google Analytics",
        href: "/tools/analytics",
        description: "Track performance",
      },
      {
        title: "Semrush",
        href: "/tools/semrush",
        description: "SEO toolkit",
      },
    ],
  },
  Networking: {
    description: "Drive growth with data-driven marketing strategies",
    items: [
      {
        title: "switches",
        href: "/capabilities/content",
        description: "Create engaging content",
      },
      {
        title: "addapters",
        href: "/capabilities/seo",
        description: "Improve search visibility",
      },
    ],
    tools: [
      {
        title: "HubSpot",
        href: "/tools/hubspot",
        description: "Marketing automation",
      },
      {
        title: "Google Analytics",
        href: "/tools/analytics",
        description: "Track performance",
      },
      {
        title: "Semrush",
        href: "/tools/semrush",
        description: "SEO toolkit",
      },
    ],
    tools1: [
      {
        title: "HubSpot",
        href: "/tools/hubspot",
        description: "Marketing automation",
      },
      {
        title: "Google sherrrrr Analytics",
        href: "/tools/analytics",
        description: "Track performance",
      },
      {
        title: "Semrush",
        href: "/tools/semrush",
        description: "SEO toolkit",
      },
    ],
  },
  Workstation_and_Gaming: {
    description: "Drive growth with data-driven marketing strategies",
    items: [
      {
        title: "super workstation",
        href: "/capabilities/content",
        description: "Create engaging content",
      },
      {
        title: "superio",
        href: "/capabilities/seo",
        description: "Improve search visibility",
      },
    ],
    tools: [
      {
        title: "HubSpot",
        href: "/tools/hubspot",
        description: "Marketing automation",
      },
      {
        title: "Google Analytics",
        href: "/tools/analytics",
        description: "Track performance",
      },
      {
        title: "Semrush",
        href: "/tools/semrush",
        description: "SEO toolkit",
      },
    ],
  },
};

export function MainNav() {
  const [activeCapability, setActiveCapability] = React.useState(
    "Servers and Storage"
  );

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/why" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              New GRC
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent className="w-[100vw] ground-hover:w-full">
            <div className="grid w-[500px] gap-3 p-4 md:w-[500px] lg:w-[600px] h-[90vh] xl:w-[1000px] xl:grid-cols-[280px_1fr]">
              <div className="grid h-10 gap-4">
                {Object.entries(capabilities).map(([name, content]) => (
                  <div
                    key={name}
                    className={cn(
                      "cursor-pointer rounded-lg p-3 hover:bg-accent",
                      activeCapability === name && "bg-accent"
                    )}
                    onMouseEnter={() => setActiveCapability(name)}
                  >
                    <div className="font-medium leading-none">{name}</div>
                    <p className="mt-1 hidden text-sm text-muted-foreground xl:block">
                      {content.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="hidden xl:grid xl:grid-cols-3 xl:gap-6">
                {/* Services Section */}
                <div>
                  <div className="mb-3 text-sm font-medium leading-none">
                    Services
                  </div>
                  <div className="mt-2 grid gap-4">
                    {capabilities[
                      activeCapability as keyof typeof capabilities
                    ].items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="group grid gap-1 rounded-lg p-2 hover:bg-accent"
                      >
                        <div className="font-medium leading-none group-hover:text-accent-foreground">
                          {item.title}
                        </div>
                        <p className="line-clamp-2 text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Tools Section */}
                <div>
                  <div className="mb-3 text-sm font-medium leading-none">
                    Tools & Technologies
                  </div>
                  <div className="mt-2 grid gap-4">
                    {capabilities[
                      activeCapability as keyof typeof capabilities
                    ].tools.map((tool) => (
                      <Link
                        key={tool.title}
                        href={tool.href}
                        className="group grid gap-1 rounded-lg p-2 hover:bg-accent"
                      >
                        <div className="font-medium leading-none group-hover:text-accent-foreground">
                          {tool.title}
                        </div>
                        <p className="line-clamp-2 text-sm text-muted-foreground">
                          {tool.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
                {/* More Tools Section */}
                {capabilities[activeCapability as keyof typeof capabilities]
                  ?.tools1?.length > 0 && (
                  <div>
                    <div className="mb-3 text-sm font-medium leading-none">
                      More Tools
                    </div>
                    <div className="mt-2 grid gap-4">
                      {capabilities[
                        activeCapability as keyof typeof capabilities
                      ].tools1?.map((tool) => (
                        <Link
                          key={tool.title}
                          href={tool.href}
                          className="group grid gap-1 rounded-lg p-2 hover:bg-accent"
                        >
                          <div className="font-medium leading-none group-hover:text-accent-foreground">
                            {tool.title}
                          </div>
                          <p className="line-clamp-2 text-sm text-muted-foreground">
                            {tool.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem title="Enterprise" href="/solutions/enterprise">
                Scalable solutions for large organizations
              </ListItem>

              <ListItem title="Startups" href="/solutions/startups">
                Fast-moving solutions for growth
              </ListItem>

              <ListItem title="E-commerce" href="/solutions/ecommerce">
                Build your online store
              </ListItem>

              <ListItem title="SaaS" href="/solutions/saas">
                Cloud software solutions
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem title="About" href="/company/about">
                Our story and mission
              </ListItem>

              <ListItem title="Careers" href="/company/careers">
                Join our team
              </ListItem>

              <ListItem title="Blog" href="/company/blog">
                Latest insights
              </ListItem>

              <ListItem title="Contact" href="/company/contact">
                Get in touch
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem title="Documentation" href="/resources/docs">
                Guides and tutorials
              </ListItem>

              <ListItem title="Case Studies" href="/resources/case-studies">
                Client success stories
              </ListItem>

              <ListItem title="Blog" href="/resources/blog">
                Industry insights
              </ListItem>

              <ListItem title="Support" href="/resources/support">
                Help and FAQs
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
  }
>(({ className, title, children, ...props }, ref) => {
  return (
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  );
});
ListItem.displayName = "ListItem";
