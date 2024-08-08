import NavBar from '../features/navbar/Navbar';
//import UserOrders from '../features/user/components/UserOrders';
import Hero from '../features/nft/Hero';
import HotProducts from '../features/nft/HotProducts';
function NftsPage() {
  return (
    <div>
      <NavBar>   
       <Hero />
       <HotProducts />
      </NavBar>
    </div>
  );
}

export default NftsPage;