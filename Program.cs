using System;

namespace Banking
{
    class Account
    {
        private string name;
        private int cash = 0;
        public Account(string name, int startingAmount) // allows to create an account with name and default ammount
        {
            this.name = name;
            this.cash = startingAmount; // default amount is 500
        }
        public void Deposit(int Amount)
        {
            int previousBalance = this.cash;
            this.cash += Amount;
            print("Deposited $" + Amount.ToString());
            print("Previous Balance: $" + previousBalance.ToString());
            print("New Balance: $" + this.cash.ToString());
        }

        public void Withdraw(int Amount)
        {
            if ((this.cash - Amount) <= 0)
            {
                print("Cannot Go Below 0");
                return; // prevent from running code underneath
            }
            int previousBalance = this.cash;
            this.cash -= Amount;
            print("Withdrew $" + Amount.ToString());
            print("Previous Balance: $" + previousBalance.ToString());
            print("New Balance: $" + this.cash.ToString());
        }

        public int Cash
        {
            get { return cash; }
        }

        static void print(string text)
        {
            Console.WriteLine(text);
        }

        public void printbankerName()
        {
            print(this.name);
;       }
 
    }


    class Startup
    {

        static void print(string text)
        {
            Console.WriteLine(text);
        }
        static string getInput()
        {
            var Input = Console.ReadLine().ToString();
            return Input;
        }

        static void printActions(int currentBalance)
        {
            print("-------------");
            print("Please Choose An Action");
            print("1 = Deposit");
            print("2 = Withdraw");
            print("3 = Remove Account");
            print("-------------");
            print("Current Balance: $" + currentBalance.ToString());
            print("Please Enter a Number");
        }

        static void Main(string[] args)
        {
            print("Welcome to the ATM");
            print("Please Enter Your Account Name:");

            string name = getInput();

            print("Enter Your Starting Balance (Default is $500)");
            string input = getInput();
            int balance;

            bool success = int.TryParse(input, out balance);
            if (!success)
            {
                while (true)
                {
                    print("Please Enter a Number");
                    print("Enter Your Starting Balance");
                    var input2 = Console.ReadLine();
                    bool worked = int.TryParse(input2, out balance);
                    if (worked)
                    {
                        break;
                    }
                }
            }

            Account Banker = new Account(name, balance);
            bool isEnabled = true;

            while (isEnabled)
            {
                printActions(Banker.Cash); // print all of the action
                var actionNum = Console.ReadLine();
                int actionType;
                bool typeChanged = int.TryParse(actionNum, out actionType);
                while (!typeChanged)
                {
                    print("You entered a string, Please Enter a Number");
                    var input2 = Console.ReadLine();
                    bool worked = int.TryParse(input2, out balance);
                    if (worked)
                    {
                        break;
                    }
                }

                switch (actionType)
                {
                    case 1:
                        print("How much money do you want to deposit?");

                        var deposit = Console.ReadLine();
                        int depositAmount;
                        bool changed1 = int.TryParse(deposit, out depositAmount);
                        while (!changed1)
                        {
                            print("You entered a string, Please Enter a Number");
                            var input2 = Console.ReadLine();
                            bool worked = int.TryParse(input2, out balance);
                            if (worked)
                            {
                                break;
                            }
                        }
                        Banker.Deposit(depositAmount);
                        break;
                    case 2:
                        print("How much money do you want to withdraw?");

                        var withdraw = Console.ReadLine();
                        int withdrawAmount;
                        bool changed2 = int.TryParse(withdraw, out withdrawAmount);
                        while (!changed2)
                        {
                            print("You entered a string, Please Enter a Number");
                            var input2 = Console.ReadLine();
                            bool worked = int.TryParse(input2, out balance);
                            if (worked)
                            {
                                break;
                            }
                        }
                        Banker.Withdraw(withdrawAmount);
                        break;
                     case 3:
                        Banker = null; // removes class, lets it get garbage collected
                        isEnabled = false;
                        print("Account Removed, Please Restart to Create another Account");
                        break;
                }
            }
            
        }
    }
}
