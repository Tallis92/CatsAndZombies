
let mapSize = 5
let mapIndex = 0

let catraces = [{ name: "Abyssinian" },
{ name: "Burmese" },
{ name: "Devon Rex" },
{ name: "Bombay" },
{ name: "Persian" }]

let locations = [{ id: 1, locationY: 0, locationX: 0, title: "Gravelroad", description: "You wander on a long and lonesome road", source: "images/gravelroad.jpg" },
{ id: 2, locationY: 0, locationX: 1, title: "Office", description: "You come by a nice looking office building.", source: "images/office.jpg" },
{ id: 3, locationY: 0, locationX: 2, title: "Pond", description: "You find a quaint little pond, how nice!", source: "images/pond.jpg" },
{ id: 4, locationY: 0, locationX: 3, title: "A lovely house", description: "You find a lovely house by a quite as lovely pond.", source: "images/pondhouse.jpg" },
{ id: 5, locationY: 0, locationX: 4, title: "The Club", description: "You enter the club, now let's get this party starting!", source: "images/theclub.jpg" },
{ id: 6, locationY: 1, locationX: 0, title: "Treehouse", description: "A treehouse all the way over here? Cool!", source: "images/treehouse.webp" },
{ id: 7, locationY: 1, locationX: 1, title: "Airport", description: "You walk into the airport, there doesn't seem to be any flights scheduled...", source: "images/airport.webp" },
{ id: 8, locationY: 1, locationX: 2, title: "Busstation", description: "As you enter the busstation it appears to be empty, let's hope it is!", source: "images/busstation.jpg" },
{ id: 9, locationY: 1, locationX: 3, title: "Very small pier", description: "You walk onto the very small pier. It would have been nice to relax here for a bit", source: "images/docks.jpg" },
{ id: 10, locationY: 1, locationX: 4, title: "The beach", description: "Your steps feels heavy from walking in the sand of this beach!", source: "images/beach.jpg" },
{ id: 11, locationY: 2, locationX: 0, title: "A road", description: "You wander on a long and lonesome asphalt road! You wonder where it leads...", source: "images/road.jpg" },
{ id: 12, locationY: 2, locationX: 1, title: "School", description: "You walk past a school building. The sound of a schoolbell fills the air!", source: "images/school.jpg" },
{ id: 13, locationY: 2, locationX: 2, title: "The Junkyard", description: "You come by a junkyard. You wish that there'd be a working vehicle here...", source: "images/junkyard.jpg" },
{ id: 14, locationY: 2, locationX: 3, title: "The Hospital", description: "You enter the hospital in search for cats and medical supplies...", source: "images/hospital.jpg" },
{ id: 15, locationY: 2, locationX: 4, title: "The Beach of Rocks", description: "You walk over the sharp rocks on this beach, happy over the fact that you have shoes!", source: "images/rockybeach.jpg" },
{ id: 16, locationY: 3, locationX: 0, title: "Recycling Facility", description: "You enter the Recycling Facility. One mans junk is another mans treasure!", source: "images/recyclingfacility.jpg" },
{ id: 17, locationY: 3, locationX: 1, title: "Alleyway", description: "You enter the alleway reluctantly in search of cats.", source: "images/alleyway.jpg" },
{ id: 18, locationY: 3, locationX: 2, title: "The Boatwreck", description: "You find a boatwreck washed up on the beach. Kinda cool! ", source: "images/boatwreck.jpg" },
{ id: 19, locationY: 3, locationX: 3, title: "The Cinema", description: "You walk into the cinema theatre. There doesn't seem to be any movies running...", source: "images/cinema.jpg" },
{ id: 20, locationY: 3, locationX: 4, title: "Gasstation", description: "You find a gasstation in the middle of nowhere. The gas seems to be free! Too bad you don't have a vehicle...", source: "images/gasstation.jpg" },
{ id: 21, locationY: 4, locationX: 0, title: "Police Station", description: "You come across a police station in your travels. Too bad there's no law now, only cats and zombies!", source: "images/policestation.jpg" },
{ id: 22, locationY: 4, locationX: 1, title: "Apartments", description: "You see an apartment building! You decide not to enter...", source: "images/apartments.jpg" },
{ id: 23, locationY: 4, locationX: 2, title: "Unstable Bridge", description: "You find a very unstable bridge! You gonna cross it? Spooky!", source: "images/bridge.jpg" },
{ id: 24, locationY: 4, locationX: 3, title: "The Arcades", description: "You enter the arcades, a relic of a distant past...", source: "images/arcades.jpg" },
{ id: 25, locationY: 4, locationX: 4, title: "Diner", description: "You walk into the diner. Sure wish they could serve you a burger and a shake...", source: "images/diner.jpg" }]

