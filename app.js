import Router from "./Router.js";
import { main, animations } from "./body.js";
import operation from "./operation.js";


window.app = {};

window.addEventListener('DOMContentLoaded', () => {

    Router.init();

})

let sideBar = () => {

    let itemsInsideBar = document.querySelector('.sideBar');

    itemsInsideBar.addEventListener('click', () => {

        itemsInsideBar.style.width = '12%'

        document.querySelectorAll('.linkI').forEach(H => {

            H.style.display = 'block'

        })


        setTimeout(() => {

            itemsInsideBar.style.width = '2%'

            document.querySelectorAll('.linkI').forEach(H => {

                H.style.display = 'none'

            })


        }, 10000)

    })
}

sideBar()

main();
animations();

operation()