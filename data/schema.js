/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions,
} from 'graphql-relay';

import {
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
  getAilment,
  getColor,
  getDamageClass,
  getEffect,
  getEvolutionType,
  getGender,
  getGrowthRate,
  getMoveCategory,
  getMove,
  getMoveLearningMethod,
  getMoveTarget,
  getPokemonHabitat,
  getPokemon,
  getPokemonShape,
  getStat,
  getType,
  getAllPokemons,
} from './db/';

/**
 * We get the node interface and field from the Relay library.
 *
 * The first method defines the way we resolve an ID to its object.
 * The second defines the way we resolve an object to its GraphQL type.
 */
const {nodeInterface, nodeField} = nodeDefinitions(
  (globalId) => {
    var {type, id} = fromGlobalId(globalId);
    if (type === 'Ailment') {
      return getAilment(id);
    } else if (type === 'Color') {
      return getColor(id);
    } else if (type === 'DamageClass') {
      return getDamageClass(id);
    } else if (type === 'Effect') {
      return getEffect(id);
    } else if (type === 'EvolutionsType') {
      return getEvolutionType(id);
    } else if (type === 'Gender') {
      return getGender(id);
    } else if (type === 'GrowthRate') {
      return getGrowthRate(id);
    } else if (type === 'MoveCategory') {
      return getMoveCategory(id);
    } else if (type === 'Move') {
      return getMove(id);
    } else if (type === 'MoveLearningMethod') {
      return getMoveLearningMethod(id);
    } else if (type === 'MoveTarget') {
      return getMoveTarget(id);
    } else if (type === 'PokemonHabitat') {
      return getPokemonHabitat(id);
    } else if (type === 'Pokemon') {
      return getPokemon(id);
    } else if (type === 'PokemonShape') {
      return getPokemonShape(id);
    } else if (type === 'Stat') {
      return getStat(id);
    } else if (type === 'Type') {
      return getType(id);
    } else {
      return null;
    }
  },
  (obj) => {
    if (obj instanceof Ailment) {
      return ailmentType;
    } else if (obj instanceof Color) {
      return colorType;
    } else if (obj instanceof DamageClass) {
      return damageClassType;
    } else if (obj instanceof Effect) {
      return effectType;
    } else if (obj instanceof EvolutionType) {
      return evolutionType;
    } else if (obj instanceof Gender) {
      return genderType;
    } else if (obj instanceof GrowthRate) {
      return growthRateType;
    } else if (obj instanceof MoveCategory) {
      return moveCategoryType;
    } else if (obj instanceof Move) {
      return moveType;
    } else if (obj instanceof MoveLearningMethod) {
      return moveLearningMethodType;
    } else if (obj instanceof MoveTarget) {
      return moveTargetType;
    } else if (obj instanceof PokemonHabitat) {
      return pokemonHabitatType;
    } else if (obj instanceof Pokemon) {
      return pokemonType;
    } else if (obj instanceof PokemonShape) {
      return pokemonShapeType;
    } else if (obj instanceof Stat) {
      return statType;
    } else if (obj instanceof Type) {
      return typeType;
    } else {
      return null;
    }
  }
);

/**
 * Define your own types here
 */

const ailmentType = new GraphQLObjectType({
  name: 'Ailment',
  description: 'A status modification a move can cause',
  fields: () => ({
    id: globalIdField('Ailment'),
    identifier: {
      type: GraphQLString,
      description: 'The ailment identifier',
    },
    description: {
      type: GraphQLString,
      description: 'The ailment description',
    },
  }),
  interfaces: [nodeInterface],
});

const colorType = new GraphQLObjectType({
  name: 'Color',
  description: '',
  fields: () => ({
    id: globalIdField('Color'),
    identifier: {
      type: GraphQLString,
      description: 'The color identifier',
    },
    name: {
      type: GraphQLString,
      description: 'The color name',
    },
  }),
  interfaces: [nodeInterface],
});

const damageClassType = new GraphQLObjectType({
  name: 'DamageClass',
  description: '',
  fields: () => ({
    id: globalIdField('DamageClass'),
    identifier: {
      type: GraphQLString,
      description: 'The damage class identifier',
    },
    description: {
      type: GraphQLString,
      description: 'The damage class description',
    },
  }),
  interfaces: [nodeInterface],
});

const effectType = new GraphQLObjectType({
  name: 'Effect',
  description: '',
  fields: () => ({
    id: globalIdField('Effect'),
    shortEffect: {
      type: GraphQLString,
      description: 'A short description of the effect',
    },
    effect: {
      type: GraphQLString,
      description: 'Complete description of the effect',
    },
  }),
  interfaces: [nodeInterface],
});

const evolutionType = new GraphQLObjectType({
  name: 'EvolutionType',
  description: '',
  fields: () => ({
    id: globalIdField('EvolutionType'),
    identifier: {
      type: GraphQLString,
      description: '',
    },
    description: {
      type: GraphQLString,
      description: '',
    },
  }),
  interfaces: [nodeInterface],
});

