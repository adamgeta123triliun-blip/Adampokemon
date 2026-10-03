export function CardComponent({ gambar, judul, deskripsi }) {
  return (
    <div className="max-w-sm bg-pink-200 rounded-x1 p-2.5">
      <img src={gambar} alt="Gambar" className="rounded-xl p-2.5" />
      <div className="p-2">
        <h1 className="font-bold text-x1 text-neutral-500">{judul}</h1>
        <p className="text-lg text-neutral-600 text-nautral-900">{deskripsi}</p>
      </div>
    </div>
  );
}
