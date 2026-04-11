import React from "react";
import InvestorPosition from "../components/InvestorPosition";

const users = [
  { name: "Hugo Strange", username: "hugostranger92", amount: 34750 },
  { name: "Nadia Volkov", username: "nadiavolkov77", amount: 18200 },
  { name: "Arthur Pendergast", username: "arthurpendergast31", amount: 45900 },
  { name: "Ivy Saunders", username: "ivysaunders55", amount: 12600 },
  { name: "Gabriel Stone", username: "gabrielstone88", amount: 49800 },
  { name: "Mira Kalu", username: "mirakalu14", amount: 27350 },
  { name: "Sebastian Vane", username: "sebastianvane63", amount: 38900 },
  { name: "Tessa Young", username: "tessayoung29", amount: 21400 },
  { name: "Elias Thorne", username: "eliasthorne46", amount: 16780 },
  { name: "Margot Robbie", username: "margotrobbie99", amount: 49200 },
  { name: "Luca Moretti", username: "lucamoretti22", amount: 30500 }
];

const TopInvestors = () => {
  // 🔥 Sort users by highest amount
  const sortedUsers = [...users].sort((a, b) => b.amount - a.amount);

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-10 py-20">

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold text-center text-amber-400 mb-12">
        Top Investors Leaderboard
      </h1>

      {/* Grid */}
      <div className="flex flex-wrap justify-center gap-8">

        {sortedUsers.map((user, index) => (
          <InvestorPosition
            key={index}
            position={index + 1}
            name={user.name}
            username={user.username}
            amount={user.amount}
          />
        ))}

      </div>
    </div>
  );
};

export default TopInvestors;