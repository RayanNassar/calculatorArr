import basic from "./basic.js"
import output from "./output.js"
let historyArray = []

const Router = {
    init: () => {

        let hrefState = window.location.pathname
        Router.go(hrefState)

        document.querySelectorAll('.linkI').forEach(H => {

            H.addEventListener('click', A => {
                A.preventDefault();
                let link = A.target.getAttribute('href');
                Router.go(link)

            })

        })
        window.addEventListener('popstate', () => {
            let length = historyArray.length - 2
            Router.go(historyArray[length]);
            historyArray.pop()
            historyArray.pop()
        })

    },
    go: (link, historyPug = false) => {

        if (link == '/calculator.html') {
            history.pushState('', '', 'background')
            link = '/background'
        }
        else {
            history.pushState('', '', link)
        }

        historyArray.push(link)

        if (link) {

            while (document.getElementsByTagName('link').length > 0) {

                document.getElementsByTagName('link')[0].remove()

            }

            let element = document.createElement('link')
            element.href = './calculator.css';
            element.rel = 'stylesheet'
            document.head.append(element)

        }

        switch (link) {

            case '/background':

                let backgroundCssFile = document.createElement('link');
                backgroundCssFile.rel = 'styleSheet';
                backgroundCssFile.classList.add('backgroundCssFile')
                backgroundCssFile.href = 'background.css';
                document.head.append(backgroundCssFile)

                let imagePhoto = document.createElement('div');
                imagePhoto.classList.add('imagePhoto')
                document.body.append(imagePhoto)

                output()

                break;

            case '/basic':
            
                basic()

                break;

        }


    }

}

export default Router