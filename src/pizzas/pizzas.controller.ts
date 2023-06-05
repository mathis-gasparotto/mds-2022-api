import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common'
import { PizzasService } from './pizzas.service'
import { CreatePizzaDto } from './dto/create-pizza.dto'
import { UpdatePizzaDto } from './dto/update-pizza.dto'
import { ApiOperation } from '@nestjs/swagger'
import { ApiCreatedResponse } from '@nestjs/swagger'

@Controller('pizzas')
export class PizzasController {
  constructor(private readonly pizzasService: PizzasService) {}

  @ApiOperation({ description: 'Create a pizza' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreatePizzaDto
  })
  @Post()
  create(@Body() createPizzaDto: CreatePizzaDto) {
    return this.pizzasService.create(createPizzaDto)
  }

  @Get()
  findAll() {
    return this.pizzasService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pizzasService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePizzaDto: UpdatePizzaDto) {
    return this.pizzasService.update(+id, updatePizzaDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pizzasService.remove(+id)
  }
}
