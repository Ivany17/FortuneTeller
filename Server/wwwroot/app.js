const askBtn = document.getElementById('askBtn');
const questionInput = document.getElementById('questionInput');
const result = document.getElementById('result');

async function handleFortune(){
    try {
        let answer = questionInput.value;
        console.log(answer);
        const response = await fetch(`/ask?question=${answer}`);
        const data = await response.text();
        result.textContent = data;
        questionInput.value = ""
    } catch (error) {
        console.log(error);
    }
}

askBtn.addEventListener('click', () => {
    handleFortune();
});