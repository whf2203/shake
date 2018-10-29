/**
 * 函数去抖动
 * 直到事件触发不抖才执行，函数可能只会执行一次
 * @export
 * @param {*} func
 * @param {number} [delay=150]
 * @returns
 */
export function debounce(func, delay = 150) {
    let timer = 0;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func();
        }, delay);
    }
}

export function throttle(func, delay = 150) {
    let timer = +new Date();
    return function() {
        let cur = +new Date();
        if (cur - timer > delay) {
            timer = cur;
            setTimeout(() => {
                func();
            }, delay)
        }
    }
}