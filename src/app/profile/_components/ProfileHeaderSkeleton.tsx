

// function ProfileHeaderSkeleton() {
//   return (
//     <div
//       className="relative mb-8 bg-gradient-to-br from-[#12121a] to-[#1a1a2e] rounded-2xl p-8 border
//      border-gray-800/50 overflow-hidden"
//     >
//       <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />
//       <div className="relative flex items-center gap-8">
//         {/* Avatar Skeleton */}
//         <div className="relative">
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-xl" />
//           <div className="w-24 h-24 rounded-full bg-gray-800/80 animate-pulse relative z-10 border-4 border-gray-800/50" />
//           <div
//             className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500/50 
//           to-purple-600/50 rounded-full z-20 animate-pulse"
//           />
//         </div>

//         {/* User Info Skeleton */}
//         <div className="space-y-3">
//           <div className="h-8 w-48 bg-gray-800/80 rounded animate-pulse" />
//           <div className="h-5 w-32 bg-gray-800/80 rounded animate-pulse" />
//         </div>
//       </div>

//       {/* Stats Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
//         {[1, 2, 3].map((i) => (
//           <div
//             key={i}
//             className="group relative p-4 rounded-xl bg-gray-800/20 border border-gray-800/50 overflow-hidden"
//           >
//             <div className="absolute inset-0 bg-gradient-to-br opacity-5" />
//             <div className="relative space-y-4">
//               {/* Stat Header */}
//               <div className="flex items-start justify-between">
//                 <div className="space-y-2">
//                   <div className="h-4 w-24 bg-gray-800/80 rounded animate-pulse" />
//                   <div className="h-8 w-16 bg-gray-800/80 rounded animate-pulse" />
//                   <div className="h-4 w-32 bg-gray-800/80 rounded animate-pulse" />
//                 </div>
//                 <div className="w-10 h-10 rounded-xl bg-gray-800/80 animate-pulse" />
//               </div>

//               {/* Stat Footer */}
//               <div className="pt-4 border-t border-gray-800/50 flex items-center gap-2">
//                 <div className="h-4 w-4 bg-gray-800/80 rounded animate-pulse" />
//                 <div className="h-4 w-20 bg-gray-800/80 rounded animate-pulse" />
//                 <div className="h-4 w-16 bg-gray-800/80 rounded animate-pulse" />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProfileHeaderSkeleton;

function ProfileHeaderSkeleton() {
  return (
    <div className="mb-10">
      {/* TOP PROFILE ROW */}
      <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
        {/* Avatar */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-xl" />
          <div className="w-24 h-24 rounded-2xl bg-gray-800 animate-pulse relative z-10" />
        </div>

        {/* Name + Email */}
        <div className="flex-1 text-center md:text-left space-y-3">
          <div className="h-7 w-48 bg-gray-800 rounded animate-pulse mx-auto md:mx-0" />
          <div className="h-4 w-64 bg-gray-800 rounded animate-pulse mx-auto md:mx-0" />
          <div className="h-4 w-80 bg-gray-800 rounded animate-pulse mx-auto md:mx-0" />
        </div>
      </div>

      {/* STATS GRID (HORIZONTAL) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="bg-black/30 border border-gray-800/50 rounded-2xl p-6
                       flex items-center justify-between"
          >
            {/* Left */}
            <div className="space-y-3">
              <div className="h-4 w-28 bg-gray-800 rounded animate-pulse" />
              <div className="h-8 w-16 bg-gray-800 rounded animate-pulse" />
            </div>

            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-gray-800 animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileHeaderSkeleton;
