function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const textArea = document.querySelector("#inputs textarea");
   const restaurantNameRef = document.querySelector("#bestRestaurant p");
   const workerListRef = document.querySelector("#workers p");


   function onClick() {
      let info = JSON.parse(textArea.value);
      let obj = {};
      for (let restaurantInfo of info) {
         let [restaurantName, workersString] = restaurantInfo.split(" - ");
         let workers = workersString.split(", ");
         if (!obj.hasOwnProperty(restaurantName)) {
            obj[restaurantName] = {
               avgSalary: calcAvgSalary(workers),
               bestSalary: calcBestSalary(workers),
               workers: workers
            }
         } else {
            obj[restaurantName].workers = concatWorkers(obj[restaurantName].workers, workers)
            obj[restaurantName].avgSalary = calcAvgSalary(obj[restaurantName].workers);
            obj[restaurantName].bestSalary = calcBestSalary(obj[restaurantName].workers);
         }
      }

      let sortRestaurants = Object.entries(obj).sort((a, b) => b[1].avgSalary - a[1].avgSalary);
      let bestRestaurant = sortRestaurants[0];
      let workerAsText = "";
      bestRestaurant[1].workers.sort(sortWorkers).forEach(e => {
         let [name, salary] = e.split(" ");
         workerAsText += `Name: ${name} With Salary: ${salary} `;
         return;
      })

      restaurantNameRef.textContent = `Name: ${bestRestaurant[0]} Average Salary: ${bestRestaurant[1].avgSalary.toFixed(2)} Best Salary: ${bestRestaurant[1].bestSalary.toFixed(2)}`;
      workerListRef.textContent = workerAsText;

      function sortWorkers(workerA, workerB) {
         let [nameA, salaryA] = workerA.split(" ");
         let [nameB, salaryB] = workerB.split(" ");
         salaryA = Number(salaryA);
         salaryB = Number(salaryB);
         return salaryB - salaryA;
      }

      function concatWorkers(oldWorkers, newWorkers) {
         return oldWorkers.concat(newWorkers);
      }

      function calcBestSalary(workers) {
         let bestSalary = 0;
         workers.forEach(worker => {
            let [name, salary] = worker.split(" ");
            salary = Number(salary);
            if (salary > bestSalary) {
               bestSalary = salary;
               return;
            }
         })
         return bestSalary;
      }

      function calcAvgSalary(workers) {
         let sum = 0;
         workers.forEach(worker => {
            let [name, salary] = worker.split(" ");
            return sum += Number(salary);
         })

         return sum / workers.length;
      }


   }


}
