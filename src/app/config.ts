import {InjectionToken} from '@angular/core';


/*
Injetamos anteriormente serviços de fetching data e outros,mas pode haver situações em que gostaríamos de injetar algo como, por exemplo, um simples
Objeto JavaScript contendo, por exemplo, algum aplicativo com configuração.

 */
export interface AppConfig {
  apiUrl: string;
  courseCacheSize: number;
}


export const APP_CONFIG: AppConfig = {
  apiUrl: 'http://localhost:9000',
  courseCacheSize: 10
};


//AQUI USAMOS O TRHGEE SHAKEL ESSA CONFIGURAÇAO SO VAI SER INSTANCIADA NO PACOTE DE APLICAÇÃO
//SE EM ALGUM LUGAR DA APP NO CONSTRUTOR INJERTAMOS O TOKEN
//ESSE E UM TOKEN DDE CONFIGURAÇÃO
export const CONFIG_TOKEN =
  new InjectionToken<AppConfig>('CONFIG_TOKEN',
    {
      providedIn: 'root',
      factory: () => APP_CONFIG
    });
