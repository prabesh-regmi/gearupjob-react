import Information from "./component/Information";
import LatestJob from "./component/LatestJob";
import Search from "./component/Search";
import TopCompany from "./component/TopCompany";
import TopJob from "./component/TopJob";

function Home() {
  return (
    <>
    <Search/>
    <Information/>
    <hr class="my-4"/>

    <LatestJob/>
    <hr class="my-4"/>

    <TopJob/>
    <hr class="my-4"/>
    <TopCompany/>

    </>
  );
}

export default Home;
