// Investment Accounts Assignment Start Code

// HTML Variables
let containerEl = document.getElementById("container");
let outputEl = document.getElementById("output");
let goBtnEl = document.getElementById("go");
let menuEl = document.getElementById("menu");

// Global Variable
let accounts = [];
let maxAmount = 5000; // account values should be b/t 0 and max

// Display Data
drawArray(true);

function drawArray(FirstSetup) {
  let outputStr = "";
  let divHeight;
  if (FirstSetup === true) {
    for (let i = 0; i <= 200; i++) {
      var randomNum = Math.floor(RandomInt(0, 5000))
      divHeight = (randomNum / maxAmount) * 600;
      outputStr += `<div style="height:${divHeight}px"></div>`;
      accounts[i] = randomNum
    }
  } else {
    for (let i = 0; i < accounts.length; i++) {
      divHeight = (accounts[i] / maxAmount) * 600; // Scale accounts to fit in array visualizer container
      outputStr += `<div style="height:${divHeight}px"></div>`;
    }
  }

  containerEl.innerHTML = outputStr;
}

// Main Menu & Go Button
goBtnEl.addEventListener("click", mainMenu);

function mainMenu() {
  // Get value of menu select element
  let selection = menuEl.value;

  // Take action based on menu selection
  if (selection === "count-range") {
    countRange();
  } else if (selection === "donor") {
    generousDonor();
  } else if (selection === "hacker") {
    hackerAttack();
  } else if (selection === "stats") {
    investmentStats();
  } else if (selection === "add") {
    addAccount();
  } else if (selection === "remove-low") {
    removeLow();
  } else if (selection === "robin-hood") {
    robinHood();
  }

  // Redraw array to show any changes
  drawArray(false);
}

// ******************************************************
// MENU SELECTION FUNCTIONS
// ******************************************************
function countRange() {
  // Output the number of accounts with amounts between $2,000 and $4,000, inclusive
  var count = 0
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i] >= 2000 && accounts[i] <= 4000) {
      count++
    }
  }
  outputEl.innerHTML = "Accounts between $2000 and $4000: " + count;
}

function generousDonor() {
  // A generous donor has decided to give $500 to every investment
  // account that has less than $2000. 
  // Modify the investment account array to apply this donation.
  // Output the total amount of money that was donated.
  var TotalDonated = 0
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i] < 2000) {
      TotalDonated += 500
      accounts[i] += 500
    }
  }
  outputEl.innerHTML = "Generous donator donated a total of $" + TotalDonated;
}

function hackerAttack() {
  // A hacker steals 5% from every account.
  // Modify the investment account array to apply this theft.
  // Output the total amount that was stolen.
  var TotalStolen = 0
  for (let i = 0; i < accounts.length; i++) {
    var FivePercent = Math.floor((5 / 100) * accounts[i])
    TotalStolen += FivePercent
    accounts[i] -= FivePercent
  }
  outputEl.innerHTML = "Hacker Attack | A Hacker stole a total of $" + TotalStolen;
}

function investmentStats() {
  // Output the minimum account amount, the maximum account amount
  // and the average account amount.
  var MinimumAmount
  var MaximumAmount
  var Total = 0
  for (let i = 0; i < accounts.length; i++) {
    if (MinimumAmount == null) {
      MinimumAmount = accounts[i]
    }
    if (MaximumAmount == null) {
      MaximumAmount = accounts[i]
    }

    if (accounts[i] < MinimumAmount) {
      MinimumAmount = accounts[i]
    }
    if (accounts[i] > MaximumAmount) {
      MaximumAmount = accounts[i]
    }
    Total += accounts[i]
  }
  var Average =  Math.floor(Total / accounts.length)
  outputEl.innerHTML = "Investment Stats | Minimum: $" + MinimumAmount + " The Maximum: $" + MaximumAmount + " The Average: $" + Average;
}

function addAccount() {
  // Prompt for a new account amount and add this to the invesment account
  // array. Output a confirmation that a new account was added with an
  // opening amount of _______.
  var randomNum = Math.floor(RandomInt(0, 5000))
  accounts.push(randomNum)
  outputEl.innerHTML = "Added account with amount: $" + randomNum;
}

function removeLow() {
  // Remove all accounts that are below $500.
  // Output how many accounts were removed.
  var AccountsRemoved = 0
  for (let i = accounts.length - 1; i >= 0; i--) {
    if (accounts[i] < 500) {
      accounts.splice(i, 1)
      AccountsRemoved++
    }
  }
  outputEl.innerHTML = "Removed " + AccountsRemoved + " Low Account(s)";
}

function robinHood() {
  // Steal from the rich and give to the poor.
  // Take $400 from every account that has over $4000.
  // Then evenly distribute the total amount taken between all the
  // accounts that have less than $1000.
  // Output how many accounts received money and 
  // how much each account received.
  var TotalAmountTaken = 0
  var AccountsUnder1000 = 0
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i] > 4000) {
      TotalAmountTaken += 400
      accounts[i] -= 400
    } else if (accounts[i] < 1000) {
      AccountsUnder1000++
    }
  }

  console.log(TotalAmountTaken, AccountsUnder1000)
  var AverageAmountToGive = TotalAmountTaken / AccountsUnder1000

  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i] < 1000) {
      accounts[i] += AverageAmountToGive
    }
  }

  outputEl.innerHTML = "Robin Hood | " + AccountsUnder1000 + " accounts recieved money | each account recieved: $" + AverageAmountToGive;
}