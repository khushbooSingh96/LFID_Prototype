import axios from "axios";

const Campaign = () => {
  const getAllCampaigns = async () => {
    const res = await axios.get(``);
  };
  return (
    <div>
      <h1 className="text-2xl font-semibold text-yellow-400">Campaign</h1>
    </div>
  );
};

export default Campaign;
