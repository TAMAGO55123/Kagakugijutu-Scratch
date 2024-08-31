/**
 * 
 * @param {Function} func
 * @param {Function} nofunc  
 * @returns {Boolean}
 */
function check(func,nofunc) {

    if( document.cookie.indexOf('data') >= 0 || document.cookie.indexOf('kannri') >= 0 ){
        func();
        return true
    }
    else{
        nofunc();
        return false
    }
    
}