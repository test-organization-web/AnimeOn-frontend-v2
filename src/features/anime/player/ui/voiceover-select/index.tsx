'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select'
import type { EpisodeVoiceover } from '@/shared/api/model'
import { usePlayerModel } from '@/features/anime/player/model'
import { useState } from 'react'

export const PlayerVoiceOverSelect = ({
  voiceovers,
}: {
  voiceovers?: EpisodeVoiceover[] | undefined
}) => {
  const { setVoiceOver } = usePlayerModel()
  const [selectedVoiceover, setSelectedVoiceover] = useState(
    voiceovers ? voiceovers[0].value : '',
  )
  return voiceovers && voiceovers.length > 0 ? (
    <Select
      defaultValue={voiceovers[0].url}
      onValueChange={(url) => {
        setVoiceOver(url)
        const selected = voiceovers.find((val) => val.url === url)
        if (selected) {
          setSelectedVoiceover(selected.value)
        }
      }}
    >
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Озвучка: ">{`Озвучка: ${selectedVoiceover}`}</SelectValue>{' '}
      </SelectTrigger>
      <SelectContent>
        {voiceovers.map((val) => (
          <SelectItem key={val.url} value={val.url || ''}>
            {val.value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  ) : null
}
