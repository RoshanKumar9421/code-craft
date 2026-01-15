
"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import {
  Activity,
  Code2,
  Star,
  Timer,
  TrendingUp,
  Trophy,
  UserIcon,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { Id } from "../../../../convex/_generated/dataModel";
import { UserResource } from "@clerk/types";

interface ProfileHeaderProps {
  userStats: {
    totalExecutions: number;
    languagesCount: number;
    languages: string[];
    last24Hours: number;
    favoriteLanguage: string;
    languageStats: Record<string, number>;
    mostStarredLanguage: string;
  };
  userData: {
    _id: Id<"users">;
    _creationTime: number;
    name: string;
    userId: string;
    email: string;
    isPro: boolean;
  };
  user: UserResource;
}

export default function ProfileHeader({
  userStats,
  userData,
  user,
}: ProfileHeaderProps) {
  const starredSnippets = useQuery(api.snippets.getStarredSnippets);

  const STATS = [
    {
      label: "Total code runs",
      value: userStats.totalExecutions,
      icon: Activity,
      metricLabel: "Last 24h",
      metricValue: userStats.last24Hours,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      label: "Starred snippets",
      value: starredSnippets?.length ?? 0,
      icon: Star,
      metricLabel: "Most starred",
      metricValue: userStats.mostStarredLanguage || "N/A",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      label: "Languages used",
      value: userStats.languagesCount,
      icon: Code2,
      metricLabel: "Most used",
      metricValue: userStats.favoriteLanguage || "N/A",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      label: "Activity score",
      value: userStats.totalExecutions + (starredSnippets?.length ?? 0),
      icon: TrendingUp,
      metricLabel: "Status",
      metricValue: "Active",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="mb-10">
      
      <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
        
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-40" />
          <img
            src={user.imageUrl}
            alt="Profile"
            className="w-24 h-24 rounded-2xl border border-gray-800 relative z-10"
          />
          {userData.isPro && (
            <div className="absolute -top-2 -right-2 bg-purple-600 p-2 rounded-full z-20">
              <Zap className="w-4 h-4 text-white" />
            </div>
          )}
        </div>

       
        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <h1 className="text-2xl font-semibold text-white">
              {userData.name}
            </h1>
            {userData.isPro && (
              <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">
                Pro Member
              </span>
            )}
          </div>

          <p className="text-gray-400 text-sm flex items-center justify-center md:justify-start gap-2 mt-1">
            <UserIcon className="w-4 h-4" />
            {userData.email}
          </p>
        </div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="group relative bg-black/30 border border-gray-800/50
                       rounded-2xl p-6 flex justify-between items-center
                       hover:border-gray-700 transition"
          >
           
            <div
              className={`absolute inset-0 bg-gradient-to-r ${stat.gradient}
              opacity-0 group-hover:opacity-10 transition`}
            />

          
            <div>
              <p className="text-sm text-gray-400">{stat.label}</p>
              <h3 className="text-3xl font-semibold text-white mt-1">
                {stat.value}
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                {stat.metricLabel}:{" "}
                <span className="text-gray-300">{stat.metricValue}</span>
              </p>
            </div>

           
            <div
              className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient} bg-opacity-10`}
            >
              <stat.icon className="w-5 h-5 text-white" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
