

function ProfileHeaderSkeleton() {
  return (
    <div className="mb-10">
    
      <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
      
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-xl" />
          <div className="w-24 h-24 rounded-2xl bg-gray-800 animate-pulse relative z-10" />
        </div>

      
        <div className="flex-1 text-center md:text-left space-y-3">
          <div className="h-7 w-48 bg-gray-800 rounded animate-pulse mx-auto md:mx-0" />
          <div className="h-4 w-64 bg-gray-800 rounded animate-pulse mx-auto md:mx-0" />
          <div className="h-4 w-80 bg-gray-800 rounded animate-pulse mx-auto md:mx-0" />
        </div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="bg-black/30 border border-gray-800/50 rounded-2xl p-6
                       flex items-center justify-between"
          >
           
            <div className="space-y-3">
              <div className="h-4 w-28 bg-gray-800 rounded animate-pulse" />
              <div className="h-8 w-16 bg-gray-800 rounded animate-pulse" />
            </div>

           
            <div className="w-12 h-12 rounded-xl bg-gray-800 animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileHeaderSkeleton;
