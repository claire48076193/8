function calculateBMI() {
            var height = parseFloat(document.getElementById('height').value) / 100; // 公分轉換成米
            var weight = parseFloat(document.getElementById('weight').value);
            
            var bmi = weight / (height * height);
            var bmiResult = '';

            if (isNaN(bmi)) {
                bmiResult = '請輸入有效的身高和體重。';
            } else {
                bmiResult = '您的BMI為：' + bmi.toFixed(2);
            }

            document.getElementById('result').innerText = bmiResult;
        }