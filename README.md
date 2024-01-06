09:38 05-11-2023

accordingly or app architechture
	>>generate service name apnepedia using angular cli
		ng g service apnapedia

	>>import HttpClientModule in app.module.ts to consume api's on angular app
		import { HttpClientModule} from '@angular/common/http';
		
		imports: [

		    BrowserModule,
		    HttpClientModule
		  ],
	>>Inject HttpClient in apnapediaService class into constructor as parameter
		constructor(private http: HttpClient)

	>>Create a method on apnapediaService to consume wikiSearch api
		onSearch(term: string){
		return this.http.get(arg1,arg2); //to get args, visit: https://writexo.com/rst-angular
		
		}

	>> now call method onSearch() from App Component class
		1. Inject apnapediaService on 
			constructor(private ap:ApnapediaService){}
		2. this.ap.onSearch(term).subscribe(vada => console.log()); 
 '=>' aage jake kya karna hai  




________________________________________________________________________________
Project6: Apnapedia API endpoint

arg1:

'https://en.wikipedia.org/w/api.phpmkm'

arg2:

{

  params: {

  action: 'query',

  format: 'json',

  list: 'search',

  utf8: '1',

  srsearch: term, 

  origin: '*'

  }

}

![apnapedia](https://github.com/GuptaReena/FSD/assets/151419809/1cbca9ef-fc58-4e45-8560-935b8f5294fd)

            
