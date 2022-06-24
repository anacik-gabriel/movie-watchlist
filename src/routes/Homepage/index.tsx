import Featured from "../../Components/Featured";
import NavBar from "../../Components/NavBar";
import Slider from "../../Components/Slider";

const Homepage = () => {
  return (
    <>
      <NavBar />

      <Featured />

      <Slider movietype="Top250Movies" title="TOP MOVIES" />
      <Slider movietype="Top250TVs" title="TOP TVs" />
      <Slider movietype="ComingSoon" title="COMING SOON" />
      <Slider movietype="InTheaters" title="IN THEATERS" />
    </>
  );
};

export default Homepage;
