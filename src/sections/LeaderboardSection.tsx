import { useState, useEffect } from "react";
import type { FC } from "react";

interface HubLeaderboardEntry {
  rank: number;
  ambassadorId: string;
  ambassadorName: string;
  verifiedTasks: number;
  externalReferrals: number;
  totalScore: number;
}

export const LeaderboardSection: FC = () => {
  const [data, setData] = useState<HubLeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await fetch("https://ignite-hub-api-production.up.railway.app/api/leaderboard");
        if (res.ok) {
          const json = await res.json();
          // Extract top 5
          setData((json as HubLeaderboardEntry[]).slice(0, 5));
        } else {
          console.error("Failed to fetch leaderboard");
        }
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLeaderboard();
    
    // Poll every 30 seconds for live feel
    const interval = setInterval(fetchLeaderboard, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-surface" id="leaderboard">
      <div className="container mx-auto px-6">
        <div className="bg-surface-container p-1 rounded-sm border border-outline-variant/30">
          <div className="bg-surface-container-lowest p-8 md:p-12">

            <div className="flex items-center justify-between mb-12 border-b border-outline-variant pb-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-4xl">terminal</span>
                <h2 className="font-headline font-black text-3xl text-white uppercase tracking-tighter">GLOBAL_RANKINGS.sh</h2>
              </div>
              <div className="flex gap-4 items-center">
                {isLoading && <span className="text-secondary text-xs uppercase animate-pulse font-mono">Syncing...</span>}
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono">
                <thead>
                  <tr className="text-on-surface-variant text-[10px] uppercase tracking-[0.2em] whitespace-nowrap">
                    <th className="pb-6">Rank</th>
                    <th className="pb-6 pr-6">Agent_Name</th>
                    <th className="pb-6 pr-6">Total_XP</th>
                    <th className="pb-6 pr-6">Verified_Tasks</th>
                    <th className="pb-6">Ext_Referrals</th>
                  </tr>
                </thead>
                <tbody className="text-sm whitespace-nowrap">
                  {data.map((entry, idx) => (
                    <tr key={entry.ambassadorId || idx} className="border-b border-outline-variant/10 group hover:bg-surface-container transition-colors">
                      <td className="py-6 text-primary font-bold">
                        {entry.rank.toString().padStart(2, "0")}_
                      </td>
                      <td className="py-6 pr-6 text-white font-bold">{entry.ambassadorName}</td>
                      <td className="py-6 pr-6 text-tertiary font-bold text-lg">
                        {entry.totalScore.toLocaleString()}
                      </td>
                      <td className="py-6 pr-6 text-emerald-400">
                        {entry.verifiedTasks}
                      </td>
                      <td className="py-6 text-cyan-400">
                        {entry.externalReferrals}
                      </td>
                    </tr>
                  ))}
                  {data.length === 0 && !isLoading && (
                    <tr>
                      <td colSpan={5} className="py-6 text-center text-on-surface-variant italic">
                        No ranking data available or offline.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
