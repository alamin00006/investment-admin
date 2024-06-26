import DashboardHeader from "@/components/common/DashboardHeader";
import MobileMenu from "@/components/common/mobile-menu";
import DboardMobileNavigation from "@/components/pages/DboardMobileNavigation";
import Footer from "@/components/pages/Footer";
import SidebarDashboard from "@/components/pages/SidebarDashboard";
import { getAllInvests } from "@/dataFetching/invest";
import AllInvestLists from "../../../../components/Invest-page/AllInvestLists";



// import RecentActivities from "@/components/property/dashboard/dashboard-home/RecentActivities";
// import TopStateBlock from "@/components/property/dashboard/dashboard-home/TopStateBlock";
// import PropertyViews from "@/components/property/dashboard/dashboard-home/property-view";

export const metadata = {
  title: "Dashboard Home || Homez - Real Estate NextJS Template",
};

const DashboardHome = async () => {
  const data = await getAllInvests();
  //console.log(data)
  
  

  return (
    <>
       {/* Main Header Nav */}
       <DashboardHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* dashboard_content_wrapper */}
      <div className="dashboard_content_wrapper">
        <div className="dashboard dashboard_wrapper pr30 pr0-md">
          <SidebarDashboard />
          {/* End .dashboard__sidebar */}

          <div className="dashboard__main pl0-md">
            <div className="dashboard__content property-page bgc-f7">
              <div className="row pb40 d-block d-lg-none">
                <div className="col-lg-12">
                  <DboardMobileNavigation />
                </div>
                {/* End .col-12 */}
              </div>
              {/* End .row */}

              <div className="row align-items-center pb40">
                <div className="col-lg-12">
                  <div className="dashboard_title_area">
                    <h2>Invest History</h2>
                  </div>
                </div>
              </div>
              {/* End .row */}

              <div className="row">
                <div className="col-xl-12">
                  <div className="ps-widget bgc-white bdrs12 default-box-shadow2 pt30 mb30 overflow-hidden position-relative">
                    <div className="navtab-style1">
                      <AllInvestLists data={data?.data} />
                    </div>
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End dashboard__content */}

            <Footer />
          </div>
          {/* End .dashboard__main */}
        </div>
      </div>
      {/* dashboard_content_wrapper */}
    </>
  );
};

export default DashboardHome;
