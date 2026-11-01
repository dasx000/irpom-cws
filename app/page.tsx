import { getIrpomPublikData, parseIrpomFilter } from "@/lib/irpom-publik";
import LandingNavbar from "@/components/landing/LandingNavbar";
import LandingHero from "@/components/landing/LandingHero";
import LandingDataSection from "@/components/landing/LandingDataSection";
import LandingSebaranSection from "@/components/landing/LandingSebaranSection";
import LandingJelajahSection from "@/components/landing/LandingJelajahSection";
import LandingFooter from "@/components/landing/LandingFooter";

// Halaman publik. Filter Tahun Anggaran & Sumber Dana dibaca
// dari URL dan berlaku untuk seluruh isi halaman.
export default async function RootPage(props: PageProps<"/">) {
  const searchParams = await props.searchParams;
  const filter = parseIrpomFilter(searchParams);

  const { statistik, rows, opsi } = await getIrpomPublikData(filter);

  const tahun = typeof searchParams.tahun === "string" ? searchParams.tahun : "";
  const sumber = typeof searchParams.sumber === "string" ? searchParams.sumber : "";

  return (
    <div>
      <LandingNavbar />
      <LandingHero statistik={statistik} opsi={opsi} tahun={tahun} sumber={sumber} />
      <LandingDataSection statistik={statistik} />
      <LandingSebaranSection units={rows} />
      <LandingJelajahSection units={rows} />
      <LandingFooter />
    </div>
  );
}
