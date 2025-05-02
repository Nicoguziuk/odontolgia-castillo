function mostrarAlerta() {
    alert("¡Gracias por visitar mi página!");
}

document.addEventListener("DOMContentLoaded", () => {
    const cantidadImagenes = 5; // Ajustalo según la cantidad real
    const contenedor = document.getElementById("galeria-dinamica");

    for (let i = 1; i <= cantidadImagenes; i++) {
        const img = document.createElement("img");
        img.src = `./fotos_consul/${i}.jpg`; 
        img.alt = `Imagen ${i}`;
        img.classList.add("imagen-dinamica");
        contenedor.appendChild(img);
    }
});

window.onload = () => {
    document.getElementById('loading').style.display = 'none'; // Oculta el spinner
}