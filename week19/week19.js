//Задание 1
//Создайте функцию makeOne, которая выполняет GET-запрос по адресу https://catfact.ninja/fact, используя функцию fetch(). Результат должен быть выведен в консоль. Функция вызывается по нажатию кнопки "Задание 1".

function makeOne() {
  //Ваш код
  fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("Ошибка. Запрос не выполнен");
    });
}

document.querySelector(".b-1").addEventListener("click", makeOne);

//Задание 2
//Создайте функцию makeTwo, которая выполняет GET-запрос по адресу https://emojihub.yurace.pro/api/random/group/face-positive. Результат запроса - поле htmlCode вставьте в элемент с id result2.

function makeTwo() {
  //Ваш код
  const result2 = document.getElementById("result2");
  fetch("https://emojihub.yurace.pro/api/random/group/face-positive")
    .then((response) => response.json())
    .then((data) => {
      const paragraph = document.createElement("p");
      paragraph.innerHTML = data.htmlCode;
      result2.appendChild(paragraph);
    })
    .catch((err) => {
      result2.textContent = "Ошибка. Запрос не выполнен";
    });
}

document.querySelector(".b-2").addEventListener("click", makeTwo);

//Задание 3
//Создайте функцию makeThree, которая выполняет GET-запрос по адресу https://www.boredapi.com/api/activity, используя функцию fetch(). Выведите в консоль ответ с сервера, чтобы убедиться, что получили данные.

function makeThree() {
  //Ваш код
  fetch("https://www.boredapi.com/api/activity")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("Ошибка. Запрос не выполнен");
    });
}

document.querySelector(".b-3").addEventListener("click", makeThree);

//Задание 4
//Создайте функцию makeFour, которая делает запрос на адрес https://www.boredapi.com/api/activity. Выведите в консоль полученную активность в формате 'Activity: описание активности'.

function makeFour() {
  //Ваш код
  fetch("https://www.boredapi.com/api/activity")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.activity);
    })
    .catch((err) => {
      console.log("Ошибка. Запрос не выполнен");
    });
}

document.querySelector(".b-4").addEventListener("click", makeFour);

//Задание 5
//Создайте функцию makeFive, которая делает запрос на адрес https://www.boredapi.com/api/activity. Выведите в консоль количество участников для активности.

function makeFive() {
  //Ваш код
  fetch("https://www.boredapi.com/api/activity")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.participants);
    })
    .catch((err) => {
      console.log("Ошибка. Запрос не выполнен");
    });
}

//добавьте слушатель события
document.querySelector(".b-5").addEventListener("click", makeFive);

//Задание 6
//Создайте функцию makeSix, которая делает запрос на адрес https://www.boredapi.com/api/activity. Выведите в консоль свойства из полученного объекта, такие как activity, type, price и accessibility.

function makeSix() {
  //Ваш код
  fetch("https://www.boredapi.com/api/activity")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.activity);
      console.log(data.type);
      console.log(data.price);
      console.log(data.accessibility);
    })
    .catch((err) => {
      console.log("Ошибка. Запрос не выполнен");
    });
}

document.querySelector(".b-6").addEventListener("click", makeSix);

//Задание 7
//Создайте функцию makeSeven, которая делает запрос на адрес https://api.agify.io/. Выведите в консоль ответ с сервера, чтобы убедиться, что получили данные.

function makeSeven() {
  //Ваш код
  fetch("https://api.agify.io/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("Ошибка. Запрос не выполнен");
    });
}

//добавьте слушатель события
document.querySelector(".b-7").addEventListener("click", makeSeven);

//Задание 8
//Создайте функцию makeEight, которая отправляет GET-запрос на адрес https://api.agify.io/ с параметром ?name=alice.

function makeEight() {
  //Ваш код
  fetch("https://api.agify.io/?name=alice")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("Ошибка. Запрос не выполнен");
    });
}

document.querySelector(".b-8").addEventListener("click", makeEight);

