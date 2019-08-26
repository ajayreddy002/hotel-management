export interface MenuItem { 
    group: MenuItem; 
    menu: Menu []; 
 } 
 export interface Menu { 
    code: string; 
    name: string; 
 }