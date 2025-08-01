/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { useCallback } from 'react';

import { useMutation, useQuery } from 'react-query';
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from 'react-query';

import type {
  CreatePetsBody,
  Error,
  ListPetsNestedArrayParams,
  ListPetsParams,
  Pet,
  PetsArray,
  PetsNestedArray,
} from './models';

import { useCustomInstance } from './use-custom-instance';
type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * @summary List all pets
 */
export const useListPetsHook = () => {
  const listPets = useCustomInstance<PetsArray>();

  return useCallback(
    (params?: ListPetsParams, signal?: AbortSignal) => {
      return listPets({ url: `/pets`, method: 'GET', params, signal });
    },
    [listPets],
  );
};

export const getListPetsQueryKey = (params?: ListPetsParams) => {
  return [`/pets`, ...(params ? [params] : [])] as const;
};

export const useListPetsQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>,
  TError = Error,
>(
  params?: ListPetsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>,
      TError,
      TData
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getListPetsQueryKey(params);

  const listPets = useListPetsHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>
  > = ({ signal }) => listPets(params, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type ListPetsQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>
>;
export type ListPetsQueryError = Error;

/**
 * @summary List all pets
 */

export function useListPets<
  TData = Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>,
  TError = Error,
>(
  params?: ListPetsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = useListPetsQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

/**
 * @summary Create a pet
 */
export const useCreatePetsHook = () => {
  const createPets = useCustomInstance<null>();

  return useCallback(
    (createPetsBody: CreatePetsBody, signal?: AbortSignal) => {
      return createPets({
        url: `/pets`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: createPetsBody,
        signal,
      });
    },
    [createPets],
  );
};

export const useCreatePetsMutationOptions = <
  TError = Error,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useCreatePetsHook>>>,
    TError,
    { data: CreatePetsBody },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useCreatePetsHook>>>,
  TError,
  { data: CreatePetsBody },
  TContext
> => {
  const mutationKey = ['createPets'];
  const { mutation: mutationOptions } = options
    ? options.mutation &&
      'mutationKey' in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } };

  const createPets = useCreatePetsHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useCreatePetsHook>>>,
    { data: CreatePetsBody }
  > = (props) => {
    const { data } = props ?? {};

    return createPets(data);
  };

  return { mutationFn, ...mutationOptions };
};

export type CreatePetsMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useCreatePetsHook>>>
>;
export type CreatePetsMutationBody = CreatePetsBody;
export type CreatePetsMutationError = Error;

/**
 * @summary Create a pet
 */
export const useCreatePets = <TError = Error, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useCreatePetsHook>>>,
    TError,
    { data: CreatePetsBody },
    TContext
  >;
}): UseMutationResult<
  Awaited<ReturnType<ReturnType<typeof useCreatePetsHook>>>,
  TError,
  { data: CreatePetsBody },
  TContext
> => {
  const mutationOptions = useCreatePetsMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * @summary List all pets as nested array
 */
export const useListPetsNestedArrayHook = () => {
  const listPetsNestedArray = useCustomInstance<PetsNestedArray>();

  return useCallback(
    (params?: ListPetsNestedArrayParams, signal?: AbortSignal) => {
      return listPetsNestedArray({
        url: `/pets-nested-array`,
        method: 'GET',
        params,
        signal,
      });
    },
    [listPetsNestedArray],
  );
};

export const getListPetsNestedArrayQueryKey = (
  params?: ListPetsNestedArrayParams,
) => {
  return [`/pets-nested-array`, ...(params ? [params] : [])] as const;
};

export const useListPetsNestedArrayQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useListPetsNestedArrayHook>>>,
  TError = Error,
>(
  params?: ListPetsNestedArrayParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useListPetsNestedArrayHook>>>,
      TError,
      TData
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getListPetsNestedArrayQueryKey(params);

  const listPetsNestedArray = useListPetsNestedArrayHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useListPetsNestedArrayHook>>>
  > = ({ signal }) => listPetsNestedArray(params, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useListPetsNestedArrayHook>>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type ListPetsNestedArrayQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useListPetsNestedArrayHook>>>
>;
export type ListPetsNestedArrayQueryError = Error;

/**
 * @summary List all pets as nested array
 */

export function useListPetsNestedArray<
  TData = Awaited<ReturnType<ReturnType<typeof useListPetsNestedArrayHook>>>,
  TError = Error,
>(
  params?: ListPetsNestedArrayParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useListPetsNestedArrayHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = useListPetsNestedArrayQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

/**
 * @summary Info for a specific pet
 */
export const useShowPetByIdHook = () => {
  const showPetById = useCustomInstance<Pet>();

  return useCallback(
    (petId: string, signal?: AbortSignal) => {
      return showPetById({ url: `/pets/${petId}`, method: 'GET', signal });
    },
    [showPetById],
  );
};

export const getShowPetByIdQueryKey = (petId?: string) => {
  return [`/pets/${petId}`] as const;
};

export const useShowPetByIdQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>,
  TError = Error,
>(
  petId: string,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>,
      TError,
      TData
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getShowPetByIdQueryKey(petId);

  const showPetById = useShowPetByIdHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>
  > = ({ signal }) => showPetById(petId, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!petId,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type ShowPetByIdQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>
>;
export type ShowPetByIdQueryError = Error;

/**
 * @summary Info for a specific pet
 */

export function useShowPetById<
  TData = Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>,
  TError = Error,
>(
  petId: string,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = useShowPetByIdQueryOptions(petId, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}
