import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-4xl font-semibold">Sivua ei löydy</h1>
      <p className="mt-4 text-ink/70">Tuote on voitu poistaa valmistajan valikoimasta.</p>
      <Link href="/tuotteet" className="mt-6 inline-block font-semibold underline">
        Koko valikoimaan
      </Link>
    </div>
  );
}
