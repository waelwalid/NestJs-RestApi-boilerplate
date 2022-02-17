print('Start #################################################################');

db = db.getSiblingDB('gateway_db');
db.createUser(
  {
    user: 'root_user',
    pwd: 'root_pass',
    roles: [{ role: 'readWrite', db: 'gateway_db' }],
  },
);
db.createCollection('users');


print('END #################################################################');