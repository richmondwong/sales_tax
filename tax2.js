var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  var aggregator = {}

  for (i in salesData){
    var name = salesData[i]["name"];
    var province = salesData[i]["province"];
    var totalRevenue = calculateTotalSalesAmount(salesData[i]["sales"]);
    var taxRate = taxRates[province];
    
    if (aggregator[name]){
      console.log("Duplicate Entry Detected")
        aggregator[name]["totalSales"] += totalRevenue;
        aggregator[name]["totalTaxes"] += calculateTotalTaxAmount(totalRevenue, taxRate)
    } else {
      aggregator[name] = {
        "totalSales": totalRevenue,
        "totalTaxes": calculateTotalTaxAmount(totalRevenue, taxRate)
      }
    }
  }
  return aggregator
}


function calculateTotalSalesAmount(sales){
  salesAmount = 0
  for (i in sales){
    salesAmount += sales[i]
  }
  return salesAmount
}

function calculateTotalTaxAmount(totalRevenue, taxRate){
  taxAmount = totalRevenue * taxRate
  return taxAmount
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results)
console.log(calculateTotalTaxAmount(800, 0.05))

