// Custom Getter an Setters in Javascript

const data = {
  locations : [],
  get location() {
    console.log(this._location)
  },
  set location(value) {
    this._location = value.trim();
    this.locations.push(this._location)
  }
}

data.location = 'Oak '
data.location = 'New York'

data.location
console.log(data)