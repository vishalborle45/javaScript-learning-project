const questions = [
    {
      question: "A flashing red traffic light signifies that a driver should do what?",
      A: "stop",
      B: "speed up",
      C: "proceed with caution",
      D: "honk the horn",
      answer: "A"
    },
    {
      question: "A knish is traditionally stuffed with what filling?",
      A: "potato",
      B: "creamed corn",
      C: "lemon custard",
      D: "raspberry jelly",
      answer: "A"
    },
    {
      question: "A pita is a type of what?",
      A: "fresh fruit",
      B: "flat bread",
      C: "French tart",
      D: "friend bean dip",
      answer: "B"
    },
    {
      question: "A portrait that comically exaggerates a person's physical traits is called a what?",
      A: "landscape",
      B: "caricature",
      C: "still life",
      D: "Impressionism",
      answer: "B"
    }
  ];

  const Qstion = document.querySelector('.question');
  const AnswerBTN = document.querySelector('.answer_btn');
  const Next_btn = document.querySelector('#next_btn');
  
  let index = 0;
  let Score = 0;
  
  function StartQuiz() {
      index = 0;
      Score = 0;
      Next_btn.innerHTML = "Next";
      Next_btn.style.display = 'none'; // Hide Next button initially
      ShowQuestions();
  }
  
  Next_btn.addEventListener('click', () => {
      if (Next_btn.innerHTML === "Restart") {
          StartQuiz();
          return; // Exit the function to prevent further execution
      }
    
      if (index < questions.length - 1) {
          index++;
          Qstion.innerHTML = '';
          AnswerBTN.innerHTML = '';
          ShowQuestions();
          Next_btn.style.display = 'none';
      } else {
          Qstion.innerHTML = `Your Score: ${Score} / ${questions.length}`;
          AnswerBTN.innerHTML = '';
          Next_btn.innerHTML = "Restart";
      }
  });
  
  function ShowQuestions() {
      Qstion.innerHTML = `${index + 1}. ${questions[index].question}`;
      const ansbtn = ["A", "B", "C", "D"];
      AnswerBTN.innerHTML = ''; // Clear any existing buttons
  
      ansbtn.forEach(item => {
          const btn = document.createElement('button');
          btn.innerHTML = questions[index][item];
          btn.classList.add('btn');
          AnswerBTN.appendChild(btn);
  
          btn.addEventListener('click', (e) => {
              if (e.target.tagName === "BUTTON") {
                  const ansValue = questions[index].answer;
                  const actualAnswer = questions[index][ansValue];
  
                  if (e.target.innerHTML === actualAnswer) {
                      e.target.style.background = '#90EE90';
                      Score++;
                  } else {
                      e.target.style.background = '#FF7F7F';
                  }
  
                  Array.from(AnswerBTN.children).forEach(button => button.disabled = true);
                  Next_btn.style.display = 'block';
              }
          });
      });
  }
  
  // Initialize the quiz
  StartQuiz();