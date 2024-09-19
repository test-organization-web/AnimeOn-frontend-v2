/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * Anime ON API
 * OpenAPI spec version: 0.0.66 DEV
 */
import type { ChildEpisode } from './childEpisode';

export interface ResponseAnimeArch {
  episodes: ChildEpisode[];
  /**
   * @minimum -32768
   * @maximum 32767
   */
  order: number;
  /**
   * @minLength 1
   * @maxLength 255
   */
  title: string;
}