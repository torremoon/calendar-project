let year = new Date(Date.now()).getFullYear()

let monthName = ['January','February','March','April','May','June','July','August','September','October','November','December']
let weekName = ["M", "T", "W", "T", "F", "S", "S"]

function monthLength(monthIndex, year) { 
    return (32 - new Date(year, monthIndex, 32).getDate());
} 

function blankDays(monthIndex, year) {
    let firstDay = new Date(year, monthIndex, 1)
    let dayIndex = firstDay.getDay()
    dayIndex -= 1
    if(dayIndex == -1) {
        return 6
    }
    return dayIndex
}

function prevYear() {
    year -= 1
    createCalendar()
}

function nextYear() {
    year += 1
    createCalendar()
}

function createCalendar() {
    let yearDisplay = document.querySelector('.year')
    yearDisplay.innerText = year

    let monthWrapper = document.querySelector('.months-wrapper')
    monthWrapper.innerHTML = "";

    for(let i = 0; i < 12; i++) {
        
        let month = document.createElement("div");
        month.className = `month ${monthName[i].toLowerCase()}`
        
        let monthTitle = document.createElement("h2");
        monthTitle.innerText = monthName[i];
        month.appendChild(monthTitle)
        
        let table = document.createElement("table");
        month.appendChild(table)
        
        let tableHead = document.createElement("thead");
        table.appendChild(tableHead);
        
        for(let j = 0; j < 7 ; j++) {
            let weekDays = document.createElement("th");
            weekDays.innerText = weekName[j];
            tableHead.appendChild(weekDays);
        }
        
        let tableBody = document.createElement("tbody");
        table.appendChild(tableBody);
        
        let week = document.createElement("tr");
        let daysAdded = 0
        for(let y=0; y < blankDays(i, year); y++) {
            let emptyCell = document.createElement("td");
            week.appendChild(emptyCell)
            daysAdded++;
        }

        for(let u=0; u < monthLength(i, year); u++) {
            let day = document.createElement("td");
            day.innerText = u + 1;
            week.appendChild(day);
            daysAdded++;
            
            if (daysAdded === 7) {
                tableBody.appendChild(week)
                week = document.createElement("tr");
                daysAdded = 0
            } 
        }

        if(daysAdded !== 0) {
            tableBody.appendChild(week)
        }    

        monthWrapper.appendChild(month)
    }
}

createCalendar()