/**
 * api接口统一管理
 */
import { get, post } from './http'
// 这个方法有一个参数p，p是我们请求接口时携带的参数对象。
export const apipost = p => post('api/v1/users/my_address/address_edit_before', p)
export const apiget = p => get('api/v1/users/my_address/address_edit_before', p)
