angular.module("photoApp")
.controller("mainCtrl", function($scope, mainServ){
  $scope.ynp1 = [{
    img: "images/bison3.jpg",
    data: "A Bull Bison in Rut"
  },{
    img: "images/coyote.jpg",
    data: "Coyote posing near Undine Falls."
  },{
    img: "images/Bull Elk 1.jpg",
    data: "Bull Elk in the fall near Norris."
  },{
    img: "images/Artemesia Sunset.jpg",
    data: "Artemisia Geyser at the edge of the Old Faithful Geyser Basin."
  },{
    img: "images/Bull Running 1a.jpg",
    data: "Bull Elk during Rut chasing a car in Mammoth Hot Springs."
  },{
    img: "images/bison2.jpg",
    data: "A big Bull Bison near Roosevelt Lodge."
  },{
    img: "images/Flags.jpg",
    data: "View from Widows Walk on top of the Old Faithful Inn."
  },{
    img: "images/canyon.jpg",
    data: "The brink of the Lower Falls at the Grand Canyon of Yellowstone."
  },{
    img: "images/Tree Bear 1.jpg",
    data: "Black Bear climbing a tree on Dunraven Pass."
  }];

  $scope.head1 = [{
    img: "images/Joey Boos.jpg",
    data: "Joey Boos"
  },{
    img: "images/Emily Stokes.jpg",
    data: "Emily Stokes"
  },{
    img: "images/Paige Salter.jpg",
    data: "Paige Salter"
  },{
    img: "images/1.jpg",
    data: "Ben Cramer"
  }];

  $scope.misc1= [{
    img: "images/YT.jpg",
    data: "Taxi in Fort Collins, CO."
  },{
    img: "images/Oat Cookies.jpg",
    data: "Homemade Oatmeal Chocolate Chip Cookies."
  },{
    img: "images/Lights.jpg",
    data: "String of lights."
  },{
    img: "images/Kitty 3.2.jpg",
    data: "Farm Kitten."
  },{
    img: "images/Tipi Chimney.jpg",
    data: "Tipi near Littl Big Horn."
  },{
    img: "images/Buddha Wallpaper.jpg",
    data: "Buddha statue."
  }];

});
