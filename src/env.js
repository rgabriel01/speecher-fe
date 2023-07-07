const env = {
  BACKEND_HOST: process.env.REACT_APP_BACKEND_HOST
    ? process.env.REACT_APP_BACKEND_HOST
    : 'localhost:3000'
}

export default env
