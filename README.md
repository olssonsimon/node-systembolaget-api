Systembolaget API Wrapper

###Credits
This module uses the api provided by http://www.systemetapi.se/

###Installation
```
npm install systembolaget
```
```
var sb = require('systembolaget').client(mashape_key);
```

You will need a Mashape Application Key in order to use this module.

You can get one here: mashape.com

###Usage

####Get Countries
```
sb.get('country', callback)
```

####Get Tags
```
sb.get('tag', callback)
```

####Get Products
```
sb.get('product', params, callback)
```

#####Available params
```
alcohol_from: NUMBER

alcohol_to: NUMBER

apk_from: NUMBER

apk_to: NUMBER

country: STRING

ecological: BOOLEAN

koscher: BOOLEAN

limit: NUMBER

name: STRING

offset: NUMBER

order: STRING (ASC or DESC)

order_by: STRING (name, price, price_per_liter, alcohol, apk)

price_from: NUMBER

price_per_liter_from: NUMBER

price_per_liter_to: NUMBER

price_to: NUMBER

start_date_from: STRING (YYYY-MM-DD)

start_date_to: STRING (YYYY-MM-DD)

tag: STRING (Comma separated tag IDs)

year_from: NUMBER (YYYY)

year_to: NUMBER (YYYY)
```