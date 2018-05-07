class League {
  constructor(country, ceo) {
    this.country = country
    this.ceo = ceo
    this.clubs = []
  }

  addClub(clubs) {
    this.clubs.push(clubs)
  }

  showClubAndStadium() {
    for (let i = 0; i < this.clubs.length; i++) {
      console.log(`Club : ${this.clubs[i].name} , Stadium : ${this.clubs[i].stadium}`);
    }
  }
}

class Club {
  constructor(name, stadium, location, manager, budgetTransfer) {
    this.name = name
    this.stadium = stadium
    this.location = location
    this.manager = manager
    this.budgetTransfer = budgetTransfer
    this.players = []
  }

  addNewPlayer(player) {
    this.players.push(player)
  }

  buyNewPlayer(objPlayer, objClub) {
    if (objPlayer.currentClub !== objClub.name) {
      console.log(`There is no Player with name ${objPlayer.playerName} in ${objClub.name} F.C.`);
    } else {
      if (this.budgetTransfer < objPlayer.transferFee) {
        let money = objPlayer.transferFee - this.budgetTransfer
        console.log(`Budget not sufficient to buy ${objPlayer.playerName}. Your club need extra money for ${money} to buy this player`);
      } else {
        objPlayer.currentClub = this.name
        this.players.push(objPlayer)
        let restMoney = this.budgetTransfer - objPlayer.transferFee
        console.log(`You buy ${objPlayer.playerName} with transfer fee ${objPlayer.transferFee}, remaining budget: ${restMoney}`);
        for (let i = 0; i < objClub.players.length; i++) {
          if (objClub.players[i].playerName === objPlayer.playerName) {
            delete objClub.players[i]
          }
        }
      }
    }

  }

}


class Player {
  constructor(playerName, height, position, nationality, transferFee, currentClub) {
    this.playerName = playerName
    this.height = height
    this.position = position
    this.nationality = nationality
    this.transferFee = transferFee
    this.currentClub = currentClub
  }
}


let liverpool = new Club('Liverpool', 'Anfield', 'England', 'Jurgen Klopp', 5000000)
let chelsea = new Club('Chelsea', 'Stamford Bridge', 'England', 'Antonio Conte', 10000000)
let asRoma = new Club('AS Roma', 'Italy', 'Roma', 'Arif', 15000000)

let mohSalah = new Player('M.Salah', '1.90m', 'striker', 'Egypt', 2500000, liverpool.name)
let christianBautista = new Player('Christian Bautista', '2.0m', 'striker', 'Argentina', 1500000, chelsea.name)
let afgan = new Player('Afgan', '3.0m', 'Goal Keeper', 'Bojong', 5000, liverpool.name)

let englandLeague = new League('England', 'Richard Scudamore')



chelsea.addNewPlayer(christianBautista)
liverpool.addNewPlayer(mohSalah)
liverpool.addNewPlayer(afgan)



englandLeague.addClub(liverpool)
englandLeague.addClub(chelsea)
englandLeague.addClub(asRoma)

chelsea.buyNewPlayer(mohSalah, liverpool)


console.log(chelsea)
