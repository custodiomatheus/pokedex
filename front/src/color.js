export const color = (type) => {
    return type === 'grass' || type === 'standard-balls'  ? '#5DBE61' : 
		type === 'fire' || type === 'special-balls'  ? '#F57568' :
		type === 'water' || type === 'healing'  ? '#58A7F2' : 
		type === 'normal' || type === 'status-cures'  ? '#ABA873' :
		type === 'flying' || type === 'revival'  ? '#075663' :
		type === 'bug' || type === 'pp-recovery'  ? '#90B92D' : 
		type === 'poison' || type === 'vitamins'  ? '#60127F' : 
		type === 'electric' || type === 'stat-boosts'  ? '#FACA4A' : 
		type === 'ground' || type === 'spelunking'  ? '#BEAB20' : 
		type === 'fighting' || type === 'collectibles'  ? '#7F0A10' : 
		type === 'psychic' || type === 'evolution'  ? '#F45691' : 		
		type === 'rock' || type === 'loot'  ? '#463F25' : 
		type === 'ice' || type === 'dex-completion'  ? '#114EAD' : 
		type === 'ghost' || type === 'mulch'  ? '#462A52' : 
		type === 'dragon' || type === 'healing'  ? '#8954FC' : 
		type === 'dark' || type === 'all-mail'  ? '#141414' : 
		type === 'steel' || type === 'species-specific'  ? '#7A8D89' : 
		type === 'fairy' || type === 'medicine'  ? '#F77DA6' : '';
}

export const itemTypeColor = (type) => {
	return type === 'standard-balls' ? '#5DBE61' : 
	type === 'special-balls' ? '#F57568' :
	type === 'healing' ? '#58A7F2' : 
	type === 'status-cures' ? '#ABA873' :
	type === 'revival' ? '#075663' :
	type === 'pp-recovery' ? '#90B92D' : 
	type === 'vitamins' ? '#60127F' : 
	type === 'stat-boosts' ? '#FACA4A' : 
	type === 'spelunking' ? '#BEAB20' : 
	type === 'flutes' ? '#7F0A10' : 
	type === 'collectibles' ? '#F45691' : 		
	type === 'evolution' ? '#463F25' : 
	type === 'loot' ? '#114EAD' : 
	type === 'dex-completion' ? '#462A52' : 
	type === 'mulch' ? '#8954FC' : 
	type === 'all-mail' ? '#141414' : 
	type === 'species-specific' ? '#7A8D89' : 
	type === 'medicine' ? '#F77DA6' : '';
}

export const typeColor = (type) => {
    return type === 'grass' ? '#1F4020' : 
		type === 'fire' ? '#753831' :
		type === 'water' ? '#294F73' : 
		type === 'normal' ? '#6B6948' :
		type === 'flying' ? '#05414A' :
		type === 'bug' ? '#2D3B0E' : 
		type === 'poison' ? '#9A1DCC' : 
		type === 'electric' ? '#7A6425' : 
		type === 'ground' ? '#403A0B' : 
		type === 'fighting' ? '#CC101A' : 
		type === 'psychic' ? '#752945' : 		
		type === 'rock' ? '#91834D' : 
		type === 'ice' ? '#196FFA' : 
		type === 'ghost' ? '#724585' : 
		type === 'dragon' ? '#44297D' : 
		type === 'dark' ? '#616161' : 
		type === 'steel' ? '#434D4A' : 
		type === 'fairy' ? '#783D51' : '';
}

export const typeItem = (type) => {
	return type === 'standard-balls' ? '#1F4020' : 
	type === 'special-balls' ? '#753831' :
	type === 'healing' ? '#294F73' : 
	type === 'status-cures' ? '#6B6948' :
	type === 'revival' ? '#05414A' :
	type === 'pp-recovery' ? '#2D3B0E' : 
	type === 'vitamins' ? '#9A1DCC' : 
	type === 'stat-boosts' ? '#7A6425' : 
	type === 'spelunking' ? '#403A0B' : 
	type === 'flutes' ? '#CC101A' : 
	type === 'collectibles' ? '#752945' : 		
	type === 'evolution' ? '#91834D' : 
	type === 'loot' ? '#196FFA' : 
	type === 'dex-completion' ? '#724585' : 
	type === 'mulch' ? '#44297D' : 
	type === 'all-mail' ? '#616161' : 
	type === 'species-specific' ? '#434D4A' : 
	type === 'medicine' ? '#783D51' : '';
}

export const locationColor = (type) => {
	return type === 'kanto' ? '#5DBE61' : 
	type === 'johto' ? '#F57568' :
	type === 'hoenn' ? '#58A7F2' : 
	type === 'sinnoh' ? '#ABA873' :
	type === 'unova' ? '#075663' :
	type === 'kalos' ? '#90B92D' : 
	type === 'alola' ? '#60127F' : 
	type === 'galar' ? '#FACA4A' : '';
}
