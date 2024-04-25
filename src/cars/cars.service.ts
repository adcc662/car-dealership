import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Ford',
      model: 'Fusion',
    },
    {
      id: uuid(),
      brand: 'Chevy',
      model: 'Cruze',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneByid(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }

    return car;
  }

  /*Deestructuration method to replace 
createCarDto.brand, etc.
create({ model, brand }*/
  create(createCarDto: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      // brand,
      // model,
      ...createCarDto,
    };

    this.cars.push(car);

    return car;
  }
}
