const homeRouter=require('./home');
const meRouter=require('./me');
const productRouter=require('./products');
const newRouter=require('./news');
const authRouter=require('./auth');
const userRouter=require('./User');
const commentRouter=require('./comments');
const cartRouter=require('./cart');
const orderRouter=require('./order');
const billRouter=require('./bill');
function route(app){
    app.use('/order',orderRouter);
    app.use('/bill',billRouter);
    app.use('/carts',cartRouter);
    app.use('/comments',commentRouter);
    app.use('/user',userRouter);
    app.use('/auth',authRouter);
    app.use('/news',newRouter);
    app.use('/products',productRouter);
    app.use('/me',meRouter);
    app.use('/',homeRouter);
}
module.exports=route;