//Задание 9
//Создайте функцию makeNine, которая отправит запрос на адрес `https://api.agify.io/?name=vadim` и выведет полученные данные в элемент с id result9.
//Подсказка: использование JSON.stringify() позволит преобразовать объект в строку.

function makeNine() {
  fetch("https://api.agify.io/?name=vadim")
    .then((response) => response.json())
    .then((data) => {
      const result9 = JSON.stringify(data);
      const resultElement = document.getElementById("result9");
      //Ваш код
      resultElement.innerHTML = result9;
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
}

//добавьте слушатель события
document.querySelector(".b-9").addEventListener("click", makeNine);
//Задание 10
//Создайте функцию makeTen, которая делает запрос на адрес https://dog.ceo/api/breeds/image/random. Полученное изображение выведите после элемента с id "result10".

function makeTen() {
  //Ваш код
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      const imgLink = data.message;
      const img = document.createElement("img");
      img.src = imgLink;
      const resultElement = document.getElementById("result10");
      //Ваш код
      resultElement.append(img);
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
}

document.querySelector(".b-10").addEventListener("click", makeTen);

//Задание 11
//Создайте функцию makeEleven, которая делает запрос на адрес "https://api.ipify.org?format=json". Полученный результат выведите в элемент с id "result11".

function makeEleven() {
  fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      //Ваш код
      const result11 = JSON.stringify(data);
      const resultElement = document.getElementById("result11");
      resultElement.innerHTML = result11;
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
}

document.querySelector(".b-11").addEventListener("click", makeEleven);

//Задание 12 НЕ ПОЛУЧИЛОСЬ
//Создайте функцию makeTwelve, которая будет получать IP-адрес из поля ввода находить его гео-позицию.

function makeTwelve() {
  //Ваш код
  fetch("https://api.ipify.org?format=json/{ipAddress}")
    .then((response) => response.json())
    .then((data) => {
      const ipAddress = document.getElementById("ipAddress");
      const result12 = JSON.stringify(ipAddress);
      resultElement.textContent = result12;
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
}

document.querySelector(".b-12").addEventListener("click", makeTwelve);

//Задание 13
//Создайте функцию makeThree, которая делает запрос на адрес 	fetch('https://official-joke-api.appspot.com/random_joke'). Выведите в консоль ответ с сервера, чтобы посмотреть, какие поля есть в ответе.

function makeThirteen() {
  //Ваш код
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("Ошибка. Запрос не выполнен");
    });
}
//добавьте слушатель события
document.querySelector(".b-13").addEventListener("click", makeThirteen);

//Задание 14
//Создайте функцию makeFourteen, которая делает запрос на адрес https://official-joke-api.appspot.com/random_joke с помощью функции fetch() . Выведите на страницу информацию о шутке, используя поля "setup" и "punchline" из ответа сервера.

function makeFourteen() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.setup);
      console.log(data.punchline);
      const result14 = JSON.stringify(data.setup);
      const result141 = JSON.stringify(data.punchline);
      const resultElement = document.getElementById("result14");
      resultElement.innerHTML = `${result14} ${result141}`;
    })
    .catch((error) => console.error("Ошибка:", error));
}

document.querySelector(".b-14").addEventListener("click", makeFourteen);

//Задание 15
//Создайте функцию makeFifteen, которая выполняет POST-запрос по адресу https://randomuser.me/api/, используя функцию fetch(). Выведите ответ от сервера в консоль.

