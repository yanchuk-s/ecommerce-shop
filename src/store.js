import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [
      {
        id: 1,
        title: 'clothing'
      },
      {
        id: 2,
        title: 'shoes'
      },
      {
        id: 3,
        title: 'outerwear'
      },
      {
        id: 4,
        title: 'accessories'
      }
    ],
    lables: [
      {
        id: 1,
        title: 'new'
      },
      {
        id: 2,
        title: 'sale'
      }
    ],
    products: [
      {
        id: 1,
        title: 'New Balance 998',
        slug: 'shoes-new-balance-998',
        generalPhoto: 'https://img.brandshop.ru/cache/products/m/muzhskie-krossovki-new-balance-military-pack-m998awa-green-brown-0_676x676.jpg',
        photos: [
          {
            src: 'https://img.brandshop.ru/cache/products/m/muzhskie-krossovki-new-balance-military-pack-m998awa-green-brown-0_676x676.jpg'
          },
          {
            src: 'https://img.brandshop.ru/cache/products/m/muzhskie-krossovki-new-balance-military-pack-m998awa-green-brown-1_676x676.jpg'
          },
          {
            src: 'https://img.brandshop.ru/cache/products/m/muzhskie-krossovki-new-balance-military-pack-m998awa-green-brown-3_676x676.jpg'
          }
        ],
        price: '140',
        sizes: [
          {
            size: '41'
          },
          {
            size: '42'
          },
          {
            size: '43'
          }
        ],
        category: 2,
        label: 1,
        stock: 1,
        article: 'AA-1488',
        producingСountry: 'England',
        description: 'Мужские кроссовки New Balance, созданные на основе легендарной беговой модели 998. Верхняя часть модели выполнена из сочетания натуральной кожи, замши и нейлона. Традиционный и проверенный временем дизайн дополнен удобной подошвой с технологией ABZORB, которая обеспечивает отличную амортизацию в любых условиях. Кроссовки представлены в комбинированном цветовом решении, которое будет уместно в любом образе.'
      },
      {
        id: 2,
        title: 'New Balance 574',
        slug: 'shoes-new-balance-574',
        generalPhoto: 'https://img.brandshop.ru/cache/products/m/muzhskie-krossovki-new-balance-ml574egg-essential-grey-0_676x676.jpg',
        photos: [
          {
            src: 'https://img.brandshop.ru/cache/products/m/muzhskie-krossovki-new-balance-ml574egg-essential-grey-0_676x676.jpg'
          },
          {
            src: 'https://img.brandshop.ru/cache/products/m/muzhskie-krossovki-new-balance-ml574egg-essential-grey-3_676x676.jpg'
          },
          {
            src: 'https://img.brandshop.ru/cache/products/m/muzhskie-krossovki-new-balance-ml574egg-essential-grey-1_676x676.jpg'
          }
        ],
        price: '88',
        sizes: [
          {
            size: '40'
          },
          {
            size: '43'
          },
          {
            size: '44'
          }
        ],
        category: 2,
        label: undefined,
        stock: 1,
        article: 'AA-1488',
        producingСountry: 'England',
        description: 'Мужские кроссовки New Balance 574 - одна из самых узнаваемых и классических моделей 57-й серии компании New Balance. Выполненные из текстиля, нейлоновой сетки и замши кроссовки, впервые увидевшие свет в 1986 году, являются воплощением традиций и представлений американского бренда о спортивной обуви, обладая самым узнаваемым силуэтом линейки. Верх модели установлен на лёгкую подошву с обеспечивающей высокий уровень комфорта технологией амортизации Encap, которая дополнена контрастной подмёткой. Язычок модели украшен крупным логотипом бренда. Кроссовки представлены в оригинальной расцветке, дополненной контрастными акцентами'
      },
      {
        id: 3,
        title: 'Lyle & Scott ',
        slug: 'jacket-lyle-scott-black',
        generalPhoto: 'https://img.brandshop.ru/cache/products/m/muzhskaya-kurtka-vetrovka-lyle-scott-zip-through-hooded-snow-white-0_676x676.jpg',
        photos: [
          {
            src: 'https://img.brandshop.ru/cache/products/m/muzhskaya-kurtka-vetrovka-lyle-scott-zip-through-hooded-snow-white-0_676x676.jpg'
          },
          {
            src: 'https://img.brandshop.ru/cache/products/m/muzhskaya-kurtka-vetrovka-lyle-scott-zip-through-hooded-snow-white-1_676x676.jpg'
          },
          {
            src: 'https://img.brandshop.ru/cache/products/m/muzhskaya-kurtka-vetrovka-lyle-scott-zip-through-hooded-snow-white-01-12_676x676.jpg'
          }
        ],
        price: '110',
        sizes: [
          {
            size: 'S'
          },
          {
            size: 'M'
          },
          {
            size: 'L'
          }
        ],
        category: 3,
        label: undefined,
        stock: 1,
        article: 'AA-1488',
        producingСountry: 'England',
        description: 'Универсальная мужская куртка Lyle & Scott, выполненная из прочной ткани на основе нейлона и хлопка. Традиционный силуэт, свободный крой и застёжка на молнии. Удобный капюшон, эластичные манжеты и два кармана для рук спереди. Куртка представлена в однотонной расцветке, украшенной фирменной вышивкой на груди. Практичное дополнение к спортивному или расслабленному образу'
      },
      {
        id: 4,
        title: 'The North Face',
        slug: 'jacket-the-north-face-black',
        generalPhoto: 'https://img.brandshop.ru/cache/products/m/muzhskaya-kurtka-vetrovka-the-north-face-mountain-quest-tnf-black-tnf-white-tnf-white-0_676x676.jpg',
        photos: [
          {
            src: 'https://img.brandshop.ru/cache/products/m/muzhskaya-kurtka-vetrovka-the-north-face-mountain-quest-tnf-black-tnf-white-tnf-white-0_676x676.jpg'
          },
          {
            src: 'https://img.brandshop.ru/cache/products/m/muzhskaya-kurtka-vetrovka-the-north-face-mountain-quest-tnf-black-tnf-white-tnf-white-1_676x676.jpg'
          },
          {
            src: 'https://img.brandshop.ru/cache/products/m/muzhskaya-kurtka-vetrovka-the-north-face-mountain-quest-tnf-black-tnf-white-tnf-white-01-12_676x676.jpg'
          }
        ],
        price: '240',
        sizes: [
          {
            size: 'XS'
          },
          {
            size: 'S'
          },
          {
            size: 'M'
          }
        ],
        category: 3,
        label: 2,
        stock: 1,
        article: 'AA-1488',
        producingСountry: 'England',
        description: 'Мужская куртка The North Face Mountain выполнена из полиэстера с применением технологии DryVent, которая обеспечивает ветро - и водонепроницаемость. Модель имеет прямой крой, длину ниже бедра, застежку на молнии, рукава с манжетами на резинке и регулируемый капюшон с козырьком. Куртка представлена в черном цвете и дополнена нашивкой с логотипом бренда на рукаве.'
      },
      {
        id: 5,
        title: 'The North Face ',
        slug: 'sweatshirt-the-north-face',
        generalPhoto: 'https://img.brandshop.ru/cache/products/m/muzhskaya-tolstovka-the-north-face-fine-crew-leopard-yellow-genesis-print-0_676x676.jpg',
        photos: [
          {
            src: 'https://img.brandshop.ru/cache/products/m/muzhskaya-tolstovka-the-north-face-fine-crew-leopard-yellow-genesis-print-0_676x676.jpg'
          },
          {
            src: 'https://img.brandshop.ru/cache/products/m/muzhskaya-tolstovka-the-north-face-fine-crew-leopard-yellow-genesis-print-0_676x676.jpg'
          },
          {
            src: 'https://img.brandshop.ru/cache/products/m/muzhskaya-tolstovka-the-north-face-fine-crew-leopard-yellow-genesis-print-0_676x676.jpg'
          }
        ],
        price: '110',
        sizes: [
          {
            size: 'M1'
          },
          {
            size: 'XL'
          },
          {
            size: 'XXL'
          }
        ],
        category: 1,
        label: 2,
        stock: 1,
        article: 'AA-1488',
        producingСountry: 'England',
        description: 'Мужская толстовка The North Face, выполненная из хлопка премиального качества в сочетании с полиэстером, имеет классический силуэт, манжеты на рукавах, вороте и подоле. Модель представлена в оригинальной расцветке и дополнена фирменным брендингом.'
      },
      {
        id: 6,
        title: 'Stussy',
        slug: 'sweatshirt-stussy-white',
        generalPhoto: 'https://img.brandshop.ru/cache/products/m/muzhskoj-longsliv-stussy-dolls-pigment-dyed-natural-0_676x676.jpg',
        photos: [
          {
            src: 'https://img.brandshop.ru/cache/products/m/muzhskoj-longsliv-stussy-dolls-pigment-dyed-natural-0_676x676.jpg'
          },
          {
            src: 'https://img.brandshop.ru/cache/products/m/muzhskoj-longsliv-stussy-dolls-pigment-dyed-natural-model-02_676x676.jpg'
          },
          {
            src: 'https://img.brandshop.ru/cache/products/m/muzhskoj-longsliv-stussy-dolls-pigment-dyed-natural-model-03_676x676.jpg'
          }
        ],
        price: '220',
        sizes: [
          {
            size: 'M'
          },
          {
            size: 'L'
          },
          {
            size: 'XL'
          }
        ],
        category: 1,
        label: 2,
        stock: 1,
        article: 'AA-1488',
        producingСountry: 'England',
        description: 'Мужской лонгслив от культового калифорнийского бренда Stussy выполнен из премиального хлопка. Модель имеет традиционный крой, длину ниже бедра, эластичные манжеты на рукавах и круглый эластичный ворот. Минималистичный дизайн лонгслива однотонной расцветки разбавлен фирменным брендингом в виде логотипа в области груди и уникальным принтов от марки на рукаве.'
      },
      {
        id: 7,
        title: 'Fjallraven',
        slug: 'backpack-fjallraven',
        generalPhoto: 'https://img.brandshop.ru/cache/products/r/ryukzak-fjallraven-kanken-navy-1_676x676.jpg',
        photos: [
          {
            src: 'https://img.brandshop.ru/cache/products/r/ryukzak-fjallraven-kanken-navy-1_676x676.jpg'
          },
          {
            src: 'https://img.brandshop.ru/cache/products/r/ryukzak-fjallraven-kanken-navy-10_676x676.jpg'
          },
          {
            src: 'https://img.brandshop.ru/cache/products/r/ryukzak-fjallraven-kanken-navy-9_676x676.jpg'
          }
        ],
        price: '55',
        sizes: [
          {
            size: '10L'
          }
        ],
        category: 4,
        label: 1,
        stock: 3,
        article: 'AA-1488',
        producingСountry: 'England',
        description: 'Легендарный шведский рюкзак Kanken, ставший символом бренда, изготовлен из синтетического материала Vinylon F. В рюкзаке одно основное отделение снабженное молнией. Также на Kanken есть два боковых кармана, которые подойдут для мобильного телефона, плеера, солнцезащитных очков, напитков. В центральный карман можно положить ключи от дома, кошелёк, кредитные карты. На верхней части рюкзака пришиты удобные ручки, которые позволяют использовать его и как сумку.'
      },
      {
        id: 8,
        title: 'Napapijri',
        slug: 'backpack-napapijiri',
        generalPhoto: 'https://img.brandshop.ru/cache/products/r/ryukzak-napapijri-hala-blue-marine-0_676x676.jpg',
        photos: [
           {
            src: 'https://img.brandshop.ru/cache/products/r/ryukzak-napapijri-hala-blue-marine-0_676x676.jpg'
          },
          {
            src: 'https://img.brandshop.ru/cache/products/r/ryukzak-napapijri-hala-blue-marine-2_676x676.jpg'
          },
          {
            src: 'https://img.brandshop.ru/cache/products/r/ryukzak-napapijri-hala-blue-marine-3_676x676.jpg'
          }
        ],
        price: '60',
        sizes: [
          {
            size: '15L'
          }
        ],
        category: 4,
        label: 1,
        stock: 2,
        article: 'AA-1488',
        producingСountry: 'England',
        description: 'Рюкзак Napapijri Hala изготовлен из практичного полиэстера. Классическая модель для повседневного использования оснащена вместительным основным отсеком на двойной молнии. Внутри находится отделение для ноутбука с ремнем на липучке. Мягкая задняя панель и регулируемые плечевые ремни обеспечивают комфорт в течение всего дня, даже если рюкзак полностью заполнен. Спереди расположен еще один карман на молнии для вещей, к которым требуется быстрый доступ. Рюкзак оснащен ручкой для переноски. Завершением дизайна служит брендинг на фронтальном кармане и ремнях. Контрастные ленты с логотипом итальянской марки, выполненные в современной манере, являются отсылкой к классическим базовым элементам гардероба из прошлых коллекций.'
      }
    ],
    bigCart: [],
    smallCart:[],
    loaderRoute: false
  },
  getters: {
    getAllCategories: state => {
      return state.categories
    },
    getAllLables: state => {
      return state.lables
    },
    getAllProducts: state => {
      return state.products
    },
    getCategorrByTitle: state => title => {
      return state.categories.find(category => category.title === title);
    },
    getGategoryForItem: state => id => {
      return state.categories.find(category => category.id === id);
    },
    getProductBySlug: state => slug => {
      return state.products.find(product => product.slug === slug)
    },
    getItemByCategory: state => id => {
      let items = []
      state.products.forEach(function(item) {
        if(item.category === id){
          items.push(item)
        }
      });
      return items
    },
    getLabelByTitle: state => title => {
      return state.lables.find(lable => lable.title === title);
    },
    getItemByLabel: state => id => {
      let itemsLabel = []
      state.products.forEach(function(item) {
        if(item.label === id){
          itemsLabel.push(item)
        }
      });
      return itemsLabel
    },
    getLoaderStatus: state => {
      return state.loaderRoute
    },
    getSmallCart: state => {
      return state.smallCart
    },
    getSmallCartLenght: state => {
      return state.smallCart.length
    },
    getBigCart: state => {
      return state.bigCart
    }
  },
  mutations: {
    localSaveSmallCart(state){
      const smallCart = JSON.stringify(state.smallCart);
      localStorage.setItem('smallCart', smallCart);
    },
    localSaveBigCart(state){
      const bigCart = JSON.stringify(state.bigCart);
      localStorage.setItem('bigCart', bigCart);
    },
    showHideLoader(state){
      state.loaderRoute =! state.loaderRoute
    },
    addProductSmallcart(state, product){
      state.smallCart.push(product)
    },
    deleteProductSmallcart(state, product){
      state.smallCart.splice(product, 1);
      state.bigCart.splice(product, 1);
    },
    addProductBigCart(state, product){
      state.bigCart.push(product)
    },
    deleteProductBigcart(state, product){
      state.bigCart.splice(product, 1);
      state.smallCart.splice(product, 1);
    },
  },
  actions: {
    showHideLoader({commit}){
      commit('showHideLoader')
    },
    addProductSmallcart({commit}, product){
      let productTosmallCart =
        {
          size: product.size,
          id: product.id,
          category: product.category
        }
      this.state.products.forEach(function(item) {
        if(item.id === product.id){
          productTosmallCart.title = item.title
          productTosmallCart.slug = item.slug
          productTosmallCart.generalPhoto = item.generalPhoto
          productTosmallCart.price = item.price
        }
      });
      commit('addProductSmallcart', productTosmallCart)
      commit('localSaveSmallCart')
    },
    addProductBigCart({commit}, product){
      let productBigCart ={
          size: product.size,
          id: product.id,
          category: product.category
      }
      this.state.products.forEach(function(item) {
        if(item.id === product.id){
          productBigCart.title = item.title
          productBigCart.slug = item.slug
          productBigCart.generalPhoto = item.generalPhoto
          productBigCart.price = item.price
          productBigCart.article = item.article
        }
      });
      commit('addProductBigCart', productBigCart)
      commit('localSaveBigCart')
    },
    deleteProductSmallcart({commit}, product){
      let productIndex
      this.state.smallCart.forEach(function(item, index) {
        if(item.id == product.id && item.size == product.size){
          productIndex = index
        }
      });
      commit('deleteProductSmallcart', productIndex)
      commit('localSaveSmallCart')
      commit('localSaveBigCart')
    },
    deleteProductBigcart({commit}, product){
      let productIndex
      this.state.bigCart.forEach(function(item, index) {
        if(item.id == product.id && item.size == product.size){
          productIndex = index
        }
      });
      commit('deleteProductBigcart', productIndex)
      commit('localSaveBigCart')
      commit('localSaveSmallCart')
    }
  }
})
