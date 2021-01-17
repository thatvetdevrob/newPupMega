/** 
 * Products store
 * @component store
 */

import axios from 'axios';

// STORE
const initialState = [
  {"name":"Mushroom",
  "price": 200,
  "url": "https://www.mariowiki.com/images/9/94/MushroomMarioKart8.png",
  "description": "Heal 20HP",
  "category": "Items"
},
{"name":"Delfino Water",
"price": 400,
"url": "https://www.mariowiki.com/images/4/4f/Water_Bottles_SMS.png",
"description": "Heals 30HP",
"category": "Items"
},
{"name":"Fire Flower",
"price": 60,
"url": "https://www.mariowiki.com/images/7/7e/New_Super_Mario_Bros._U_Deluxe_Fire_Flower.png",
"description": "Hit all enemies!",
"category": "Items"
},
{"name":"Happy Heart",
"price": 200,
"url": "https://www.mariowiki.com/images/8/8e/Heart_SMO_unused_shop_icon.png",
"description": "Heal all HP",
"category": "Items"
},
{"name":"Life 'Shroom",
"price": 400,
"url": "https://www.mariowiki.com/images/b/b4/1-Up_Mushroom_Artwork_-_Super_Mario_3D_World.png",
"description": "Revives KO ally.",
"category": "Items"
},
{"name":"F.L.U.D.D.",
"price": 9400,
"url": "https://www.mariowiki.com/images/3/30/FLUDD_SMS.png",
"description": "Very polite item.",
"category": "Items"
},
{"name":"Red Shell",
"price": 50,
"url": "https://www.mariowiki.com/images/9/95/RedShellMK8.png",
"description": "Hit enemies!",
"category": "Items"
},
{"name":"Red Shell Pack",
"price": 140,
"url": "https://www.mariowiki.com/images/5/56/TripleRedShellsMK8.png",
"description": "Hit more enemies!",
"category": "Items"
},
{"name":"Bob-omb",
"price": 150,
"url": "https://www.mariowiki.com/images/9/9e/Bobomb_-_MarioPartyStarRush.png",
"description": "Cute weapon!",
"category": "Items"
},
{"name":"Power Flower",
"price": 60,
"url": "https://www.mariowiki.com/images/4/48/PowerflowerYS.png",
"description": "Yoshi love these",
"category": "Items"
},
{"name":"Super Suit",
"price": 2800,
"url": "https://www.mariowiki.com/images/e/e0/SMRPG_SuperSuit.PNG",
"description": "A truly fine suit.",
"category": "Armor"
},
{"name":"Thick Shirt",
"price": 200,
"url": "https://www.mariowiki.com/images/8/8f/ThickShirt.png",
"description": "A padded shirt.",
"category": "Armor"
},
{"name":"Polka Dress",
"price": 800,
"url": "https://www.mariowiki.com/images/3/33/SMRPG_Polkadress.png",
"description": "A flashy dress.",
"category": "Armor"
},
{"name":"Nautical Dress",
"price": 700,
"url": "https://www.mariowiki.com/images/d/dd/SMRPG_Nauticadress.png",
"description": "A female sailor's dress.",
"category": "Armor"
},
{"name":"Fire Dress",
"price": 900,
"url": "https://www.mariowiki.com/images/6/6d/SMRPG_Firedress.png",
"description": "A determined woman's dress.",
"category": "Armor"
},
{"name":"Royal dress",
"price": 2000,
"url": "https://www.mariowiki.com/images/1/1b/SMRPG_Royaldress.png",
"description": "A legendary dress.",
"category": "Armor"
},
{"name":"Happy Shell",
"price": 500,
"url": "https://www.mariowiki.com/images/e/ec/SMRPG_Happyshell.png",
"description": "A lucky shell.",
"category": "Armor"
},
{"name":"Fire Shell",
"price": 900,
"url": "https://www.mariowiki.com/images/b/b0/SMRPG_Fireshell.png",
"description": "Determined person's shell.",
"category": "Armor"
},
{"name":"Heal Shell",
"price": 1500,
"url": "https://www.mariowiki.com/images/c/cb/SMRPG_Healshell.png",
"description": "A legendary shell.",
"category": "Armor"
},
{"name":"Star Cape",
"price": 800,
"url": "https://www.mariowiki.com/images/d/d9/StarCape.png",
"description": "A legendary cape.",
"category": "Armor"
},
{"name":"Ultra Hammer",
"price": 1400,
"url": "https://www.mariowiki.com/images/1/19/SMRPGUltra_Hammer.png",
"description": "The ultimate hammer!",
"category": "Weapons"
},
{"name":"Super Slap",
"price": 2400,
"url": "https://www.mariowiki.com/images/7/72/SMRPG_SuperSlap.png",
"description": "The Princess' mega-slap!",
"category": "Weapons"
},
{"name":"Parasol",
"price": 1100,
"url": "https://www.mariowiki.com/images/9/90/SMRPG_Parasol.png",
"description": "Inflicts serious pain!",
"category": "Weapons"
},
{"name":"Star Gun",
"price": 2100,
"url": "https://www.mariowiki.com/images/c/ce/SMRPG_StarGun.png",
"description": "Try shooting stars!",
"category": "Weapons"
},
{"name":"Chain Chomp",
"price": 1300,
"url": "https://www.mariowiki.com/images/9/90/SMRPG_Chomp.png",
"description": "Just spin me at an enemy!",
"category": "Weapons"
},
{"name":"Spiked Link",
"price": 1400,
"url": "https://www.mariowiki.com/images/b/b5/SMRPG_SpikedLink.png",
"description": "A studded ball and chain!",
"category": "Weapons"
},
{"name":"Drill Claw",
"price": 2300,
"url": "https://www.mariowiki.com/images/7/75/SMRPG_DrillClaw.png",
"description": "A drilling claw!",
"category": "Weapons"
},
{"name":"Froggie Stick",
"price": 900,
"url": "https://www.mariowiki.com/images/8/8f/SMRPG_FroggieStick.png",
"description": "Frogfucius made it!",
"category": "Weapons"
},
{"name":"Sonic Cymbals",
"price": 1100,
"url": "https://www.mariowiki.com/images/3/38/SMRPG_SonicCymbals.png",
"description": "Puts noise to work for you!",
"category": "Weapons"
},
{"name":"Lazy Shell",
"price": 4100,
"url": "https://www.mariowiki.com/images/7/70/SMRPG_LazyShell.png",
"description": "Toss a shell at an enemy!",
"category": "Weapons"
},
{"name":"Power Star",
"price": 2400,
"url": "https://www.mariowiki.com/images/d/d6/Captain_toad_powerstar.png",
"description": "Power Star!",
"category": "Accessories"
},
{"name":"Silver Star",
"price": 2600,
"url": "https://www.mariowiki.com/images/8/8f/Silver_Star_Artwork_-_Super_Mario_Galaxy_2.png",
"description": "Secret star!",
"category": "Accessories"
},
{"name":"Green Star",
"price": 1400,
"url": "https://www.mariowiki.com/images/3/31/Green_Star_Artwork_-_Super_Mario_3D_World.png",
"description": "Rare star!",
"category": "Accessories"
},
{"name":"Shine Sprite",
"price": 1700,
"url": "https://www.mariowiki.com/images/b/be/SMS_Shine_Sprite_Artwork.png",
"description": "One of a kind star!",
"category": "Accessories"
},
{"name":"Grand Star",
"price": 2700,
"url": "https://www.mariowiki.com/images/4/4d/MKT_Icon_GrandStar.png",
"description": "Cosmic star!",
"category": "Accessories"
},
{"name":"Bean Star",
"price": 9700,
"url": "https://www.mariowiki.com/images/4/40/MLSS_-_Beanstar_Artwork.png",
"description": "Organic star!",
"category": "Accessories"
},
{"name":"Star Egg",
"price": 1700,
"url": "https://www.mariowiki.com/images/9/98/Star_Egg_SMRPG_artwork.png",
"description": "Hit all enemies!",
"category": "Accessories"
},
{"name":"Red Switch Poster",
"price": 300,
"url": "https://www.mariowiki.com/images/8/8f/YIDS_Redswitch.jpg",
"description": "Wall Art",
"category": "Accessories"
},
{"name":"Switch Poster",
"price": 300,
"url": "https://www.mariowiki.com/images/7/7f/%21_Switch_Building_SuperMarioKun_4.jpg",
"description": "Wall Art",
"category": "Accessories"
},
{"name":"POW Poster",
"price": 300,
"url": "https://www.mariowiki.com/images/3/32/POWBlock_SuperMarioKun.jpg",
"description": "Wall Art",
"category": "Accessories"
}


];

