export class Product {
    constructor(id, name, price, image, inStock, fastDelivery, ratings) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.image = image;
      this.inStock = inStock;
      this.fastDelivery = fastDelivery;
      this.ratings = ratings;
    }

    toJSON(){
        return{
                id: this.id,
                name: this.name,
                price: this.price,
                image: this.image,
                inStock: this.inStock,
                fastDelivery: this.fastDelivery,
                ratings: this.ratings,
                }
    }
    toString(){
        return `ID: ${this.id}` 

    }


  }

  
