var fruitObj = function()
{
	this.alive = [];//bool
}
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function()
{
	for(var i=0; i< this.num;i++)
	{
		this.alive[i] = false;
	}
}
fruitObj.prototype.draw = function()
{
	console.log(1)
}