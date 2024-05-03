import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';
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

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findOneByid(id);
    if (updateCarDto.id && updateCarDto.id !== id)
      throw new BadRequestException('Car id is not valid inside the body');

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = { ...carDB, ...updateCarDto, id };
        return carDB;
      }
      return car;
    });
    return carDB;
  }

  delete(id: string) {
    /*This endpoint is to delete a car*/
    const car = this.findOneByid(id);
    this.cars = this.cars.filter((car) => car.id !== id);
  }
}
