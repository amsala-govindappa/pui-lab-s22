let carts = document.querySelectorAll('.course1');

let courses = [
    {
        name: "c410",
        units: 12,
        added: 0
    },
    {
        name: "c430",
        units: 15,
        added: 0
    },
    {
        name: "c651",
        units: 12,
        added: 0
    },
    {
        name: "c650",
        units: 12,
        added: 0
    }
];

for (let i=0; i<carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(courses[i]);
    })
}

function cartNumbers(course) {
    let courseNumbers = parseInt(localStorage.getItem('cartNumbers'));
    if (courseNumbers) {
        localStorage.setItem('cartNumbers', courseNumbers + 1);
    }
    else {
        localStorage.setItem('cartNumbers', 1);
    }
    setItems(course);
}

function setItems(course) {
    let items = localStorage.getItem('coursesAdded');
    items = JSON.parse(items);
    if (items != null) {
        if (items[course.name] == undefined) {
            items = {
                ...items,
                [course.name]: course
            }
        }
        items[course.name].added += 1
    } else {
        course.added = 1;
        items = {
        [course.name]: course
        }
    }
    localStorage.setItem("coursesAdded", JSON.stringify(items));
}

function displayCart() {
    let curr = localStorage.getItem('coursesAdded')
    curr = JSON.parse(curr);
    if (((curr.c410.added)%2) == 1) {
        document.getElementById('cn410').style.color="black";
    }
    if (((curr.c430.added)%2) == 1) {
        document.getElementById('cn430').style.color="black";
    }
    if (((curr.c651.added)%2) == 1) {
        document.getElementById('cn651').style.color="black";
    }
    if (((curr.c650.added)%2) == 1) {
        document.getElementById('cn650').style.color="black";
    }
}

displayCart();