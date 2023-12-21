
// Local Storage
        let storage = localStorage.getItem("nama")
        if(storage) {
            const liEl = document.createElement("span")
            const liText = document.createTextNode(`Selamat datang ${storage}`)
            liEl.appendChild(liText)
            const ul = document.querySelector(".container nav ul li:nth-child(3)")
            ul.appendChild(liEl)
        }


        const inputBox = document.getElementById("input-box")
        const listContainer = document.getElementById("list-container")
        const containerSave = document.querySelector(".save-todo #list-container")
        let addHealth = ""

        // Array Data
        let todoArr = []
        let dataHealth = []

        function addTask() {
            if(inputBox.value === "") {
                alert("You must write your todo list")
            } else {
                let li = document.createElement("li")
                li.innerHTML = inputBox.value
                listContainer.appendChild(li)

                // Push ke Arr
                todoArr.push(inputBox.value)

                let span = document.createElement("span")
                span.innerHTML = "\u00d7"
                li.appendChild(span)
                let btn = document.createElement("button")
                btn.innerHTML = "Save"
                li.appendChild(btn)
                
            }

            // Tambah Button di Save Menu
            addHealth = document.querySelector("ul#list-container li button")

            inputBox.value = ""
            inputBox.focus()
            saveData()
        }

        function saveAddTask(value) {
                let li = document.createElement("li")
                li.innerHTML = value
                listContainer.appendChild(li)
                let span = document.createElement("span")
                span.innerHTML = "\u00d7"
                li.appendChild(span)
                let btn = document.createElement("button")
                btn.innerHTML = "Add"
                li.appendChild(btn)
        }

        // Ketika List di to-do di Klik
        listContainer.addEventListener("click", function(e) {
            if(e.target.tagName === "LI") {
                e.target.classList.toggle("checked")
                saveData()
            } else if (e.target.tagName === "SPAN") {
                e.target.parentElement.remove()
                saveData()
            } else if (e.target.tagName === "BUTTON") {
                tambahHealth(e.target.parentElement.firstChild.textContent);
                tampilkanData(dataHealth)
            }
        }, false)

        // Ketika List di Save Menu di Klik
        containerSave.addEventListener("click", function(e) {
            if (e.target.tagName === "SPAN") {
                e.target.parentElement.remove()
                deleteArray(e.target.parentElement.firstChild.textContent)
            } else if (e.target.tagName === "BUTTON") {
                saveAddTask(e.target.parentElement.firstChild.textContent);
            }
        }, false)


        // Save data ke localstorage
        function saveData() {
            localStorage.setItem("todoArr", todoArr)
            localStorage.setItem("data", listContainer.innerHTML)
        }


        function showTask() {
            listContainer.innerHTML = localStorage.getItem("data")
        }

        // Function delete data array
        function deleteArray(data) {
            let output = []
            for(let i = 0; i < dataHealth.length; i++) {
                if(dataHealth[i] !== data) {
                    output.push(dataHealth[i])
                }
            }

            dataHealth = output
            console.log(dataHealth);
            return dataHealth
        }

        showTask()


        // Save Data Health
        function deleteData(data) {
            
        }


        function tambahHealth(value) {
            dataHealth.push(value)
        }

        const saveTodoUl = document.querySelector(".save-todo ul#list-container")
        
        function tampilkanData(dataHealth) {
            
            for(let i = 0; i < dataHealth.length; i++) {
                if(i === dataHealth.length - 1) {
                    const li = document.createElement("li")
                    li.innerHTML = dataHealth[i]
                    saveTodoUl.appendChild(li)

                    let span = document.createElement("span")
                    span.innerHTML = "\u00d7"
                    li.appendChild(span)

                    let btn = document.createElement("button")
                    btn.innerHTML = "Add"
                    li.appendChild(btn)
                }
            }
        }

        if(dataHealth) {
            tampilkanData(dataHealth)
        }
        

