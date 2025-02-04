export default function PageLoading() {
  return (
    <div className="mx-auto flex h-screen animate-pulse items-center justify-center overflow-hidden">
      <div className="h-10 w-10 animate-spin rounded-full border-l-2 border-black"></div>
    </div>
  );
}
