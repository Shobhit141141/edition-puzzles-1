import { useState } from "react";
import { MdOutlineRefresh } from "react-icons/md";
import { questions } from "../content/questions";
import { Option, Scores } from "../types";

const OceanQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({
    captain: 0,
    navigator: 0,
    deckhand: 0,
    mermaid: 0,
  });
  const [showResult, setShowResult] = useState(false);

  const characterDescriptions = {
    captain: {
      title: "Bold Captain",
      description:
        "You're bold and decisive, a natural leader who is confident and thrives under pressure. You are a visionary and a determinist and makes tough calls for the greater good.",
    },
    navigator: {
      title: "Analytical Navigator",
      description:
        "You're analytical and detail-oriented, always looking for the best possible solution to any problem. You enjoy problem-solving and stay calm and composed under any situation.",
    },
    deckhand: {
      title: "Energetic Deckhand",
      description:
        "You're energetic and enthusiastic, extremely hardworking and have a very strong can-do attitude. You are practical, adaptable, and love working as part of a team, being the glue that holds the crew together.",
    },
    mermaid: {
      title: "Creative Mermaid",
      description:
        "You're creative and free-spirited, imaginative, and adventurous. You dream of exploring the secrets of the sea and express your inner child carefreely.",
    },
  };

  const handleAnswer = (option: Option) => {
    const newScores: Scores = { ...scores };
    Object.entries(option.scores).forEach(([character, score]) => {
      newScores[character as keyof Scores] += score;
    });
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getWinningCharacter = (): keyof typeof characterDescriptions => {
    return Object.entries(scores).reduce(
      (max, [character, score]) =>
        score > max.score ? { character: character as keyof Scores, score } : max,
      { character: "captain" as keyof Scores, score: -1 }
    ).character;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-900 p-8">
      <div className="max-w-2xl mx-auto bg-white/90 rounded-lg shadow-xl p-8">
        {!showResult ? (
          <div>
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
              You are a {characterDescriptions[getWinningCharacter()].title}!
            </h2>
            <p className="text-lg text-blue-900 mb-8">
              {characterDescriptions[getWinningCharacter()].description}
            </p>

            <div className="flex w-full place-items-center">
              <button
                onClick={() => {
                  setScores({ captain: 0, navigator: 0, deckhand: 0, mermaid: 0 });
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
      </div>
    </div>
  );
};

export default OceanQuiz;