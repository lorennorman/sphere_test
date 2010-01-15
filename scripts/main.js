RequireSystemScript("screen.js");

Number.prototype.grids = function() {
	return this * 17;
};

var PLAYER = "Circle Man";



function game() 
{
	CreatePerson(PLAYER, "circle.rss", false);
	AttachInput(PLAYER);
	AttachCamera(PLAYER);
	MapEngine("valley_village.rmp", 60);
}

function change_map(map_name, x, y)
{
	FadeOut(700);
	Rectangle(0,0,GetScreenWidth(), GetScreenHeight(), Black);
	ChangeMap(map_name+".rmp");
	if(x && y)
	{
	  SetPersonX(PLAYER, x.grids());
	  SetPersonY(PLAYER, y.grids());
	}
	UpdateMapEngine();
	RenderMap();
	FadeIn(700);
}

function consume_keys()
{
	while(AreKeysLeft()) { GetKey(); }
}