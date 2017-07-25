import Ember from 'ember';

var goods = [{
  id:1,
  name:"Nyanya",
  price:20,
  description:"fresh from the farm",
  quantity:"2 crates",
  seller:"dennis",
  img:"https://wallpaperscraft.com/image/tomato_cut_slices_table_tree_78288_1920x1080.jpg"
}, {
  id:2,
  name:"Nyanya",
  price:20,
  description:"fresh from the farm",
  quantity:"2 crates",
  seller:"dennis",
  img:"https://wallpaperscraft.com/image/tomato_cut_slices_table_tree_78288_1920x1080.jpg"
},{
  id:3,
  name:"Nyanya",
  price:20,
  description:"fresh from the farm",
  quantity:"2 crates",
  seller:"dennis",
  img:"https://wallpaperscraft.com/image/tomato_cut_slices_table_tree_78288_1920x1080.jpg"
}];

export default Ember.Route.extend({
  model() {
    return goods;
  },
   
});
