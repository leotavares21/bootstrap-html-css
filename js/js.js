	var	banners	=	["1 bitcoin pode valer mais de R$ 30,000,00",	"Vai perder essa?"];					
	var	bannerAtual	=	0;
				function	trocaBanner()	{									
				bannerAtual	=	(bannerAtual	+	1)	%	2;									
					document.querySelector(".msg").src	=	banners[bannerAtual].innerHTML;					
				}
	