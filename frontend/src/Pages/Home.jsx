import React from "react";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://templates.seekviral.com/quiza/quiz/Quiz12/assets/images/thankyou-bg.jpg")`,
        width: "100%",
        height: "calc(100vh - 70px)", // navbar height subtracted
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        overlay:"#0000",
        
        // backgroundPosition: "center",
      }}
      className="flex flex-col items-center justify-center"
    >
      <div className="max-w-lg text-center">
        <h1 className="text-[#001a4e] font-extrabold text-4xl md:text-5xl leading-tight">
          Welcome to Online Quiz Battle
        </h1>
        

        <div className="flex text-start items-center justify-center mt-4 text-gray-800 text-base md:text-lg leading-relaxed">
          <ul className="list-disc list-inside space-y-2">
            <li>Register or Login to start playing.</li>
            <li>Select a quiz category from the lobby.</li>
            <li>Each quiz has a limited time per question.</li>
            <li>Earn points for every correct answer.</li>
            <li>Top players appear on the leaderboard.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
