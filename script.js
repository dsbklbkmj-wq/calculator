// HTML 요소들을 변수로 가져오기
const numberInput = document.getElementById('number');
const repetitionsInput = document.getElementById('repetitions');
const resultDisplay = document.getElementById('result');

const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');

// 계산 함수
function performCalculation(operation) {
    // 입력된 값을 숫자로 변환
    const number = parseFloat(numberInput.value);
    const repetitions = parseInt(repetitionsInput.value);
    
    // 유효성 검사
    if (isNaN(number) || isNaN(repetitions) || repetitions < 1) {
        resultDisplay.textContent = '유효한 숫자와 1 이상의 반복 횟수를 입력해주세요.';
        return;
    }

    let finalResult = 0;

    // 반복문을 이용한 계산
    for (let i = 0; i < repetitions; i++) {
        if (i === 0) {
            finalResult = number; // 첫 번째 반복에서는 입력된 숫자로 시작
        } else {
            switch (operation) {
                case 'add':
                    finalResult += number;
                    break;
                case 'subtract':
                    finalResult -= number;
                    break;
                case 'multiply':
                    finalResult *= number;
                    break;
                case 'divide':
                    // 0으로 나누는 경우 예외 처리
                    if (number === 0) {
                        resultDisplay.textContent = '0으로 나눌 수 없습니다.';
                        return;
                    }
                    finalResult /= number;
                    break;
            }
        }
    }

    // 결과 표시
    resultDisplay.textContent = `최종 결과: ${finalResult}`;
}

// 각 버튼에 이벤트 리스너 추가
addButton.addEventListener('click', () => performCalculation('add'));
subtractButton.addEventListener('click', () => performCalculation('subtract'));
multiplyButton.addEventListener('click', () => performCalculation('multiply'));
divideButton.addEventListener('click', () => performCalculation('divide'));