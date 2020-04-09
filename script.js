let data = [
  {
    GlutenFree: "Yes",
    Id: 1,
    Link: "https://cholanad.com/Indian-Fine-Dining.html",
    Restaurant: "Chola Nad",
    Vegan: "Yes",
    Vegetarian: "Yes",
  },
  {
    GlutenFree: "Yes",
    Id: 2,
    Link: "https://lotsa.com/menu/",
    Restaurant: "Lotsa",
    Vegan: "No",
    Vegetarian: "Yes",
  },
  {
    GlutenFree: "No",
    Id: 3,
    Link: "https://www.bonchonchapelhill.com/menu",
    Restaurant: "Bonchon",
    Vegan: "No",
    Vegetarian: "Yes",
  },
  {
    GlutenFree: "No",
    Id: 4,
    Link: "http://www.chimneyindiankitchen.com/",
    Restaurant: "Chimney",
    Vegan: "No",
    Vegetarian: "Yes",
  },
  {
    GlutenFree: "Yes",
    Id: 5,
    Link: "https://www.411west.com/menu",
    Restaurant: "411 West Italian Cafe",
    Vegan: "No",
    Vegetarian: "Yes",
  },
  {
    GlutenFree: "Yes",
    Id: 6,
    Link: "http://bunsofchapelhill.com/menu/",
    Restaurant: "Buns",
    Vegan: "No",
    Vegetarian: "Yes",
  },
  {
    GlutenFree: "Yes",
    Id: 7,
    Link: "https://www.yelp.com/biz_photos/ms-mong-chapel-hill?tab=menu",
    Restaurant: "Ms Mongs",
    Vegan: "Yes",
    Vegetarian: "Yes",
  },
  {
    GlutenFree: "Yes",
    Id: 8,
    Link: "https://mediterraneandeli.com/chapel-hill/menu",
    Restaurant: "Med Deli",
    Vegan: "Yes",
    Vegetarian: "Yes",
  },
  {
    GlutenFree: "No",
    Id: 9,
    Link: "http://www.laresidencedining.com/menus.php",
    Restaurant: "La Residence",
    Vegan: "No",
    Vegetarian: "Yes",
  },
  {
    GlutenFree: "No",
    Id: 10,
    Link: "http://www.hibachicompany.com/",
    Restaurant: "Hibachi",
    Vegan: "Yes",
    Vegetarian: "Yes",
  },
  {
    GlutenFree: "Yes",
    Id: 11,
    Link: "https://www.thepizzapress.com/signature-menu/",
    Restaurant: "Pizza Press",
    Vegan: "No",
    Vegetarian: "Yes",
  },
  {
    GlutenFree: "Yes",
    Id: 12,
    Link: "https://www.yelp.com/menu/lime-and-basil-chapel-hill",
    Restaurant: "Lime and Basil",
    Vegan: "No",
    Vegetarian: "Yes",
  },
  {
    GlutenFree: "Yes",
    Id: 13,
    Link: "https://www.bgood.com/our-menu",
    Restaurant: "B.Good",
    Vegan: "Yes",
    Vegetarian: "Yes",
  },
  {
    GlutenFree: "No",
    Id: 14,
    Link:
      "http://bandidoscafe.com/wp-content/uploads/2011/05/Menu-Multi-Page-1.pdf",
    Restaurant: "Bandidos",
    Vegan: "Yes",
    Vegetarian: "Yes",
  },
  {
    GlutenFree: "No",
    Id: 15,
    Link: "https://menupages.com/cosmic-cantina/128-e-franklin-st-chapel-hill",
    Restaurant: "Cosmic Cantina",
    Vegan: "No",
    Vegetarian: "Yes",
  },
  {
    GlutenFree: "Yes",
    Id: 16,
    Link: "https://www.byebyeglutenbakery.com/menu",
    Restaurant: "Bye Bye Gluten Bakery",
    Vegan: "No",
    Vegetarian: "Yes",
  },
  {
    GlutenFree: "Yes",
    Id: 17,
    Link: "https://www.penogrill.com/menu/",
    Restaurant: "Peno",
    Vegan: "Yes",
    Vegetarian: "Yes",
  },
  {
    GlutenFree: "No",
    Id: 18,
    Link: "http://www.grkyeero.com/",
    Restaurant: "Greek Yeero",
    Vegan: "Yes",
    Vegetarian: "Yes",
  },
  {
    GlutenFree: "Yes",
    Id: 19,
    Link: "https://www.mintunc.com/index.php/menu/index?view=3",
    Restaurant: "Mint",
    Vegan: "Yes",
    Vegetarian: "Yes",
  },
  {
    GlutenFree: "Yes",
    Id: 20,
    Link: "https://thegourmetkingdom.com/images/TOGO_Menu.pdf",
    Restaurant: "Gourmet Kingdom",
    Vegan: "Yes",
    Vegetarian: "Yes",
  },
  {
    GlutenFree: "Yes",
    Id: 21,
    Link: "https://venablebistro.com/eat/main/",
    Restaurant: "Venable",
    Vegan: "Yes",
    Vegetarian: "Yes",
  },
  {
    GlutenFree: "No",
    Id: 22,
    Link: "https://mamadips.com/lunch-dinner-menus/",
    Restaurant: "Mama Dips",
    Vegan: "No",
    Vegetarian: "Yes",
  },
];

const findRestaurants = () => {
  document.getElementById("results").innerHTML = "";
  let vegan = document.getElementById("veganSelect");
  let vegetarian = document.getElementById("vegetarianSelect");
  let gluten = document.getElementById("glutenSelect");

  var veganUser = vegan.options[vegan.selectedIndex].text;
  let vegUser = vegetarian.options[vegetarian.selectedIndex].text;
  let glutenUser = gluten.options[gluten.selectedIndex].text;

  let acceptedRestaurants = [];

  for (let i = 0; i < data.length; i++) {
    if (veganUser === "Yes") {
      if (data[i].Vegan === veganUser && data[i].GlutenFree === glutenUser) {
        acceptedRestaurants.push(data[i]);
      }
    } else {
      if (
        data[i].Vegan === veganUser &&
        data[i].Vegetarian === vegUser &&
        data[i].GlutenFree === glutenUser
      ) {
        acceptedRestaurants.push(data[i]);
      }
    }
  }
  console.log(acceptedRestaurants);
  document.getElementById("heading").innerHTML =
    "Here are are the list of restaurants that allow for your choices!";
  for (let i = 0; i < acceptedRestaurants.length; i++) {
    let d = document.createElement("div");
    let a = document.createElement("a");
    d.appendChild(a);
    a.href = acceptedRestaurants[i].Link;
    a.target = "_blank";
    a.appendChild(document.createTextNode(acceptedRestaurants[i].Restaurant));
    document.getElementById("results").appendChild(d);
  }
};
