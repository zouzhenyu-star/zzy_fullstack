# skr-shop 抖音电商

## 订单

### 模块化
  - 地址表
    如何设计这个表？
    需求
    consignee  string 收货人姓名
    mobile string 手机
    mongodb  JSON存进去 
    {
        id:86,
        name:'中国'
    }
    country object id int64 国家ID
    country object name string 国家名称
    province object id int64 省ID
    province object name string 省名称
    city
    country
    street
    detailed_address  用户填的
    postal_code string 邮编
    address_id int64 地址ID
    时间戳+随机数4位
    