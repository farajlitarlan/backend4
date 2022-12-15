const express = require('express');
const app = express();

const goods = [ 
    { "name": 'apple', "price": "10", "amount": 90, "id": "0"  },
    { "name": 'pear', "price": "20", "amount": 50, "id": "1"  },
    { "name": 'cucumber', "price": "12", "amount": 56, "id": "2"  },
    { "name": 'tomato', "price": "80", "amount": 78, "id": "3"  },
    { "name": 'cherry', "price": "14", "amount": 198, "id": "4"  },
    { "name": 'strawberry', "price": "60", "amount": 30, "id": "5"  },
    { "name": 'melon', "price": "50", "amount": 20, "id": "6"  },
    { "name": 'watermelon', "price": "31", "amount": 78, "id": "7"  },
    { "name": 'carrot', "price": "25", "amount": 87, "id": "8"  },
    { "name": 'orange', "price": "14", "amount": 35, "id": "9"  }
 ];
 app.get('/card', function (req, res) {
    //res.send(JSON.stringify(goods));
    console.log(req.query);

    const amount = parseInt(req.query.amount);
  const good = parseInt(req.query.good);
  res.send({ goods: goods.slice(good, good + amount), amount: goods.length });


});
app.get('/card/:id', function (req, res) {
    let n = goods.find((item) => item.id == req.params.id)
    res.send(JSON.stringify(n));
});
app.get("/card/:id", function (req, res) {
  const id = parseInt(req.params.id);
  const n = goods.find((item) => item.id === id);
  console.log(n)
  if (!n) {
     console.log(res.status(404).send())
  }
  else console.log(res.status(200).json(n))
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});