// REDUCERS
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'FILTER': // 'CHANGE'
      let filteredProducts = [];
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].category === payload) {
          filteredProducts.push(state.products[i]);
        }
        return { ...state, products: filteredProducts }
      }
    case 'FETCH_PRODUCTS':
      return payload;
    case 'INCREMENT_INVENTORY':
      //TODO: get this functioning

      // from class
      // case 'INCREMENT_VOTES':
      //   return state.map(candidate => candidate.id === payload.id ? payload : candidate);


      console.log('In the increment inventory');
      return state;
    case 'LOWER_INVENTORY':
      console.log('In the lower inventory case');
      // TODO: Get this functioning
      return state;
    default:
      return state;
  }
}

// ACTIONS

export const fetchProducts = () => async (dispatch, getState) => {
  const response = await axios.get('http://localhost:3001/products');
  dispatch({
    type: 'FETCH_PRODUCTS',
    payload: response.data,
  });
}

export const filter = (categoryName) => {
  return {
    type: 'FILTER',
    payload: categoryName,
  }
}

export const incrementInventory = (id) => {
  return {
    type: 'INCREMENT_INVENTORY',
    payload: id,
  }
}

export const lowerInventory = (product) => {
  return {
    type: 'LOWER_INVENTORY',
    payload: product,
  }
}