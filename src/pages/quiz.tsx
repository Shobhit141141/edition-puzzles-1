import { useState } from "react";
import { MdOutlineRefresh } from "react-icons/md";
import { questions } from "../content/questions";
import { Option, Scores } from "../types";



const OceanQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({
    dolphin: 0,
    octopus: 0,
    seahorse: 0,
    turtle: 0,
  });
  const [showResult, setShowResult] = useState(false);

  const creatureDescriptions = {
    dolphin: {
      title: "Playful Dolphin",
      description:
        "You're social, intelligent, and love to have fun! Like a dolphin, you're great at working with others and bringing joy to those around you.",
    },
    octopus: {
      title: "Clever Octopus",
      description:
        "You're brilliant, adaptable, and creative! Like an octopus, you're great at solving problems and thinking outside the box.",
    },
    seahorse: {
      title: "Graceful Seahorse",
      description:
        "You're gentle, patient, and go with the flow! Like a seahorse, you have a calm presence and are in tune with your surroundings.",
    },
    turtle: {
      title: "Wise Sea Turtle",
      description:
        "You're steady, peaceful, and wise! Like a sea turtle, you take life at your own pace and make thoughtful decisions.",
    },
  };

  const handleAnswer = (option: Option) => {
    const newScores: Scores = { ...scores };
    Object.entries(option.scores).forEach(([creature, score]) => {
      newScores[creature as keyof Scores] += score;
    });
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getWinningCreature = (): keyof typeof creatureDescriptions => {
    return Object.entries(scores).reduce(
      (max, [creature, score]) =>
        score > max.score ? { creature: creature as keyof Scores, score } : max,
      { creature: "dolphin" as keyof Scores, score: -1 }
    ).creature;
  };

  const getProgressPercentage = (creatureScore: number): number => {
    const maxPossibleScore: number = questions.length * 3;
    return (creatureScore / maxPossibleScore) * 100;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-900 p-8">
      <div className="max-w-2xl mx-auto bg-white/90 rounded-lg shadow-xl p-8">
        {!showResult ? (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-blue-800 mb-2">
                Question {currentQuestion + 1} of {questions.length}
              </h2>
              <div className="h-2 bg-blue-200 rounded-full">
                <div
                  className="h-2 bg-blue-600 rounded-full transition-all duration-300"
                  style={{
                    width: `${
                      ((currentQuestion + 1) / questions.length) * 100
                    }%`,
                  }}
                />
              </div>
            </div>

            <h3 className="text-xl text-blue-900 mb-6">
              {questions[currentQuestion].question}
            </h3>

            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full p-4 text-left rounded-lg bg-blue-50 hover:bg-blue-100 
                           transition-colors duration-200 border-2 border-blue-200 cursor-pointer"
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-8">
              You are a {creatureDescriptions[getWinningCreature()].title}!
            </h2>
            <p className="text-lg text-blue-900 mb-8">
              {creatureDescriptions[getWinningCreature()].description}
            </p>

            <div className="flex w-full place-items-center">
              
              <button
                onClick={() => {
                  setScores({ dolphin: 0, octopus: 0, seahorse: 0, turtle: 0 });
                  setCurrentQuestion(0);
                  setShowResult(false);
                }}
                className="w-48 px-4 py-2 text-lg rounded-lg bg-blue-50 hover:bg-blue-100 mx-auto bg-blue-500 hover:bg-blue-600 transition-all duration-200 hover:scale-105 cursor-pointer text-white font-bold flex justify-center items-center gap-2 group hover:shadow-lg"
              >
                <MdOutlineRefresh className="text-white text-2xl group-hover:rotate-180 transition-transform duration-300" />
                Retake Quiz
              </button>
            </div>
          </div>
        )}

        <div className="mt-8 space-y-4">
          {Object.entries(scores).map(([creature, score]) => (
            <div key={creature} className="space-y-2">
              <div className="flex items-center justify-between text-blue-800">
                <span className="capitalize">{creature}</span>
                <span>{Math.round(getProgressPercentage(score))}%</span>
              </div>
              <div className="h-4 bg-blue-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full transition-all duration-500"
                  style={{ width: `${getProgressPercentage(score)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OceanQuiz;
