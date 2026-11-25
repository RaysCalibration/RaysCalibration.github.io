(function(){
  const KEY='rays.admin.content.v2';
  window.RaysAdminStore={key:KEY,load(){try{return JSON.parse(localStorage.getItem(KEY)||'null');}catch(error){console.error('Invalid Rays admin data',error);return null;}},save(payload){payload.schemaVersion=2;payload.updatedAt=new Date().toISOString();localStorage.setItem(KEY,JSON.stringify(payload));return payload;},clear(){localStorage.removeItem(KEY);localStorage.removeItem('rays.admin.catalogue.v1');}};
})();
