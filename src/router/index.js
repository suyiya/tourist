import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Message from '@/components/message/message'
import MessageList from '@/components/message/list'
import User from '@/components/user/user'
import OrderList from '@/components/order/list'
import OrderDetail from '@/components/order/detail'
import OrderConfirm from '@/components/order/confirm'
import ProductList from '@/components/product/list'
import ProductDetail from '@/components/product/detail'
import ProductPackage from '@/components/product/package'
import CommentList from '@/components/comment/list'
import Comment from '@/components/comment/comment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/message',
      component: Message
    },
    {
      path: '/messageList',
      component: MessageList
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/orderList',
      component: OrderList
    },
    {
      path: '/orderDetail',
      component: OrderDetail
    },
    {
      path: '/orderConfirm',
      component: OrderConfirm
    },
    {
      path: '/productList',
      component: ProductList
    },
    {
      path: '/productDetail',
      component: ProductDetail
    },
    {
      path: '/productPackage',
      component: ProductPackage
    },
    {
      path: '/commentList',
      component: CommentList
    },
    {
      path: '/comment',
      component: Comment
    }
  ]
})
