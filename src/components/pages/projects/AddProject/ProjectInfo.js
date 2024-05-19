"use client";

const ProjectInfo = ({ data }) => {
  return (
    <div className="">
      <div className="row">
        <div className="col-sm-6">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Project Title
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              name="projectTitle"
            />
          </div>
        </div>
        {/* <div className="col-sm-3">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              PR Manager
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Pr Manager"
              name="prManager"
            />
          </div>
        </div> */}

        <div className="col-sm-6 col-xl-6">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Total Bedrooms
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Bedrooms"
              name="totalBedRoom"
            />
          </div>
        </div>
        {/* End .col-6 */}

        <div className="col-sm-6 col-xl-3">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Total Bathrooms
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Bathrooms"
              name="totalBathRooms"
            />
          </div>
        </div>

        <div className="col-sm-6 col-xl-3">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Room Size
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Room Size"
              name="proertySize"
            />
          </div>
        </div>
        {/* End .col-6 */}

        <div className="col-sm-6 col-xl-6">
          <div className="">
            <label className="heading-color ff-heading fw600 mb10">
              Project Type
            </label>
            <br />

            <select
              className="project_type"
              style={{
                width: "100%",
                height: "50px",
                borderRadius: "5px",
                fontSize: "1rem",
              }}
              // defaultValue="Select Project Type"
              name="projectType"
            >
              {/* <option selected disabled>
                Select Project Type
              </option> */}
              {data?.data.map((category) => (
                <option key={category?._id} value={category?._id}>
                  {category?.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              About Property
            </label>
            <textarea
              cols={30}
              rows={5}
              placeholder="About Property."
              defaultValue={""}
              name="aboutProperty"
            />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Management
            </label>
            <textarea
              cols={20}
              rows={3}
              placeholder="Management."
              defaultValue={""}
              name="managementInfo"
            />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Exit Strategy
            </label>
            <textarea
              cols={20}
              rows={3}
              placeholder="Exit Strategy."
              defaultValue={""}
              // exitStrategy
              name="exitStrategy"
            />
          </div>
        </div>

        <div className="col-sm-12 col-xl-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Project Address
            </label>

            <textarea
              cols={20}
              rows={3}
              placeholder="Project Address"
              defaultValue={""}
              // projectAddress
              name="projectAddress"
            />
          </div>
        </div>
        {/* End .col-6 */}
        <div className="col-sm-12 col-xl-12">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Location (Google Map Link)
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Location"
              name="googleMapLink"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