function makeFifteen() {
  const postData = {
    title: "Заголовок",
    body: "Текст поста",
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    //Ваш код
    body: JSON.stringify(postData),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Ошибка:", error));
}

//добавьте слушатель события
document.querySelector(".b-15").addEventListener("click", makeFifteen);

//Задание 16
//Создайте функцию makeSixteen, которая должна сделать PUT-запрос на адрес https://jsonplaceholder.typicode.com/posts/1 с помощью функции fetch(). Выведите ответ с сервера в консоль.

function makeSixteen() {
  //Ваш код
  const someData = {
    title: "Новый заголовок",
    body: "Новый текст поста",
  };
  const putMethod = {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(someData),
  };

  fetch("https://jsonplaceholder.typicode.com/posts/1", putMethod)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

document.querySelector(".b-16").addEventListener("click", makeSixteen);

//Задание 17
//Создайте функцию makeSeventeen, которая должна сделать DELETE-запрос на адрес https://jsonplaceholder.typicode.com/posts/1 с помощью функции fetch(). Полученный ответ с сервера должен быть выведен в консоль.

const makeSeventeen = () => {
  //Ваш код
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

//добавьте слушатель события
document.querySelector(".b-17").addEventListener("click", makeSeventeen);

//Задание 18 НЕ УДАЛОСЬ ПЕРЕДАТЬ ФУНКЦИИ НА ВХОД JSON-ОБЪЕКТ, АВТОМАТИЧЕСКИ ПРЕОБРАЗУЕТСЯ В ОБЪЕКТ
//Создайте функцию makeEighteen, которая должна сделать POST-запрос на адрес https://jsonplaceholder.typicode.com/photos с помощью функции fetch(). ыведите ответ с сервера в консоль.

function makeEighteen() {
  //Ваш код
  const addData = {
    title: "Название изображения",
    url: "https://example.com/image.jpg",
  };
  const postMethod = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(addData),
  };

  fetch("https://jsonplaceholder.typicode.com/photos", postMethod)
    .then((response) => response.json())
    .then((data) => console.log(res.status, res.statusText, data))
    .catch((err) => console.log(err));
}

document.querySelector(".b-18").addEventListener("click", makeEighteen);

//Задание 19
//Создайте функцию makeNineteen, которая должна сделать POST-запрос на адрес https://jsonplaceholder.typicode.com/users с помощью функции fetch(). Выведите ответ с сервера в консоль.

function makeNineteen() {
  //Ваш код
  const postData = {
    name: "Кот Учёный",
    username: "kitty",
    email: "kitty@example.com",
    phone: "123-456-7890",
  };

  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    //Ваш код
    body: JSON.stringify(postData),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Ошибка:", error));
}

document.querySelector(".b-19").addEventListener("click", makeNineteen);

//Задание 20
//Создайте функцию makeTwenty, которая должна сделать POST-запрос на адрес https://jsonplaceholder.typicode.com/comments с помощью функции fetch(). Выведите ответ с сервера в консоль.

function makeTwenty() {
  //Ваш код
  const postData = {
    name: "Золотая рыбка",
    email: "goldfish@example.com",
    body: "Гав-гав!",
    postId: 1,
  };

  fetch("https://jsonplaceholder.typicode.com/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    //Ваш код
    body: JSON.stringify(postData),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Ошибка:", error));
}

document.querySelector(".b-20").addEventListener("click", makeTwenty);

//Задание 21
//Создайте функцию makeTwentyOne, которая должна сделать PUT-запрос на адрес https://jsonplaceholder.typicode.com/comments/1 с помощью функции fetch(). Выведите ответ с сервера в консоль.

function makeTwentyOne() {
  //Ваш код
  const someData = {
    name: "Золотая рыбка",
    email: "goldfish@example.com",
    body: "Буль-буль!",
    postId: 1,
  };
  const putMethod = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(someData),
  };

  fetch("https://jsonplaceholder.typicode.com/comments/1", putMethod)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

document.querySelector(".b-21").addEventListener("click", makeTwentyOne);

//Задание 22
//Создайте функцию makePromiseAllOne, которая должна делать два GET-запроса на адреса: https://jsonplaceholder.typicode.com/posts/1, https://jsonplaceholder.typicode.com/comments/1. Используйте `.then()` для обработки результатов.
//Выведите оба ответа с сервера в консоль.

function makePromiseAllOne() {
  //Ваш код
  Promise.all([
    fetch("https://jsonplaceholder.typicode.com/posts/1").then((value) =>
      value.json()
    ),
    fetch("https://jsonplaceholder.typicode.com/comments/1").then((value) =>
      value.json()
    ),
  ])
    .then((value) => {
      console.log(value);
    })
    .catch((err) => {
      console.log(err);
    });
}

document.querySelector(".b-22").addEventListener("click", makePromiseAllOne);

//Задание 23
//Создайте функцию makePromiseAllTwo, которая должна делать три GET-запроса на адреса: https://jsonplaceholder.typicode.com/users/1, https://jsonplaceholder.typicode.com/posts/1, https://jsonplaceholder.typicode.com/comments/1.
//Используйте `async/await` для обработки результатов. Выведите все ответы с сервера в консоль.

async function makePromiseAllTwo() {
  try {
    const response1 = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const data1 = await response1.json();
    console.log(data1);
    //Ваш код
    const response2 = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data2 = await response2.json();
    console.log(data2);
    const response3 = await fetch(
      "https://jsonplaceholder.typicode.com/comments/1"
    );
    const data3 = await response3.json();
    console.log(data3);
  } catch (error) {
    console.error("Ошибка при выполнении запросов:", error);
  }
}

document.querySelector(".b-23").addEventListener("click", makePromiseAllTwo);

//Задание 24
//Какое имя выведется в консоль?

const makeTwentyFour = () => {
  let name = "Вася";
  function sayHi() {
    console.log(name); //Вася, потому что Петя асинхронен
  }

  setTimeout(function () {
    let name = "Петя";
    sayHi();
  }, 1000);
};

//добавьте слушатель события
document.querySelector(".b-24").addEventListener("click", makeTwentyFour);

//Задание 25
//В каком порядке числа выведутся в консоль?

function makeTwentyFive() {
  console.log(1);

  //Cтавим таймер на 0 миллисекунд
  setTimeout(function () {
    console.log(2);
  }, 0);

  console.log(3); //1, 3, 2, потому что даже нулевой таймаут прерывает синхронный поток
}
//добавьте слушатель события
document.querySelector(".b-25").addEventListener("click", makeTwentyFive);

//Задание 26
//Создайте функцию makeTwentySix, должна использовать `setTimeout` для отображения в консоли сообщения "Прошло 5 секунд" через 5 секунд. Вызывается функция по кнопке Задание 26.

function makeTwentySix() {
  //Ваш код
  const timer = setTimeout(function () {
    console.log("Прошло 5 секунд");
  }, 5000);
}

document.querySelector(".b-26").addEventListener("click", makeTwentySix);

//Задание 27
//Создайте функцию makeTwentySeven, должна использовать `setTimeout` для отображения в консоли сообщения "Прошло 2 секунды" через 2 секунды. Вызывается функция по кнопке Задание 27.

function makeTwentySeven() {
  //Ваш код
  const timer = setTimeout(function () {
    console.log("Прошло 2 секунды");
  }, 2000);
}

document.querySelector(".b-27").addEventListener("click", makeTwentySeven);

//Задание 28
//Создайте функцию makeTwentyEight, которая использует `setInterval` для отображения в консоли сообщения "Прошло 3 секунды" каждые 3 секунды.

function makeTwentyEight() {
  //Ваш код
  const interval = setInterval(function () {
    console.log("Прошло 3 секунды");
  }, 3000);
  clearInterval(interval); //останов и очистка
}

document.querySelector(".b-28").addEventListener("click", makeTwentyEight);

//Задание 29
//Создайте функцию makeTwentyNine, которая использует `setInterval` для отображения в консоли сообщения "Прошло 2 секунды" каждые 2 секунды.

function makeTwentyNine() {
  //Ваш код
  const interval = setInterval(function () {
    console.log("Прошло 2 секунды");
  }, 2000);
  clearInterval(interval); //останов и очистка
}

document.querySelector(".b-29").addEventListener("click", makeTwentyNine);

//Задание 30
//Создайте функцию makeThirty, которая использует `setInterval` для отображения в консоли сообщения "Прошло 5 секунд" каждые 5 секунд.

function makeThirty() {
  //Ваш код
  const interval = setInterval(function () {
    console.log("Прошло 5 секунд");
  }, 5000);
  clearInterval(interval); //останов и очистка
}

document.querySelector(".b-30").addEventListener("click", makeThirty);
