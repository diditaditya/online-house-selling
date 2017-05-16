const db = require('../models');

let houseControl = {
  findAll: function(req, res) {
    db.House.findAll().then((houses) => {
      res.send(houses);
    }).catch((err) => {
      res.send(err);
    });
  },
  findById: function(req, res) {
    db.House.findById(req.params.id)
      .then((house) => {
        res.send(house);
      })
      .catch((err) => {
        res.send(err);
      });
  },
  add: function(req, res) {
    let title = req.body.title;
    let description = req.body.description;
    let price = req.body.price;
    let address = req.body.address;
    let contact_person = req.body.contact_person;
    let phone = req.body.phone;
    let email = req.body.email;
    let coordinate = req.body.coordinate;
    let imgUrl = req.body.imgUrl;

    let body = {
      title: title,
      description: description,
      price: price,
      address: address,
      contact_person: contact_person,
      phone: phone,
      email: email,
      coordinate: coordinate,
      imgUrl: imgUrl
    };

    console.log(body);

    if(title) {
      db.House.create({
        title: title,
        description: description,
        price: price,
        address: address,
        contact_person: contact_person,
        phone: phone,
        email: email,
        coordinate: coordinate,
        imgUrl: imgUrl
      })
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.send(err);
        });
    } else {
      res.send('title, description, price, address, contact_person, phone, and coordinate are required')
    }
  },
  update: function(req, res) {
    db.House.findById(req.params.id)
      .then((house) => {
        db.House.update({
          title: req.body.title || house.title,
          description: req.body.description || house.description,
          price: req.body.price || house.price,
          address: req.body.address || house.address,
          contact_person: req.body.contact_person || house.contact_person,
          phone: req.body.phone || house.phone,
          email: req.body.email || house.email,
          coordinate: req.body.coordinate || house.coordinate,
          imgUrl: req.body.imgUrl || house.imgUrl
        }, {where: {id: req.params.id}})
          .then((data) => {
            res.send(data);
          })
          .catch((err) => {
            res.send(err);
          });
      })
      .catch((err) => {
        res.send(err);
      });

  },
  delete: function(req, res) {
    db.House.destroy({where: {id: req.params.id}})
      .then((destroyed) => {
        res.send(destroyed);
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = houseControl;
