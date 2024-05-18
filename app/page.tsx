import MainLayout from "./MainLayout";
import OwnDrone from "./components/OwnDrone/OwnDrone";
import Hero from "./components/Hero/Hero";
import MembershipBenefits from "./components/MembershipBenefits/MembershipBenefits";
import ProductInfo from "./components/ProductInfo/ProductInfo";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <OwnDrone />
      <MembershipBenefits />
      <ProductInfo />
    </MainLayout>
  );
}
