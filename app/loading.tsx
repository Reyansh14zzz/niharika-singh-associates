export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#0B0B0B]">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-[0.35em] text-yellow-500 animate-pulse">
          NIHARIKA SINGH
        </h1>

        <p className="mt-3 text-sm uppercase tracking-[0.4em] text-gray-500">
          & Associates
        </p>

        <div className="mx-auto mt-10 h-1 w-40 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-[loading_1.2s_linear_infinite] bg-yellow-500"></div>
        </div>
      </div>
    </div>
  );
}