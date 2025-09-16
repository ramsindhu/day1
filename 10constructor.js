//constructor 
//class---->constructor--->object--->output 

class car {
    constructor(brand,price,color){
        this.brand=brand
        this.price=price
        this.color=color 
    }
    output(){console.log(`I need ${this.brand} car\nThe maximum price is ${this.price} \nThe car fully colored by ${this.color} color`)}
               //hre the output is object
}
 const finaloutput = new car("Rolce Roice","3Cr","Black");     //its sytax new cnt be chng. car is class name(1st line)finaloutput is var name
 finaloutput.output()  



 