//判断大鱼和果实的距离
function momFruitsCollision()
{
	for(var i = 0;i < fruit.num; i++)
	{
		if(fruit.alive[i])
		{
			//calculate length
			var l = calLength2(fruit.x[i], fruit.y[i],mom.x,mom.y);
			if(l < 900)
			{
				//fruit eaten
				fruit.dead(i);
			}
		}
	}
}

//判断大鱼和果实的距离
function momFruitsCollision()
{
	for(var i = 0;i < fruit.num; i++)
	{
		if(fruit.alive[i])
		{
			//calculate length
			var l = calLength2(fruit.x[i], fruit.y[i],mom.x,mom.y);
			if(l < 900)
			{
				//fruit eaten
				fruit.dead(i);
			}
		}
	}
}
<<<<<<< HEAD
//mom baby collision
function momBabyCollision()
{
	var l = calLength2(mom.x, mom.y, baby.x, baby,y)

}
=======
>>>>>>> 98dce14c16400305990b104941f013ead4446ff6

