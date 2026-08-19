import { useState } from 'react';
import { Wind, Flame, Droplets } from 'lucide-react';
import './DoshaQuiz.css';

const DoshaQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ Vata: 0, Pitta: 0, Kapha: 0 });
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: 'What is your typical body frame?',
      answers: [
        { text: 'Thin and light', dosha: 'Vata', icon: Wind },
        { text: 'Medium and muscular', dosha: 'Pitta', icon: Flame },
        { text: 'Large and sturdy', dosha: 'Kapha', icon: Droplets }
      ]
    },
    {
      question: 'How do you typically feel in cold weather?',
      answers: [
        { text: 'Uncomfortable, I feel cold easily', dosha: 'Vata', icon: Wind },
        { text: 'Adaptable, neither too hot nor cold', dosha: 'Pitta', icon: Flame },
        { text: 'Comfortable, I handle cold well', dosha: 'Kapha', icon: Droplets }
      ]
    },
    {
      question: 'What is your typical appetite?',
      answers: [
        { text: 'Irregular and variable', dosha: 'Vata', icon: Wind },
        { text: 'Strong, I eat frequently', dosha: 'Pitta', icon: Flame },
        { text: 'Moderate, steady appetite', dosha: 'Kapha', icon: Droplets }
      ]
    },
    {
      question: 'How would you describe your mind?',
      answers: [
        { text: 'Quick, creative, scattered', dosha: 'Vata', icon: Wind },
        { text: 'Sharp, focused, determined', dosha: 'Pitta', icon: Flame },
        { text: 'Calm, steady, grounded', dosha: 'Kapha', icon: Droplets }
      ]
    },
    {
      question: 'What is your skin type?',
      answers: [
        { text: 'Dry, thin', dosha: 'Vata', icon: Wind },
        { text: 'Fair, sensitive, freckles', dosha: 'Pitta', icon: Flame },
        { text: 'Thick, oily, smooth', dosha: 'Kapha', icon: Droplets }
      ]
    },
    {
      question: 'What is your typical sleep pattern?',
      answers: [
        { text: 'Light, easily disturbed', dosha: 'Vata', icon: Wind },
        { text: 'Moderate, 6-8 hours', dosha: 'Pitta', icon: Flame },
        { text: 'Deep, sleep easily', dosha: 'Kapha', icon: Droplets }
      ]
    }
  ];

  const doshaInfo = {
    Vata: {
      name: 'Vata',
      icon: Wind,
      color: 'from-blue-500 to-purple-600',
      bgColor: 'bg-blue-50',
      description: 'Air & Space',
      characteristics: [
        'Creative and enthusiastic',
        'Energetic but prone to anxiety',
        'Quick to learn, quick to forget',
        'Irregular eating and sleeping patterns',
        'Sensitive to cold and dry conditions'
      ],
      recommendations: [
        'Warm, nourishing foods',
        'Regular routine and grounding activities',
        'Warm oil massage (Abhyanga)',
        'Meditation and gentle yoga',
        'Early bedtime'
      ]
    },
    Pitta: {
      name: 'Pitta',
      icon: Flame,
      color: 'from-red-500 to-orange-600',
      bgColor: 'bg-orange-50',
      description: 'Fire & Water',
      characteristics: [
        'Intelligent and determined',
        'Strong digestion and metabolism',
        'Natural leader',
        'Can be aggressive or impatient',
        'Sensitive to heat'
      ],
      recommendations: [
        'Cooling, light foods',
        'Regular exercise in cool times',
        'Meditative and calming practices',
        'Avoid excessive heat exposure',
        'Balance work and relaxation'
      ]
    },
    Kapha: {
      name: 'Kapha',
      icon: Droplets,
      color: 'from-green-500 to-teal-600',
      bgColor: 'bg-green-50',
      description: 'Water & Earth',
      characteristics: [
        'Calm, stable, supportive',
        'Strong immunity',
        'Steady metabolism',
        'Can be slow or lethargic',
        'Loves routine and comfort'
      ],
      recommendations: [
        'Warm, spiced foods',
        'Regular exercise and movement',
        'Stimulating activities',
        'Variety and new experiences',
        'Dry massage and sauna'
      ]
    }
  };

  const handleAnswer = (dosha) => {
    const newScores = { ...scores };
    newScores[dosha]++;
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getDominantDosha = () => {
    const max = Math.max(scores.Vata, scores.Pitta, scores.Kapha);
    if (scores.Vata === max) return 'Vata';
    if (scores.Pitta === max) return 'Pitta';
    return 'Kapha';
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScores({ Vata: 0, Pitta: 0, Kapha: 0 });
    setShowResult(false);
  };

  if (showResult) {
    const dominantDosha = getDominantDosha();
    const doshaData = doshaInfo[dominantDosha];
    const Icon = doshaData.icon;

    return (
      <section id="dosha-quiz" className="py-20 bg-gradient-to-br from-white via-green-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-900 mb-4">Your Ayurvedic Constitution</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-amber-600 mx-auto"></div>
          </div>

          <div className={`${doshaData.bgColor} rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-green-200 mb-8`}>
            <div className="text-center mb-8">
              <div className={`bg-gradient-to-br ${doshaData.color} rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6`}>
                <Icon className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-green-900 mb-2">Dominant: {doshaData.name}</h3>
              <p className="text-xl text-gray-700">{doshaData.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-2xl font-bold text-green-900 mb-4">Your Characteristics</h4>
                <ul className="space-y-3">
                  {doshaData.characteristics.map((char, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-amber-600 font-bold">•</span>
                      <span className="text-gray-700">{char}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-green-900 mb-4">Healing Recommendations</h4>
                <ul className="space-y-3">
                  {doshaData.recommendations.map((rec, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-green-700 font-bold">✓</span>
                      <span className="text-gray-700">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white bg-opacity-60 backdrop-blur rounded-xl p-6 text-center mb-8">
              <p className="text-gray-700 text-lg">
                Most people have a combination of doshas. Your <strong>{doshaData.name}</strong> is dominant, 
                but you likely have secondary doshas influencing your health too.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {['Vata', 'Pitta', 'Kapha'].map((dosha) => (
                <div key={dosha} className="bg-white rounded-lg p-4 text-center border-2 border-green-200 shadow">
                  <p className="text-gray-700 font-semibold">{dosha}</p>
                  <p className="text-3xl font-bold text-green-700">{scores[dosha]}</p>
                  <p className="text-sm text-gray-600">points</p>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-700 mb-8">
              Get personalized treatment recommendations from Dr. Shreelakshmi based on your constitution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetQuiz}
                className="px-8 py-3 bg-white border-2 border-green-700 text-green-700 font-bold rounded-full hover:bg-green-50 transition"
              >
                Retake Quiz
              </button>
              <a
                href="/contact#contact"
                className="px-8 py-3 bg-gradient-to-r from-green-700 to-green-800 text-white font-bold rounded-full hover:shadow-lg transition text-center"
              >
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="dosha-quiz" className="dosha-quiz-section py-20 bg-gradient-to-br from-green-50 via-white to-amber-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-900 mb-4">Find Your Dosha</h2>
          <p className="text-xl text-gray-700 mb-4">
            Discover your Ayurvedic constitution and get personalized wellness guidance
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-amber-600 mx-auto"></div>
        </div>

        <div className="dosha-quiz-card bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="dosha-progress-labels flex justify-between items-center mb-4">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="dosha-progress-track w-full bg-gray-200 rounded-full h-2">
              <div
                className="dosha-progress-fill bg-gradient-to-r from-green-700 to-amber-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <h3 className="dosha-question text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            {questions[currentQuestion].question}
          </h3>

          {/* Answers */}
          <div className="dosha-answers space-y-4">
            {questions[currentQuestion].answers.map((answer, idx) => {
              const Icon = answer.icon;
              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(answer.dosha)}
                  className="dosha-answer w-full text-left p-6 rounded-xl border-2 border-gray-200 hover:border-green-700 hover:bg-green-50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-8 h-8 text-gray-400 group-hover:text-green-700 transition" />
                    </div>
                    <span className="text-lg font-semibold text-gray-700 group-hover:text-green-700 transition">
                      {answer.text}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            No right or wrong answers - answer based on your natural tendencies
          </p>
        </div>
      </div>
    </section>
  );
};

export default DoshaQuiz;
