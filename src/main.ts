const main = function(): void {
  context.subscribe('interval.day', function() {
    cleanVomit()
  })
};

const cleanVomit = function(): void {
  if (!isRaining()) {
    return
  }

  var vomit = map.getAllEntities('litter').filter(isVomit)
  vomit.forEach(function(entity) {
    if (Math.random() > 0.9) {
      // console.log('Removing vomit')
      entity.remove()
    }
  })
}

const isRaining = function(): boolean {
  var weather = climate.current.weather
  return weather === 'rain' || weather === 'heavyRain'
}

const isVomit = function(litter: Litter): boolean {
  return litter.litterType === 'vomit' || litter.litterType === 'vomit_alt'
}

export default main;
