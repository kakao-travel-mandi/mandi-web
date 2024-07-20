import { LeftArrow } from "@/components/icons";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return <LeftArrow className="cursor-pointer" onClick={() => navigate(-1)} />;
};

export default BackButton;
