import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { PokemonService } from '../service/pokemon.service';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly service: PokemonService) {}

  //   @UseInterceptors(CacheInterceptor) // Automatically cache the response for this endpoint
  //   @CacheTTL(30)
  @Get('/:id')
  async getPokemon(@Param('id') id: number): Promise<string> {
    return await this.service.getPokemon(+id);
  }
}
