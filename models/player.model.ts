export class Player {
  id = -1
  name = ''
  points = 0
  drank = 0
  toDrink = 0

  constructor(player: Partial<Player> = {}) {
    Object.assign(this, player)
  }
}
