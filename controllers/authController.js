const supabase = require("../config/supabase");

// Register User
exports.registerUser = async (req, res) => {
const { name, email, password } = req.body;

try {
    const { data, error } = await supabase
    .from("users")
    .insert([{ name, email, password }])
    .select();

    if (error) {
    return res.status(400).json({ error: error.message });
    }

    res.status(201).json({
    message: "User registered successfully",
    user: data[0],
    });
} catch (err) {
    res.status(500).json({ error: "Server error" });
}
};
//login
exports.loginUser = async (req, res) => {
const { email, password } = req.body;

const { data, error } = await supabase
.from("users")
.select("*")
.eq("email", email)
.eq("password", password)
.single();

if (error || !data) {
    return res.status(401).json({ error: "Invalid email or password" });
}

res.json({
    message: "Login successful",
    user: data,
});

};
