import { emit } from 'shuutils'
import { shuffleArray } from '~/utils'
import { Player } from '~/models'

class GameService {
  players: Player[] = []
  player: Player = new Player()

  init() {
    const player1 = new Player({ id: 0, name: 'Guillaume' })
    const player2 = new Player({ id: 1, name: 'Alexandre' })
    const player3 = new Player({ id: 2, name: 'Queton' })
    const player4 = new Player({ id: 3, name: 'Stepane' })
    const player5 = new Player({ id: 4, name: 'Paul' })
    const player6 = new Player({ id: 5, name: 'Maxime' })
    const player7 = new Player({ id: 6, name: 'Cedric' })
    const player8 = new Player({ id: 7, name: 'XXXX' })
    this.player = player1

    this.players.push(player1, player2, player3, player4, player5, player6, player7, player8)
    shuffleArray(this.players)
  }

  drawPlayers() {
    shuffleArray(this.players)
  }

  send() {
    emit('players')
  }
}
export const gameService = new GameService()
