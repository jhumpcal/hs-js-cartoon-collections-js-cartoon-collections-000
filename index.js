function dwarfRollCall(dwarves) 

{
  var numDwarves = [];
  
  for (var i = 0; i < dwarves.length; i++)
  {
    numDwarves.push(`${i+1}. ${dwarves[i]} `);
  }
    return numDwarves.join("") 
  
}

function summonCaptainPlanet(planeteerCalls)
{
  var array = [];
  
  for (var i = 0; i < planeteerCalls.length; i++)
  {
    var upperCase = planeteerCalls[i].toUpperCase(" ");
    
    array.push(upperCase + "!");
  }
  
  return array 
}

function longPlaneteerCalls(words) 
{
  for (var i = 0; i < words.length; i++)
  {
    if(words[i].length > 4)
    {
      return true
    }
    else
    {
      return false
    }
  }
}

function findTheCheese (foods) 
{
  var cheddarCheese = ["banana", "cheddar", "sock"]
  var noCheese = ["banana", "tomato", "sock"]
  var cheeses = ['cheddar', 'gouda', 'camember']
  
  for (var i=0; i < foods.length; i++)
    if(foods[i] === 'cheddar' || foods[i] === 
    'gouda' || foods[i] === 'camember')
    {
      return foods[i]
    }
    
    if(foods !== 'cheddar' || foods !== 'gouda' || foods !== 'camembert')
      {
        return "no cheese!"
      }
}