const genderType = new GraphQLObjectType({
  name: 'Gender',
  description: '',
  fields: () => ({
    id: globalIdField('Gender'),
    identifier: {
      type: GraphQLString,
      description: '',
    },
  }),
  interfaces: [nodeInterface],
});

const growthRateType = new GraphQLObjectType({
  name: 'GrowthRate',
  description: '',
  fields: () => ({
    id: globalIdField('GrowthRate'),
    identifier: {
      type: GraphQLString,
      description: '',
    },
    name: {
      type: GraphQLString,
      description: '',
    },
    formula: {
      type: GraphQLString,
      description: '',
    },
    // TODO xp: {
    //   type: GraphQLList,
    //   description: '',
    // },
  }),
  interfaces: [nodeInterface],
});

const moveCategoryType = new GraphQLObjectType({
  name: 'MoveCategory',
  description: '',
  fields: () => ({
    id: globalIdField('MoveCategory'),
    identifier: {
      type: GraphQLString,
      description: '',
    },
    description: {
      type: GraphQLString,
      description: '',
    },
  }),
  interfaces: [nodeInterface],
});

const moveLearningMethodType = new GraphQLObjectType({
  name: 'MoveLearningMethod',
  description: '',
  fields: () => ({
    id: globalIdField('MoveLearningMethod'),
    identifier: {
      type: GraphQLString,
      description: '',
    },
    description: {
      type: GraphQLString,
      description: '',
    },
  }),
  interfaces: [nodeInterface],
});

const moveTargetType = new GraphQLObjectType({
  name: 'MoveTarget',
  description: '',
  fields: () => ({
    id: globalIdField('MoveTarget'),
    identifier: {
      type: GraphQLString,
      description: '',
    },
    description: {
      type: GraphQLString,
      description: '',
    },
    name: {
      type: GraphQLString,
      description: '',
    },
  }),
  interfaces: [nodeInterface],
});

const pokemonHabitatType = new GraphQLObjectType({
  name: 'PokemonHabitat',
  description: '',
  fields: () => ({
    id: globalIdField('PokemonHabitat'),
    identifier: {
      type: GraphQLString,
      description: '',
    },
    name: {
      type: GraphQLString,
      description: '',
    },
  }),
  interfaces: [nodeInterface],
});

const pokemonShapeType = new GraphQLObjectType({
  name: 'PokemonShape',
  description: '',
  fields: () => ({
    id: globalIdField('PokemonShape'),
    identifier: {
      type: GraphQLString,
      description: '',
    },
    name: {
      type: GraphQLString,
      description: '',
    },
    awesomeName: {
      type: GraphQLString,
      description: '',
    },
  }),
  interfaces: [nodeInterface],
});

const statType = new GraphQLObjectType({
  name: 'Stat',
  description: '',
  fields: () => ({
    id: globalIdField('Stat'),
    identifier: {
      type: GraphQLString,
      description: '',
    },
    name: {
      type: GraphQLString,
      description: '',
    },
    damageClassId: {
      type: damageClassType,
      description: '',
      resolve: stat => getDamageClass(stat.damageClassId),
    },
    isBattleOnly: {
      type: GraphQLBoolean,
      description: '',
    },
  }),
  interfaces: [nodeInterface],
});

const typeType = new GraphQLObjectType({
  name: 'Type',
  description: '',
  fields: () => ({
    id: globalIdField('Type'),
    identifier: {
      type: GraphQLString,
      description: '',
    },
    name: {
      type: GraphQLString,
      description: '',
    },
    damageClass: {
      type: damageClassType,
      description: '',
      resolve: type => getDamageClass(type.damageClassId),
    },
    // TODO efficacity: {
    //   type: GraphQL,
    //   description: '',
    // },
  }),
  interfaces: [nodeInterface],
});

const statChangeType = new GraphQLObjectType({
  name: 'statChangeType',
  description: '',
  fields: () => ({
    stat: {
      type: statType,
      description: '',
      resolve: statChange => getStat(statChange.statId),
    },
    change: {
      type: GraphQLInt,
      description: '',
    },
  }),
  interfaces: [nodeInterface],
});

