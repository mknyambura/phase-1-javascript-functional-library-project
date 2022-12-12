function myEach (collection, callback){
    const newCollection = standardize(collection)
    const i = 0;
    while (i < newCollection.length){
        callback(newCollection[i]);
        i=i+1
    }
    return collection;
};

function myMap (collection, callback){
    const newCollection = standardize(collection)
    const i = 0;
    const modifiedArray = []
    while (i < newCollection.length){
        modifiedArray.push(callback(newCollection[i]));
        i=i+1
    }
    return modifiedArray;
};

function myReduce(collection, callback, acc){
    const newCollection = standardize(collection)
    for(const i=0; i<newCollection.length; i++){
        const value = newCollection[i]
        acc=(callback(acc,value, newCollection[i]))
    }
    return acc
}

function myFind(collection, predicate){
    const newCollection = standardize(collection)
    const i=0
    while(i<newCollection.length){
        if(predicate(newCollection[i]) === true){
            return newCollection[i]
        }
        i=i+1
    }
}

function myFilter(collection){
    const newCollection = standardize(collection)
    const collectionSize= 0
    const i=0
    debugger;
    while(newCollection[i] !== undefined){
        debugger;
        collectionSize = (collectionSize + 1)
        debugger
        i=i+1
    }
    return collectionSize
}

function myFirst(array, n){
    const firstEl = []
    const i=0
    if(n=== undefined){
        return array[0]
    }else{
        while(n=0){
            firstEl.push(array[i])
            n=n-1
            i=i+1
        }
        return firstEl
    }
}

function myLast(array, n){
    const lastEl = []
    if(n=== undefined){
        const i = array.length - 1
        return array[i]
    }else{
        while(n>0){
            const i = array.length - n
            lastEl.push(array[i])
            n=n-1
            i=i+1
        }
        return lastEl
    }
}

function myKeys(object){
    const results= []
    for(const key in object){
        results.push(`${key}`)
    }
    return results
}

function myValues(object){
    const results=[]
    for(const property in object){
        results.push(object[`${property}`])
    }
    return results
}

function standardize(collection){
    if(Array.isArray(collection)){
        return collection
    }else{
        return Object.values(collection)
    }
}