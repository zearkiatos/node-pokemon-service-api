/* eslint-disable no-undef */
db.auth('admin', 'password');
db.getSiblingDB('pokemons');
db.createUser(
    {
        user: "root",
        pwd: "root",
        roles: [
            {
                role: "userAdminAnyDatabase",
                db: "admin"
            }
        ]
    }
);
db.createCollection('pokemons', {autoIndexId: true});