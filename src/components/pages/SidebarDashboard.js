"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const SidebarDashboard = () => {
  const pathname = usePathname();

  const sidebarItems = [
    {
      title: "MAIN",
      items: [
        {
          href: "/home-page",
          icon: "flaticon-discovery",
          text: "Dashboard",
        },
      ],
    },
    {
      title: "MANAGE LISTINGS",
      items: [
        {
          href: "/project-add",
          icon: "flaticon-new-tab",
          text: "Add New Project",
        },
        {
          href: "/project-list",
          icon: "flaticon-home",
          text: "Project List",
        },
        {
          href: "dashboard-booking-list",
          icon: "flaticon-like",
          text: "Booking Reports",
        },
        {
          href: "project-type",
          icon: "flaticon-like",
          text: "Project Type",
        },
      ],
    },
    {
      title: "RERURNS",
      items: [
        {
          icon: "flaticon-protection",
          text: "Use Return History",
          href: "#",
        },
      ],
    },
    {
      title: "Transactions",
      items: [
        {
          icon: "flaticon-protection",
          text: "Received Payment",
          href: "#",
        },
        {
          icon: "flaticon-user",
          text: "Return Payment",
          href: "#",
        },
        {
          icon: "flaticon-user",
          text: "Withdraw Request",
          href: "#",
        },
      ],
    },
    {
      title: "PR MANAGE",
      items: [
        {
          icon: "flaticon-protection",
          text: "Add PR Manager",
          href: "/dashboard-add-pr-manager",
        },
        {
          icon: "flaticon-user",
          text: "List of PR Manager",
          href: "/dashboard-prManager-list",
        },
      ],
    },
    {
      title: "Others",
      items: [
        {
          href: "#",
          icon: "flaticon-protection",
          text: "User Profile",
        },
        {
          href: "#",
          icon: "flaticon-user",
          text: "Referral",
        },
        {
          href: "/login",
          icon: "flaticon-logout",
          text: "Logout",
        },
      ],
    },
  ];

  return (
    <div className="dashboard__sidebar d-none d-lg-block">
      <div className="dashboard_sidebar_list">
        {sidebarItems.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <p
              className={`fz15 fw400 ff-heading ${
                sectionIndex === 0 ? "mt-0" : "mt30"
              }`}
            >
              {section.title}
            </p>
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="sidebar_list_item">
                <Link
                  href={item.href}
                  className={`items-center   ${
                    pathname == item.href ? "-is-active" : ""
                  } `}
                >
                  <i className={`${item.icon} mr15`} />
                  {item.text}
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarDashboard;
