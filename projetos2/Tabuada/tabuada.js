const resultado = document.getElementById("resultado");

for (let i = 1; i <= 50; i++) {
    let tabuada = `
        <div class="card">
            <h2>Tabuada do ${i}</h2>
    `;
    for (let j = 1; j <= 10; j++) {
        tabuada += `<p>${i} x ${j} = ${i * j}</p>`;
    }
    tabuada += `</div>`;
    resultado.innerHTML += tabuada;
}