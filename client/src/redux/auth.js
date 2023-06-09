const init = {
  name: "",
};

function userReducer(state = init, action) {
  if (action.type == "login") {
    console.log(action.payload);
    return {
      ...state,
      // id: action.payload.id,
      // name: action.payload.name,
      // phone: action.payload.phone,
      // address: action.payload.address,
      // avatar_url: action.payload.avatar_url,
      // role: action.payload.role,
      // active: action.payload.active,
      ...action.payload[0],
    };
  } else if (action.type == "logout") {
    return init;
  }
  return state;
}

export default userReducer;
