import Requests from '../Requests';
import { Banner } from '../components/Banner';
import { Navbar } from '../components/Navbar';
import { Gallery } from '../components/Gallery';

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Gallery fetchUrl={Requests?.requestPopular} />
    </div>
  );
};
