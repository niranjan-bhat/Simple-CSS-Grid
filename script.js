window.addEventListener('DOMContentLoaded', (event) => {
    jsonDataArray = Array.from(jsonData);
    dailyBtn.click();
});


currentWork = document.querySelector('#currentWork');
prevWork = document.querySelector('#prevWork');

currentPlay = document.querySelector('#currentPlay');
prevPlay = document.querySelector('#prevPlay');

currentStudy = document.querySelector('#currentStudy');
prevStudy = document.querySelector('#prevStudy');

currentExercise = document.querySelector('#currentExercise');
prevExercise = document.querySelector('#prevExercise');

currentSocial = document.querySelector('#currentSocial');
prevSocial = document.querySelector('#prevSocial');

currentSelfcare = document.querySelector('#currentSelfcare');
prevSelfcare = document.querySelector('#prevSelfcare');

var callBackToRemoveActiveClassForBtn= function(){
  dailyBtn.classList.remove('active');
}

dailyBtn = document.querySelector('.option-daily');
dailyBtn.addEventListener('click',()=>{
    fetchDailyReport();
    setActiveButton(dailyBtn)
})

weeklyBtn = document.querySelector('.option-weekly');
weeklyBtn.addEventListener('click',()=>{

    fetchWeeklyReport();
    setActiveButton(weeklyBtn);
})


function setActiveButton(button){
    callBackToRemoveActiveClassForBtn();
    button.classList.add('active');
    
    callBackToRemoveActiveClassForBtn= function(){
        button.classList.remove('active');
    }
}
monthlyBtn = document.querySelector('.option-monthly');
monthlyBtn.addEventListener('click',()=>{
    fetchMonthlyReport();
    setActiveButton(monthlyBtn);
})

function fetchDailyReport(){
    jsonDataArray.forEach(function (arrayItem) {
        updateUI(arrayItem.title,"day",arrayItem['timeframes']['daily']);
    });
}
function fetchWeeklyReport(){
    jsonDataArray.forEach(function (arrayItem) {
        updateUI(arrayItem.title,"week",arrayItem['timeframes']['weekly']);
    });
}
function fetchMonthlyReport(){
    jsonDataArray.forEach(function (arrayItem) {
        updateUI(arrayItem.title,"month",arrayItem['timeframes']['monthly']);
    });
}

function updateUI(title,timePeriod,jsonObject){

switch(title){
    case 'Work':
                updateElementCurrentTimeSpent(currentWork,jsonObject['current']);
                updateElementPrevTimeSpent(prevWork,timePeriod,jsonObject['previous']);
                break;

    case 'Play':
                updateElementCurrentTimeSpent(currentPlay,jsonObject['current']);
                updateElementPrevTimeSpent(prevPlay,timePeriod,jsonObject['previous']);
                break;

    case 'Study': 
                updateElementCurrentTimeSpent(currentStudy,jsonObject['current']);
                updateElementPrevTimeSpent(prevStudy,timePeriod,jsonObject['previous']);
                break;

    case 'Exercise': 
                updateElementCurrentTimeSpent(currentExercise,jsonObject['current']);
                updateElementPrevTimeSpent(prevExercise,timePeriod,jsonObject['previous']);
                break;
    case 'Social': 
                updateElementCurrentTimeSpent(currentSocial,jsonObject['current']);
                updateElementPrevTimeSpent(prevSocial,timePeriod,jsonObject['previous']);
                break;
    case 'Self Care': 
                updateElementCurrentTimeSpent(currentSelfcare,jsonObject['current']);
                updateElementPrevTimeSpent(prevSelfcare,timePeriod,jsonObject['previous']);
                break;
}

}

function updateElementCurrentTimeSpent(element,data){
element.innerHTML = data;
}

function updateElementPrevTimeSpent(element,timePeriod,data){
    element.innerHTML =  "Last "+timePeriod+" - "+ data+"hrs";
}



jsonData = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]