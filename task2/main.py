from models import Car, Motorcycle

def main():
    car1 = Car("Toyota", "Camry", 2020, 4)
    car2 = Car("BMW", "X5", 2022, 5)
    moto1 = Motorcycle("Yamaha", "R1", 2021, False)

    vehicles = [car1, car2, moto1]

    for v in vehicles:
        print(v)  
        print(v.start()) 
        print(v.stop())

        if isinstance(v, Car):
            print(v.honk())
        elif isinstance(v, Motorcycle):
            print(v.wheelie())

        print("------")


if __name__ == "__main__":
    main()