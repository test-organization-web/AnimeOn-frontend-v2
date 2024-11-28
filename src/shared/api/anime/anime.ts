/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * Anime ON API
 * OpenAPI spec version: ##VERSION## DEV
 */
import type {
  AnimeReact,
  GetAnimeCommentsParams,
  GetAnimeListParams,
  ResponseAnime,
  ResponseAnimeArch,
  ResponseAnimeEpisode,
  ResponseAnimeRandom,
  ResponseAnimeReact,
  ResponseFiltersAnime,
  ResponsePaginatedAnimeList,
  ResponsePaginatedCommentAnimeList,
  ResponsePosters,
  SearchAnimeParams
} from '.././model'
import { customInstance } from '.././custom-instance';

/**
 * Ellipsis
 * @summary Ellipsis
 */
export type getAnimeFiltersResponse = {
  data: ResponseFiltersAnime;
  status: number;
}

export const getGetAnimeFiltersUrl = () => {


  return `/anime/filters/`
}

export const getAnimeFilters = async ( options?: RequestInit): Promise<getAnimeFiltersResponse> => {
  
  return customInstance<Promise<getAnimeFiltersResponse>>(getGetAnimeFiltersUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * Ellipsis
 * @summary Ellipsis
 */
export type getAnimeListResponse = {
  data: ResponsePaginatedAnimeList;
  status: number;
}

export const getGetAnimeListUrl = (params?: GetAnimeListParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  return normalizedParams.size ? `/anime/list/?${normalizedParams.toString()}` : `/anime/list/`
}

export const getAnimeList = async (params?: GetAnimeListParams, options?: RequestInit): Promise<getAnimeListResponse> => {
  
  return customInstance<Promise<getAnimeListResponse>>(getGetAnimeListUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * Ellipsis
 * @summary Ellipsis
 */
export type getAnimePostersResponse = {
  data: ResponsePosters;
  status: number;
}

export const getGetAnimePostersUrl = () => {


  return `/anime/posters/`
}

export const getAnimePosters = async ( options?: RequestInit): Promise<getAnimePostersResponse> => {
  
  return customInstance<Promise<getAnimePostersResponse>>(getGetAnimePostersUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * Ellipsis
 * @summary Ellipsis
 */
export type getRandomAnimeResponse = {
  data: ResponseAnimeRandom;
  status: number;
}

export const getGetRandomAnimeUrl = () => {


  return `/anime/random/`
}

export const getRandomAnime = async ( options?: RequestInit): Promise<getRandomAnimeResponse> => {
  
  return customInstance<Promise<getRandomAnimeResponse>>(getGetRandomAnimeUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * Ellipsis
 * @summary Ellipsis
 */
export type searchAnimeResponse = {
  data: ResponsePaginatedAnimeList;
  status: number;
}

export const getSearchAnimeUrl = (params?: SearchAnimeParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  return normalizedParams.size ? `/anime/search/?${normalizedParams.toString()}` : `/anime/search/`
}

export const searchAnime = async (params?: SearchAnimeParams, options?: RequestInit): Promise<searchAnimeResponse> => {
  
  return customInstance<Promise<searchAnimeResponse>>(getSearchAnimeUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * Ellipsis
 * @summary Ellipsis
 */
export type getAnimeEpisodeResponse = {
  data: ResponseAnimeEpisode;
  status: number;
}

export const getGetAnimeEpisodeUrl = (animePk: string,
    animeSlug: string,
    order: number,) => {


  return `/anime/${animePk}/${animeSlug}/episode/${order}/`
}

export const getAnimeEpisode = async (animePk: string,
    animeSlug: string,
    order: number, options?: RequestInit): Promise<getAnimeEpisodeResponse> => {
  
  return customInstance<Promise<getAnimeEpisodeResponse>>(getGetAnimeEpisodeUrl(animePk,animeSlug,order),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * Ellipsis
 * @summary Ellipsis
 */
export type getAnimeResponse = {
  data: ResponseAnime;
  status: number;
}

export const getGetAnimeUrl = (id: number,
    slug: string,) => {


  return `/anime/${id}/${slug}/`
}

export const getAnime = async (id: number,
    slug: string, options?: RequestInit): Promise<getAnimeResponse> => {
  
  return customInstance<Promise<getAnimeResponse>>(getGetAnimeUrl(id,slug),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * Ellipsis
 * @summary Ellipsis
 */
export type getAnimeArcheResponse = {
  data: ResponseAnimeArch[];
  status: number;
}

export const getGetAnimeArcheUrl = (id: string,
    slug: string,) => {


  return `/anime/${id}/${slug}/arch/`
}

export const getAnimeArche = async (id: string,
    slug: string, options?: RequestInit): Promise<getAnimeArcheResponse> => {
  
  return customInstance<Promise<getAnimeArcheResponse>>(getGetAnimeArcheUrl(id,slug),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * Ellipsis
 * @summary Ellipsis
 */
export type getAnimeCommentsResponse = {
  data: ResponsePaginatedCommentAnimeList;
  status: number;
}

export const getGetAnimeCommentsUrl = (id: string,
    slug: string,
    params?: GetAnimeCommentsParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  return normalizedParams.size ? `/anime/${id}/${slug}/comments/?${normalizedParams.toString()}` : `/anime/${id}/${slug}/comments/`
}

export const getAnimeComments = async (id: string,
    slug: string,
    params?: GetAnimeCommentsParams, options?: RequestInit): Promise<getAnimeCommentsResponse> => {
  
  return customInstance<Promise<getAnimeCommentsResponse>>(getGetAnimeCommentsUrl(id,slug,params),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * Ellipsis
 * @summary Ellipsis
 */
export type reactionAnimeResponse = {
  data: ResponseAnimeReact;
  status: number;
}

export const getReactionAnimeUrl = (id: number,
    slug: string,) => {


  return `/anime/${id}/${slug}/reaction/`
}

export const reactionAnime = async (id: number,
    slug: string,
    animeReact: AnimeReact, options?: RequestInit): Promise<reactionAnimeResponse> => {
  
  return customInstance<Promise<reactionAnimeResponse>>(getReactionAnimeUrl(id,slug),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      animeReact,)
  }
);}


