const questions = [
    {
        que: "Apa fungsi dari tag HTML <head>?",
        a: "Menyimpan data meta-informasi tentang dokumen",
        b: "Menentukan heading utama",
        c: "Membuat hyperlink",
        d: "Menyimpan paragraf teks",
        correct: "a",
    },
    {
        que: "Apa singkatan dari CSS?",
        a: "Computer Style Sheets",
        b: "Creative Style Sheets",
        c: "Cascading Style Sheets",
        d: "Colorful Style Sheets",
        correct: "c",
    },
    {
        que: "Bagaimana cara yang benar untuk merujuk file eksternal JavaScript di dalam dokumen HTML?",
        a: "<script src=\"script.js\">",
        b: "<script name=\"script.js\">",
        c: "<script link=\"script.js\">",
        d: "<script href=\"script.js\">",
        correct: "a",
    },
    {
        que: "Apa kegunaan dari CSS pseudo-class :hover?",
        a: "Menarget elemen ketika diklik",
        b: "Menarget elemen ketika diarahkan oleh cursor",
        c: "Menarget elemen ketika terpilih",
        d: "Menarget elemen ketika di-focus",
        correct: "b",
    },
    {
        que: "Apa perbedaan antara let, const, dan var dalam JavaScript?",
        a: "Semuanya digunakan untuk mendeklarasikan variabel",
        b: "let bersifat lokal, const bersifat global, dan var tidak bersifat lokal",
        c: "let bersifat lokal, const bersifat konstan, dan var bersifat lokal dan global",
        d: "let bersifat lokal, const bersifat konstan, dan var bersifat global",
        correct: "c",
    },
    {
        que: "Apa yang dimaksud dengan API (Application Programming Interface)?",
        a: "Alat Pengembangan Antar Pengguna",
        b: "Antarmuka Program Aplikasi",
        c: "Alat Pemrograman Internet",
        d: "Aplikasi Program Internal",
        correct: "b",
    },
    {
        que: "Apa fungsi dari media query dalam CSS?",
        a: "Menyaring konten berdasarkan waktu",
        b: "Menyesuaikan tata letak halaman berdasarkan ukuran layar",
        c: "Menetapkan warna latar belakang halaman",
        d: "Mengatur margin dan padding halaman",
        correct: "b",
    },
    {
        que: "Apa kegunaan dari tag <canvas> dalam HTML5?",
        a: "Menampilkan video",
        b: "Menggambar grafik dan animasi",
        c: "Memainkan musik",
        d: "Menyematkan file PDF",
        correct: "b",
    },
    {
        que: "Apa yang dimaksud dengan 'asynchronous' dalam konteks pemrograman JavaScript?",
        a: "Eksekusi kode berurutan",
        b: "Eksekusi kode secara bersamaan tanpa menunggu hasil operasi sebelumnya selesai",
        c: "Menyimpan data secara permanen di browser",
        d: "Menjalankan fungsi dengan interval waktu tertentu",
        correct: "b",
    },
    {
        que: "Bagaimana cara menggabungkan dua array dalam JavaScript?",
        a: "concat()",
        b: "merge()",
        c: "combine()",
        d: "append()",
        correct: "a",
    },
    {
        que: "Apa yang dimaksud dengan 'AJAX' dalam pengembangan web?",
        a: "Asynchronous JavaScript and XML",
        b: "Advanced JavaScript and XHTML",
        c: "Asynchronous Java and XML",
        d: "Advanced Java and XHTML",
        correct: "a",
    },
    {
        que: "Bagaimana cara membuat elemen HTML menjadi responsif terhadap ukuran layar menggunakan CSS?",
        a: "Media queries",
        b: "Flexbox",
        c: "Grid layout",
        d: "Floats",
        correct: "a",
    },
    {
        que: "Apa yang dimaksud dengan 'HTTP'?",
        a: "HyperText Transfer Protocol",
        b: "HyperTransfer Text Protocol",
        c: "HyperText Transmission Protocol",
        d: "HyperTransfer Transmission Protocol",
        correct: "a",
    },
    {
        que: "Apa perbedaan antara == dan === dalam JavaScript?",
        a: "Keduanya adalah operator logika",
        b: "== membandingkan nilai tanpa memperhatikan tipe data, sedangkan === membandingkan nilai dan tipe data",
        c: "== hanya digunakan untuk perbandingan angka, sedangkan === untuk string",
        d: "Keduanya digunakan untuk menggabungkan nilai dari dua variabel",
        correct: "b",
    },
    {
        que: "Bagaimana cara mengatasi 'cross-origin' resource sharing (CORS) dalam pengembangan web?",
        a: "Menggunakan tag <cors> dalam HTML",
        b: "Mengatur header HTTP Access-Control-Allow-Origin pada server",
        c: "Menggunakan fungsi crossOrigin() dalam JavaScript",
        d: "Menonaktifkan CORS pada browser",
        correct: "b",
    },
    {
        que: "Apa kegunaan dari JSON (JavaScript Object Notation)?",
        a: "Menyusun dokumen HTML",
        b: "Mendefinisikan warna dalam CSS",
        c: "Merepresentasikan data dalam bentuk string yang mudah diinterpretasi oleh JavaScript",
        d: "Menyematkan video dalam halaman web",
        correct: "c",
    },
    {
        que: "Bagaimana cara membuat animasi menggunakan CSS?",
        a: "Menggunakan tag <animation> dalam HTML",
        b: "Menulis fungsi animasi dalam file JavaScript",
        c: "Menggunakan properti animation dalam CSS",
        d: "Mengatur nilai animate: true pada elemen HTML",
        correct: "c",
    },
    {
        que: "Apa yang dimaksud dengan 'callback function' dalam JavaScript?",
        a: "Fungsi yang dipanggil secara bersamaan",
        b: "Fungsi yang dipanggil saat operasi asinkron selesai",
        c: "Fungsi yang digunakan untuk menggabungkan dua array",
        d: "Fungsi yang digunakan untuk membuat elemen responsif",
        correct: "b",
    },
    {
        que: "Bagaimana cara menangani kesalahan (error) dalam JavaScript?",
        a: "Menggunakan tag <error> dalam HTML",
        b: "Mengeksekusi fungsi handleError() secara otomatis",
        c: "Menggunakan blok try...catch",
        d: "Mengabaikan kesalahan tanpa penanganan",
        correct: "c",
    },
    {
        que: "Apa yang dimaksud dengan 'SEO' (Search Engine Optimization)?",
        a: "Meningkatkan kualitas gambar dalam halaman web",
        b: "Meningkatkan kecepatan akses internet",
        c: "Optimasi untuk mesin pencari guna meningkatkan peringkat halaman web",
        d: "Membuat situs web yang bersifat sementara",
        correct: "c",
    },
];


