import DashboardHeader from "@/components/common/DashboardHeader";
import MobileMenu from "@/components/common/mobile-menu";
import AddProject from "@/components/pages/projects/AddProject/AddProject";
import DboardMobileNavigation from "@/components/pages/DboardMobileNavigation";
import Footer from "@/components/pages/Footer";
import SidebarDashboard from "@/components/pages/SidebarDashboard";

import { getProjectType } from "@/dataFetching/ProjectType";

export const metadata = {
  title: "Dashboard Add Property || Homez - Real Estate NextJS Template",
};

const AddProjectPage = async () => {
  const data = await getProjectType();

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
                    <h2>Add New Project</h2>
                  </div>
                </div>
              </div>
              {/* End .row */}

              <div className="row">
                <div className="col-xl-12">
                  <div className="ps-widget bgc-white bdrs12 default-box-shadow2 pt30 mb30 overflow-hidden position-relative" style={{border:"1px solid #00c196"}}>
                    <div className="navtab-style1 ">
                      <AddProject data={data} />
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

export default AddProjectPage;
