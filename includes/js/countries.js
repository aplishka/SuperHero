// $(function() {
	// Population numbers taken from here: https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_population
	var countries = [
		{"id":"AE","title":"United Arab Emirates", "population": 9856000},
		{"id":"AF","title":"Afghanistan", "population": 27657145},
		{"id":"AL","title":"Albania", "population": 2886026},
		{"id":"AM","title":"Armenia", "population": 2994400},
		{"id":"AO","title":"Angola", "population": 25868000},
		{"id":"AR","title":"Argentina", "population": 43590400},
		{"id":"AT","title":"Austria", "population": 8699730},
		{"id":"AU","title":"Australia", "population": 24094540},
		{"id":"AZ","title":"Azerbaijan", "population": 9730500},
		{"id":"BA","title":"Bosnia and Herzegovina", "population": 3791622},
		{"id":"BD","title":"Bangladesh", "population": 160844894},
		{"id":"BE","title":"Belgium", "population": 11316587},
		{"id":"BF","title":"Burkina Faso", "population": 19034397},
		{"id":"BG","title":"Bulgaria", "population": 7153784},
		{"id":"BI","title":"Burundi", "population": 10114505},
		{"id":"BJ","title":"Benin", "population": 10653654},
		{"id":"BN","title":"Brunei Darussalam", "population": 411900},
		{"id":"BO","title":"Bolivia", "population": 10985059},
		{"id":"BR","title":"Brazil", "population": 206009725},
		{"id":"BS","title":"Bahamas", "population": 378040},
		{"id":"BT","title":"Bhutan", "population": 774610},
		{"id":"BW","title":"Botswana", "population": 2141206},
		{"id":"BY","title":"Belarus", "population": 9498700},
		{"id":"BZ","title":"Belize", "population": 370300},
		{"id":"CA","title":"Canada", "population": 36048521},
		{"id":"CD","title":"Democratic Republic of Congo", "population": 85026000},
		{"id":"CF","title":"Central African Republic", "population": 4998000},
		{"id":"CG","title":"Republic of Congo", "population": 4741000},
		{"id":"CH","title":"Switzerland", "population": 8325194},
		{"id":"CI","title":"Ivory Coast", "population": 22671331},
		{"id":"CL","title":"Chile", "population": 18191900},
		{"id":"CM","title":"Cameroon", "population": 23924000},
		{"id":"CN","title":"China", "population": 1376983518},
		{"id":"CO","title":"Colombia", "population": 48719134},
		{"id":"CR","title":"Costa Rica", "population": 4832234},
		{"id":"CU","title":"Cuba", "population": 11238317},
		{"id":"CY","title":"Cyprus", "population": 847000},
		{"id":"CZ","title":"Czech Republic", "population": 10553843},
		{"id":"DE","title":"Germany", "population": 81770900},
		{"id":"DJ","title":"Djibouti", "population": 900000},
		{"id":"DK","title":"Denmark", "population": 5717014},
		{"id":"DO","title":"Dominican Republic", "population": 10075045},
		{"id":"DZ","title":"Algeria", "population": 40400000},
		{"id":"EC","title":"Ecuador", "population": 16278844},
		{"id":"EE","title":"Estonia", "population": 1315944},
		{"id":"EG","title":"Egypt", "population": 91030889},
		{"id":"EH","title":"Western Sahara", "population": 510713},
		{"id":"ER","title":"Eritrea", "population": 5352000},
		{"id":"ES","title":"Spain", "population": 46423064},
		{"id":"ET","title":"Ethiopia", "population": 92206005},
		{"id":"FK","title":"Falkland Islands", "population": 2563},
		{"id":"FI","title":"Finland", "population": 5493390},
		{"id":"FJ","title":"Fiji", "population": 867000},
		{"id":"FR","title":"France", "population": 66689000},
		{"id":"GA","title":"Gabon", "population": 1802278},
		{"id":"GB","title":"United Kingdom", "population": 65097000},
		{"id":"GE","title":"Georgia", "population": 3720400},
		{"id":"GF","title":"French Guiana", "population": 254541},
		{"id":"GH","title":"Ghana", "population": 27670174},
		{"id":"GL","title":"Greenland", "population": 55847},
		{"id":"GM","title":"Gambia", "population": 1882450},
		{"id":"GN","title":"Guinea", "population": 12947000},
		{"id":"GQ","title":"Equatorial Guinea", "population": 1222442},
		{"id":"GR","title":"Greece", "population": 10858018},
		{"id":"GT","title":"Guatemala", "population": 16176133},
		{"id":"GW","title":"Guinea-Bissau", "population": 1547777},
		{"id":"GY","title":"Guyana", "population": 746900},
		{"id":"HN","title":"Honduras", "population": 8576532},
		{"id":"HR","title":"Croatia", "population": 4225316},
		{"id":"HT","title":"Haiti", "population": 11078033},
		{"id":"HU","title":"Hungary", "population": 9823000},
		{"id":"ID","title":"Indonesia", "population": 258705000},
		{"id":"IE","title":"Ireland", "population": 4635400},
		{"id":"IL","title":"Israel", "population": 8515100},
		{"id":"IN","title":"India", "population": 1286030036},
		{"id":"IQ","title":"Iraq", "population": 37883543},
		{"id":"IR","title":"Iran", "population": 79301200},
		{"id":"IS","title":"Iceland", "population": 332529},
		{"id":"IT","title":"Italy", "population": 60665551},
		{"id":"JM","title":"Jamaica", "population": 2723246},
		{"id":"JO","title":"Jordan", "population": 9531712},
		{"id":"JP","title":"Japan", "population": 126960000},
		{"id":"KE","title":"Kenya", "population": 47251000},
		{"id":"KG","title":"Kyrgyzstan", "population": 6047800},
		{"id":"KH","title":"Cambodia", "population": 15626444},
		{"id":"KP","title":"North Korea", "population": 25281000},
		{"id":"KR","title":"South Korea", "population": 50801405},
		{"id":"XK","title":"Kosovo", "population": 1836978},
		{"id":"KW","title":"Kuwait", "population": 4183658},
		{"id":"KZ","title":"Kazakhstan", "population": 17753200},
		{"id":"LA","title":"Laos", "population": 6472400},
		{"id":"LB","title":"Lebanon", "population": 5988000},
		{"id":"LK","title":"Sri Lanka", "population": 20966000},
		{"id":"LR","title":"Liberia", "population": 4615000},
		{"id":"LS","title":"Lesotho", "population": 1894194},
		{"id":"LT","title":"Lithuania", "population": 2875593},
		{"id":"LU","title":"Luxembourg", "population": 576200},
		{"id":"LV","title":"Latvia", "population": 1962700},
		{"id":"LY","title":"Libya", "population": 6385000},
		{"id":"MA","title":"Morocco", "population": 34337529},
		{"id":"MD","title":"Moldova", "population": 3553100},
		{"id":"ME","title":"Montenegro", "population": 621810},
		{"id":"MG","title":"Madagascar", "population": 22434363},
		{"id":"MK","title":"Macedonia", "population": 2069172},
		{"id":"ML","title":"Mali", "population": 18135000},
		{"id":"MM","title":"Myanmar", "population": 51419420},
		{"id":"MN","title":"Mongolia", "population": 3088200},
		{"id":"MR","title":"Mauritania", "population": 3718678},
		{"id":"MW","title":"Malawi", "population": 16832910},
		{"id":"MX","title":"Mexico", "population": 122273473},
		{"id":"MY","title":"Malaysia", "population": 31375064},
		{"id":"MZ","title":"Mozambique", "population": 26423700},
		{"id":"NA","title":"Namibia", "population": 2324388},
		{"id":"NC","title":"New Caledonia", "population": 268767},
		{"id":"NE","title":"Niger", "population": 20715000},
		{"id":"NG","title":"Nigeria", "population": 186988000},
		{"id":"NI","title":"Nicaragua", "population": 6262703},
		{"id":"NL","title":"Netherlands", "population": 17014760},
		{"id":"NO","title":"Norway", "population": 5223256},
		{"id":"NP","title":"Nepal", "population": 28431500},
		{"id":"NZ","title":"New Zealand", "population": 4693380},
		{"id":"OM","title":"Oman", "population": 4439219},
		{"id":"PA","title":"Panama", "population": 3814672},
		{"id":"PE","title":"Peru", "population": 31488700},
		{"id":"PG","title":"Papua New Guinea", "population": 8083700},
		{"id":"PH","title":"Philippines", "population": 103242900},
		{"id":"PL","title":"Poland", "population": 38437239},
		{"id":"PK","title":"Pakistan", "population": 193867070},
		{"id":"PR","title":"Puerto Rico", "population": 3474182},
		{"id":"PS","title":"Palestinian Territories", "population": 4816503},
		{"id":"PT","title":"Portugal", "population": 10374822},
		{"id":"PY","title":"Paraguay", "population": 6854536},
		{"id":"QA","title":"Qatar", "population": 2587564},
		{"id":"RO","title":"Romania", "population": 19861400},
		{"id":"RS","title":"Serbia", "population": 7114393},
		{"id":"RU","title":"Russia", "population": 146600000},
		{"id":"RW","title":"Rwanda", "population": 11553188},
		{"id":"SA","title":"Saudi Arabia", "population": 32248200},
		{"id":"SB","title":"Solomon Islands", "population": 642000},
		{"id":"SD","title":"Sudan", "population": 39598700},
		{"id":"SE","title":"Sweden", "population": 9884285},
		{"id":"SI","title":"Slovenia", "population": 2064188},
		{"id":"SJ","title":"Svalbard and Jan Mayen", "population": 18},
		{"id":"SK","title":"Slovakia", "population": 5426252},
		{"id":"SL","title":"Sierra Leone", "population": 6592000},
		{"id":"SN","title":"Senegal", "population": 14799859},
		{"id":"SO","title":"Somalia", "population": 11079000},
		{"id":"SR","title":"Suriname", "population": 541638},
		{"id":"SS","title":"South Sudan", "population": 12131000},
		{"id":"SV","title":"El Salvador", "population": 6520675},
		{"id":"SY","title":"Syria", "population": 18564000},
		{"id":"SZ","title":"Swaziland", "population": 1132657},
		{"id":"TD","title":"Chad", "population": 14497000},
		{"id":"TF","title":"French Southern and Antarctic Lands", "population": 310},
		{"id":"TG","title":"Togo", "population": 7143000},
		{"id":"TH","title":"Thailand", "population": 65310908},
		{"id":"TJ","title":"Tajikistan", "population": 8547000},
		{"id":"TL","title":"East Timor", "population": 1167242},
		{"id":"TM","title":"Turkmenistan", "population": 4751120},
		{"id":"TN","title":"Tunisia", "population": 11154400},
		{"id":"TR","title":"Turkey", "population": 78741053},
		{"id":"TT","title":"Trinidad and Tobago", "population": 1349667},
		{"id":"TW","title":"Taiwan", "population": 23499404},
		{"id":"TZ","title":"Tanzania", "population": 55155000},
		{"id":"UA","title":"Ukraine", "population": 42708647},
		{"id":"UG","title":"Uganda", "population": 36860700},
		{"id":"US","title":"United States", "population": 323747000},
		{"id":"UY","title":"Uruguay", "population": 3480222},
		{"id":"UZ","title":"Uzbekistan", "population": 31576400},
		{"id":"VE","title":"Venezuela", "population": 31028700},
		{"id":"VN","title":"Vietnam", "population": 91700000},
		{"id":"VU","title":"Vanuatu", "population": 277500},
		{"id":"YE","title":"Yemen", "population": 27478000},
		{"id":"ZA","title":"South Africa", "population": 54956900},
		{"id":"ZM","title":"Zambia", "population": 15933883},
		{"id":"ZW","title":"Zimbabwe", "population": 14240168}
	];

	var countryNames = [];
	var countryPopulations = [];
	countries.forEach(function(country) {
		countryNames[countryNames.length] = country.title;
		countryPopulations[countryPopulations.length] = country.population;
	});

	var getCountryByChanceByPopulation = function() {
		return chance.weighted(countryNames, countryPopulations);
	};
// });