function FocusImage(id, i, id_focus){
    if ((id_focus === i + 1) | (id_focus === i - 1))
    {
        let div_to_focus = document.getElementById(id)
        div_to_focus.classList.toggle("focus")

        let div_to_unfocus = document.getElementById(`container-image_${id_focus}`)
        div_to_unfocus.classList.toggle("focus")

        // Move container to center focused image
        let container = document.getElementById("container-carrousel")
        // container.style.left = calc("50% - 85px")
        let pixels = 135 + i*190
        container.style.setProperty('left', `calc(50% - ${pixels}px)`);

        return i
    }
    else{
        return id_focus
    }
}

function GenerateCarrousel(id_focus) {
    let container = document.getElementById("container-carrousel")
    Object.keys(IMAGES).forEach( (img, i) => {
        let img_container = document.createElement("div")
        img_container.id = `container-image_${i}`
        img_container.classList = ["container-image"]
        let filename = IMAGES[img]["img"]
        let current_id = `container-image_${i}`
        img_container.innerHTML = `
        <img id="${current_id}" class="image" src="Races/${filename}" alt="Image d'un chien de race ${img}">
        <span id="description_${i}" class="description">${img}</span>`
        img_container.addEventListener("click", () => {
            id_focus = FocusImage(current_id, i, id_focus)
        })
        container.appendChild(img_container)
    });
}

function main(){
    let id_focus = 0
    GenerateCarrousel(id_focus)
    let div_init_focus = document.getElementById("container-image_0")
    div_init_focus.classList.toggle("focus")
}