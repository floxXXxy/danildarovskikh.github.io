function check() {
    var money =  document.getElementById('money').value;
    var age = document.getElementById('age').value;
    var discount;
    
    if (age>0) {
        if (age<=20) {
            disc.innerText = "Молодежная 5%";
            discount = parseFloat(0.95);
            // alert(discount);
        }
        else {
            if (age>=65) {
                disc.innerText = "Пенсионная 10%";
                discount = parseFloat(0.90);
                // alert(discount);
            }
            else {
                disc.innerText = "Отсутствует";
                discount = parseFloat(1);
                // alert(discount);
            }
        }
    }
    else {
        disc.innerText = "Проверьте ввод возраста";
        discount = parseFloat(1);
    } 

    if (money>=0) {
        if (money < 300*discount) {
            result.innerText = "Недостаточно средств";
            image.src = "";
        }
        else {
            if (money >= 300*discount && money <= 3000*discount) {
                result.innerText = "Чайник";
                image.src = "teapot.jpg";
            } 
            else {
                if (money >= 3001*discount && money <= 10000*discount) {
                    result.innerText = "Пылесос";
                    image.src = "cleaner.jpg";
                }
                else {
                    if (money >10000*discount) {
                        result.innerText = "Холодильник";
                        image.src = "fridge.jpg";
                    }
                }
            }
        }
    }
    else {
        result.innerText = "Сумма введена неверно";
        image.src = "";
    }
}

document.getElementById('check').addEventListener('click', check);