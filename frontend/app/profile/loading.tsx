export default function ProfileLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 flex items-center justify-center">
      <div className="animate-pulse flex flex-col items-center">
        <div className="h-24 w-24 rounded-full bg-gray-800 mb-4"></div>
        <div className="h-8 w-48 bg-gray-800 rounded mb-2"></div>
        <div className="h-4 w-32 bg-gray-800 rounded"></div>
      </div>
    </div>
  );
}
