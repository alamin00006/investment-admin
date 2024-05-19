"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

import toast, { Toaster } from "react-hot-toast";
import ProjectInfo from "./ProjectInfo";
import Financials from "./Financials";
import UploadMedia from "./UploadMedia";
import Timeline from "./Timeline";
const AddProject = ({ data }) => {
  const tabs = [
    "1. Description",
    "2. Financials",
    "3. Documents",
    "4. Market",
    "5. Timeline",
  ];
  const [activeTab, setActiveTab] = useState(0);
  const [timeLines, setTimelines] = useState([]);
  const [driveLinks, setDriveLinks] = useState([]);

  // Hadle Time Line & Google Drive Link
  // Handle Time Line & Google Drive Link
  useEffect(() => {
    setTimelines([
      {
        date: "",
        title: "",
        details: "",
      },
    ]);
    setDriveLinks([
      {
        googleDriveLink: "",
      },
    ]);
  }, []);

  const handleTimeLine = () => {
    setTimelines([
      ...timeLines,
      {
        date: "",
        title: "",
        details: "",
      },
    ]);
  };

  const handleDriveLink = () => {
    setDriveLinks([
      ...driveLinks,
      {
        googleDriveLink: "",
      },
    ]);
  };

  const handleRemoveTimeLine = () => {
    if (timeLines.length === 1) {
      toast.error("You must select at least one Timeline");
      return;
    }
    const updatedOptions = timeLines.slice(0, -1);
    setTimelines(updatedOptions);
  };

  const handleRemoveDriveLink = () => {
    if (driveLinks.length === 1) {
      toast.error("You must select at least one Drive Link");
      return;
    }
    const updatedOptions = driveLinks.slice(0, -1);
    setDriveLinks(updatedOptions);
  };

  // Handle Tab Content
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleNextClick = () => {
    setActiveTab((prevTab) => (prevTab + 1) % tabs.length);
  };

  const [image, setImage] = useState([]);
  const [projectPdf, setProjectPdf] = useState([]);

  const handleNewProject = async (e) => {
    e.preventDefault();

    const selectedTimeLines = timeLines?.filter(
      (option) => option.date && option.title && option.details
    );
    const selectedDriveLinks = driveLinks?.filter(
      (option) => option.googleDriveLink
    );

    const ProjectData = {
      projectTitle: e.target.projectTitle.value,
      // prManager: e.target.prManager.value,
      projectAddress: e.target.projectAddress.value,
      aboutMarket: e.target.aboutMarket.value,
      aboutCity: e.target.aboutCity.value,

      projectType: e.target.projectType.value,

      proertySize: e.target.proertySize.value,
      // totalFloor: e.target.totalFloor.value,
      totalRoom: e.target.totalRoom?.value,
      totalBedRoom: e.target.totalBedRoom.value,
      totalBathRooms: e.target.totalBathRooms.value,
      aboutProperty: e.target.aboutProperty.value,
      managementInfo: e.target.managementInfo.value,
      exitStrategy: e.target.exitStrategy.value,
      googleMapLink: e.target.googleMapLink.value,
      totalProjectValue: e.target.totalProjectValue.value,
      minimumInvestmentValue: e.target.minimumInvestmentValue.value,
      notaryFee: e.target.notaryFee.value,
      yearlyReturnValue: e.target.yearlyReturnValue.value,
      halfYearlyRetunrValue: e.target.halfYearlyRetunrValue.value,
      monthlyReturnValue: e.target.monthlyReturnValue.value,
      projectAnnualCapitalAppreciation:
        e.target.projectAnnualCapitalAppreciation.value,
      timelines: selectedTimeLines.map((option) => JSON.stringify(option)),
      googleDriveLinks: selectedDriveLinks.map((option) =>
        JSON.stringify(option)
      ),
    };

    // if (ProjectData.projectType === "Select Project Type") {
    //   return toast.warn("please Select Project Type");
    // }

    const formData = new FormData();

    for (const key in ProjectData) {
      formData.append(key, ProjectData[key]);
    }

    const isValidFileUploaded = (file) => {
      const validExtensions = [
        "png",
        "jpeg",
        "jpg",
        "PNG",
        "JPG",
        "jpeg",
        "JPEG",
        "webp",
      ];
      const fileExtension = file.type.split("/")[1];
      return validExtensions.includes(fileExtension);
    };

    const isValidPdfFile = (file) => {
      const validExtensions = ["pdf", "PDF"];
      const fileExtension = file?.type?.split("/")[1];
      return validExtensions.includes(fileExtension);
    };
    // if (image?.length > 1) {
    //   return toast.error("please provide one book picture");
    // }
    const file = image[0];
    if (file.size > 5000000) {
      return toast.error("Product Picture size 5MB more than not allowed");
    } else {
      if (isValidFileUploaded(file)) {
        Array.from(image).forEach((item) => {
          formData.append("image", item);
        });
      } else {
        return toast.error("Product Picture is not valid");
      }
    }

    const pdf = projectPdf[0];

    if (pdf.size > 5000000) {
      return toast.error("pdf file size 5MB more than not allowed");
    } else {
      if (isValidPdfFile(pdf)) {
        Array.from(projectPdf)?.forEach((item) => {
          formData.append("pdf", item);
        });
      } else {
        return toast.error("pdf file is not valid");
      }
    }

    try {
      const data = await axios.post(
        "http://localhost:5000/api/project",
        formData
      );

      if (data.status === 400) {
        return toast.error(data.data.error);
      }

      toast.success(data.data.message);
    } catch (error) {
      console.log(error);
      return error.message;
    }

    e.target.reset();
  };

  return (
    <>
      <nav>
        <div className="nav nav-tabs" id="nav-tab2" role="tablist">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`nav-link fw600 ${
                activeTab === index ? "active" : ""
              } ${index > 0 ? "ms-3" : ""}`}
              id={`nav-item${index + 1}-tab`}
              data-bs-toggle="tab"
              data-bs-target={`#nav-item${index + 1}`}
              type="button"
              role="tab"
              aria-controls={`nav-item${index + 1}`}
              aria-selected={activeTab === index}
              onClick={() => handleTabClick(index)}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* End nav tabs */}
      <form onSubmit={handleNewProject} className="form_data">
        <div className="tab-content" id="nav-tabContent">
          <div
            className={`tab-pane fade ${activeTab === 0 ? "show active" : ""}`}
            id="nav-item1"
            role="tabpanel"
            aria-labelledby="nav-item1-tab"
          >
            <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
              <h4 className="title fz17 mb30">Project Description</h4>
              <ProjectInfo data={data} />
            </div>
            <div
              className="d-flex justify-content-end"
              onClick={handleNextClick}
            >
              <p
                style={{
                  backgroundColor: "#006666",
                  color: "white",
                  padding: "10px 20px",
                  marginRight: "30px",
                  borderRadius: "5px",
                  marginTop: "-20px",
                  zIndex: 10,
                  cursor: "pointer",
                }}
              >
                Next
              </p>
            </div>
          </div>
          <div
            className={`tab-pane fade ${activeTab === 1 ? "show active" : ""}`}
            id="nav-item2"
            role="tabpanel"
            aria-labelledby="nav-item2-tab"
          >
            <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
              <Financials />
            </div>
            <div
              className="d-flex justify-content-end"
              onClick={handleNextClick}
            >
              <p
                style={{
                  backgroundColor: "#006666",
                  color: "white",
                  padding: "10px 20px",
                  marginRight: "30px",
                  borderRadius: "5px",
                  marginTop: "-20px",
                  zIndex: 10,
                  cursor: "pointer",
                }}
              >
                Next
              </p>
            </div>
          </div>
          <div
            className={`tab-pane fade ${activeTab === 2 ? "show active" : ""}`}
            id="nav-item3"
            role="tabpanel"
            aria-labelledby="nav-item3-tab"
          >
            <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
              <h4 className="title fz17 mb30">Documents</h4>
              <UploadMedia
                setImage={setImage}
                setProjectPdf={setProjectPdf}
                driveLinks={driveLinks}
                setDriveLinks={setDriveLinks}
                handleDriveLink={handleDriveLink}
                handleRemoveDriveLink={handleRemoveDriveLink}
              />
              <div
                className="d-flex justify-content-end"
                onClick={handleNextClick}
              >
                <p
                  style={{
                    backgroundColor: "#006666",
                    color: "white",
                    padding: "10px 20px",
                    marginRight: "30px",
                    borderRadius: "5px",

                    zIndex: 10,
                    cursor: "pointer",
                  }}
                >
                  Next
                </p>
              </div>
            </div>
          </div>
          <div
            className={`tab-pane fade ${activeTab === 3 ? "show active" : ""}`}
            id="nav-item4"
            role="tabpanel"
            aria-labelledby="nav-item4-tab"
          >
            <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
              <h4 className="title fz17 mb30">Market</h4>
              <div className="form-style1">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="mb20">
                      <label className="heading-color ff-heading fw600 mb10">
                        About Market
                      </label>
                      <textarea
                        cols={30}
                        rows={5}
                        placeholder="About Market."
                        defaultValue={""}
                        name="aboutMarket"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="mb20">
                      <label className="heading-color ff-heading fw600 mb10">
                        About Bassura City
                      </label>
                      <textarea
                        cols={20}
                        rows={3}
                        placeholder="About Bassura City ."
                        name="aboutCity"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="d-flex justify-content-end"
              onClick={handleNextClick}
            >
              <p
                style={{
                  backgroundColor: "#006666",
                  color: "white",
                  padding: "10px 20px",
                  marginRight: "30px",
                  borderRadius: "5px",
                  marginTop: "-20px",
                  zIndex: 10,
                  cursor: "pointer",
                }}
              >
                Next
              </p>
            </div>
          </div>
          <div
            className={`tab-pane fade ${activeTab === 4 ? "show active" : ""}`}
            id="nav-item5"
            role="tabpanel"
            aria-labelledby="nav-item5-tab"
          >
            <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
              <h4 className="title fz17 mb30">Timeline</h4>
              <div className="row">
                <Timeline
                  timeLines={timeLines}
                  setTimelines={setTimelines}
                  handleTimeLine={handleTimeLine}
                  handleRemoveTimeLine={handleRemoveTimeLine}
                />
              </div>
            </div>
            <div className="d-flex justify-content-end p-5">
              <button
                type="submit"
                className="ud-btn"
                style={{
                  width: 175,
                  backgroundColor: "#00C194",
                  color: "white",
                  border: "none",
                }}
              >
                Add Project
              </button>
            </div>
          </div>
        </div>
        <Toaster
          position="top-center"
          containerStyle={{ marginTop: "100px" }}
          reverseOrder={false}
        />
      </form>
    </>
  );
};

export default AddProject;