const moveType = new GraphQLObjectType({
  name: 'Move',
  description: '',
  fields: () => ({
    id: globalIdField('Move'),
    identifier: {
      type: GraphQLString,
      description: '',
    },
    name: {
      type: GraphQLString,
      description: '',
    },
    description: {
      type: GraphQLString,
      description: '',
    },
    type: {
      type: typeType,
      description: '',
      resolve: move => getType(move.typeId),
    },
    power: {
      type: GraphQLInt,
      description: '',
    },
    pp: {
      type: GraphQLInt,
      description: '',
    },
    accuracy: {
      type: GraphQLInt,
      description: '',
    },
    priority: {
      type: GraphQLInt,
      description: '',
    },
    effectChance: {
      type: GraphQLInt,
      description: '',
    },
    target: {
      type: moveTargetType,
      description: '',
      resolve: move => getMoveTarget(move.targetId),
    },
    damageClass: {
      type: damageClassType,
      description: '',
      resolve: move => getDamageClass(move.damageClassId),
    },
    effect: {
      type: effectType,
      description: '',
      resolve: move => getEffect(move.effectId),
    },
    // TODO statChanges: {
    //   type: new GraphQLList(statChangeType),
    //   description: '',
    // },
    statChance: {
      type: GraphQLInt,
      description: '',
    },
    ailment: {
      type: ailmentType,
      description: '',
      resolve: move => getAilment(move.ailmentId),
    },
    ailmentChance: {
      type: GraphQLInt,
      description: '',
    },
    minHits: {
      type: GraphQLInt,
      description: '',
    },
    maxHits: {
      type: GraphQLInt,
      description: '',
    },
    minTurns: {
      type: GraphQLInt,
      description: '',
    },
    maxTurns: {
      type: GraphQLInt,
      description: '',
    },
    drain: {
      type: GraphQLInt,
      description: '',
    },
    healing: {
      type: GraphQLInt,
      description: '',
    },
    flinchChance: {
      type: GraphQLInt,
      description: '',
    },
  }),
  interfaces: [nodeInterface],
});

const pokemonType = new GraphQLObjectType({
  name: 'Pokemon',
  description: '',
  fields: () => ({
    id: globalIdField('Pokemon'),
    identifier: {
      type: GraphQLString,
      description: '',
    },
    name: {
      type: GraphQLString,
      description: '',
    },
    genus: {
      type: GraphQLString,
      description: '',
    },
    evolvesFromPokemon: {
      type: pokemonType,
      description: '',
      resolve: pokemon => getPokemon(pokemon.evolvesFromPokemonId),
    },
    evolvesToPokemon: {
      type: pokemonType,
      description: '',
      resolve: pokemon => getPokemon(pokemon.evolvesToPokemonId),
    },
    evolvesChainId: {
      type: GraphQLInt,
      description: '',
    },
    color: {
      type: colorType,
      description: '',
      resolve: pokemon => getColor(pokemon.colorId),
    },
    shape: {
      type: pokemonShapeType,
      description: '',
      resolve: pokemon => getPokemonShape(pokemon.shapeId),
    },
    habitat: {
      type: pokemonHabitatType,
      description: '',
      resolve: pokemon => getPokemonHabitat(pokemon.habitatId),
    },
    genderRate: {
      type: GraphQLInt,
      description: '',
    },
    captureRate: {
      type: GraphQLInt,
      description: '',
    },
    baseHappiness: {
      type: GraphQLInt,
      description: '',
    },
    isBaby: {
      type: GraphQLBoolean,
      description: '',
    },
    hatchCounter: {
      type: GraphQLInt,
      description: '',
    },
    hasGenderDifferences: {
      type: GraphQLBoolean,
      description: '',
    },
    formsSwitchable: {
      type: GraphQLBoolean,
      description: '',
    },
    growthRate: {
      type: growthRateType,
      description: '',
      resolve: pokemon => getGrowthRate(pokemon.growthRateId),
    },
    height: {
      type: GraphQLInt,
      description: '',
    },
    width: {
      type: GraphQLInt,
      description: '',
    },
    baseExperience: {
      type: GraphQLInt,
      description: '',
    },
    // TODO stats
    // TODO moves
    types: {
      type: typeConnection,
      description: '',
      args: connectionArgs,
      resolve: (pokemon, args) => connectionFromArray(
        pokemon.types.map(({typeId}) => getType(typeId)),
        args
      ),
    }
  }),
  interfaces: [nodeInterface],
});

/**
 * Define your own connection types here
 */
var {connectionType: typeConnection} =
  connectionDefinitions({name: 'Type', nodeType: typeType});
var {connectionType: pokemonConnection} =
  connectionDefinitions({name: 'Pokemon', nodeType: pokemonType});

/**
 * This is the type that will be the root of our query,
 * and the entry point into our schema.
 */
var queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    node: nodeField,
    // Add your own root fields here
    pokemons: {
      type: pokemonConnection,
      description: '',
      args: connectionArgs,
      resolve: (root, args) => connectionFromArray(
        getAllPokemons(),
        args
      ),
    },
    pokemon: {
      type: pokemonType,
      args: {
        id: {
          type: GraphQLString,
        },
      },
      resolve: (root, {id}) => getPokemon(id),
    },
  }),
});

/**
 * This is the type that will be the root of our mutations,
 * and the entry point into performing writes in our schema.
 */
var mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    // Add your own mutations here
  })
});

/**
 * Finally, we construct our schema (whose starting query type is the query
 * type we defined above) and export it.
 */
export var Schema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType
});
