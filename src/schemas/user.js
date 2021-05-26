import firebase from "firebase";
 
class City {
    constructor (name, state, country ) {
        this.name = name;
        this.state = state;
        this.country = country;
    }
    toString() {
        return this.name + ', ' + this.state + ', ' + this.country;
    }
}

// Firestore data converter
var cityConverter = {
    toFirestore: function(city) {
        return {
            name: city.name,
            state: city.state,
            country: city.country
            };
    },
    fromFirestore: function(snapshot, options){
        const data = snapshot.data(options);
        return new City(data.name, data.state, data.country);
    }
};