let baseballbat = { locationX:4, locationY:4, isBroken:false}

let savedCats = 0

let randomX = 0
let randomY = 0

let zombie = { locationX: null, locationY: null, isMoving: false }
let isZombieMoving = null
let zombie1spawned = false

let zombie2 = { locationX: null, locationY: null, isMoving: false }
let isZombie2Moving = null
let zombie2spawned = false

let zombie3 = { locationX: null, locationY: null, isMoving: false }
let isZombie3Moving = null
let zombie3spawned = false

let zombie4 = { locationX: null, locationY: null, isMoving: false }
let isZombie4Moving = null
let zombie4spawned = false

let catSpawned = true
let readyToSpawnZombie = true;

let player = { locationX: 1, locationY: 1, hasBat:false}
let cat = { locationX: 0, locationY: 0 }


let options = {
    method: 'GET',
    headers: { 'X-Api-Key': 'rBJo716hTLZpkVnmg/ZHvg==AlJWKG8sSokm1CV0' }
}

DrawMap()

function MovePlayer(moveX, moveY) {
    player.locationX = (player.locationX + moveX)
    player.locationY = (player.locationY + moveY)
    DrawMap()
}

function GetRandomCat() {
    randomCat = Math.floor(Math.random() * (catraces.length - 0) + 0)
    catBreed = catraces[randomCat].name
    //console.log(randomCat + ": " + catBreed)

    const url = "https://api.api-ninjas.com/v1/cats?name=" + catBreed
    fetch(url, options)
        .then(function (response) { return response.json() })
        .then(function (data) {
            catfacts = data

            document.getElementById("catrace").innerHTML = catBreed
            document.getElementById("catorigin").innerHTML = data[0].origin

            let apiimage = data[0].image_link
            if(apiimage == null){
                document.getElementById("apiimage").src = "images/invisible.png"
            }
            else{
                document.getElementById("apiimage").src = apiimage

            }    

        })
        .catch(function (error) {
            console.log("Något gick fel med hämtning av api ", error)
        })
}

function WillZombieMove() {
    zombieMoves = false

    willMove = Math.floor(Math.random() * (10 - 1) + 1)

    if (willMove >= 6 && willMove <= 10) {
        zombieMoves = true
    }
    else {
        zombieMoves = false
    }
    return zombieMoves

}

function ZombieMovement() {


    isZombieMoving = WillZombieMove()
    if (isZombieMoving == true && zombie1spawned == true) {
        if (player.locationX > zombie.locationX) {
            zombie.locationX += 1
        }
        else if (player.locationX < zombie.locationX) {
            zombie.locationX -= 1
        }
        else if (player.locationY < zombie.locationY) {
            zombie.locationY -= 1
        }
        else if (player.locationY > zombie.locationY) {
            zombie.locationY += 1
        }

    }

    //Second Zombie
    isZombie2Moving = WillZombieMove()
    if (isZombie2Moving == true && zombie2spawned == true) {
        if (player.locationX > zombie2.locationX) {
            zombie2.locationX += 1
        }
        else if (player.locationX < zombie2.locationX) {
            zombie2.locationX -= 1
        }
        else if (player.locationY < zombie2.locationY) {
            zombie2.locationY -= 1
        }
        else if (player.locationY > zombie2.locationY) {
            zombie2.locationY += 1
        }
    }

    //Third Zombie
    isZombie3Moving = WillZombieMove()
    if (isZombie3Moving == true && zombie3spawned == true) {
        if (player.locationX > zombie3.locationX) {
            zombie3.locationX += 1
        }
        else if (player.locationX < zombie3.locationX) {
            zombie3.locationX -= 1
        }
        else if (player.locationY < zombie3.locationY) {
            zombie3.locationY -= 1
        }
        else if (player.locationY > zombie3.locationY) {
            zombie3.locationY += 1
        }
    }

    //Fourth Zombie
    isZombie4Moving = WillZombieMove()
    if (isZombie4Moving == true && zombie4spawned == true) {
        if (player.locationX > zombie4.locationX) {
            zombie4.locationX += 1
        }
        else if (player.locationX < zombie4.locationX) {
            zombie4.locationX -= 1
        }
        else if (player.locationY < zombie4.locationY) {
            zombie4.locationY -= 1
        }
        else if (player.locationY > zombie4.locationY) {
            zombie4.locationY += 1
        }
    }


}

function SpawnRandom() {
    randomX = Math.floor(Math.random() * (mapSize - 0))
    randomY = Math.floor(Math.random() * (mapSize - 0))
}

