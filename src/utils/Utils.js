class Utils {

    //sorting the array by key
    sortBy = (array, key='name') =>{
        return array.sort((a,b) =>{
            const name1 = a[key].toString().toLowerCase();
            const name2 = b[key].toString().toLowerCase();
        
            let comparison = 0;
        
            if (name1 > name2) {
                comparison = 1;
            } else if (name1 < name2) {
                comparison = -1;
            }
            return comparison;
        })
    }

    //filtering elements by key 
    findBy = (array, key) =>{
        return array.filter(character => {
            return character['id'].toString().includes(key) || character['name'].includes(key) || 
            character['desc'].includes(key) || character['price'].toString().includes(key) ;
          });
    }
}

export default new Utils();