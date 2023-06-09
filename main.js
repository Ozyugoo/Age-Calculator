const day = document.getElementById('day')
const month = document.getElementById('month')
const year = document.getElementById('year')

const errorMessageDay = document.getElementById('errorday')
const errorMessageMonth = document.getElementById('errormonth')
const errorMessageYear = document.getElementById('erroryear')

const yy = document.getElementById('yy')
const mm = document.getElementById('mm')
const dd = document.getElementById('dd')

const image = document.getElementById('image')


const expectednum = new Date()


image.addEventListener('click', (e) => {
    // i.style.border = "red";
    errorMessageDay.innerText = ''
    errorMessageMonth.innerText = ''
    errorMessageYear.innerText = ''
    if (day.value == '' || month.value == '' || year.value == '') {
        e.preventDefault()
        if (day.value == '') {
            errorMessageDay.innerText = 'this field is required'
        }
        if (month.value == '') {
            errorMessageMonth.innerText = 'this field is required'
        }
        if (year.value == '') {
            errorMessageYear.innerText = 'this field is required'
        }

    } else if (year.value > expectednum.getFullYear()) {
        e.preventDefault()
        errorMessageYear.innerText = "Must be in the past"
        year.value = ''
    } else if (month.value > 12) {
        e.preventDefault()
        errorMessageMonth.innerText = 'Must be a valid Month'
        month.value = ''
    } else if (day.value > 31) {
        e.preventDefault()
        errorMessageDay.innerText = 'must be a valid Day'
        day.value = ''
    } else {
        calculateAge(year.value, month.value, day.value)
    }
})

function calculateAge(year, month, day) {

    if (month > (expectednum.getMonth() + 1)) {
        yy.textContent = expectednum.getFullYear() - year - 1
    } else if (month == (expectednum.getMonth() + 1) && day > expectednum.getDate()) {
        yy.textContent = expectednum.getFullYear() - year - 1
    } else {
        yy.textContent = expectednum.getFullYear() - year
    }

    if (month > (expectednum.getMonth() + 1)) {
        mm.textContent = 12 + ((expectednum.getMonth() + 1) - month)
    } else {
        mm.textContent = (expectednum.getMonth() + 1) - month
    }

    if (day > expectednum.getDate() && month % 2 !== 0 || (expectednum.getMonth() + 1) == 8) {
        dd.textContent = 31 - (day - expectednum.getDate())
    } else if (day < expectednum.getDate() && month % 2 !== 0 || (expectednum.getMonth() + 1) == 8) {
        dd.textContent = 31 + (day - expectednum.getDate())
    } else if (day > expectednum.getDate() && month % 2 == 0 && (expectednum.getMonth() + 1) !== 8) {
        dd.textContent = 30 - (day - expectednum.getDate())
    } else if (day < expectednum.getDate() && month % 2 == 0 && (expectednum.getMonth() + 1) !== 8) {
        dd.textContent = - (day - expectednum.getDate())
    }
}