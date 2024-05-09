function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'c') {
        result.textContent = "ถูกต้อง ทีม AIM อยู่ภายใต้ service Desktop Service";
        result.style.color = 'green';
    } else {
        result.textContent = "ผิดจ้า  ลองใหม่";
        result.style.color = 'red';
    }
 }

 function checkAnswer2(answer) {
    const result = document.getElementById('results');
    if (answer === 'c') {
        result.textContent = "correct";
        result.style.color = 'green';
    } else {
        result.textContent = "incorrect";
        result.style.color = 'red';
    }
 }
 