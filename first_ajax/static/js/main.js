document.addEventListener("DOMContentLoaded", function() {

    
    const ajaxButton = document.getElementById('button_root');
    const pingPongButton = document.getElementById('button_ping_pong');
    const countButton = document.getElementById('button_count');
    const timeButton = document.getElementById('button_time');
    const carButton = document.getElementById('button_car');
    


    ajaxButton.addEventListener('click', () => {
        const rootRequest = axios.get(' http://intro-ajax-api.herokuapp.com/')
        rootRequest.then(function(response){
            console.log(response)


        })
    })
    pingPongButton.addEventListener('click', () => {
        const pingRequest = axios.get(' http://intro-ajax-api.herokuapp.com/ping')
        pingRequest.then(function(response){
            console.log(response.data)
            const dataElem = document.getElementById('ping_content')
            dataElem.innerHTML = response.data;
        })
        
        .catch(error => {
            console.log('TRY HARDER NEXT TIME')
        })
        
        .then(response => {
            console.log('REQUEST FINSIHED')

        })
    })
    countButton.addEventListener('click', () => {
            const countRequest = axios.get('http://intro-ajax-api.herokuapp.com/count')
            countRequest.then(response => {
                console.log(response.data)
                const countElement = document.getElementById('count_content')
                countElement.innerHTML = response.data;
            })

            .catch(error => {
                console.log("Count FAILED!")
            })

        })
    
    timeButton.addEventListener('click', () => {
        const timeRequest = axios.get('http://intro-ajax-api.herokuapp.com/time', {
            param : {timezone: 'Asia/Kolkata'}
        })
        timeRequest.then(response => {
            console.log(response.data)
            const timeElement = document.getElementById('time_content')
            timeElement.innerHTML = response.data
        })
        .catch(error => {
            console.log("Time FAILED!")
        })
    })

    carButton.addEventListener('click', () => {
        const carRequest = axios.get(' http://intro-ajax-api.herokuapp.com/a_car')
        carRequest.then(response => {
            console.log(response.data)
            const carElement = document.getElementById('car_content')
            carElement.innerHTML = response.data
        })
    })


    
})









// const btn = $('#ajax_button')

//     btn.click(() => {
//         rootRequest.then(rootResponse => {
//         const data = rootResponse.data
//         console.log(data)
//             })
//         .catch(error => { 

//             })
//         })