const quesBox = document.getElementById("quesBox");
const options = document.getElementsByClassName("option");
const submit = document.getElementById("submit");
const radioButtons = document.querySelectorAll('input[type="radio"][name="option"]');
const lastMessage = document.querySelector("#answer-result");
const scoreShow = document.getElementById("score");

let userName = "";
let userClass = "";
let userAbsen = "";

const startButton = document.getElementById("startQuiz");
const nameInput = document.getElementById("name");
const classInput = document.getElementById("class");
const absenInput = document.getElementById("absen");

document.getElementById("box").style.display = "none";

startButton.addEventListener("click", () => {
    if (nameInput.value && classInput.value && absenInput.value) {
        userName = nameInput.value;
        userClass = classInput.value;
        userAbsen = absenInput.value;

        document.getElementById("inputSection").style.display = "none";
        document.getElementById("box").style.display = "block";

        loadQuestions();
    } else {
        alert("Tolong Lengkapi Data Terlebih Dahulu.");
    }
});

// Load questions
let index = 0;
let score = 0;
loadQuestions();

submit.addEventListener("click", () => {
    let radioChecked = false;
    radioButtons.forEach((radioButton) => {
        if (radioButton.checked) {
            radioChecked = true;
        }
    });
    if (radioChecked) {
        checkAnswer();
    } else {
        setTimeout(() => {
            lastMessage.innerText = "";
        }, 2000);
        lastMessage.innerText = "Tolong Pilih Jawaban Terlebih dahulu";
    }
});

function loadQuestions() {
    const data = questions[index];
    quesBox.innerText = data.que;

    for (let i = 0; i < radioButtons.length; i++) {
        const label = document.querySelector(`label[for=option${i + 1}]`);
        const optionKey = String.fromCharCode(97 + i); // Convert ASCII code to character ('a' to 'd')
        label.innerText = optionKey + ") " + data[optionKey];
    }
}


function checkAnswer() {
    let selectedOption;
    radioButtons.forEach((radioButton) => {
        if (radioButton.checked) {
            selectedOption = radioButton.value;
        }
    });

    if (selectedOption === questions[index].correct) {
        score++;
        setTimeout(() => {
            lastMessage.innerText = "";
            scoreShow.innerText = "";
        }, 2000);
        lastMessage.innerText = "Jawaban Kamu Benar";
        scoreShow.innerText = `Score Kamu Sekarang ${score}/${questions.length}`;
    } else {
        setTimeout(() => {
            lastMessage.innerText = "";
            scoreShow.innerText = "";
        }, 2000);
        lastMessage.innerText = "Jawaban Kamu Salah";
        scoreShow.innerText = `Score Kamu Sekarang ${score}/${questions.length}`;
    }

    index++;
    if (index < questions.length) {
        loadQuestions();
    } else {
        const finalScore = score * 5;
        if (finalScore === 100) {
            document.getElementById('quizEndModalLabel').innerText = `Selamat, ${userName}! Kamu Telah Lulus Tes Website Ini.`;
        } else if (finalScore >= 70 && finalScore < 100) {
            document.getElementById('quizEndModalLabel').innerText = `${userName}, Nilaimu Lumayan Baik, Saya Harap Kamu Bisa Memperbaikinya`;
        } else {
            document.getElementById('quizEndModalLabel').innerText = `${userName}, Nilaimu Kurang Baik, Kamu Harus Mengerjakan Remedial`;
        }
    
        document.getElementById('finalScore').innerText = `Score Akhir Kamu Adalah ${finalScore}/${questions.length * 5}`;
        $('#quizEndModal').modal('show');
    
        submit.innerText = "Play Again";
    
        submit.addEventListener("click", () => {
            location.reload();
        });
    }

    uncheckRadioButtons();
}
document.getElementById('playAgain').addEventListener('click', () => {
    location.reload();
});

function uncheckRadioButtons() {
    radioButtons.forEach((radio) => {
        radio.checked = false;
    });
}
