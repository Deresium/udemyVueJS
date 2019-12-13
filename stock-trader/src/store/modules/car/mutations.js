import Car from "../../../models/Car";

export const addCar = (state, name) => {
    const price = Math.floor(Math.random() * 950) + 50;
    const car = new Car(name, price);
    state.cars.push(car);
};