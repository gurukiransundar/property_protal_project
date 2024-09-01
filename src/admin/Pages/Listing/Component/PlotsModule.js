import React, { useState } from "react";
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromRaw,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import MapComponent from "./MapComponent";

function PlotsModule() {
  const [price, setPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [suffixPrice, setSuffixPrice] = useState("");
  const [areaDetails, setAreaDetails] = useState("");
  const [ratePerSqFt, setRatePerSqFt] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("not_selected");
  const [floorsAllowedForConstruction, setFloorsAllowedForConstruction] =
    useState("");
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [videoUrl, setVideoUrl] = useState("");
  const [cornerPlot, setCornerPlot] = useState("");
  const [yearBuilt, setYearBuilt] = useState("");
  const [plotDimensions, setPlotDimensions] = useState("");
  const [noOfOpenSides, setNoOfOpenSides] = useState("");
  const [plotFacing, setPlotFacing] = useState("");
  const [boundaryWallMade, setBoundaryWallMade] = useState("");
  const [plotApprovalAuthority, setPlotApprovalAuthority] = useState("");
  const [approachingRoadWidth, setApproachingRoadWidth] = useState("");
  const [isInGatedCommunity, setIsInGatedCommunity] = useState("");
  const [transactionType, setTransactionType] = useState("");
  const [stampDutyAndRegistrationCharges, setStampDutyAndRegistrationCharges] =
    useState("");
  const [totalProjectExtent, setTotalProjectExtent] = useState("");
  const [totalUnits, setTotalUnits] = useState("");
  const [totalPhases, setTotalPhases] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [galleryImages, setGalleryImages] = useState([]);
  const [masterPlanImages, setMasterPlanImages] = useState([]);
  const [floorAreaPlanImages, setFloorAreaPlanImages] = useState([]);

  // Function to handle image upload for each section
  const handleImageUpload = (event, setImageFunction) => {
    const files = Array.from(event.target.files);
    setImageFunction((prevImages) => [...prevImages, ...files]);
  };

  // Function to handle image deletion for each section
  const handleImageDelete = (index, imageArray, setImageFunction) => {
    setImageFunction((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSelectChange = (e) => {
    const selectedValues = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedOptions(selectedValues);
  };

  const handleRemoveOption = (value) => {
    const updatedOptions = selectedOptions.filter((option) => option !== value);
    setSelectedOptions(updatedOptions);
  };

  // Function to handle input change
  const handleInputChange = (e) => {
    setVideoUrl(e.target.value);
  };

  // List of amenities
  const amenities = [
    "Acupressure walkway",
    "Amphi Theatre",
    "Basketball Court",
    "Basement",
    "Badminton Court",
    "Black top roads",
    "Billiards",
    "Bar/Lounge",
    "Cafeteria",
    "CCTV Surveillance",
    "Club House",
    "Children’s Play Area",
    "Clinic",
    "Concierge Services",
    "Concrete Roads",
    "Community Hall",
    "Creche",
    "Cricket Practice Pitch",
    "Domestic Help Room",
    "Drainage",
    "Elevator",
    "Foosball",
    "Footpaths",
    "Food Court",
    "Gazebo",
    "Guest Launch",
    "Golf Course",
    "Gym",
    "Gymnasium",
    "Garden",
    "Helipad",
    "Health Facilities",
    "Home Theatre",
    "24 Hrs Backup",
    "Intercom",
    "Indoor Games",
    "Jogging Track",
    "Kids Play Area",
    "Library",
    "Ladies Pool",
    "Laundry Service",
    "Maingate Arch",
    "Mini Soccer Ground",
    "Maze Garden",
    "Office Cubicles",
    "Outdoor Gym",
    "Piped Gas",
    "Pets Allowed",
    "Public Transport Available",
    "Party Hall",
    "Pharmacy",
    "Rain Water Harvesting",
    "Spa/ Saloon",
    "Supermarket",
    "Society Office",
    "Society Boundary Wall",
    "Steam / Jaccuzi",
    "Street Lights",
    "Swimming Pool",
    "Senior Citizen Seating Facilities",
    "Security",
    "Squash Court",
    "Table Tennis",
    "Toddlers Pool",
    "Temple",
    "Tennis court",
    "Under Ground Electricity",
    "Under Ground Water Supply",
    "Under Ground Drainage",
    "Volleyball Court",
    "Water Overhead Tank",
    "Yoga room",
  ];

  // Function to handle selection of amenities
  const handleAmenitySelection = (e) => {
    const amenity = e.target.value;
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(
        selectedAmenities.filter((item) => item !== amenity)
      );
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  const [editorState, setEditorState] = useState(() => {
    // You can initialize editor state from a stored document
    // For example, const storedContent = getStoredContent();
    // return EditorState.createWithContent(convertFromRaw(storedContent));
    return EditorState.createEmpty();
  });

  const handleEditorChange = (newEditorState) => {
    setEditorState(newEditorState);
    // You can save editor content for future use
    // For example, saveContent(convertToRaw(newEditorState.getCurrentContent()));
  };

  return (
    <div>
      {/* Price Section */}
      <hr className="border-gray-400 my-8" />
      <h2 className="text-xl font-semibold">Price</h2>
      <div className="flex flex-wrap items-center mt-4">
        {/* Price */}
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0 pr-4">
          <label
            htmlFor="price"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Price
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              id="price"
              value={price}
              placeholder="Enter Price"
              onChange={(e) => setPrice(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        {/* Sale Price */}
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0 pr-4">
          <label
            htmlFor="salePrice"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Sale Price
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              id="salePrice"
              value={salePrice}
              placeholder="Enter Sale Price"
              onChange={(e) => setSalePrice(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        {/* Suffix Price */}
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0 pr-4">
          <label
            htmlFor="suffixPrice"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Suffix Price
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              id="suffixPrice"
              value={suffixPrice}
              placeholder="Enter Suffix Price"
              onChange={(e) => setSuffixPrice(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>

      {/* Description Section */}
      <hr className="border-gray-400 my-8" />
      <h2 className="text-xl font-semibold">Description</h2>
      <div className="flex flex-wrap items-center mt-4">
        <div className="w-full border border-gray-450 p-4">
          <Editor
            placeholder="Enter Description"
            editorState={editorState}
            toolbarClassName="toolbar-class"
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            onEditorStateChange={handleEditorChange}
            wrapperStyle={{ minHeight: "20em" }}
          />
        </div>
      </div>

      {/* Location Section */}
      <MapComponent />

      {/* Property Address (If any more detailed) Section */}

      <hr className="border-gray-400 my-8" />
      <h2 className="text-xl font-semibold">
        Property Address (If any more detailed)
      </h2>
      <div className="flex flex-wrap items-center mt-4">
        <div className="w-full">
          <label
            htmlFor="propertyAddressDetails"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Property Address Details
          </label>
          <div className="mt-2.5">
            <textarea
              id="propertyAddressDetails"
              rows={7}
              placeholder="Enter more detailed property address if necessary"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>
        </div>
      </div>

      {/* Parameters Section */}

      <hr className="border-gray-400 my-8" />
      <h2 className="text-xl font-semibold">Parameters</h2>
      <div className="flex flex-wrap items-center mt-4">
        {/* Area Details */}
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0 pr-4">
          <label
            htmlFor="areaDetails"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Area Details
          </label>
          <div className="mt-2.5 mb-7">
            <input
              type="text"
              id="areaDetails"
              value={areaDetails}
              placeholder="Enter Area Details"
              onChange={(e) => setAreaDetails(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        {/* Rate Per Sq-Ft/Yrd */}
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0 pr-4">
          <label
            htmlFor="ratePerSqFt"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Rate Per Sq-Ft/Yrd
          </label>
          <div className="mt-2.5 mb-7">
            <input
              type="text"
              id="ratePerSqFt"
              value={ratePerSqFt}
              placeholder="Enter Rate per Sq-Ft/Yrd"
              onChange={(e) => setRatePerSqFt(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        {/* Status */}
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0">
          <label
            htmlFor="status"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Status
          </label>
          <div className="mt-1 mr-3 mb-7">
            <select
              id="status"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="">Not Selected</option>
              <option value="ready_to_move">Ready to Move</option>
              <option value="under_construction">Under Construction</option>
              <option value="upcoming">Upcoming</option>
            </select>
          </div>
        </div>

        {/* Plot Dimensions */}
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0 pr-4">
          <label
            htmlFor="plotDimensions"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Plot Dimensions
          </label>
          <div className="mt-2.5 mb-7">
            <input
              type="text"
              id="plotDimensions"
              value={plotDimensions}
              placeholder="Enter Plot Dimensions"
              onChange={(e) => setPlotDimensions(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        {/* Floors Allowed For Construction */}
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0">
          <label
            htmlFor="floorsAllowedForConstruction"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Floors Allowed For Construction
          </label>
          <div className="mt-1 mr-3 mb-7">
            <select
              id="floorsAllowedForConstruction"
              value={floorsAllowedForConstruction}
              onChange={(e) => setFloorsAllowedForConstruction(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="">Not Selected</option>
              {[...Array(10).keys()].map((value) => (
                <option key={value} value={value + 1}>
                  {value + 1}
                </option>
              ))}
              <option value="">More than 10</option>
            </select>
          </div>
        </div>

        {/* No Of Open Sides */}
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0">
          <label
            htmlFor="noOfOpenSides"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            No Of Open Sides
          </label>
          <div className="mt-1 mr-3 mb-7">
            <select
              id="noOfOpenSides"
              value={noOfOpenSides}
              onChange={(e) => setNoOfOpenSides(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="">Not Selected</option>
              {[...Array(4).keys()].map((value) => (
                <option key={value} value={value + 1}>
                  {value + 1}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Plot Facing */}
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0">
          <label
            htmlFor="plotFacing"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Plot Facing
          </label>
          <div className="mt-1 mr-3 mb-7">
            <select
              id="plotFacing"
              value={plotFacing}
              onChange={(e) => setPlotFacing(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="">Not Selected</option>
              <option value="east">East</option>
              <option value="west">West</option>
              <option value="north">North</option>
              <option value="south">South</option>
              <option value="north-west">North-West</option>
              <option value="north-east">North-East</option>
              <option value="south-west">South-West</option>
              <option value="south-east">South-East</option>
            </select>
          </div>
        </div>

        {/* Corner Plot */}
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0">
          <label
            htmlFor="cornerPlot"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Corner Plot
          </label>
          <div className="mt-1 mr-3 mb-7">
            <select
              id="cornerPlot"
              value={cornerPlot}
              onChange={(e) => setCornerPlot(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="">Not Selected</option>
              {[...Array(25).keys()].map((value) => (
                <option key={value} value={value + 1}>
                  {value + 1}
                </option>
              ))}
              <option value="">More than 25</option>
            </select>
          </div>
        </div>

        {/* Is In Gated Community */}
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0">
          <label
            htmlFor="isInGatedCommunity"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Is In Gated Community
          </label>
          <div className="mt-1 mr-3 mb-7">
            <select
              id="isInGatedCommunity"
              value={isInGatedCommunity}
              onChange={(e) => setIsInGatedCommunity(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="">Not Selected</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        {/* Boundary Wall Made */}
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0">
          <label
            htmlFor="boundaryWallMade"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Boundary Wall Made
          </label>
          <div className="mt-1 mr-3 mb-7">
            <select
              id="boundaryWallMade"
              value={boundaryWallMade}
              onChange={(e) => setBoundaryWallMade(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="">Not Selected</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        {/* Approaching Road Width */}
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0 pr-4">
          <label
            htmlFor="approachingRoadWidth"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Approaching Road Width
          </label>
          <div className="mt-2.5 mb-7">
            <input
              type="text"
              id="approachingRoadWidth"
              value={approachingRoadWidth}
              placeholder="Enter Approaching Road Width"
              onChange={(e) => setApproachingRoadWidth(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        {/* Transaction Type */}
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0">
          <label
            htmlFor="transactionType"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Transaction Type
          </label>
          <div className="mt-1 mr-3 mb-7">
            <select
              id="transactionType"
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="">Not Selected</option>
              <option value="new_property">New Property</option>
              <option value="resale">Resale</option>
            </select>
          </div>
        </div>

        {/* Stamp Duty & Registration Charges */}
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0 pr-4">
          <label
            htmlFor="stampDutyAndRegistrationCharges"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Stamp Duty & Registration Charges
          </label>
          <div className="mt-2.5 mb-7">
            <select
              id="stampDutyAndRegistrationCharges"
              value={stampDutyAndRegistrationCharges}
              onChange={(e) =>
                setStampDutyAndRegistrationCharges(e.target.value)
              }
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="">Not Selected</option>
              <option value="excluded">Excluded</option>
              <option value="included">Included</option>
            </select>
          </div>
        </div>

        {/* Total Project Extent */}
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0 pr-4">
          <label
            htmlFor="totalProjectExtent"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Total Project Extent
          </label>
          <div className="mt-2.5 mb-7">
            <input
              type="text"
              id="totalProjectExtent"
              value={totalProjectExtent}
              placeholder="Enter Total Project Extent"
              onChange={(e) => setTotalProjectExtent(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        {/* Plot Approval Authority */}
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0">
          <label
            htmlFor="plotApprovalAuthority"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Plot Approval Authority
          </label>
          <div className="mt-1 mr-3 mb-7">
            <input
              type="text"
              id="plotApprovalAuthority"
              value={plotApprovalAuthority}
              placeholder="Enter Plot Approval Authority"
              onChange={(e) => setPlotApprovalAuthority(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        {/* Year Built */}
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0 pr-4">
          <label
            htmlFor="yearBuilt"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Year Built
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              id="yearBuilt"
              value={yearBuilt}
              placeholder="Enter Year Built"
              onChange={(e) => setYearBuilt(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        {/* Total Units */}
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0">
          <label
            htmlFor="totalUnits"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Total Units
          </label>
          <div className="mt-2.5 mr-3">
            <input
              type="text"
              id="totalUnits"
              value={totalUnits}
              placeholder="Enter Total Units"
              onChange={(e) => setTotalUnits(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        {/* Total Phases */}
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0 pr-4">
          <label
            htmlFor="totalPhases"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Total Phases
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              id="totalPhases"
              value={totalPhases}
              placeholder="Enter Total Phases"
              onChange={(e) => setTotalPhases(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>

      {/* Property Brochure Section */}
      <hr className="border-gray-400 my-8" />
      <h2 className="text-xl font-semibold">Property Brochure</h2>
      <div className="flex flex-wrap items-center mt-4">
        <label htmlFor="brochure" className="mr-2">
          <span className="text-gray-700">Upload Brochure:</span>
          <input
            type="file"
            id="brochure"
            name="brochure"
            accept=".pdf,.doc,.docx"
            className="hidden"
            // Add onChange handler if you need to capture file selection
          />
        </label>
        <label
          htmlFor="brochure"
          className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Browse
        </label>
      </div>

      {/* Amenities Section */}

      <div>
        <hr className="border-gray-400 my-8" />
        <h2 className="text-xl font-semibold">Amenities</h2>
        <div className="flex flex-wrap mt-4">
          {/* Checkboxes for Amenities */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {amenities.map((amenity, index) => (
              <label
                key={index}
                htmlFor={amenity}
                className="inline-flex items-center"
              >
                <input
                  type="checkbox"
                  id={amenity}
                  value={amenity}
                  checked={selectedAmenities.includes(amenity)}
                  onChange={handleAmenitySelection}
                  className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
                />
                <span className="ml-2 text-sm leading-6 text-gray-900">
                  {amenity}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* About Project/Builder Section */}

      <hr className="border-gray-400 my-8" />
      <h2 className="text-xl font-semibold">About Project/Builder</h2>
      <div className="flex flex-wrap items-center mt-4">
        <div className="w-full">
          <label
            htmlFor="projectBuilderDetails"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Project/Builder Details
          </label>
          <div className="mt-2.5">
            <textarea
              id="projectBuilderDetails"
              rows={7}
              placeholder="Enter details about the project/builder"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div>
        <hr className="border-gray-400 my-8" />
        <h2 className="text-xl font-semibold">Gallery</h2>
        <div className="flex items-center mt-4">
          {/* Upload Button */}
          <label
            htmlFor="gallery-upload"
            className="cursor-pointer bg-transparent border border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white font-semibold py-3 px-6 rounded-full mr-4"
          >
            + Add Images
          </label>
          <input
            type="file"
            id="gallery-upload"
            name="gallery-upload"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => handleImageUpload(e, setGalleryImages)}
          />
        </div>
        {/* Display Uploaded Images */}
        <div className="flex flex-wrap mt-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="m-2 relative">
              <button
                onClick={() =>
                  handleImageDelete(index, galleryImages, setGalleryImages)
                }
                className="absolute top-0 right-0 bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded-full"
              >
                X
              </button>
              <img
                src={URL.createObjectURL(image)}
                alt={`Uploaded Image ${index + 1}`}
                className="w-32 h-32 object-cover rounded"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Property Video Section */}

      <hr className="border-gray-400 my-8" />
      <h2 className="text-xl font-semibold">Property Video</h2>
      <div className="flex flex-wrap items-center mt-4">
        {/* Input field for video URL */}
        <input
          type="text"
          placeholder="Enter the Property Video URL"
          value={videoUrl}
          onChange={handleInputChange}
          className="w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      {/* Master Plan Section */}

      <div>
        <hr className="border-gray-400 my-8" />
        <h2 className="text-xl font-semibold">Master Plan</h2>
        <div className="flex flex-wrap items-center mt-4">
          {/* Upload Button */}
          <label
            htmlFor="masterPlan-upload"
            className="cursor-pointer bg-transparent border border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white font-semibold py-3 px-6 rounded-full mr-4"
          >
            + Add Images
          </label>
          <input
            type="file"
            id="masterPlan-upload"
            name="masterPlan-upload"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => handleImageUpload(e, setMasterPlanImages)}
          />
        </div>
        {/* Display Uploaded Images */}
        <div className="flex flex-wrap mt-4">
          {masterPlanImages.map((image, index) => (
            <div key={index} className="m-2 relative">
              <button
                onClick={() =>
                  handleImageDelete(
                    index,
                    masterPlanImages,
                    setMasterPlanImages
                  )
                }
                className="absolute top-0 right-0 bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded-full"
              >
                X
              </button>
              <img
                src={URL.createObjectURL(image)}
                alt={`Uploaded Image ${index + 1}`}
                className="w-32 h-32 object-cover rounded"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Floor/Area Plan Section */}

      <div>
        <hr className="border-gray-400 my-8" />
        <h2 className="text-xl font-semibold">Floor/Area Plan</h2>
        <div className="flex flex-wrap items-center mt-4">
          {/* Upload Button */}
          <label
            htmlFor="floorAreaPlan-upload"
            className="cursor-pointer bg-transparent border border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white font-semibold py-3 px-6 rounded-full mr-4"
          >
            + Add Images
          </label>
          <input
            type="file"
            id="floorAreaPlan-upload"
            name="floorAreaPlan-upload"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => handleImageUpload(e, setFloorAreaPlanImages)}
          />
        </div>
        {/* Display Uploaded Images */}
        <div className="flex flex-wrap mt-4">
          {floorAreaPlanImages.map((image, index) => (
            <div key={index} className="m-2 relative">
              <button
                onClick={() =>
                  handleImageDelete(
                    index,
                    floorAreaPlanImages,
                    setFloorAreaPlanImages
                  )
                }
                className="absolute top-0 right-0 bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded-full"
              >
                X
              </button>
              <img
                src={URL.createObjectURL(image)}
                alt={`Uploaded Image ${index + 1}`}
                className="w-32 h-32 object-cover rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlotsModule;
