class box
{
    constructor(x,y)
    {
       this.body.Bodies.rectangle(x , y , 200 , 20);
       World.add(world ,this.body);
    }
    display()
    {
        //rectMode(CENTER);
       // rect(0 , 0 , 200 , 20);
    }
}
   