function DrawMap() {



    let playerLocation = locations.find(map => map.locationX == player.locationX && map.locationY == player.locationY)
    if (playerLocation != null) {
        //console.log(playerLocation.title)

        let image = playerLocation.source
        document.getElementById("scene").src = image

        let title = playerLocation.title
        document.getElementById("locationname").innerHTML = title

        let description = playerLocation.description
        document.getElementById("scenedescription").innerHTML = description

        if (playerLocation.locationX == cat.locationX && playerLocation.locationY == cat.locationY) {
            document.getElementById("cat").src = "images/cat.png"
        }
        else {
            document.getElementById("cat").src = "images/invisible.png"
        }
    }


    let table = "<table border='1'>"

    for (let y = 0; y < mapSize; y++) {
        table += "<tr>"

        for (let x = 0; x < mapSize; x++) {

            if (player.locationX == x && player.locationY == y) {
                table += "<td>" + "P" + "</td>"

                if (player.locationX == cat.locationX && player.locationY == cat.locationY) {
                    savedCats++;
                    document.getElementById("savedcats").innerHTML = savedCats + "x";
                    document.getElementById("scenedescription").innerHTML += "<br>And you saved a cat!"
                    GetRandomCat()
                    catSpawned = false

                    while (catSpawned == false) {
                        SpawnRandom()
                        if (randomX == cat.locationX && randomY == cat.locationY) 
                        {
                            SpawnRandom()
                        } 
                        else 
                        {
                            cat.locationX = randomX
                            cat.locationY = randomY
                            catSpawned = true
                        }
                    }
                }

                if (player.locationX == baseballbat.locationX && player.locationY == baseballbat.locationY){
                    document.getElementById("scenedescription").innerHTML += "<br>You've found a baseball bat! Use it to defend yourself!"
                    player.hasBat = true
                    baseballbat.locationX = null
                    baseballbat.locationY = null
                    document.getElementById("equippedbat").innerHTML = "Yes"
                }

                if(player.locationX == zombie.locationX && player.locationY == zombie.locationY && player.hasBat == true){
                    document.getElementById("scenedescription").innerHTML += "<br>You fend off the zombie with your baseball bat! It broke..."
                    player.hasBat = false
                    baseballbat.isBroken = true
                    SpawnRandom()
                    baseballbat.locationX = randomX
                    baseballbat.locationY = randomY
                    document.getElementById("equippedbat").innerHTML = "No"
                }
                else if(player.locationX == zombie.locationX && player.locationY == zombie.locationY && player.hasBat == false) {
                    document.getElementById("scenedescription").innerHTML += "<br>Oh no! The Zombie got to you"
                    alert("You got caught! Game over! You saved " + savedCats + " cats!")
                }

                if(player.locationX == zombie2.locationX && player.locationY == zombie2.locationY && player.hasBat == true){
                    document.getElementById("scenedescription").innerHTML += "<br>You fend off the zombie with your baseball bat! It broke..."
                    player.hasBat = false
                    baseballbat.isBroken = true
                    SpawnRandom()
                    baseballbat.locationX = randomX
                    baseballbat.locationY = randomY
                    document.getElementById("equippedbat").innerHTML = "No"
                }
                else if (player.locationX == zombie2.locationX && player.locationY == zombie2.locationY) {
                    document.getElementById("scenedescription").innerHTML += "<br>Oh no! The Zombie got to you"
                    alert("You got caught! Game over! You saved " + savedCats + " cats!")
                }

                if(player.locationX == zombie3.locationX && player.locationY == zombie3.locationY && player.hasBat == true){
                    document.getElementById("scenedescription").innerHTML += "<br>You fend off the zombie with your baseball bat! It broke..."
                    player.hasBat = false
                    baseballbat.isBroken = true
                    SpawnRandom()
                    baseballbat.locationX = randomX
                    baseballbat.locationY = randomY
                    document.getElementById("equippedbat").innerHTML = "No"
                }
                else if (player.locationX == zombie3.locationX && player.locationY == zombie3.locationY) {
                    document.getElementById("scenedescription").innerHTML += "<br>Oh no! The Zombie got to you"
                    alert("You got caught! Game over! You saved " + savedCats + " cats!")
                }
                if(player.locationX == zombie4.locationX && player.locationY == zombie4.locationY && player.hasBat == true){
                    document.getElementById("scenedescription").innerHTML += "<br>You fend off the zombie with your baseball bat! It broke..."
                    player.hasBat = false
                    baseballbat.isBroken = true
                    SpawnRandom()
                    baseballbat.locationX = randomX
                    baseballbat.locationY = randomY
                }
                else if (player.locationX == zombie4.locationX && player.locationY == zombie4.locationY) {
                    document.getElementById("scenedescription").innerHTML += "<br>Oh no! The Zombie got to you"
                    alert("You got caught! Game over! You saved " + savedCats + " cats!")
                }

            }
            else if (cat.locationX == x && cat.locationY == y) {
                if (cat.locationX == zombie.locationX && cat.locationY == zombie.locationY || cat.locationX == zombie2.locationX && cat.locationY == zombie2.locationY
                    || cat.locationX == zombie3.locationX && cat.locationY == zombie3.locationY || cat.locationX == zombie4.locationX && cat.locationY == zombie4.locationY) {
                    table += "<td>" + "CZ" + "</td>"
                }
                else if(cat.locationX == baseballbat.locationX && cat.locationY == baseballbat.locationY){
                    table += "<td>" + "CB" + "</td>"
                }
                else {
                    table += "<td>" + "C" + "</td>"
                }

            }
            else if (zombie.locationX == x && zombie.locationY == y || zombie2.locationX == x && zombie2.locationY == y
                || zombie3.locationX == x && zombie3.locationY == y || zombie4.locationX == x && zombie4.locationY == y) {

                    table += "<td>" + "Z" + "</td>"
                
            }
            else if (baseballbat.locationX == x && baseballbat.locationY == y){

                if (baseballbat.locationX == zombie.locationX && baseballbat.locationY == zombie.locationY || 
                    baseballbat.locationX == zombie2.locationX && baseballbat.locationY == zombie2.locationY || 
                    baseballbat.locationX == zombie3.locationX && baseballbat.locationY == zombie3.locationY ||
                    baseballbat.locationX == zombie4.locationX && baseballbat.locationY == zombie4.locationY) {
                    table += "<td>" + "BZ" + "</td>"
                }
                else{
                    table += "<td>" + "B" + "</td>"
                }
                
            }
            else {
                table += "<td>" + "-" + "</td>"
            }
        }

        table += "</tr>"
    }
    table += "</table>"

    if (savedCats > 1) {

        if (zombie1spawned == false && savedCats == 3) {
            SpawnRandom()
            if (randomX != player.locationX && randomY != player.locationY) {
                zombie.locationX = randomX
                zombie.locationY = randomY
                console.log("A Zombie spawned in at " + zombie.locationX + "," + zombie.locationY)
                document.getElementById("scenedescription").innerHTML += "<br>A Zombie has arrived!"
                zombie1spawned = true
            }
        }
        else if (zombie2spawned == false && savedCats == 6) {
            SpawnRandom()
            if (randomX != player.locationX && randomY != player.locationY) {
                zombie2.locationX = randomX
                zombie2.locationY = randomY
                console.log("A Zombie2 spawned in at " + zombie2.locationX + "," + zombie2.locationY)
                document.getElementById("scenedescription").innerHTML += "<br>A Zombie2 has arrived!"
                zombie2spawned = true
            }

        }
        else if (zombie3spawned == false && savedCats == 9) {
            SpawnRandom()
            if (randomX != player.locationX && randomY != player.locationY) {
                zombie3.locationX = randomX
                zombie3.locationY = randomY
                console.log("A Zombie3 spawned in at " + zombie3.locationX + "," + zombie3.locationY)
                document.getElementById("scenedescription").innerHTML += "<br>A Zombie3 has arrived!"
                zombie3spawned = true
            }
        }
        if (zombie4spawned == false && savedCats == 12) {
            SpawnRandom()
            if (randomX != player.locationX && randomY != player.locationY) {
                zombie4.locationX = randomX
                zombie4.locationY = randomY
                console.log("A Zombie spawned in at " + zombie4.locationX + "," + zombie4.locationY)
                document.getElementById("scenedescription").innerHTML += "<br>A Zombie4 has arrived!"
                zombie4spawned = true
            }
        }
    }
    if (savedCats >= 3) {
        ZombieMovement()
    }
    console.log("zombie4: " + zombie4.locationX + ", " + zombie4.locationY)
    MovementButtons()

    document.getElementById("map").innerHTML = table;
}

function MovementButtons() {

    let button
    if (player.locationX == mapSize - 1) {
        button = document.getElementById("eastbutton")
        button.value = ""
        button.disabled = true
    }
    else {
        button = document.getElementById("eastbutton")
        button.value = "East"
        button.disabled = false
    }

    if (player.locationX == 0) {
        button = document.getElementById("westbutton")
        button.value = ""
        button.disabled = true
    }
    else {
        button = document.getElementById("westbutton")
        button.value = "West"
        button.disabled = false
    }

    if (player.locationY == 0) {
        button = document.getElementById("northbutton")
        button.value = ""
        button.disabled = true
    }
    else {
        button = document.getElementById("northbutton")
        button.value = "North"
        button.disabled = false
    }
    if (player.locationY == mapSize - 1) {
        button = document.getElementById("southbutton")
        button.value = ""
        button.disabled = true
    }
    else {
        button = document.getElementById("southbutton")
        button.value = "South"
        button.disabled = false
    }

}