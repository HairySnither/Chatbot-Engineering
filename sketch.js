function showResponse() {
    const question = document.getElementById('questionSelect').value;
    const responseDiv = document.getElementById('response');
    let response = '';

    switch(question) {
        case 'What is GCSE Engineering?':
            response = 'GCSE Engineering is a course that introduces students to the principles of engineering, covering design, manufacturing, materials, and sustainable practices. It provides a foundation for students who are interested in pursuing engineering at a higher level.';
            break;
        case 'What are the key skills needed for GCSE Engineering?':
            response = 'Key skills include problem-solving, creativity, critical thinking, technical drawing, CAD skills, knowledge of materials, and understanding manufacturing techniques.';
            break;
        case 'How can I prepare for the exam?':
            response = 'To prepare for the exam, focus on understanding the core concepts of engineering, practice using CAD software, review key materials and manufacturing processes, and work through past papers to familiarise yourself with the exam format.';
            break;
        case 'What are the main manufacturing processes?':
            response = 'Main manufacturing processes include casting, welding, machining, additive manufacturing (3D printing), and assembly techniques.';
            break;
        case 'Why is CAD important in engineering?':
            response = 'CAD (Computer-Aided Design) is important in engineering as it allows students to create accurate 2D and 3D models, visualise designs, and simulate performance, aiding in the development of engineering solutions.';
            break;
        case 'What are the hand tools used in engineering?':
            response = 'Common hand tools used in engineering include hammers, pliers, screwdrivers, wrenches, and measuring tools.';
            break;
        default:
            response = 'Sorry, please select a valid question from the dropdown menu.';
    }

    responseDiv.innerText = response;
}

function checkQuiz(event) {
    event.preventDefault(); // Prevent form submission (page reload)

    let score = 0;
    const quizResult = document.getElementById('quizResult');

    const q1Answer = document.querySelector('input[name="q1"]:checked')?.value;
    const q2Answer = document.querySelector('input[name="q2"]:checked')?.value;
    const q3Answer = document.querySelector('input[name="q3"]:checked')?.value;
    const q4Answer = document.querySelector('input[name="q4"]:checked')?.value;
    const q5Answer = document.querySelector('input[name="q5"]:checked')?.value;
    const q6Answer = document.querySelector('input[name="q6"]:checked')?.value;
    const q7Answer = document.querySelector('input[name="q7"]:checked')?.value;
    const q8Answer = document.querySelector('input[name="q8"]:checked')?.value;
    const q9Answer = document.querySelector('input[name="q9"]:checked')?.value;
    const q10Answer = document.querySelector('input[name="q10"]:checked')?.value;

    // Check the answers and calculate the score
    if (q1Answer === 'a') {
        score++;
    } else {
        markIncorrect('q1');
    }
    if (q2Answer === 'b') {
        score++;
    } else {
        markIncorrect('q2');
    }
    if (q3Answer === 'b') {
        score++;
    } else {
        markIncorrect('q3');
    }
    if (q4Answer === 'b') {
        score++;
    } else {
        markIncorrect('q4');
    }
    if (q5Answer === 'b') {
        score++;
    } else {
        markIncorrect('q5');
    }
    if (q6Answer === 'a') {
        score++;
    } else {
        markIncorrect('q6');
    }
    if (q7Answer === 'a') {
        score++;
    } else {
        markIncorrect('q7');
    }
    if (q8Answer === 'b') {
        score++;
    } else {
        markIncorrect('q8');
    }
    if (q9Answer === 'b') {
        score++;
    } else {
        markIncorrect('q9');
    }
    if (q10Answer === 'a') {
        score++;
    } else {
        markIncorrect('q10');
    }

    quizResult.innerText = `You scored ${score}/10!`;
}

function markIncorrect(question) {
    const labels = document.querySelectorAll(`input[name="${question}"] + label`);
    labels.forEach(label => {
        if (label.previousElementSibling.checked) {
            label.classList.add('incorrect');
        }
    });
}

// Add event listener to images for expanding on click
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.topic img');
    images.forEach(img => {
        img.addEventListener('click', () => {
            // Remove the 'full-size' class from all images
            images.forEach(otherImg => {
                if (otherImg !== img) {
                    otherImg.classList.remove('full-size');
                }
            });
            // Toggle the 'full-size' class on the clicked image
            img.classList.toggle('full-size');
        });
    });
});
