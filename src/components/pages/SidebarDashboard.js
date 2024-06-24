"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { MdOutlineCategory } from "react-icons/md";

import {
  AiOutlineHome,
  AiOutlinePlusSquare,
  AiOutlineUnorderedList,
  AiOutlineTransaction,
  AiOutlineHistory,
  AiOutlineUserAdd,
  AiOutlineTeam,
  AiOutlineDollarCircle,
  AiOutlineLogout,
} from "react-icons/ai";

const SidebarDashboard = () => {
  const pathname = usePathname();

  const iconStyle = { width: "24px", height: "24px" };

  const sidebarItems = [
    {
      items: [
        {
          href: "/home-page",
          icon: <AiOutlineHome style={iconStyle} />,
          text: "Dashboard",
        },
        {
          href: "/project-add",
          icon: <AiOutlinePlusSquare style={iconStyle} />,
          text: "Add New Project",
        },
        {
          href: "/project-list",
          icon: <AiOutlineUnorderedList style={iconStyle} />,
          text: "Project List",
        },
        {
          icon: <AiOutlineTransaction style={iconStyle} />,
          text: "Transactions",
          href: "transactions",
        },
        {
          icon: <AiOutlineHistory style={iconStyle} />,
          text: "Return History",
          href: "return-history",
        },
        {
          icon: <AiOutlineDollarCircle style={iconStyle} />,
          text: "Withdraw Requests",
          href: "withdraw-request",
        },

        {
          icon: <AiOutlineTeam style={iconStyle} />,
          text: "List of Admin Users",
          href: "/admin-users",
        },
        {
          href: "categories-list",
          icon: <MdOutlineCategory style={iconStyle} />,
          text: "Categories",
        },
        {
          href: "/login",
          icon: <AiOutlineLogout style={iconStyle} />,
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
                  {/* <i className={`${item.icon} mr15`} />
                   */}

                  <span className="mr15">{item.icon}</span>
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
