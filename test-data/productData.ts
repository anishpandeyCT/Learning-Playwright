
export interface Product {

    name: string;
    description: string;
    price: string;
}

export const Products = {

    backpack: {
        name: "Sauce Labs Backpack",
        description:
            "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.",
        price: "$29.99"
    },

    bikeLight: {
        name: "Sauce Labs Bike Light",
        description:
            "A red light isn't the desired state in testing but it sure helps when riding your bike at night.",
        price: "$9.99"
    },

    boltTShirt: {
        name: "Sauce Labs Bolt T-Shirt",
        description:
            "Get your testing superhero on with the Sauce Labs bolt T-Shirt.",
        price: "$15.99"
    },

    fleeceJacket: {
        name: "Sauce Labs Fleece Jacket",
        description:
            "It's not every day that you come across a midweight quarter-zip fleece jacket.",
        price: "$49.99"
    },

    onesie: {
        name: "Sauce Labs Onesie",
        description:
            "Rib snap infant onesie for the junior automation engineer.",
        price: "$7.99"
    },

    redTShirt: {
        name: "Test.allTheThings() T-Shirt (Red)",
        description:
            "This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard.",
        price: "$15.99"
    }

} satisfies Record<string, Product>;