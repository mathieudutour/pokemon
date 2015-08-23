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
      return moveTarget;
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
  }),
  interfaces: [nodeInterface],
});

/**
 * Define your own connection types here
 */
var {connectionType: widgetConnection} =
  connectionDefinitions({name: 'Widget', nodeType: widgetType});

/**
 * This is the type that will be the root of our query,
 * and the entry point into our schema.
 */
var queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    node: nodeField,
    // Add your own root fields here
    viewer: {
      type: userType,
      resolve: () => getViewer(),
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
