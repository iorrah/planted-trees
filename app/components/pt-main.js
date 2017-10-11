import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'main',
  filters: {
    name: null,
    liked: null
  },
  filteredTrees: Ember.computed('filters.name', 'trees.@each', function() {
    let name = (this.get('filters.name') || '').toLowerCase();
    let trees = this.get('trees');

    if (name) {
      trees = trees.filter(function(e) {
        return (e.name.toLowerCase().indexOf(name) > -1) ||
               (e.species_name.toLowerCase().indexOf(name) > -1);
      });
    }

    return trees;
  }),
  // trees: [
  //   {
  //     "id": 1,
  //     "name": "Baobab",
  //     "species_name": "Adansonia",
  //     "image": "https://upload.wikimedia.org/wikipedia/commons/3/36/Baobab_Adansonia_digitata.jpg",
  //     "likes": 0,
  //     "liked": false,
  //     "is_hidden": true
  //   },
  //   {
  //     "id": 2,
  //     "name": "Red Mangrove",
  //     "species_name": "Rhizophora mangle",
  //     "image": "https://upload.wikimedia.org/wikipedia/en/1/16/Red_mangrove-everglades_natl_park.jpg",
  //     "likes": 0,
  //     "liked": false,
  //     "is_hidden": true
  //   },
  //   {
  //     "id": 3,
  //     "name": "Common Hornbeam",
  //     "species_name": "Carpinus betulus",
  //     "image": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Carpinus_betulus_-_Hunsr%C3%BCck_001.jpg",
  //     "likes": 0,
  //     "liked": false,
  //     "is_hidden": true
  //   },
  //   {
  //     "id": 4,
  //     "name": "Turkey Oak",
  //     "species_name": "Quercus cerris",
  //     "image": "https://upload.wikimedia.org/wikipedia/commons/3/34/Quercus_cerris.JPG",
  //     "likes": 0,
  //     "liked": false,
  //     "is_hidden": true
  //   },
  //   {
  //     "id": 5,
  //     "name": "Japanese red pine",
  //     "species_name": "Pinus densiflora",
  //     "image": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Pinus_syluestriformis_%28Takenouchi%29T.Wang_ex_Cheng.JPG",
  //     "likes": 0,
  //     "liked": false,
  //     "is_hidden": true
  //   },
  //   {
  //     "id": 6,
  //     "name": "Baobab",
  //     "species_name": "Adansonia",
  //     "image": "https://upload.wikimedia.org/wikipedia/commons/3/36/Baobab_Adansonia_digitata.jpg",
  //     "likes": 0,
  //     "liked": false,
  //     "is_hidden": true
  //   },
  //   {
  //     "id": 7,
  //     "name": "Red Mangrove",
  //     "species_name": "Rhizophora mangle",
  //     "image": "https://upload.wikimedia.org/wikipedia/en/1/16/Red_mangrove-everglades_natl_park.jpg",
  //     "likes": 0,
  //     "liked": false,
  //     "is_hidden": true
  //   },
  //   {
  //     "id": 8,
  //     "name": "Common Hornbeam",
  //     "species_name": "Carpinus betulus",
  //     "image": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Carpinus_betulus_-_Hunsr%C3%BCck_001.jpg",
  //     "likes": 0,
  //     "liked": false,
  //     "is_hidden": true
  //   },
  //   {
  //     "id": 9,
  //     "name": "Turkey Oak",
  //     "species_name": "Quercus cerris",
  //     "image": "https://upload.wikimedia.org/wikipedia/commons/3/34/Quercus_cerris.JPG",
  //     "likes": 0,
  //     "liked": false,
  //     "is_hidden": true
  //   },
  //   {
  //     "id": 10,
  //     "name": "Japanese red pine",
  //     "species_name": "Pinus densiflora",
  //     "image": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Pinus_syluestriformis_%28Takenouchi%29T.Wang_ex_Cheng.JPG",
  //     "likes": 0,
  //     "liked": false,
  //     "is_hidden": true
  //   },
  //   {
  //     "id": 11,
  //     "name": "Baobab",
  //     "species_name": "Adansonia",
  //     "image": "https://upload.wikimedia.org/wikipedia/commons/3/36/Baobab_Adansonia_digitata.jpg",
  //     "likes": 0,
  //     "liked": false,
  //     "is_hidden": true
  //   },
  //   {
  //     "id": 12,
  //     "name": "Red Mangrove",
  //     "species_name": "Rhizophora mangle",
  //     "image": "https://upload.wikimedia.org/wikipedia/en/1/16/Red_mangrove-everglades_natl_park.jpg",
  //     "likes": 0,
  //     "liked": false,
  //     "is_hidden": true
  //   },
  //   {
  //     "id": 13,
  //     "name": "Common Hornbeam",
  //     "species_name": "Carpinus betulus",
  //     "image": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Carpinus_betulus_-_Hunsr%C3%BCck_001.jpg",
  //     "likes": 0,
  //     "liked": false,
  //     "is_hidden": true
  //   },
  //   {
  //     "id": 14,
  //     "name": "Turkey Oak",
  //     "species_name": "Quercus cerris",
  //     "image": "https://upload.wikimedia.org/wikipedia/commons/3/34/Quercus_cerris.JPG",
  //     "likes": 0,
  //     "liked": false,
  //     "is_hidden": true
  //   },
  //   {
  //     "id": 15,
  //     "name": "Japanese red pine",
  //     "species_name": "Pinus densiflora",
  //     "image": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Pinus_syluestriformis_%28Takenouchi%29T.Wang_ex_Cheng.JPG",
  //     "likes": 0,
  //     "liked": false,
  //     "is_hidden": true
  //   }
  // ]
});
