import { Module } from '@nestjs/common';
import { PokemonController } from './controller/pokemon.controller';
import { PokemonService } from './service/pokemon.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [PokemonService],
  controllers: [PokemonController],
})
export class PokemonModule {}
