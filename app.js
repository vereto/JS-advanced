function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    let avgSalary = 0;
    let totalSalary = 0;
    let currAvgSalary = 0;
    let bestName = "";
    const output = {};

    let input = JSON.parse(document.querySelector("#inputs textarea").value);

    for (const line of input) {
      const [restorant, data] = line.split(" - ");
      let workersInfo = data.split(", ");

      for (const worker of workersInfo) {
        const [name, salary] = worker.split(" ");

        if (!output.hasOwnProperty(restorant)) {
          output[restorant] = {};
        }
        output[restorant][name] = Number(salary);
      }
    }
    let entries = Object.entries(output);

    for (const entry of entries) {
      let key = entry[0];
      let values = Object.values(entry[1]);

      for (const salary of values) {
        totalSalary += salary;
      }
      avgSalary = (totalSalary / values.length);

      if (avgSalary > currAvgSalary) {
        currAvgSalary = avgSalary;
        bestName = key;
        totalSalary = 0;
      }
      let result = Object.entries(output[bestName]).sort((a, b) => b[1] - a[1]);

      let print = "";
      result.forEach((w) => (print += `Name: ${w[0]} With Salary: ${w[1]} `));

      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestName} Average Salary: ${currAvgSalary.toFixed(2)} Best Salary: ${result[0][1].toFixed(2)}`
      document.querySelector('#workers p').textContent = print;
    }
  }
} 
