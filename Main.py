def deposit():
    while True:
        amount = input("Please enter money! £")
        if amount.isdigit():
            amount = int(amount)
            if amount > 0:
                break
            else:
                print("Please enter more money.")
        else: 
            print("please enter a number.")
    return amount  


deposit()