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
        result.textContent = "ถูกต้องจ้า เค้าเเมวเหมือนกัน";
        result.style.color = 'green';
    } else {
        result.textContent = "ไม่จ้า นู้นก็เค้าแมว";
        result.style.color = 'red';
    }
 }
 
