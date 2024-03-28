import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brand: 'Ford',
      model: 'Fusion',
    },
    {
      id: 3,
      brand: 'Chevy',
      model: 'Cruze',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneByid(id: number) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }

    return car;
  }
}
