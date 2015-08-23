import {Ailment, ailments} from './ailments';
import {Color, colors} from './colors';
import {DamageClass, damageClasses} from './damageClasses';
import {Effect, effects} from './effects';
import {EvolutionType, evolutionTypes} from './evolutionTypes';
import {Gender, genders} from './genders';
import {GrowthRate, growthRates} from './growthRate';
import {MoveCategory, moveCategories} from './moveCategories';
import {Move, moves} from './moves';
import {MoveLearningMethod, moveLearningMethods} from './moveLearningMethods';
import {MoveTarget, moveTargets} from './moveTargets';
import {PokemonHabitat, pokemonHabitats} from './pokemonHabitats';
import {Pokemon, pokemons} from './pokemons';
import {PokemonShape, pokemonShapes} from './pokemonShapes';
import {Stat, stats} from './stats';
import {Type, types} from './types';

export default {
  Ailment,
  Color,
  DamageClass,
  Effect,
  EvolutionType,
  Gender,
  GrowthRate,
  MoveCategory,
  Move,
  MoveLearningMethod,
  MoveTarget,
  PokemonHabitat,
  Pokemon,
  PokemonShape,
  Stat,
  Type,
  getAilment: (id) => ailments.find(_ => _.id === id),
  getColor: (id) => colors.find(_ => _.id === id),
  getDamageClass: (id) => damageClasses.find(_ => _.id === id),
  getEffect: (id) => effects.find(_ => _.id === id),
  getEvolutionType: (id) => evolutionTypes.find(_ => _.id === id),
  getGender: (id) => genders.find(_ => _.id === id),
  getGrowthRate: (id) => growthRates.find(_ => _.id === id),
  getMoveCategory: (id) => moveCategories.find(_ => _.id === id),
  getMove: (id) => moves.find(_ => _.id === id),
  getMoveLearningMethod: (id) => moveLearningMethods.find(_ => _.id === id),
  getMoveTarget: (id) => moveTargets.find(_ => _.id === id),
  getPokemonHabitat: (id) => pokemonHabitats.find(_ => _.id === id),
  getPokemon: (id) => pokemons.find(_ => _.id === id),
  getPokemonShape: (id) => pokemonShapes.find(_ => _.id === id),
  getStat: (id) => stats.find(_ => _.id === id),
  getType: (id) => types.find(_ => _.id === id),
};
