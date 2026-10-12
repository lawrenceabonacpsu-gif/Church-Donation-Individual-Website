import { useState } from 'react';

export default function ChurchDonations() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");

  const [amount, setAmount] = useState(500);
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("General Fund");
  const [method, setMethod] = useState("GCash");

  const loginWithGoogle = () => {
    setUser({ name: "Lawrence Abona", email: "lawrence@gmail.com", provider: "Google" });
    setName("Lawrence Abona");
    setIsLoggedIn(true);
  };

  const loginWithFacebook = () => {
    setUser({ name: "Lawrence Abona", email: "lawrence@facebook.com", provider: "Facebook" });
    setName("Lawrence Abona");
    setIsLoggedIn(true);
  };

  const loginWithEmail = (e) => {
    e.preventDefault();
    if(!loginEmail ||!loginPass) return alert("Please enter email & password");
    setUser({ name: loginEmail.split('@')[0], email: loginEmail, provider: "Email" });
    setName(loginEmail.split('@')[0]);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  const handleDonate = (e) => {
    e.preventDefault();
    alert(`🙏 Thank you ${name}!\n\nYou donated ₱${amount} for ${purpose} via ${method}.\nLogged in with ${user?.provider}\n\nGod bless you!`);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border">
          <div className="bg-blue-900 text-white p-8 text-center">
            <h1 className="text-3xl font-bold">⛪ St. Lawrence Parish</h1>
            <p className="text-blue-200 mt-2">Login to Continue Donation</p>
          </div>

          <div className="p-8 space-y-4">
            <h2 className="text-xl font-bold text-center mb-6">Choose Login Method</h2>

            <button onClick={loginWithGoogle} className="w-full flex items-center justify-center gap-3 border-2 border-gray-200 p-3 rounded-xl hover:bg-gray-50 font-medium">
               Continue with Google
            </button>

            <button onClick={loginWithFacebook} className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 font-medium">
               Continue with Facebook
            </button>

            <div className="flex items-center gap-2 my-4">
              <div className="h- bg-gray-200 flex-1"></div>
              <span className="text-gray-400 text-sm">OR</span>
              <div className="h- bg-gray-200 flex-1"></div>
            </div>

            <form onSubmit={loginWithEmail} className="space-y-3">
              <input type="email" value={loginEmail} onChange={e=>setLoginEmail(e.target.value)}
                placeholder="Email - renebaterbonia@email.com"
                className="w-full border-2 border-gray-200 rounded-lg p-3" required />
              <input type="password" value={loginPass} onChange={e=>setLoginPass(e.target.value)}
                placeholder="Password"
                className="w-full border-2 border-gray-200 rounded-lg p-3" required />
              <button type="submit" className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold">
                Login with Email
              </button>
            </form>

            <p className="text-xs text-center text-gray-400 mt-4">
              Secure Login • Your Money is Safe With Me 🙏
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="bg-blue-900 text-white p-6">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">⛪ St. Lawrence Parish</h1>
            <p className="text-blue-200 text-sm">Welcome {user?.name} • Logged in via {user?.provider}</p>
          </div>
          <button onClick={logout} className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm">
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-8 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Why Donate? And Why Not?</h2>
          <ul className="space-y-3 text-gray-700">
            <li>✅ Church Renovation & Maintenance</li>
            <li>✅ Feeding Program for the Poor</li>
            <li>✅ Youth Ministry Activities</li>
            <li>✅ Mass & Community Events</li>
            <li>✅ Para naa tay Aerox V3</li>
            <li>✅ Para naa tay mga bagong sound system</li>
            <li>✅ Not for personal gain PROMISE HEHE</li>
          </ul>

          <div className="mt-8 bg-yellow-50 border border-yellow-200 p-4 rounded-xl">
            <p className="font-bold"> Bible Verse:</p>
            <p className="italic">"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." - 2 Corinthians 9:7</p>
            <p className="italic mt-2">"Sa akong BULSA maka salig ka." - Lawrence Abona</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border">
          <h2 className="text-2xl font-bold mb-6 text-center">Make a Donation 🙏</h2>
          <form onSubmit={handleDonate} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name (from login)</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-lg p-3 bg-gray-50" required />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Donation Purpose</label>
              <select value={purpose} onChange={(e) => setPurpose(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-lg p-3">
                <option>General Fund</option>
                <option>Church Renovation</option>
                <option>Charity & Outreach</option>
                <option>Youth Ministry</option>
                <option>Mass Intentions</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Amount (₱)</label>
              <div className="grid grid-cols-4 gap-2 mb-3">
                {[1000000, 5000000, 10000000, 20000000].map(v => (
                  <button key={v} type="button" onClick={() => setAmount(v)}
                    className={`p-2 rounded-lg border-2 font-bold text-sm ${amount==v? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-50 border-gray-200'}`}>
                    ₱{(v/1000000)}M
                  </button>
                ))}
              </div>
              <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-lg p-3" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Payment Method</label>
              <div className="grid grid-cols-4 gap-2">
                {['GCash', 'PayMaya', 'Bank', 'MyPocket'].map(m => (
                  <button key={m} type="button" onClick={() => setMethod(m)}
                    className={`p-3 rounded-lg border-2 text-sm ${method==m? 'bg-green-600 text-white border-green-600' : 'bg-white border-gray-200'}`}>
                    {m}
                  </button>
                ))}
              </div>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition">
              Donate ₱{amount} Now 🙏
            </button>

            <p className="text-xs text-center text-gray-400">
              Logged in as {user?.email} • Receipt will be sent via email
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}