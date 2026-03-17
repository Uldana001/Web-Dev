class Vehicle:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    def start(self):
        return f"{self.brand} {self.model} is starting."

    def stop(self):
        return f"{self.brand} {self.model} is stopping."

    def __str__(self):
        return f"{self.brand} {self.model} ({self.year})"


class Car(Vehicle):
    def __init__(self, brand, model, year, doors):
        super().__init__(brand, model, year)
        self.doors = doors

    def start(self):  # override
        return f"Car {self.brand} starts with a key."

    def honk(self):
        return "Beep beep!"


class Motorcycle(Vehicle):
    def __init__(self, brand, model, year, has_sidecar):
        super().__init__(brand, model, year)
        self.has_sidecar = has_sidecar

    def start(self):  
        return f"Motorcycle {self.brand} starts with a button."

    def wheelie(self):
        return "Doing a wheelie!"