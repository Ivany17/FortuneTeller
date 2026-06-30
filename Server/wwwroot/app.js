const askBtn = document.getElementById('askBtn');
const questionInput = document.getElementById('questionInput');
const result = document.getElementById('result');

async function handleFortune(){
    try {
        const thinking = document.querySelector('.thinking');
        result.style.display = 'none'
        thinking.style.display = 'flex'
        let answer = questionInput.value;
        console.log(answer);
        await new Promise(resolve => setTimeout(resolve, 2000));
        const response = await fetch(`/ask?question=${answer}`);
        const data = await response.text();
        result.textContent = data;
        thinking.style.display = 'none';
        result.style.display = 'block';
        questionInput.value = ""
    } catch (error) {
        console.log(error);
    }
}

askBtn.addEventListener('click', () => {
    handleFortune();
});
questionInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        handleFortune();
    }
});