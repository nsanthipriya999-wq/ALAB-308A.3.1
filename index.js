// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };

  try {
    const returnedValue = await central(id);
    const [userData, vaultData] = await Promise.all([dbs[returnedValue](id), vault(id)]); //parallel execution 

    //--------------------------object--------------------------------
    return{
      id,
      name:vaultData.name,
      username:userData.username,
      email:vaultData.email,
      address:vaultData.address,
      phone: vaultData.phone,
      website: userData.website,
      company: userData.company
    };

  } catch (error) 
  {
    throw error;
  }
}
//------------------------------------------------------------------------
//---------------------------Inputs--------------------------------------
getUserData(9)
  .then(console.log)
  .catch(console.error);

getUserData(11)
  .then(console.log)
  .catch(console.error);

getUserData(true)
  .then(console.log)
  .catch(console.error);

getUserData(4)
  .then(console.log)
  .catch(console.error);

getUserData("1")
  .then(console.log)
  .catch(console.error);

getUserData(19)
  .then(console.log)
  .catch(console.error);

getUserData("null")
  .then(console.log)
  .catch(console.error);

//----------------------OUTPUTS--------------------------------------------------------------------
/*
Error: Invalid Input -- Out of Range
    at central (file:///C:/Users/santh/OneDrive/Desktop/2026-RTT-19/308A/ALAB%20308A.3.1/databases.js:11:32)
    at getUserData (file:///C:/Users/santh/OneDrive/Desktop/2026-RTT-19/308A/ALAB%20308A.3.1/index.js:14:27)
    at file:///C:/Users/santh/OneDrive/Desktop/2026-RTT-19/308A/ALAB%20308A.3.1/index.js:40:2
    at ModuleJob.run (node:internal/modules/esm/module_job:437:25)
    at async node:internal/modules/esm/loader:639:26
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5)
Error: Invalid Input -- Not a Number
    at central (file:///C:/Users/santh/OneDrive/Desktop/2026-RTT-19/308A/ALAB%20308A.3.1/databases.js:10:37)
    at getUserData (file:///C:/Users/santh/OneDrive/Desktop/2026-RTT-19/308A/ALAB%20308A.3.1/index.js:14:27)
    at file:///C:/Users/santh/OneDrive/Desktop/2026-RTT-19/308A/ALAB%20308A.3.1/index.js:44:2
    at ModuleJob.run (node:internal/modules/esm/module_job:437:25)
    at async node:internal/modules/esm/loader:639:26
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5)
Error: Invalid Input -- Not a Number
    at central (file:///C:/Users/santh/OneDrive/Desktop/2026-RTT-19/308A/ALAB%20308A.3.1/databases.js:10:37)
    at getUserData (file:///C:/Users/santh/OneDrive/Desktop/2026-RTT-19/308A/ALAB%20308A.3.1/index.js:14:27)
    at file:///C:/Users/santh/OneDrive/Desktop/2026-RTT-19/308A/ALAB%20308A.3.1/index.js:52:2
    at ModuleJob.run (node:internal/modules/esm/module_job:437:25)
    at async node:internal/modules/esm/loader:639:26
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5)
Error: Invalid Input -- Out of Range
    at central (file:///C:/Users/santh/OneDrive/Desktop/2026-RTT-19/308A/ALAB%20308A.3.1/databases.js:11:32)
    at getUserData (file:///C:/Users/santh/OneDrive/Desktop/2026-RTT-19/308A/ALAB%20308A.3.1/index.js:14:27)
    at file:///C:/Users/santh/OneDrive/Desktop/2026-RTT-19/308A/ALAB%20308A.3.1/index.js:56:2
    at ModuleJob.run (node:internal/modules/esm/module_job:437:25)
    at async node:internal/modules/esm/loader:639:26
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5)
Error: Invalid Input -- Not a Number
    at central (file:///C:/Users/santh/OneDrive/Desktop/2026-RTT-19/308A/ALAB%20308A.3.1/databases.js:10:37)
    at getUserData (file:///C:/Users/santh/OneDrive/Desktop/2026-RTT-19/308A/ALAB%20308A.3.1/index.js:14:27)
    at file:///C:/Users/santh/OneDrive/Desktop/2026-RTT-19/308A/ALAB%20308A.3.1/index.js:60:2
    at ModuleJob.run (node:internal/modules/esm/module_job:437:25)
    at async node:internal/modules/esm/loader:639:26
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5)
{
  id: 9,
  name: 'Glenna Reichert',
  username: 'Delphine',
  email: 'Chaim_McDermott@dana.io',
  address: {
    street: 'Dayna Park',
    suite: 'Suite 449',
    city: 'Bartholomebury',
    zipcode: '76495-3109',
    geo: { lat: '24.6463', lng: '-168.8889' }
  },
  phone: '(775)976-6794 x41206',
  website: 'conrad.com',
  company: {
    name: 'Yost and Sons',
    catchPhrase: 'Switchable contextually-based project',
    bs: 'aggregate real-time technologies'
  }
}
{
  id: 4,
  name: 'Patricia Lebsack',
  username: 'Karianne',
  email: 'Julianne.OConner@kory.org',
  address: {
    street: 'Hoeger Mall',
    suite: 'Apt. 692',
    city: 'South Elvis',
    zipcode: '53919-4257',
    geo: { lat: '29.4572', lng: '-164.2990' }
  },
  phone: '493-170-9623 x156',
  website: 'kale.biz',
  company: {
    name: 'Robel-Corkery',
    catchPhrase: 'Multi-tiered zero tolerance productivity',
    bs: 'transition cutting-edge web services'
  }
}
*/