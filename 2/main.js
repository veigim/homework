var goods = [{
        name: "potato",
        weight: 25
    },  
    {   
        name: "apple",
        weight: 8
    },   
    {   
        name: "banana",
        weight: 3
    }
];
var box = [{
        name: "big",
        weight: 20
    },
    {
        name: "medium",
        weight: 7
    },
    {
        name: "small",
        weight: 3
    }
];


var item, quantity_B, quantity_M, quantity_S ;
    quantity_B = 0;
    quantity_M = 0;
    quantity_S = 0;

item: while (true) { 

    item = prompt ("какой продукт? (potato|apple|banana)");
    if (item === null) {
        alert("bye!!!");
        break item;
    }
    for (var i = 0; i < goods.length; i++) {
        if (goods[i].name === item) {
            if (goods[i].weight / box[0].weight <= box[2].weight / box[0].weight) {
                quantity_S++ ;
                document.write (quantity_S + "x " + box[2].name);
            }
            else if ((goods[i].weight / box[0].weight <= box[1].weight / box[0].weight) && 
                    (goods[i].weight / box[0].weight > box[2].weight / box[0].weight)) 
            {
                quantity_M++ ;
                document.write (quantity_M + "x " + box[1].name);
            }
            else if ((goods[i].weight / box[0].weight <= box[0].weight / box[0].weight) &&
                    (goods[i].weight / box[0].weight > box[1].weight / box[0].weight)) 
            {
                quantity_B++ ;
                document.write (quantity_B + "x " + box[0].name);
            }
            else if ((goods[i].weight / box[0].weight > box[0].weight / box[0].weight) &&
                    (goods[i].weight / box[0].weight <= (box[2].weight+box[0].weight) / box[0].weight)) 
            {
                quantity_S++ ;
                quantity_B++ ;
                document.write ((quantity_B + "x " + box[0].name) + " and " + ( quantity_S + "x " + box[1].name));
            }
            else if ((goods[i].weight / box[0].weight <= (box[0].weight+box[1].weight) / box[0].weight) &&
                    (goods[i].weight / box[0].weight > (box[2].weight+box[0].weight) / box[0].weight)) 
            {
                quantity_M++ ;
                quantity_B++ ;
                document.write ((quantity_B + "x " + box[0].name) + " and " + ( quantity_M + "x " + box[1].name));
            }
            else if ((goods[i].weight / box[0].weight > (box[0].weight+box[1].weight) / box[0].weight) &&
                    (goods[i].weight / box[0].weight <= (2*box[0].weight) / box[0].weight)) 
            {
                quantity_B = 2 ;
                document.write (quantity_B + "x " + box[0].name)
            }
            else {
                document.write ("more than 2 big boxes");
            }


            // if ((goods[i].weight % box[0].weight) > 7){
            //     quantity++ ;
            //     document.write (quantity + "x " + box[0].name);
            
            // if ((goods[i].weight % box[0].weight) <= 3){
            //     quantity++ ;
            //     document.write (quantity + "x " + box[2].name)
            // }
            // if (((goods[i].weight % box[0].weight) > 7) && ((goods[i].weight / box[0].weight) >= 1)) 
            //     {
            //         quantity = Math.floor (goods[i].weight / box[0].weight) + 1;
            //         document.write (quantity + "x " + box[0].name)
            //     }
            // else if (((goods[i].weight % box[0].weight) <= 3) && ((goods[i].weight / box[0].weight) >= 1)) 
            //     {
            //         quantity = Math.floor (goods[i].weight / box[0].weight);
            //         document.write (quantity + "x " + box[0].name +  " 1x "  + box[2].name)
            //     }
            // else if (((goods[i].weight % box[0].weight) > 3) && ((goods[i].weight % box[0].weight) <=7))
            //     {
            //          quantity++ ;
            //          document.write (quantity + "x " + box[1].name)
            //     }  
            // else if ((goods[i].weight % box[0].weight) <= 3)  
            //     {
            //         quantity++ ; 
            //         document.write (quantity + "x " + box[2].name)    
            //     }
        break item 
        
    }

}}
