import { csrfFetch } from "./csrf";

const CREATE_REGISTRY = 'registries/createRegistry'
const UPDATE_REGISTRY = 'registries/updateRegistry'
const DELETE_REGISTRY = 'registries/deleteRegistry'
const GET_REGISTRIES = 'registries/getRegistries'

const getRegistry = (registries) => {
  return {
    type: GET_REGISTRIES,
    registries
  }
}
const createRegistry = (registry) => {
    return {
        type: CREATE_REGISTRY,
        registry
    }
}

const updateRegistry = (registry) => {
    return {
        type: UPDATE_REGISTRY,
        registry
    }
}

const deleteRegistry = (registryId) => {
    return {
        type: DELETE_REGISTRY,
        registryId
    }
}

export const getRegstries = () => async (dispatch) => {
  const res = await csrfFetch(`/api/registries`);
  if (res.ok) {
    const list = await res.json();
    dispatch(getRegistry(list));
  }
};

export const createOneRegistry = (registry, userId) => async dispatch => {
    const response = await csrfFetch(`/api/users/${userId}/registries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registry)
    });

    if (response.ok) {
     const success = await response.json()
     success.userId = userId;
     dispatch(createRegistry(success))
     return success
    }
}

export const updateOneRegistry = (registry, registryId) => async dispatch => {
    const response = await csrfFetch(`/api/registries/${registryId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registry),
    });

    if (response.ok) {
        const updated = await response.json()
        dispatch(updateRegistry(updated))
        return updated
    }
}

export const deleteOneRegistry = (registryId) => async dispatch => {
    const response = await csrfFetch(`/api/registries/${registryId}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        dispatch(deleteRegistry(registryId))
    }
}


const registryReducer = (prevState = {}, action) => {
  let nextState;
  switch (action.type) {
    case GET_REGISTRIES:
    nextState = {}
    action.registries.Registries.forEach(registry => {
      nextState[registry.id] = registry
    })
    return nextState
    case CREATE_REGISTRY:
    nextState = {...prevState}
    nextState[action.registry.id] = action.registry
      return nextState;
    case UPDATE_REGISTRY:
    nextState = {...prevState}
    nextState[action.registry.id] = action.registry
    return nextState;
    case DELETE_REGISTRY:
    nextState = {...prevState}
    delete nextState[action.registryId]
    return nextState;
    default:
      return prevState;
  }
};

export default registryReducer;



















// import registry from "../../../backend/db/models/registry";
// import { csrfFetch } from "./csrf";

// export const GET_ALLREGISTRY = 'regsitry/GET_ALLREGISTRY'

// export const GET_ALLREGISTRY = registry => ({
//     type: GET_ALLREGISTRY,
//     registry
// })

// export const createRegistryAction = registry => ({
//     type: POST_ONEREGISTRY,
//     registry
// })

// export const deleteOneRegistryAction = registryId => ({
//     type: DELETE_ONEREGISTRY,
//     registryId
// })

// export const getRegistryThunk = (registryId) => async dispatch => {
//     const response = await fetch(`api/registry/${registryId}/registry`)
//     if (response.ok) {
//         const newRegistry = await response.json();
//         dispatch(allRegistryReviewAction(newRegistry))
//     }
// }

// export const deleteOneRegistryAction


// export default registryReducer;

