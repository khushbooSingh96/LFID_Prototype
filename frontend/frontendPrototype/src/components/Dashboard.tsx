import { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map from "react-map-gl";
import {
  ChartNoAxesColumnIncreasing,
  Home,
  SwatchBook,
  Users,
  Waypoints,
} from "lucide-react";
import { Button } from "./ui/button";
import Campaign from "./Campaign";
import GeoFrames from "./GeoFrames";
import POIs from "./ui/POIs";
import AudienceFactor from "./ui/AudienceFactor";
import LFIDSegment from "./LFIDSegment";

const Dashboard = () => {
  const [currentTab, setCurrentTab] = useState("campaign");
  return (
    <div className=" min-h-screen min-w-full ">
      <div className="fixed left-0 bottom-0 top-28 z-10 flex gap-4  text-white ">
        {/* sidebar */}
        <div className="flex flex-col gap-4 w-48 transition-all duration-200 overflow-hidden bg-black/70 rounded-tr-xl p-4">
          <Button
            variant={"ghost"}
            className={`flex justify-start items-center gap-3 hover:text-yellow-400 hover:bg-transparent w-40 ${
              currentTab === "campaign" && "text-yellow-400"
            }`}
            onClick={() => setCurrentTab("campaign")}
          >
            <Waypoints className="size-6 " />
            <p className="">Campaign</p>
          </Button>
          <Button
            variant={"ghost"}
            className={`flex justify-start items-center gap-3 hover:text-yellow-400 hover:bg-transparent w-40 ${
              currentTab === "geo-frame" && "text-yellow-400"
            }`}
            onClick={() => setCurrentTab("geo-frame")}
          >
            <Home className="size-6 " />
            <p className="">Geo-Frame</p>
          </Button>
          <Button
            variant={"ghost"}
            className={`flex justify-start items-center gap-3 hover:text-yellow-400 hover:bg-transparent w-40 ${
              currentTab === "poi" && "text-yellow-400"
            }`}
            onClick={() => setCurrentTab("poi")}
          >
            <ChartNoAxesColumnIncreasing className="size-6 " />
            <p className="">POIs</p>
          </Button>
          <Button
            variant={"ghost"}
            className={`flex justify-start items-center gap-3 hover:text-yellow-400 hover:bg-transparent w-40 ${
              currentTab === "audience" && "text-yellow-400"
            }`}
            onClick={() => setCurrentTab("audience")}
          >
            <Users className="size-6 " />
            <p className="flex flex-col items-start">
              <span>Audience</span> <span>Factors</span>
            </p>
          </Button>
          <Button
            variant={"ghost"}
            className={`flex justify-start items-center gap-3 hover:text-yellow-400 hover:bg-transparent w-40 ${
              currentTab === "lfid-segment" && "text-yellow-400"
            }`}
            onClick={() => setCurrentTab("lfid-segment")}
          >
            <SwatchBook className="size-6 " />
            <p className="">LFID Segment</p>
          </Button>
        </div>
        {/* main section */}
        <div className="bg-black/70 p-4 rounded-t-xl w-96">
          {currentTab === "campaign" && <Campaign />}
          {currentTab === "geo-frame" && <GeoFrames />}
          {currentTab === "poi" && <POIs />}
          {currentTab === "audience" && <AudienceFactor />}
          {currentTab === "lfid-segment" && <LFIDSegment />}
        </div>
      </div>
      <Map
        initialViewState={{ latitude: 37.0902, longitude: -95.7129, zoom: 4.2 }}
        style={{ width: "100vw", height: "100vh", transitionDuration: "100" }}
        mapboxAccessToken="pk.eyJ1IjoibmFyZW40NDg4IiwiYSI6ImNsendrbXZlbDBmMHoybXNieWNpYnU3NjMifQ.OTv0MYSPiLKk2pTE9iA28Q"
        mapStyle="mapbox://styles/naren4488/clzwlizrq001w01pe9fr27dxq"
      ></Map>
    </div>
  );
};

export default Dashboard;
