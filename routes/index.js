var express = require('express');
var router = express.Router();

// Butchers API version 1.0

var users = [
  {
    id: '1',
    profile_picture: 'https://source.unsplash.com/random/200x200',
    firstname: 'John',
    lastname: 'Doe',
    email: 'john@doe.com',
    password: 'johnny12'
  }
]

var butchers = [
  {
    "id": "1",
    "title": "Family Halal Butcher & Grocer",
    "url": "https://www.google.com/maps/place/Family+Halal+Butcher+%26+Grocer/@55.8367441,-4.1705566,11z/data=!4m10!1m2!2m1!1shalal+meat+shops+near+North+Lanarkshire!3m6!1s0x4888134daf877d7f:0x8dad2119a5165855!8m2!3d55.7802458!4d-3.9565419!15sCidoYWxhbCBtZWF0IHNob3BzIG5lYXIgTm9ydGggTGFuYXJrc2hpcmVaKSInaGFsYWwgbWVhdCBzaG9wcyBuZWFyIG5vcnRoIGxhbmFya3NoaXJlkgEMYnV0Y2hlcl9zaG9wmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU5zTW05TWRtVm5FQUXgAQA!16s%2Fg%2F11bycgw8qn?entry=ttu",
    "address": "118 Shieldmuir St, Wishaw ML2 7TH",
    "category": "Butchers",
    "latitude": "55.7802487",
    "longitude": "-3.9614128",
    "phone_number": "01698 375604",
    "opening": {
      "Wednesday": "11 am–7 pm",
      "Thursday": "11 am–7 pm",
      "Friday": "11 am–7 pm",
      "Saturday": "11 am–7 pm",
      "Sunday": "12–4 pm",
      "Monday": "11 am–7 pm",
      "Tuesday": "11 am–7 pm"
    },
    "ratings": 4.9,
    "meat_selection": [
      "Chicken",
      "Lamb",
      "Beef"
    ],
    "inventory": {
      "Chicken": [
        { "item": "Chicken Thighs", "quantity": 0, "price": 5.99, "ratings": [4, 5, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Whole Chicken", "quantity": 15, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness.      " },
        { "item": "Half Chicken", "quantity": 10, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ],
      "Lamb": [
        { "item": "Lamb Mince", "quantity": 30, "price": 7.99, "ratings": [3, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Shoulder", "quantity": 20, "price": 13.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Leg", "quantity": 15, "price": 14.99, "ratings": [4, 4, 3] }

      ],
      "Beef": [
        { "item": "Beef Ribeye Steak", "quantity": 25, "price": 15.99, "ratings": [4, 3, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Ground Beef", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Beef Burgers", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ]
    },
    "reviews": [
      {
        "reviewer": "Charlie Brown",
        "rating": 4,
        "comment": "Good quality meat. Love the Chicken Thighs!",
        "date": "2021-03-08"
        
      
      },
      {
        "reviewer": "Diana Miller",
        "rating": 2,
        "comment": "Great service and fresh Lamb Shoulder.",
        "specific_item": "Lamb Shoulder",
        "date": "2024-03-08"
      },
      {
        "reviewer": "Edward Wilson",
        "rating": 3.5,
        "comment": "The Beef Ribeye Steak was a bit overcooked.",
        "specific_item": "Beef Ribeye Steak",
        "date": "2023-03-08"

      }
    ]
  },
  {
    "id": "2",
    "title": "Continental Supersave",
    "url": "https://www.google.com/maps/place/Continental+Supersave/@55.8367441,-4.1705566,11z/data=!4m10!1m2!2m1!1shalal+meat+shops+near+North+Lanarkshire!3m6!1s0x48886c86a3253fbb:0x9c9b3b8b21c7a0df!8m2!3d55.8223603!4d-3.9711012!15sCidoYWxhbCBtZWF0IHNob3BzIG5lYXIgTm9ydGggTGFuYXJrc2hpcmVaKSInaGFsYWwgbWVhdCBzaG9wcyBuZWFyIG5vcnRoIGxhbmFya3NoaXJlkgEMYnV0Y2hlcl9zaG9wmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU14ZGtrelIyNW5SUkFC4AEA!16s%2Fg%2F1tfh479s?entry=ttu",
    "address": "156 Main St, Holytown, Motherwell ML1 4TJ",
    "category": "Butchers",
    "latitude": "55.8220344",
    "longitude": "-3.9797917",
    "phone_number": "01698 733769",
    "opening": {
      "Wednesday": "9 am–7 pm",
      "Thursday": "9 am–7 pm",
      "Friday": "9 am–7 pm",
      "Saturday": "9 am–7 pm",
      "Sunday": "9 am–7 pm",
      "Monday": "9 am–7 pm",
      "Tuesday": "9 am–7 pm"
    },
    "ratings": 4.9,
    "meat_selection": [
      "Chicken",
      "Lamb",
      "Beef"
    ],
    "inventory": {
      "Chicken": [
        { "item": "Chicken Thighs", "quantity": 0, "price": 5.99, "ratings": [4, 5, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Whole Chicken", "quantity": 15, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Half Chicken", "quantity": 10, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ],
      "Lamb": [
        { "item": "Lamb Mince", "quantity": 30, "price": 7.99, "ratings": [3, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Shoulder", "quantity": 20, "price": 13.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Leg", "quantity": 15, "price": 14.99, "ratings": [4, 4, 3] }

      ],
      "Beef": [
        { "item": "Beef Ribeye Steak", "quantity": 25, "price": 15.99, "ratings": [4, 3, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Ground Beef", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Beef Burgers", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ]
    },
    "reviews": [
      {
        "reviewer": "Charlie Brown",
        "rating": 4,
        "comment": "Good quality meat. Love the Chicken Thighs!"
      },
      {
        "reviewer": "Diana Miller",
        "rating": 2,
        "comment": "Great service and fresh Lamb Shoulder.",
        "specific_item": "Lamb Shoulder"
      },
      {
        "reviewer": "Edward Wilson",
        "rating": 3.5,
        "comment": "The Beef Ribeye Steak was a bit overcooked."

      }
    ]
  },
  {
    "id": "3",
    "title": "Imran Mini Market",
    "url": "https://www.google.com/maps/place/Imran+Mini+Market/@55.8164276,-4.2849707,11z/data=!4m11!1m3!2m2!1shalal+meat+shops+near+North+Lanarkshire!6e6!3m6!1s0x48886b71ccac0c23:0x7a8956a9f42221f1!8m2!3d55.8164276!4d-3.9965796!15sCidoYWxhbCBtZWF0IHNob3BzIG5lYXIgTm9ydGggTGFuYXJrc2hpcmVaKSInaGFsYWwgbWVhdCBzaG9wcyBuZWFyIG5vcnRoIGxhbmFya3NoaXJlkgENZ3JvY2VyeV9zdG9yZZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSaGEzQjJUMkZCRUFF4AEA!16s%2Fg%2F11c6d_4s23?entry=ttu",
    "address": "133 Clydesdale Rd, Bellshill ML4 2QH",
    "category": "Supermarket",
    "latitude": "55.8164306",
    "longitude": "-3.9991545",
    "phone_number": "01698 747299",
    "opening": {
      "Wednesday": "9 am–8 pm",
      "Thursday": "9 am–8 pm",
      "Friday": "9 am–8 pm",
      "Saturday": "9 am–8 pm",
      "Sunday": "9 am–7 pm",
      "Monday": "9 am–8 pm",
      "Tuesday": "9 am–8 pm"
    },
    "ratings": 4.5,
    "meat_selection": [
      "Chicken",
      "Lamb",
      "Beef"
    ],
    "inventory": {
      "Chicken": [
        { "item": "Chicken Thighs", "quantity": 0, "price": 5.99, "ratings": [4, 5, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Whole Chicken", "quantity": 15, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Half Chicken", "quantity": 10, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ],
      "Lamb": [
        { "item": "Lamb Mince", "quantity": 30, "price": 7.99, "ratings": [3, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Shoulder", "quantity": 20, "price": 13.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Leg", "quantity": 15, "price": 14.99, "ratings": [4, 4, 3] }

      ],
      "Beef": [
        { "item": "Beef Ribeye Steak", "quantity": 25, "price": 15.99, "ratings": [4, 3, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Ground Beef", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Beef Burgers", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ]
    },
    "reviews": [
      {
        "reviewer": "Charlie Brown",
        "rating": 4,
        "comment": "Good quality meat. Love the Chicken Thighs!"
      },
      {
        "reviewer": "Diana Miller",
        "rating": 2,
        "comment": "Great service and fresh Lamb Shoulder.",
        "specific_item": "Lamb Shoulder"
      },
      {
        "reviewer": "Edward Wilson",
        "rating": 3.5,
        "comment": "The Beef Ribeye Steak was a bit overcooked.",
        "specific_item": "Beef Ribeye Steak"

      }
    ]
  },
  {
    "id": "4",
    "title": "Fruit Shop Halal Butcher",
    "url": "https://www.google.com/maps/place/Fruit+Shop+Halal+Butcher/@55.851524,-4.4839126,11z/data=!4m11!1m3!2m2!1shalal+meat+shops+near+North+Lanarkshire!6e6!3m6!1s0x488841431a754df5:0x42cc2f78a2dc72a9!8m2!3d55.851524!4d-4.1955215!15sCidoYWxhbCBtZWF0IHNob3BzIG5lYXIgTm9ydGggTGFuYXJrc2hpcmVaKSInaGFsYWwgbWVhdCBzaG9wcyBuZWFyIG5vcnRoIGxhbmFya3NoaXJlkgENZ3JlZW5fZ3JvY2Vyc-ABAA!16s%2Fg%2F11j30lp2r9?entry=ttu",
    "address": "61 Westmuir St, Parkhead, Glasgow G31 5EL",
    "category": "Greengrocer",
    "latitude": "55.8515269",
    "longitude": "-4.2003924",
    "phone_number": "",
    "opening": {
      "Wednesday": "11 am–7 pm",
      "Thursday": "11 am–7 pm",
      "Friday": "11 am–7 pm",
      "Saturday": "11 am–7 pm",
      "Sunday": "12–4 pm",
      "Monday": "11 am–7 pm",
      "Tuesday": "11 am–7 pm"
    },
    "ratings": 3.5,
    "meat_selection": [
      "Chicken",
      "Lamb",
      "Beef"],
    "inventory": {
      "Chicken": [
        { "item": "Chicken Thighs", "quantity": 0, "price": 5.99, "ratings": [4, 5, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Whole Chicken", "quantity": 15, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Half Chicken", "quantity": 10, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ],
      "Lamb": [
        { "item": "Lamb Mince", "quantity": 30, "price": 7.99, "ratings": [3, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Shoulder", "quantity": 20, "price": 13.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Leg", "quantity": 15, "price": 14.99, "ratings": [4, 4, 3] }

      ],
      "Beef": [
        { "item": "Beef Ribeye Steak", "quantity": 25, "price": 15.99, "ratings": [4, 3, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Ground Beef", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Beef Burgers", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ]
    },
    "reviews": [
      {
        "reviewer": "Charlie Brown",
        "rating": 4,
        "comment": "Good quality meat. Love the Chicken Thighs!"
            },
      {
        "reviewer": "Diana Miller",
        "rating": 2,
        "comment": "Great service and fresh Lamb Shoulder.",
        "specific_item": "Lamb Shoulder"
      },
      {
        "reviewer": "Edward Wilson",
        "rating": 3.5,
        "comment": "The Beef Ribeye Steak was a bit overcooked.",
        "specific_item": "Beef Ribeye Steak"

      }
    ]
  },
  {
    "id": "5",
    "title": "Noor Halal Meat",
    "url": "https://www.google.com/maps/place/The+Urban+Butcher/@55.8254835,-4.3292404,11z/data=!4m11!1m3!2m2!1shalal+meat+shops+near+North+Lanarkshire!6e6!3m6!1s0x48886bf5a3c436f1:0xcc09de972056a4af!8m2!3d55.8254835!4d-4.2647395!15sCidoYWxhbCBtZWF0IHNob3BzIG5lYXIgTm9ydGggTGFuYXJrc2hpcmVaKSInaGFsYWwgbWVhdCBzaG9wcyBuZWFyIG5vcnRoIGxhbmFya3NoaXJlkgEMYnV0Y2hlcl9zaG9w4AEA!16s%2Fg%2F11shpfs4bm?entry=ttu",
    "address": "372 Victoria Rd, Glasgow G42 8YW",
    "category": "Butchers",
    "latitude": "55.8374343",
    "longitude": "-4.2673144",
    "phone_number": "",
    "opening": {
      "Wednesday": "11 am–7 pm",
      "Thursday": "11 am–7 pm",
      "Friday": "11 am–7 pm",
      "Saturday": "11 am–7 pm",
      "Sunday": "12–4 pm",
      "Monday": "11 am–7 pm",
      "Tuesday": "11 am–7 pm"
    },
    "ratings": 2,
    "meat_selection": [
      "Chicken",
      "Lamb",
      "Beef"
    ],
    "inventory": {
      "Chicken": [
        { "item": "Chicken Thighs", "quantity": 0, "price": 5.99, "ratings": [4, 5, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Whole Chicken", "quantity": 15, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Half Chicken", "quantity": 10, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ],
      "Lamb": [
        { "item": "Lamb Mince", "quantity": 30, "price": 7.99, "ratings": [3, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Shoulder", "quantity": 20, "price": 13.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Leg", "quantity": 15, "price": 14.99, "ratings": [4, 4, 3] }

      ],
      "Beef": [
        { "item": "Beef Ribeye Steak", "quantity": 25, "price": 15.99, "ratings": [4, 3, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Ground Beef", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Beef Burgers", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ]
    },
    "reviews": [
      {
        "reviewer": "Charlie Brown",
        "rating": 4,
        "comment": "Good quality meat. Love the Chicken Thighs!"
      },
      {
        "reviewer": "Diana Miller",
        "rating": 2,
        "comment": "Great service and fresh Lamb Shoulder.",
        "specific_item": "Lamb Shoulder"
      },
      {
        "reviewer": "Edward Wilson",
        "rating": 3.5,
        "comment": "The Beef Ribeye Steak was a bit overcooked.",
        "specific_item": "Beef Ribeye Steak"

      }
    ]
  },
  {
    "id": "6",
    "title": "House of Halal",
    "url": "https://www.google.com/maps/place/House+of+Halal/@55.8374313,-4.5531306,11z/data=!4m11!1m3!2m2!1shalal+meat+shops+near+North+Lanarkshire!6e6!3m6!1s0x488847bcdd9de487:0xbbccff0b89cf41bc!8m2!3d55.853018!4d-4.2637001!15sCidoYWxhbCBtZWF0IHNob3BzIG5lYXIgTm9ydGggTGFuYXJrc2hpcmVaKSInaGFsYWwgbWVhdCBzaG9wcyBuZWFyIG5vcnRoIGxhbmFya3NoaXJlkgENZ3JvY2VyeV9zdG9yZZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VObGNVMXBZWGhSUlJBQuABAA!16s%2Fg%2F11rwqkblsq?entry=ttu",
    "address": "76 Tradeston St, Glasgow G5 8EJ",
    "category": "Supermarket",
    "latitude": "55.853021",
    "longitude": "-4.266275",
    "phone_number": "0141 266 0062",
    "opening": {
      "Wednesday": "9 am–8 pm",
      "Thursday": "9 am–8 pm",
      "Friday": "9 am–8 pm",
      "Saturday": "9 am–8 pm",
      "Sunday": "9 am–8 pm",
      "Monday": "9 am–8 pm",
      "Tuesday": "9 am–8 pm"
    },
    "ratings": 4.5,
    "meat_selection": [
      "Chicken",
      "Lamb",
      "Beef"],
    "inventory": {
      "Chicken": [
        { "item": "Chicken Thighs", "quantity": 0, "price": 5.99, "ratings": [4, 5, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Whole Chicken", "quantity": 15, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Half Chicken", "quantity": 10, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ],
      "Lamb": [
        { "item": "Lamb Mince", "quantity": 30, "price": 7.99, "ratings": [3, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Shoulder", "quantity": 20, "price": 13.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Leg", "quantity": 15, "price": 14.99, "ratings": [4, 4, 3] }

      ],
      "Beef": [
        { "item": "Beef Ribeye Steak", "quantity": 25, "price": 15.99, "ratings": [4, 3, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Ground Beef", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Beef Burgers", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ]
    },
    "reviews": [
      {
        "reviewer": "Charlie Brown",
        "rating": 4,
        "comment": "Good quality meat. Love the Chicken Thighs!",
        "date": "2024-03-08"
        
      
      },
      {
        "reviewer": "Diana Miller",
        "rating": 2,
        "comment": "Great service and fresh Lamb Shoulder.",
        "specific_item": "Lamb Shoulder",
        "date": "2024-03-08"
      },
      {
        "reviewer": "Edward Wilson",
        "rating": 3.5,
        "comment": "The Beef Ribeye Steak was a bit overcooked.",
        "specific_item": "Beef Ribeye Steak",
        "date": "2024-03-08"

      }
    ]
  },
  {
    "id": "7",
    "title": "M.A. Halal Meat Glasgow LTD",
    "url": "https://www.google.com/maps/place/Jp+%26+W+Allison+Ltd/@55.8625989,-4.3144643,11z/data=!4m11!1m3!2m2!1shalal+meat+shops+near+North+Lanarkshire!6e6!3m6!1s0x48886bdbb18fbf31:0xf336bcfd20199d39!8m2!3d55.8625989!4d-4.2447598!15sCidoYWxhbCBtZWF0IHNob3BzIG5lYXIgTm9ydGggTGFuYXJrc2hpcmVaKSInaGFsYWwgbWVhdCBzaG9wcyBuZWFyIG5vcnRoIGxhbmFya3NoaXJlkgENbWVhdF9wcm9kdWN0c-ABAA!16s%2Fg%2F11t_z7stn5?entry=ttu",
    "address": "555 Calder St, Polmadie, Glasgow G42 0PT",
    "category": "Meat products store",
    "latitude": "55.8353706",
    "longitude": "-4.2473347",
    "phone_number": "0141 423 0149",
    "opening": {
      "Wednesday": "9 am–5 pm",
      "Thursday": "9 am–5 pm",
      "Friday": "9 am–5 pm",
      "Saturday": "9 am–5 pm",
      "Sunday": "10 am–5 pm",
      "Monday": "9 am–5 pm",
      "Tuesday": "9 am–5 pm"
    },
    "ratings": 0,
    "meat_selection": [
      "Chicken",
      "Lamb",
      "Beef"],
    "inventory": {
      "Chicken": [
        { "item": "Chicken Thighs", "quantity": 0, "price": 5.99, "ratings": [4, 5, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Whole Chicken", "quantity": 15, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Half Chicken", "quantity": 10, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ],
      "Lamb": [
        { "item": "Lamb Mince", "quantity": 30, "price": 7.99, "ratings": [3, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Shoulder", "quantity": 20, "price": 13.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Leg", "quantity": 15, "price": 14.99, "ratings": [4, 4, 3] }

      ],
      "Beef": [
        { "item": "Beef Ribeye Steak", "quantity": 25, "price": 15.99, "ratings": [4, 3, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Ground Beef", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Beef Burgers", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ]
    },
    "reviews": [
      {
        "reviewer": "Charlie Brown",
        "rating": 4,
        "comment": "Good quality meat. Love the Chicken Thighs!",
        "date": "2024-03-08"
        
      
      },
      {
        "reviewer": "Diana Miller",
        "rating": 1.5,
        "comment": "Great service and fresh Lamb Shoulder.",
        "specific_item": "Lamb Shoulder",
        "date": "2024-03-08"
      },
      {
        "reviewer": "Edward Wilson",
        "rating": 3.5,
        "comment": "The Beef Ribeye Steak was a bit overcooked.",
        "specific_item": "Beef Ribeye Steak",
        "date": "2024-03-08"

      }
    ]
  },
  {
    "id": "8",
    "title": "Alishan Halal Butchers Ltd",
    "url": "https://www.google.com/maps/place/Alishan+Halal+Butchers+Ltd/@55.8429263,-4.5581162,11z/data=!3m1!5s0x4888468c66858bff:0xcbe88b0121462e83!4m11!1m3!2m2!1shalal+meat+shops+near+North+Lanarkshire!6e6!3m6!1s0x4888468c7afbb2b1:0xa23e1fbc1ac02003!8m2!3d55.8429263!4d-4.2697251!15sCidoYWxhbCBtZWF0IHNob3BzIG5lYXIgTm9ydGggTGFuYXJrc2hpcmVaKSInaGFsYWwgbWVhdCBzaG9wcyBuZWFyIG5vcnRoIGxhbmFya3NoaXJlkgEMYnV0Y2hlcl9zaG9wmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU4xTVZreWNrSjNFQUXgAQA!16s%2Fg%2F1pxq75v3f?entry=ttu",
    "address": "57 Forth St, Pollokshields, Glasgow G41 2SP",
    "category": "Butchers",
    "latitude": "55.8429293",
    "longitude": "-4.2723",
    "phone_number": "0141 429 3000",
    "opening": {
      "Wednesday": "9 am–8 pm",
      "Thursday": "9 am–8 pm",
      "Friday": "9 am–8 pm",
      "Saturday": "9 am–8 pm",
      "Sunday": "9 am–8 pm",
      "Monday": "9 am–8 pm",
      "Tuesday": "9 am–8 pm"
    },
    "ratings": 3.5,
    "meat_selection": [
      "Chicken",
      "Lamb",
      "Beef"],
    "inventory": {
      "Chicken": [
        { "item": "Chicken Thighs", "quantity": 0, "price": 5.99, "ratings": [4, 5, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Whole Chicken", "quantity": 15, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Half Chicken", "quantity": 10, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ],
      "Lamb": [
        { "item": "Lamb Mince", "quantity": 30, "price": 7.99, "ratings": [3, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Shoulder", "quantity": 20, "price": 13.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Leg", "quantity": 15, "price": 14.99, "ratings": [4, 4, 3] }

      ],
      "Beef": [
        { "item": "Beef Ribeye Steak", "quantity": 25, "price": 15.99, "ratings": [4, 3, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Ground Beef", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Beef Burgers", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ]
    },
    "reviews": [
      {
        "reviewer": "Charlie Brown",
        "rating": 4,
        "comment": "Good quality meat. Love the Chicken Thighs!",
        "specific_item": "Chicken Thighs"
      },
      {
        "reviewer": "Diana Miller",
        "rating": 1.5,
        "comment": "Great service and fresh Lamb Shoulder.",
        "specific_item": "Lamb Shoulder"
      },
      {
        "reviewer": "Edward Wilson",
        "rating": 3,
        "comment": "The Beef Ribeye Steak was a bit overcooked.",
        "specific_item": "Beef Ribeye Steak"

      }
    ]
  },
  {
    "id": "9",
    "title": "Qadria Pak Halal Wholesale & Retail Meat Centre",
    "url": "https://www.google.com/maps/place/Qadria+Pak+Halal+Wholesale+%26+Retail+Meat+Centre/@55.8429263,-4.5581162,11z/data=!4m11!1m3!2m2!1shalal+meat+shops+near+North+Lanarkshire!6e6!3m6!1s0x4888468be980aa35:0x39b902d8a1a094f8!8m2!3d55.844064!4d-4.2726569!15sCidoYWxhbCBtZWF0IHNob3BzIG5lYXIgTm9ydGggTGFuYXJrc2hpcmVaKSInaGFsYWwgbWVhdCBzaG9wcyBuZWFyIG5vcnRoIGxhbmFya3NoaXJlkgEMYnV0Y2hlcl9zaG9w4AEA!16s%2Fg%2F11c1szydzk?entry=ttu",
    "address": "267 Maxwell Rd, Glasgow G41 1TE",
    "category": "Butchers",
    "latitude": "55.844067",
    "longitude": "-4.2752318",
    "phone_number": "0141 429 0978",
    "opening": {
      "Wednesday": "9:30 am–8 pm",
      "Thursday": "9:30 am–8 pm",
      "Friday": "9:30 am–8 pm",
      "Saturday": "9:30 am–8 pm",
      "Sunday": "10:30 am–7 pm",
      "Monday": "9:30 am–8 pm",
      "Tuesday": "9:30 am–8 pm"
    },
    "ratings": 1.5,
    "meat_selection": [
      "Chicken",
      "Lamb",
      "Beef"],
    "inventory": {
      "Chicken": [
        { "item": "Chicken Thighs", "quantity": 0, "price": 5.99, "ratings": [4, 5, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Whole Chicken", "quantity": 15, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Half Chicken", "quantity": 10, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ],
      "Lamb": [
        { "item": "Lamb Mince", "quantity": 30, "price": 7.99, "ratings": [3, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Shoulder", "quantity": 20, "price": 13.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Leg", "quantity": 15, "price": 14.99, "ratings": [4, 4, 3] }

      ],
      "Beef": [
        { "item": "Beef Ribeye Steak", "quantity": 25, "price": 15.99, "ratings": [4, 3, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Ground Beef", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Beef Burgers", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ]
    },
    "reviews": [
      {
        "reviewer": "Charlie Brown",
        "rating": 4,
        "comment": "Good quality meat. Love the Chicken Thighs!",
        "date": "2024-03-08"
        
      
      },
      {
        "reviewer": "Diana Miller",
        "rating": 1.5,
        "comment": "Great service and fresh Lamb Shoulder.",
        "specific_item": "Lamb Shoulder",
        "date": "2024-03-08"
      },
      {
        "reviewer": "Edward Wilson",
        "rating": 3,
        "comment": "The Beef Ribeye Steak was a bit overcooked.",
        "specific_item": "Beef Ribeye Steak",
        "date": "2024-03-08"

      }
    ]
  },
  {
    "id": "10",
    "title": "Nazar Halal Meat",
    "url": "https://www.google.com/maps/place/Nazar+Halal+Meat/@55.8470244,-4.5527205,11z/data=!4m11!1m3!2m2!1shalal+meat+shops+near+North+Lanarkshire!6e6!3m6!1s0x4888468e211d9533:0x47851d23f71320a0!8m2!3d55.8470244!4d-4.2643294!15sCidoYWxhbCBtZWF0IHNob3BzIG5lYXIgTm9ydGggTGFuYXJrc2hpcmVaKSInaGFsYWwgbWVhdCBzaG9wcyBuZWFyIG5vcnRoIGxhbmFya3NoaXJlkgEFc3RvcmWaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTjRkR1pmTFhWQlJSQULgAQA!16s%2Fg%2F11bv33d7gt?entry=ttu",
    "address": "80 95 Kilbirnie St, Glasgow G5 8JD",
    "category": "Shop",
    "latitude": "55.8470274",
    "longitude": "-4.2669043",
    "phone_number": "0141 429 6682",
    "opening": {
      "Wednesday": "8 am–5 pm",
      "Thursday": "8 am–5 pm",
      "Friday": "8 am–5 pm",
      "Saturday": "8 am–4 pm",
      "Sunday": "Closed",
      "Monday": "8 am–5 pm",
      "Tuesday": "8 am–5 pm"
    },
    "ratings": 4.3,
    "meat_selection": [
      "Chicken",
      "Lamb",
      "Beef"],
    "inventory": {
      "Chicken": [
        { "item": "Chicken Thighs", "quantity": 0, "price": 5.99, "ratings": [4, 5, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Whole Chicken", "quantity": 15, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Half Chicken", "quantity": 10, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ],
      "Lamb": [
        { "item": "Lamb Mince", "quantity": 30, "price": 7.99, "ratings": [3, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Shoulder", "quantity": 20, "price": 13.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Leg", "quantity": 15, "price": 14.99, "ratings": [4, 4, 3] }

      ],
      "Beef": [
        { "item": "Beef Ribeye Steak", "quantity": 25, "price": 15.99, "ratings": [4, 3, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Ground Beef", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Beef Burgers", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ]
    },
    "reviews": [
      {
        "reviewer": "Charlie Brown",
        "rating": 4,
        "comment": "Good quality meat. Love the Chicken Thighs!",
        "date": "2024-03-08"
        
      
      },
      {
        "reviewer": "Diana Miller",
        "rating": 1.5,
        "comment": "Great service and fresh Lamb Shoulder.",
        "specific_item": "Lamb Shoulder",
        "date": "2024-03-08"
      },
      {
        "reviewer": "Edward Wilson",
        "rating": 3,
        "comment": "The Beef Ribeye Steak was a bit overcooked.",
        "specific_item": "Beef Ribeye Steak",
        "date": "2024-03-08"

      }
    ]
  },
  {
    "id": "11",
    "title": "Makkah halal store",
    "url": "https://www.google.com/maps/place/Makkah+halal+store/@55.8470244,-4.5527205,11z/data=!4m11!1m3!2m2!1shalal+meat+shops+near+North+Lanarkshire!6e6!3m6!1s0x488845eb6019c99f:0x3d39be466b3b220e!8m2!3d55.8826648!4d-4.2298537!15sCidoYWxhbCBtZWF0IHNob3BzIG5lYXIgTm9ydGggTGFuYXJrc2hpcmVaKSInaGFsYWwgbWVhdCBzaG9wcyBuZWFyIG5vcnRoIGxhbmFya3NoaXJlkgENZ3JvY2VyeV9zdG9yZeABAA!16s%2Fg%2F11sstwgjpk?entry=ttu",
    "address": "201 Springburn Way, Glasgow G21 1DU",
    "category": "Supermarket",
    "latitude": "55.8826678",
    "longitude": "-4.2324286",
    "phone_number": "",

    "opening": {
      "Wednesday": "9 am–8:30 pm",
      "Thursday": "9 am–8:30 pm",
      "Friday": "9 am–8:30 pm",
      "Saturday": "9 am–8:30 pm",
      "Sunday": "9 am–8:30 pm",
      "Monday": "9 am–8:30 pm",
      "Tuesday": "9 am–8:30 pm"
    },
    "ratings": 4,
    "meat_selection": [
      "Chicken",
      "Lamb",
      "Beef"],
    "inventory": {
      "Chicken": [
        { "item": "Chicken Thighs", "quantity": 0, "price": 5.99, "ratings": [4, 5, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Whole Chicken", "quantity": 15, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Half Chicken", "quantity": 10, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ],
      "Lamb": [
        { "item": "Lamb Mince", "quantity": 30, "price": 7.99, "ratings": [3, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Shoulder", "quantity": 20, "price": 13.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Leg", "quantity": 15, "price": 14.99, "ratings": [4, 4, 3] }

      ],
      "Beef": [
        { "item": "Beef Ribeye Steak", "quantity": 25, "price": 15.99, "ratings": [4, 3, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Ground Beef", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Beef Burgers", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ]
    },
    "reviews": [
      {
        "reviewer": "Charlie Brown",
        "rating": 4,
        "comment": "Good quality meat. Love the Chicken Thighs!",
        "date": "2024-03-08"
        
      
      },
      {
        "reviewer": "Diana Miller",
        "rating": 1.5,
        "comment": "Great service and fresh Lamb Shoulder.",
        "specific_item": "Lamb Shoulder",
        "date": "2024-03-08"
      },
      {
        "reviewer": "Edward Wilson",
        "rating": 3,
        "comment": "The Beef Ribeye Steak was a bit overcooked.",
        "specific_item": "Beef Ribeye Steak",
        "date": "2024-03-08"

      }
    ]
  },
  {
    "id": "12",
    "title": "Quality food and meat",
    "url": "https://www.google.com/maps/place/Quality+food+and+meat/@55.8470244,-4.5527205,11z/data=!4m11!1m3!2m2!1shalal+meat+shops+near+North+Lanarkshire!6e6!3m6!1s0x488846edeaa58d9d:0x2f5ec488588a8d5a!8m2!3d55.835759!4d-4.2607147!15sCidoYWxhbCBtZWF0IHNob3BzIG5lYXIgTm9ydGggTGFuYXJrc2hpcmVaKSInaGFsYWwgbWVhdCBzaG9wcyBuZWFyIG5vcnRoIGxhbmFya3NoaXJlkgEMYnV0Y2hlcl9zaG9wmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU5sYXpSWUxYbDNSUkFC4AEA!16s%2Fg%2F11c60jhp2b?entry=ttu",
    "address": "242 Allison St, Govanhill, Glasgow G42 8RT",
    "category": "Butchers",
    "latitude": "55.835762",
    "longitude": "-4.2632896",
    "phone_number": "0141 423 1011",
    "opening": {
      "Wednesday": "11 am–7 pm",
      "Thursday": "11 am–7 pm",
      "Friday": "11 am–7 pm",
      "Saturday": "11 am–7 pm",
      "Sunday": "12–4 pm",
      "Monday": "11 am–7 pm",
      "Tuesday": "11 am–7 pm"
    },
    "ratings": 4.7,
    "meat_selection": [
      "Chicken",
      "Lamb",
      "Beef"],
    "inventory": {
      "Chicken": [
        { "item": "Chicken Thighs", "quantity": 0, "price": 5.99, "ratings": [4, 5, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Whole Chicken", "quantity": 15, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Half Chicken", "quantity": 10, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ],
      "Lamb": [
        { "item": "Lamb Mince", "quantity": 30, "price": 7.99, "ratings": [3, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Shoulder", "quantity": 20, "price": 13.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Leg", "quantity": 15, "price": 14.99, "ratings": [4, 4, 3] }

      ],
      "Beef": [
        { "item": "Beef Ribeye Steak", "quantity": 25, "price": 15.99, "ratings": [4, 3, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Ground Beef", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Beef Burgers", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ]
    },
    "reviews": [
      {
        "reviewer": "Charlie Brown",
        "rating": 4,
        "comment": "Good quality meat. Love the Chicken Thighs!",
        "date": "2024-03-08"
        
      
      },
      {
        "reviewer": "Diana Miller",
        "rating": 5,
        "comment": "Great service and fresh Lamb Shoulder.",
        "specific_item": "Lamb Shoulder",
        "date": "2024-03-08"
      },
      {
        "reviewer": "Edward Wilson",
        "rating": 3,
        "comment": "The Beef Ribeye Steak was a bit overcooked.",
        "specific_item": "Beef Ribeye Steak",
        "date": "2024-03-08"

      }
    ]
  },
  {
    "id": "13",
    "title": "Oriental Food Store & Halal Butchers",
    "url": "https://www.google.com/maps/place/Oriental+Food+Store+%26+Halal+Butchers/@55.8732381,-4.5638721,11z/data=!4m11!1m3!2m2!1shalal+meat+shops+near+North+Lanarkshire!6e6!3m6!1s0x48884425f32f525b:0x28738937bda81f45!8m2!3d55.8732381!4d-4.275481!15sCidoYWxhbCBtZWF0IHNob3BzIG5lYXIgTm9ydGggTGFuYXJrc2hpcmVaKSInaGFsYWwgbWVhdCBzaG9wcyBuZWFyIG5vcnRoIGxhbmFya3NoaXJlkgETYXNpYW5fZ3JvY2VyeV9zdG9yZZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VORGRVcG1NWE5SUlJBQuABAA!16s%2Fg%2F1tdvd4xl?entry=ttu",
    "address": "307 Great Western Rd, Glasgow G4 9HR",
    "category": "Asian Grocery Shop",
    "latitude": "55.8732411",
    "longitude": "-4.2780559",
    "phone_number": "0141 334 8133",
    "opening": {
      "Wednesday": "10 am–8 pm",
      "Thursday": "10 am–8 pm",
      "Friday": "10 am–8 pm",
      "Saturday": "10 am–8 pm",
      "Sunday": "10 am–8 pm",
      "Monday": "10 am–8 pm",
      "Tuesday": "10 am–8 pm"
    },
    "ratings": 4.7,
    "meat_selection": [
      "Chicken",
      "Lamb",
      "Beef"],
    "inventory": {
      "Chicken": [
        { "item": "Chicken Thighs", "quantity": 0, "price": 5.99, "ratings": [4, 5, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Whole Chicken", "quantity": 15, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Half Chicken", "quantity": 10, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ],
      "Lamb": [
        { "item": "Lamb Mince", "quantity": 30, "price": 7.99, "ratings": [3, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Shoulder", "quantity": 20, "price": 13.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Leg", "quantity": 15, "price": 14.99, "ratings": [4, 4, 3] }

      ],
      "Beef": [
        { "item": "Beef Ribeye Steak", "quantity": 25, "price": 15.99, "ratings": [4, 3, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Ground Beef", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Beef Burgers", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ]
    },
    "reviews": [
      {
        "reviewer": "Charlie Brown",
        "rating": 4,
        "comment": "Good quality meat. Love the Chicken Thighs!",
        "date": "2024-03-08"
        
      
      },
      {
        "reviewer": "Diana Miller",
        "rating": 5,
        "comment": "Great service and fresh Lamb Shoulder.",
        "specific_item": "Lamb Shoulder",
        "date": "2024-03-08"
      },
      {
        "reviewer": "Edward Wilson",
        "rating": 3,
        "comment": "The Beef Ribeye Steak was a bit overcooked.",
        "specific_item": "Beef Ribeye Steak",
        "date": "2024-03-08"

      }
    ]
  },
  {
    "id": "14",
    "title": "Data Halal Meat",
    "url": "https://www.google.com/maps/place/Data+Halal+Meat/@55.8732381,-4.5638721,11z/data=!4m11!1m3!2m2!1shalal+meat+shops+near+North+Lanarkshire!6e6!3m6!1s0x488846edbf540c25:0x33347a5df941adad!8m2!3d55.8353305!4d-4.2584566!15sCidoYWxhbCBtZWF0IHNob3BzIG5lYXIgTm9ydGggTGFuYXJrc2hpcmVaKSInaGFsYWwgbWVhdCBzaG9wcyBuZWFyIG5vcnRoIGxhbmFya3NoaXJlkgEMYnV0Y2hlcl9zaG9wmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJMY1hGTU4zcEJSUkFC4AEA!16s%2Fg%2F1thx3mdy?entry=ttu",
    "address": "261 Allison St, Glasgow G42 8HA",
    "category": "Butchers",
    "latitude": "55.8353334",
    "longitude": "-4.2633275",
    "phone_number": "0141 424 0707",
    "opening": {
      "Wednesday": "9 am–7 pm",
      "Thursday": "9 am–7 pm",
      "Friday": "9 am–7 pm",
      "Saturday": "9 am–7 pm",
      "Sunday": "9 am–7 pm",
      "Monday": "9 am–7 pm",
      "Tuesday": "9 am–7 pm"
    },
    "ratings": 4.7,
    "meat_selection": [
      "Chicken",
      "Lamb",
      "Beef"],
    "inventory": {
      "Chicken": [
        { "item": "Chicken Thighs", "quantity": 0, "price": 5.99, "ratings": [4, 5, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Whole Chicken", "quantity": 15, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Half Chicken", "quantity": 10, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ],
      "Lamb": [
        { "item": "Lamb Mince", "quantity": 30, "price": 7.99, "ratings": [3, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Shoulder", "quantity": 20, "price": 13.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Leg", "quantity": 15, "price": 14.99, "ratings": [4, 4, 3] }

      ],
      "Beef": [
        { "item": "Beef Ribeye Steak", "quantity": 25, "price": 15.99, "ratings": [4, 3, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Ground Beef", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Beef Burgers", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ]
    },
    "reviews": [
      {
        "reviewer": "Charlie Brown",
        "rating": 4,
        "comment": "Good quality meat. Love the Chicken Thighs!",
        "date": "2024-03-08"
        
      
      },
      {
        "reviewer": "Diana Miller",
        "rating": 5,
        "comment": "Great service and fresh Lamb Shoulder.",
        "specific_item": "Lamb Shoulder",
        "date": "2024-03-08"
      },
      {
        "reviewer": "Edward Wilson",
        "rating": 3,
        "comment": "The Beef Ribeye Steak was a bit overcooked.",
        "specific_item": "Beef Ribeye Steak",
        "date": "2024-03-08"

      }
    ]
  },
  {
    "id": "15",
    "title": "Halal Butchers",
    "url": "https://www.google.com/maps/place/Halal+Butchers/@55.8732381,-4.5638721,11z/data=!4m11!1m3!2m2!1shalal+meat+shops+near+North+Lanarkshire!6e6!3m6!1s0x488844303dcf5485:0x96830245b306dc9c!8m2!3d55.8740234!4d-4.2704444!15sCidoYWxhbCBtZWF0IHNob3BzIG5lYXIgTm9ydGggTGFuYXJrc2hpcmVaKSInaGFsYWwgbWVhdCBzaG9wcyBuZWFyIG5vcnRoIGxhbmFya3NoaXJlkgEMYnV0Y2hlcl9zaG9w4AEA!16s%2Fg%2F1yh9tqx9h?entry=ttu",
    "address": "183 Maryhill Rd, Glasgow G20 7XL",
    "category": "Butchers",
    "latitude": "55.874039",
    "longitude": "-4.2730309",
    "phone_number": "0141 353 6973",
    "opening": {
      "Wednesday": "10 am–7 pm",
      "Thursday": "10 am–7 pm",
      "Friday": "10 am–7 pm",
      "Saturday": "10 am–7 pm",
      "Sunday": "11 am–7 pm",
      "Monday": "10 am–7 pm",
      "Tuesday": "10 am–7 pm"
    },
    "ratings": 4.5,
    "meat_selection": [
      "Chicken",
      "Lamb",
      "Beef"],
    "inventory": {
      "Chicken": [
        { "item": "Chicken Thighs", "quantity": 0, "price": 5.99, "ratings": [4, 5, 4] },
        { "item": "Whole Chicken", "quantity": 15, "price": 8.99, "ratings": [5, 4, 5] },
        { "item": "Half Chicken", "quantity": 10, "price": 8.99, "ratings": [5, 4, 5] }
      ],
      "Lamb": [
        { "item": "Lamb Mince", "quantity": 30, "price": 7.99, "ratings": [3, 4, 5] },
        { "item": "Lamb Shoulder", "quantity": 20, "price": 13.99, "ratings": [5, 4, 4] },
        { "item": "Lamb Leg", "quantity": 15, "price": 14.99, "ratings": [4, 4, 3] }

      ],
      "Beef": [
        { "item": "Beef Ribeye Steak", "quantity": 25, "price": 15.99, "ratings": [4, 3, 5] },
        { "item": "Ground Beef", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4] },
        { "item": "Beef Burgers", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4] }
      ]
    },
    "reviews": [
      {
        "reviewer": "Charlie Brown",
        "rating": 4,
        "comment": "Good quality meat. Love the Chicken Thighs!",
        "date": "2024-03-08"
        
      
      },
      {
        "reviewer": "Diana Miller",
        "rating": 5,
        "comment": "Great service and fresh Lamb Shoulder.",
        "specific_item": "Lamb Shoulder",
        "date": "2024-03-08"
      },
      {
        "reviewer": "Edward Wilson",
        "rating": 3,
        "comment": "The Beef Ribeye Steak was a bit overcooked.",
        "specific_item": "Beef Ribeye Steak",
        "date": "2024-03-08"

      }
    ]
  },
  {
    "id": "16",
    "title": "Sarwar Halal Butchers",
    "url": "https://www.google.com/maps/place/Sarwar+Halal+Butchers/@55.8732381,-4.5638721,11z/data=!4m11!1m3!2m2!1shalal+meat+shops+near+North+Lanarkshire!6e6!3m6!1s0x4888468b712ff2fb:0xff1e6611fc3d625d!8m2!3d55.8418574!4d-4.2723179!15sCidoYWxhbCBtZWF0IHNob3BzIG5lYXIgTm9ydGggTGFuYXJrc2hpcmVaKSInaGFsYWwgbWVhdCBzaG9wcyBuZWFyIG5vcnRoIGxhbmFya3NoaXJlkgEMYnV0Y2hlcl9zaG9w4AEA!16s%2Fg%2F11cmb1yktt?entry=ttu",
    "address": "167 Albert Dr, Glasgow G41 2ND",
    "category": "Butchers",
    "latitude": "55.9120575",
    "longitude": "-4.5150847",
    "phone_number": "0141 424 1610",
    "opening": {
      "Wednesday": "10 am–8 pm",
      "Thursday": "10 am–8 pm",
      "Friday": "10 am–8 pm",
      "Saturday": "10 am–8 pm",
      "Sunday": "10 am–8 pm",
      "Monday": "10 am–8 pm",
      "Tuesday": "10 am–8 pm"
    },
    "ratings": 5,
    "meat_selection": [
      "Chicken",
      "Lamb",
      "Beef"],
    "inventory": {
      "Chicken": [
        { "item": "Chicken Thighs", "quantity": 0, "price": 5.99, "ratings": [4, 5, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Whole Chicken", "quantity": 15, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Half Chicken", "quantity": 10, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ],
      "Lamb": [
        { "item": "Lamb Mince", "quantity": 30, "price": 7.99, "ratings": [3, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Shoulder", "quantity": 20, "price": 13.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Leg", "quantity": 15, "price": 14.99, "ratings": [4, 4, 3] }

      ],
      "Beef": [
        { "item": "Beef Ribeye Steak", "quantity": 25, "price": 15.99, "ratings": [4, 3, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Ground Beef", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Beef Burgers", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ]
    },
    "reviews": [
      {
        "reviewer": "Charlie Brown",
        "rating": 4,
        "comment": "Good quality meat. Love the Chicken Thighs!",
        "specific_item": "Chicken Thighs"
      },
      {
        "reviewer": "Diana Miller",
        "rating": 5,
        "comment": "Great service and fresh Lamb Shoulder.",
        "specific_item": "Lamb Shoulder"
      },
      {
        "reviewer": "Edward Wilson",
        "rating": 3,
        "comment": "The Beef Ribeye Steak was a bit overcooked.",
        "specific_item": "Beef Ribeye Steak"

      }
    ]
  },
  {
    "id": "17",
    "title": "Gulmarg -",
    "url": "https://www.google.com/maps/place/Sarwar+Halal+Butchers/@55.8732381,-4.5638721,11z/data=!4m11!1m3!2m2!1shalal+meat+shops+near+North+Lanarkshire!6e6!3m6!1s0x4888468b712ff2fb:0xff1e6611fc3d625d!8m2!3d55.8418574!4d-4.2723179!15sCidoYWxhbCBtZWF0IHNob3BzIG5lYXIgTm9ydGggTGFuYXJrc2hpcmVaKSInaGFsYWwgbWVhdCBzaG9wcyBuZWFyIG5vcnRoIGxhbmFya3NoaXJlkgEMYnV0Y2hlcl9zaG9w4AEA!16s%2Fg%2F11cmb1yktt?entry=ttu",
    "address": "249 Maxwell Rd, Glasgow G41 1TE",
    "category": "Butchers",
    "latitude": "55.8439905",
    "longitude": "-4.2770669",
    "phone_number": "0141 429 6710",
    "opening": {
      "Wednesday": "10 am–8 pm",
      "Thursday": "10 am–8 pm",
      "Friday": "10 am–8 pm",
      "Saturday": "10 am–8 pm",
      "Sunday": "10 am–8 pm",
      "Monday": "10 am–8 pm",
      "Tuesday": "10 am–8 pm"
    },
    "ratings": 4.3,
    "meat_selection": [
      "Chicken",
      "Lamb",
      "Beef"],
    "inventory": {
      "Chicken": [
        { "item": "Chicken Thighs", "quantity": 0, "price": 5.99, "ratings": [4, 5, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Whole Chicken", "quantity": 15, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Half Chicken", "quantity": 10, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ],
      "Lamb": [
        { "item": "Lamb Mince", "quantity": 30, "price": 7.99, "ratings": [3, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Shoulder", "quantity": 20, "price": 13.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Leg", "quantity": 15, "price": 14.99, "ratings": [4, 4, 3] }

      ],
      "Beef": [
        { "item": "Beef Ribeye Steak", "quantity": 25, "price": 15.99, "ratings": [4, 3, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Ground Beef", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Beef Burgers", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ]
    },
    "reviews": [
      {
        "reviewer": "Charlie Brown",
        "rating": 4,
        "comment": "Good quality meat. Love the Chicken Thighs!",
        "specific_item": "Chicken Thighs"
      },
      {
        "reviewer": "Diana Miller",
        "rating": 5,
        "comment": "Great service and fresh Lamb Shoulder.",
        "specific_item": "Lamb Shoulder"
      },
      {
        "reviewer": "Edward Wilson",
        "rating": 3,
        "comment": "The Beef Ribeye Steak was a bit overcooked.",
        "specific_item": "Beef Ribeye Steak"

      }
    ]
  },
  {
    "id": "18",
    "title": "Eastern Spices Food Store",
    "url": "https://www.google.com/maps/place/Sarwar+Halal+Butchers/@55.8732381,-4.5638721,11z/data=!4m11!1m3!2m2!1shalal+meat+shops+near+North+Lanarkshire!6e6!3m6!1s0x4888468b712ff2fb:0xff1e6611fc3d625d!8m2!3d55.8418574!4d-4.2723179!15sCidoYWxhbCBtZWF0IHNob3BzIG5lYXIgTm9ydGggTGFuYXJrc2hpcmVaKSInaGFsYWwgbWVhdCBzaG9wcyBuZWFyIG5vcnRoIGxhbmFya3NoaXJlkgEMYnV0Y2hlcl9zaG9w4AEA!16s%2Fg%2F11cmb1yktt?entry=ttu",
    "address": "345 Main St, Bellshill ML4 1AW",
    "category": "Supermarket",
    "latitude": "55.8193902",
    "longitude": "-4.0211869",
    "phone_number": "01698 307017",
    "opening": {
      "Wednesday": "9 am–6 pm",
      "Thursday": "9 am–6 pm",
      "Friday": "9 am–6 pm",
      "Saturday": "9 am–6 pm",
      "Sunday": "10 am–6 pm",
      "Monday": "9 am–6 pm",
      "Tuesday": "9 am–6 pm"
    },
    "ratings": 4.6,
    "meat_selection": [
      "Chicken",
      "Lamb",
      "Beef"],
    "inventory": {
      "Chicken": [
        { "item": "Chicken Thighs", "quantity": 0, "price": 5.99, "ratings": [4, 5, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Whole Chicken", "quantity": 15, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Half Chicken", "quantity": 10, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ],
      "Lamb": [
        { "item": "Lamb Mince", "quantity": 30, "price": 7.99, "ratings": [3, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Shoulder", "quantity": 20, "price": 13.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Leg", "quantity": 15, "price": 14.99, "ratings": [4, 4, 3] }

      ],
      "Beef": [
        { "item": "Beef Ribeye Steak", "quantity": 25, "price": 15.99, "ratings": [4, 3, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Ground Beef", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Beef Burgers", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ]
    },
    "reviews": [
      {
        "reviewer": "Charlie Brown",
        "rating": 4,
        "comment": "Good quality meat. Love the Chicken Thighs!",
        "specific_item": "Chicken Thighs"
      },
      {
        "reviewer": "Diana Miller",
        "rating": 5,
        "comment": "Great service and fresh Lamb Shoulder.",
        "specific_item": "Lamb Shoulder"
      },
      {
        "reviewer": "Edward Wilson",
        "rating": 3,
        "comment": "The Beef Ribeye Steak was a bit overcooked.",
        "specific_item": "Beef Ribeye Steak"

      }
    ]
  },
  {
    "id": "19",
    "title": "Haji Baba Halal Meats",
    "url": "https://www.google.com/maps/place/Sarwar+Halal+Butchers/@55.8732381,-4.5638721,11z/data=!4m11!1m3!2m2!1shalal+meat+shops+near+North+Lanarkshire!6e6!3m6!1s0x4888468b712ff2fb:0xff1e6611fc3d625d!8m2!3d55.8418574!4d-4.2723179!15sCidoYWxhbCBtZWF0IHNob3BzIG5lYXIgTm9ydGggTGFuYXJrc2hpcmVaKSInaGFsYWwgbWVhdCBzaG9wcyBuZWFyIG5vcnRoIGxhbmFya3NoaXJlkgEMYnV0Y2hlcl9zaG9w4AEA!16s%2Fg%2F11cmb1yktt?entry=ttu",
    "address": "Asda Govan, 500 Helen St, Glasgow G51 3HR",
    "category": "Butchers",
    "latitude": "55.8529434",
    "longitude": "-4.3607361",
    "phone_number": "020 3536 8088",
    "opening": {
      "Wednesday": "9 am–5 pm",
      "Thursday": "9 am–5 pm",
      "Friday": "9 am–5 pm",
      "Saturday": "Closed",
      "Sunday": "Closed",
      "Monday": "9 am–5 pm",
      "Tuesday": "9 am–5 pm"
    },
    "ratings": 3.7,
    "meat_selection": [
      "Chicken",
      "Lamb",
      "Beef"],
    "inventory": {
      "Chicken": [
        { "item": "Chicken Thighs", "quantity": 0, "price": 5.99, "ratings": [4, 5, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Whole Chicken", "quantity": 15, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Half Chicken", "quantity": 10, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ],
      "Lamb": [
        { "item": "Lamb Mince", "quantity": 30, "price": 7.99, "ratings": [3, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Shoulder", "quantity": 20, "price": 13.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Leg", "quantity": 15, "price": 14.99, "ratings": [4, 4, 3] }

      ],
      "Beef": [
        { "item": "Beef Ribeye Steak", "quantity": 25, "price": 15.99, "ratings": [4, 3, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Ground Beef", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Beef Burgers", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ]
    },
    "reviews": [
      {
        "reviewer": "Charlie Brown",
        "rating": 4,
        "comment": "Good quality meat. Love the Chicken Thighs!",
        "specific_item": "Chicken Thighs"
      },
      {
        "reviewer": "Diana Miller",
        "rating": 5,
        "comment": "Great service and fresh Lamb Shoulder.",
        "specific_item": "Lamb Shoulder"
      },
      {
        "reviewer": "Edward Wilson",
        "rating": 3,
        "comment": "The Beef Ribeye Steak was a bit overcooked.",
        "specific_item": "Beef Ribeye Steak"

      }
    ]
  },
  {
    "id": "20",
    "title": "Sahal Food Store",
    "url": "https://www.google.com/maps/place/Sarwar+Halal+Butchers/@55.8732381,-4.5638721,11z/data=!4m11!1m3!2m2!1shalal+meat+shops+near+North+Lanarkshire!6e6!3m6!1s0x4888468b712ff2fb:0xff1e6611fc3d625d!8m2!3d55.8418574!4d-4.2723179!15sCidoYWxhbCBtZWF0IHNob3BzIG5lYXIgTm9ydGggTGFuYXJrc2hpcmVaKSInaGFsYWwgbWVhdCBzaG9wcyBuZWFyIG5vcnRoIGxhbmFya3NoaXJlkgEMYnV0Y2hlcl9zaG9w4AEA!16s%2Fg%2F11cmb1yktt?entry=ttu",
    "address": "440-446 Ballater St, Glasgow G5 0QW",
    "category": "Butchers",
    "latitude": "55.8454417",
    "longitude": "-4.2600969",
    "phone_number": "07727 447707",
    "opening": {
      "Wednesday": "10 am–7 pm",
      "Thursday": "10 am–7 pm",
      "Friday": "10 am–7 pm",
      "Saturday": "11 am–7 pm",
      "Sunday": "10 am–7 pm",
      "Monday": "10 am–7 pm",
      "Tuesday": "10 am–7 pm"
    },
    "ratings": 5,
    "meat_selection": [
      "Chicken",
      "Lamb",
      "Beef"],
    "inventory": {
      "Chicken": [
        { "item": "Chicken Thighs", "quantity": 0, "price": 5.99, "ratings": [4, 5, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Whole Chicken", "quantity": 15, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Half Chicken", "quantity": 10, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ],
      "Lamb": [
        { "item": "Lamb Mince", "quantity": 30, "price": 7.99, "ratings": [3, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Shoulder", "quantity": 20, "price": 13.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Leg", "quantity": 15, "price": 14.99, "ratings": [4, 4, 3] }

      ],
      "Beef": [
        { "item": "Beef Ribeye Steak", "quantity": 25, "price": 15.99, "ratings": [4, 3, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Ground Beef", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Beef Burgers", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ]
    },
    "reviews": [
      {
        "reviewer": "Charlie Brown",
        "rating": 4,
        "comment": "Good quality meat. Love the Chicken Thighs!",
        "specific_item": "Chicken Thighs"
      },
      {
        "reviewer": "Diana Miller",
        "rating": 2,
        "comment": "Great service and fresh Lamb Shoulder.",
        "specific_item": "Lamb Shoulder"
      },
      {
        "reviewer": "Edward Wilson",
        "rating": 3.5,
        "comment": "The Beef Ribeye Steak was a bit overcooked.",
        "specific_item": "Beef Ribeye Steak"

      }
    ]
  },
  {
    "id": "21",
    "title": "Halal Badr Food Store",
    "url": "https://www.google.com/maps/place/Sarwar+Halal+Butchers/@55.8732381,-4.5638721,11z/data=!4m11!1m3!2m2!1shalal+meat+shops+near+North+Lanarkshire!6e6!3m6!1s0x4888468b712ff2fb:0xff1e6611fc3d625d!8m2!3d55.8418574!4d-4.2723179!15sCidoYWxhbCBtZWF0IHNob3BzIG5lYXIgTm9ydGggTGFuYXJrc2hpcmVaKSInaGFsYWwgbWVhdCBzaG9wcyBuZWFyIG5vcnRoIGxhbmFya3NoaXJlkgEMYnV0Y2hlcl9zaG9w4AEA!16s%2Fg%2F11cmb1yktt?entry=ttu",
    "address": "151 Maryhill Rd, Glasgow G20 7XL",
    "category": "Supermarket",
    "latitude": "55.8736188",
    "longitude": "-4.2727057",
    "phone_number": "0141 332 0177",
    "opening": {
      "Wednesday": "11 am–7 pm",
      "Thursday": "11 am–7 pm",
      "Friday": "11 am–7 pm",
      "Saturday": "11 am–7 pm",
      "Sunday": "12–4 pm",
      "Monday": "11 am–7 pm",
      "Tuesday": "11 am–7 pm"
    },
    "ratings": 4.8,
    "meat_selection": [
      "Chicken",
      "Lamb",
      "Beef"],
    "inventory": {
      "Chicken": [
        { "item": "Chicken Thighs", "quantity": 0, "price": 5.99, "ratings": [4, 5, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Whole Chicken", "quantity": 15, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Half Chicken", "quantity": 10, "price": 8.99, "ratings": [5, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ],
      "Lamb": [
        { "item": "Lamb Mince", "quantity": 30, "price": 7.99, "ratings": [3, 4, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Shoulder", "quantity": 20, "price": 13.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Lamb Leg", "quantity": 15, "price": 14.99, "ratings": [4, 4, 3] }

      ],
      "Beef": [
        { "item": "Beef Ribeye Steak", "quantity": 25, "price": 15.99, "ratings": [4, 3, 5], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Ground Beef", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
        { "item": "Beef Burgers", "quantity": 35, "price": 9.99, "ratings": [5, 4, 4], "description": "Chicken thighs are succulent cuts of meat, known for their rich flavor and tender texture. With their versatility in the kitchen, chicken thighs offer endless possibilities for culinary creations. Whether grilled to perfection, roasted until golden and crispy, or simmered in savory sauces, these delectable cuts never fail to satisfy. Their juicy and flavorful meat pairs well with a variety of seasonings and marinades, making them a favorite choice for both home cooks and professional chefs alike. Whether served as the centerpiece of a hearty meal or incorporated into salads, soups, or stews, chicken thighs always deliver on taste and tenderness." },
      ]
    },
    "reviews": [
      {
        "reviewer": "Charlie Brown",
        "rating": 4,
        "comment": "Good quality meat. Love the Chicken Thighs!",
        "specific_item": "Chicken Thighs"
      },
      {
        "reviewer": "Diana Miller",
        "rating": 2,
        "comment": "Great service and fresh Lamb Shoulder.",
        "specific_item": "Lamb Shoulder"
      },
      {
        "reviewer": "Edward Wilson",
        "rating": 3,
        "comment": "The Beef Ribeye Steak was a bit overcooked.",
        "specific_item": "Beef Ribeye Steak"

      }
    ]
  }
]




/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// ENDPOINTS
router.get('/butchers', function (req, res) {
  butchers.length == 0 ? res.status(404).send() : res.status(200).send(butchers);
});

router.get('/butchers/:id', function (req, res) {
  var selectedbutchers = butchers.filter(function (butcher) {
    return butcher.id == req.params["id"];
  });
  selectedbutchers.length == 0 ? res.status(404).send() : res.status(200).send(selectedbutchers);
});



// ENDPOINTS
router.get('/users', function (req, res) {
  users.length == 0 ? res.status(404).send() : res.status(200).send(users);
});

router.get('/users/:id', function (req, res) {
  var selectedusers = users.filter(function (user) {
    return user.id == req.params["id"];
  });
  selectedusers.length == 0 ? res.status(404).send() : res.status(200).send(selectedusers);
});



router.get('/inventory', function (req, res) {
  var inventoryArray = Object.values(inventory);
  inventoryArray.length == 0 ? res.status(404).send() : res.status(200).send(inventoryArray);
});

router.get('/inventory/:id', function (req, res) {
  var selectedInventory = inventory[req.params.id];
  selectedInventory ? res.status(200).send(selectedInventory) : res.status(404).send();
});


router.get('/reviews', function (req, res) {
  var reviewsArray = Object.values(reviews);
  reviewsArray.length == 0 ? res.status(404).send() : res.status(200).send(reviewsArray);
});

router.get('/reviews/:id', function (req, res) {
  var selectedReviews = reviews[req.params.id];
  selectedReviews ? res.status(200).send(selectedReviews) : res.status(404).send();
});

module.exports = router;
