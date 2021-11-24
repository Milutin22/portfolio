const app = {
    init: () => {
        window.addEventListener('load', app.loadAll);
        document.addEventListener('DOMContentLoaded', app.loadContent);
    },
    loadContent: () => {
        app.getData();
    },
    loadAll: () => {
        let loader = document.getElementsByClassName('loader')[0];
        loader.classList.add('fadeOut');
    },
    getData: () => {
        let page = document.body.id;
        switch(page) {
            case 'index': app.getIndex();
              break;
              case 'dental': app.getDental();
              break;
            case 'paintball': app.getPaintball();
              break;
            case 'cigar': app.getCigar();
              break;
            case 'race': app.getRace();
              break;
              case 'portfolio': app.getPortfolio();
              break;
            case 'bucketlist': app.getBucketlist();
              break;
        }
    },
    //function for go back button
    goBack: () => {
        let goUpBtn = document.getElementById('goUp');
        let clicked = false;
        let goBackBtn = document.getElementsByClassName('overview__backBtn')[0].firstElementChild;
        goUpBtn.addEventListener('click', () => {
            clicked = true;
        })
        goBackBtn.addEventListener('click', () => {
            if(clicked) {
                window.history.go(-2)
            } else {
                window.history.go(-1)
            }
        })
    },
    //function for go up button
    goUp: () => {
        let goUpBtn = document.getElementById('goUp')
        window.addEventListener('scroll', () => {
            if(window.pageYOffset > 300) {
                goUpBtn.classList.add('comesFromRight');
            } else {
                goUpBtn.classList.remove('comesFromRight');
            }
        })
    },
    //function for paragraphs animations from top
    showsFromTop: () => {
        let paragraphs = document.getElementsByClassName('overview__descriptions')[0].children;
        let num = 0;
        for(let i=0; i<paragraphs.length; i++) {
            paragraphs[i].style.animationDelay = num + 's';
            paragraphs[i].classList.add('comesFromTop');
            num = num + 0.1;
        }
    },

/*-----------INDEX PAGE------------*/
    getIndex: () => {
        let job = document.getElementsByClassName('me__skills')[0].firstElementChild.firstElementChild.nextElementSibling;
        let skill = ['developer', 'designer'];
        let num = 0;
        setInterval(() => {
            job.textContent = skill[num];
            num++
            if(num>1) {
                num = 0;
            }
        }, 1600);

        app.goUp();
    },
/*---------DENTAL OVERVIEW---------*/
    getDental: () => {
        app.goBack();
        app.goUp();
        app.showsFromTop();
    },
/*---------PAINTBALL OVERVIEW---------*/
    getPaintball: () => {
        app.goBack();
        app.goUp();
        app.showsFromTop();
    },
/*---------CIGAR OVERVIEW---------*/
    getCigar: () => {
        app.goBack();
        app.goUp();
        app.showsFromTop();
    },
/*---------RACEGAME OVERVIEW---------*/
    getRace: () => {
        app.goBack();
        app.goUp();
        app.showsFromTop();
    },
    /*---------PORTFOLIO OVERVIEW---------*/
    getPortfolio: () => {
        app.goBack();
        app.goUp();
        app.showsFromTop();
    },
/*---------BUCKETLIST OVERVIEW---------*/
    getBucketlist: () => {
        app.goBack();
        app.goUp();
        app.showsFromTop();
    }
}
app.init();