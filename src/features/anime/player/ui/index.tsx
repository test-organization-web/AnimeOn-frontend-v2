'use client'

import '@/shared/components/ui/player.css'
import { PlayerPagination } from '@/features/anime/player/ui/pagination'
import { EpisodeVoiceover, ResponseAnimeEpisode } from '@/shared/api/model'
import { usePlayerModel } from '@/features/anime/player/model'
import { useEffect } from 'react'
import { ReleasePlayer } from '@/features/anime/player/ui/player'
import { PlayerVoiceOverSelect } from '@/features/anime/player/ui/voiceover-select'
import { AspectRatio } from '@/shared/components/ui/aspect-ratio'
import { useSession } from '@/entities/session/model/model'
import { userAddViewedEpisode } from '@/shared/api/user/user'

export const Player = ({
  release,
  currentOrder,
}: {
  release?: ResponseAnimeEpisode
  currentOrder: number
}) => {
  const { isAuthenticated, token } = useSession()
  const { voiceOver, setVoiceOver } = usePlayerModel()
  const postViewed = () => {
    userAddViewedEpisode(
      {
        episode: release.id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    ).then(() => {
      console.log('')
    })
  }
  useEffect(() => {
    isAuthenticated && release.id && postViewed()
    if (
      release?.voiceover &&
      release.voiceover.length > 0 &&
      release.voiceover[0].url
    ) {
      setVoiceOver(release.voiceover[0].url as string)
    }
  }, [release, setVoiceOver, isAuthenticated])

  return (
    <div className="flex flex-col gap-3">
      {release?.voiceover && release.voiceover.length > 0 ? (
        <div>
          <PlayerVoiceOverSelect
            voiceovers={release.voiceover as EpisodeVoiceover[]}
          />
          <ReleasePlayer
            timemarkers={{
              end_ending: release.end_ending ?? 0,
              start_opening: release.start_opening ?? 0,
              end_opening: release.end_opening ?? 0,
              start_ending: release.start_ending ?? 0,
            }}
            src={voiceOver ?? ''}
          />
        </div>
      ) : (
        <AspectRatio ratio={16 / 9} className="h">
          <div className="flex items-center py-4 justify-center h-full">
            <span className="text-sm text-muted-foreground">
              Серія недоступна для перегляду
            </span>
          </div>
        </AspectRatio>
      )}
      <PlayerPagination currentOrder={currentOrder} />
    </div>
  )
}
