const cotalogWrap: HTMLElement = document.querySelector('.catalog-wrap')

let idProd: string[] = [];


// console.log(catalog[0].img)
let storageGet = localStorage.getItem('storageI');
let parsed = JSON.parse(storageGet);
// console.log(storageGet)
idProd = parsed
console.log(idProd)


catalog.forEach(({id,name,img,prise}, i) => {

    cotalogWrap.innerHTML += `
        <div class="producr-cart">
        <div class="producr-cart__title">
            <span>
                ${catalog[i].name}
            </span>
        </div>
        <div class="producr-cart__img flex-reg">
            <img src="${catalog[i].img}" alt="">
        </div>
        <div class="producr-cart__cost">${catalog[i].prise}</div>
        <div class="producr-cart__btn">
            <div class="btn flex-reg">купить</div>
        </div>
        </div>
`

});

const btn: NodeListOf<Element> = document.querySelectorAll('.btn')

// console.log(catalog[1])

catalog.forEach(({id,name,img,prise}, i) => {

        // ============================================
        for (let n = 0; n < parsed.length; n++) {  
            if (id === parsed[n]) {
                    console.log(btn[i])
                    btn[i].style.backgroundColor = 'rgb(204, 109, 0)';
                    btn[i].innerHTML = 'Убрать из корзины';
            }
        }
        // ============================================
    }
)

btn.forEach((item, i)  => {
        item.onclick = () => {
            let check = idProd.indexOf(catalog[i].id)
            if ( check === -1 ) {
                    idProd.push(catalog[i].id);
                    localStorage.setItem('storageI', JSON.stringify(idProd));
                    // ==================
                    if ( btn[i].style.backgroundColor === 'rgb(204, 109, 0)' ) {
                        idProd.splice(check , 1);
                        localStorage.setItem('storageI', JSON.stringify(idProd));
                        // ==================
                        btn[i].style.backgroundColor = '';
                        btn[i].innerHTML = 'купить';
                    }else {
                        btn[i].style.backgroundColor = 'rgb(204, 109, 0)';
                        btn[i].innerHTML = 'Убрать из корзины';
                    }
            } else {
                idProd.splice(check , 1);
                localStorage.setItem('storageI', JSON.stringify(idProd));
                // ==================
                btn[i].style.backgroundColor = '';
                btn[i].innerHTML = 'купить';
            }
        }
    }
)