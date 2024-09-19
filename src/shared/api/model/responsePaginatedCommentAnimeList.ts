/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * Anime ON API
 * OpenAPI spec version: 0.0.66 DEV
 */
import type { ResponseCommentAnime } from './responseCommentAnime';

export interface ResponsePaginatedCommentAnimeList {
  /** @nullable */
  active_page: number | null;
  /** @nullable */
  count: number | null;
  /** @minLength 1 */
  next: string;
  /** @nullable */
  num_pages: number | null;
  /** @minLength 1 */
  previous: string;
  results: ResponseCommentAnime[];
}