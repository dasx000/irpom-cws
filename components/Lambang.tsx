import Image from "next/image";

// Logo Kementerian Pertanian (public/images/logo-kementan.png, 160x160,
// ~5 KB). `tinggi` = tinggi tampil dalam px; logo persegi.
export default function Lambang({ tinggi = 36, className = "" }: { tinggi?: number; className?: string }) {
  return (
    <Image
      src="/images/logo-kementan.png"
      alt="Logo Kementerian Pertanian"
      width={tinggi}
      height={tinggi}
      unoptimized
      className={`shrink-0 ${className}`}
    />
  );
}
