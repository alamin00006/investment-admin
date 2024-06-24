'use client'
import SidebarPanel from "@/components/common/sidebar-panel";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import useUser from "@/app/hooks/useUser";

import { CgProfile } from "react-icons/cg";
import Image from "next/image";

const DashboardHeader = () => {
  const pathname = usePathname();
  const { user } = useUser();

  const menuItems = [
    {
      title: "Admin Users",
      items: [
        // {
        //   icon: "flaticon-protection",
        //   text: "Add Admin User",
        //   href: "/pr-manager",
        // },
        // {
        //   icon: "flaticon-user",
        //   text: "List of Admin User",
        //   href: "/pr-manager-list",
        // },
      ],
    },
    {
      title: "MANAGE ACCOUNT",
      items: [
        { icon: "flaticon-exit", text: "Logout", href: "/" },
      ],
    },
  ];

  return (
    <>
      <header className="header-nav nav-homepage-style light-header position-fixed menu-home4 main-menu">
        <nav className="posr">
          <div className="container-fluid pr30 pr15-xs pl30 posr menu_bdrt1">
            <div className="row align-items-center justify-content-between">
              <div className="col-6 col-lg-auto">
                <div className="text-center text-lg-start d-flex align-items-center">
                  <div className="dashboard_header_logo position-relative me-2 me-xl-5">
                    <Link className="logo" href="/">
                      <Image
                        width={138}
                        height={44}
                        src="/images/home/Sharikana-logo.png"
                        alt="Header Logo"
                      />
                    </Link>
                  </div>
                  {/* End Logo */}

                  <a
                    className="dashboard_sidebar_toggle_icon text-thm1 vam"
                    href="#"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#SidebarPanel"
                    aria-controls="SidebarPanelLabel"
                  >
                    <Image
                      width={25}
                      height={9}
                      className="img-1"
                      src="/images/dark-nav-icon.svg"
                      alt="humberger menu"
                    />
                  </a>
                </div>
              </div>

              <div className="col-6 col-lg-auto">
                <div className="text-center text-lg-end header_right_widgets">
                  <ul className="mb0 d-flex justify-content-center justify-content-sm-end p-0">
                    <li className="user_setting">
                      <div className="dropdown">
                        <a
                          className="btn"
                          href="#"
                          data-bs-toggle="dropdown"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <CgProfile
                            size={20} // Adjusted size to 20px
                            style={{
                              marginRight: "10px",
                              transition: "color 0.3s ease",
                              cursor: "pointer",
                              color: "black",
                            }}
                            onMouseOver={(e) => {
                              e.currentTarget.style.color = "green";
                            }}
                            onMouseOut={(e) => {
                              e.currentTarget.style.color = "black";
                            }}
                          />
                        </a>
                        <div className="dropdown-menu">
                          {user && (
                            <span className="user-name">
                              Welcome,{" "}
                              <span className="">
                                {user.data?.name}
                              </span>
                            </span>
                          )}
                          <div className="user_setting_content">
                            {menuItems.map((section, sectionIndex) => (
                              <div key={sectionIndex}>
                                {section.items.map((item, itemIndex) => (
                                  <Link
                                    key={itemIndex}
                                    className={`dropdown-item ${
                                      pathname == item.href ? "-is-active" : ""
                                    } `}
                                    href={item.href}
                                  >
                                    <i className={`${item.icon} mr10`} />
                                    {item.text}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* DesktopSidebarMenu */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="SidebarPanel"
        aria-labelledby="SidebarPanelLabel"
      >
        <SidebarPanel />
      </div>
      {/* Sidebar Panel End */}
    </>
  );
};

export default DashboardHeader;
