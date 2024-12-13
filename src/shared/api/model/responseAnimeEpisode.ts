/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * Anime ON API
 * OpenAPI spec version: ##VERSION## DEV
 */
import type { EpisodeVoiceover } from './episodeVoiceover';

export interface ResponseAnimeEpisode {
  /**
   * in seconds
   * @minimum 0
   * @maximum 32767
   * @nullable
   */
  end_ending?: number | null;
  /**
   * in seconds
   * @minimum 0
   * @maximum 32767
   * @nullable
   */
  end_opening?: number | null;
  readonly id?: number;
  /** @nullable */
  readonly preview_image?: string | null;
  /**
   * in seconds
   * @minimum 0
   * @maximum 32767
   * @nullable
   */
  start_ending?: number | null;
  /**
   * in seconds
   * @minimum 0
   * @maximum 32767
   * @nullable
   */
  start_opening?: number | null;
  readonly subtitles?: readonly EpisodeVoiceover[];
  /**
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  readonly voiceover?: readonly EpisodeVoiceover[];
}
