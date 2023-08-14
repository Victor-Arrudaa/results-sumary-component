const itens = document.querySelector(".itens");

async function getItens() {
    const response = await fetch("data.json");
    const data = response.json();

    return data;
}

const item = getItens().then((res) => {
    res.forEach((element) => {
        itens.innerHTML += createItem(element);
    });
});

function createItem(item) {
    let selectedItem = `
    <div class="item ${item.category}">
        <div class="text">
        <img
            src="${item.icon}"
        />
            <p>${item.category}</p>
        </div>
        <div class="result-one">
            <p>${item.score}</p>

            <span>/ 100</span>
        </div>
    </div>`;

    return selectedItem;
}
