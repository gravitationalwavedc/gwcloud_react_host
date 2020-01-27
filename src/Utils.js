const IS_DEV = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

console.log(IS_DEV);

export {
    IS_DEV
}