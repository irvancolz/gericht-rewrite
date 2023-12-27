import {
  About,
  ChefWord,
  Drinks,
  HomeHero,
  MenuGroup,
  Awards,
  Reservation,
  Restoview,
  Testimony,
  PhotoGalery,
  Blog,
} from "@/components";

export default function Home() {
  return (
    <>
      <HomeHero />
      <About />
      <Reservation />
      <MenuGroup />
      <Drinks />
      <ChefWord />
      <Testimony />
      <Restoview />
      <Awards />
      <PhotoGalery />
      <Blog />
    </>
  );
}
