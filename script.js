const text = "بحبك وبموت فيكي يا بسلايتي";

const loveText = document.getElementById("love-text");

let i = 0;

function typeLetter() {
  if (i < text.length) {
    loveText.innerHTML += text[i];
    i++;
    setTimeout(typeLetter, 400); // التحكم في سرعة الكتابة
  }
}

typeLetter();
