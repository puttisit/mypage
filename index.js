let count = 0; 

function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'c') {
        result.textContent = "ถูกต้อง ทีม AIM อยู่ภายใต้ service Desktop Service";
        result.style.color = 'green';
        count++;
    } else {
        result.textContent = "ผิดจ้า  ลองใหม่";
        result.style.color = 'red';
    }
 }

 function checkAnswer2(answer) {
    const result = document.getElementById('results');
    const result3 = document.getElementById('result3');
    if (answer === 'c') {
        result.textContent = "correct";
        result.style.color = 'green';
        count++;
    } else {
        result.textContent = "incorrect";
        result.style.color = 'red';
    }
    result3.textContent = "คุณได้คะแนน " + count + " คะแนน"
 }
 
