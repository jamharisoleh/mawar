const canvas = document.getElementById("flowerCanvas");
const ctx = canvas.getContext("2d");

// Fungsi untuk menggambar kelopak bunga
function drawPetal(x, y, radius, color, angle) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(
        -radius / 2, -radius / 2,
        -radius, radius / 2,
        0, radius
    );
    ctx.bezierCurveTo(
        radius, radius / 2,
        radius / 2, -radius / 2,
        0, 0
    );
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
}

// Fungsi untuk menggambar bunga
function drawFlower(x, y, petalRadius, petalColor, centerRadius, centerColor) {
    // Gambar kelopak
    const numPetals = 6;
    const angleIncrement = (2 * Math.PI) / numPetals;
    for (let i = 0; i < numPetals; i++) {
        drawPetal(x, y, petalRadius, petalColor, i * angleIncrement);
    }

    // Gambar tengah bunga
    ctx.beginPath();
    ctx.arc(x, y, centerRadius, 0, 2 * Math.PI);
    ctx.fillStyle = centerColor;
    ctx.fill();
}

// Fungsi untuk menggambar batang
function drawStem(x, y, length, thickness, color) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + length);
    ctx.lineWidth = thickness;
    ctx.strokeStyle = color;
    ctx.stroke();
}

// Fungsi untuk menggambar daun
function drawLeaf(x, y, width, height, color, angle) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(
        -width / 2, -height / 4,
        -width, height / 2,
        0, height
    );
    ctx.bezierCurveTo(
        width, height / 2,
        width / 2, -height / 4,
        0, 0
    );
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
}

// Fungsi untuk menggambar tulisan "Hana"
function drawText(text, x, y, fontSize, color) {
    ctx.font = `${fontSize}px Arial`;
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.fillText(text, x, y);
}

// Fungsi utama untuk menggambar semua komponen
function draw() {
    // Bersihkan canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Gambar batang
    drawStem(200, 150, 250, 10, "green");

    // Gambar bunga
    drawFlower(200, 150, 50, "red", 15, "yellow");

    // Gambar daun
    drawLeaf(210, 300, 40, 80, "green", -0.5);
    drawLeaf(190, 350, 40, 80, "green", 0.5);

    // Gambar tulisan "Hana"
    drawText("Hana", 200, 100, 30, "red");
}

// Panggil fungsi draw untuk menggambar
draw();