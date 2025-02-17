function Login() {
  return (
    <div>
      <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg my-2" />
      <input type="password" placeholder="Password" className="w-full p-3 border rounded-lg my-2" />
      <button className="bg-dark text-white px-4 py-2 rounded-lg w-full mt-2">
        Login
      </button>
    </div>
  );
}

export default Login;
