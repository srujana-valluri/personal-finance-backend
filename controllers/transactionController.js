const supabase = require("../config/supabase");

// Add transaction (income or expense)
exports.addTransaction = async (req, res) => {
  const { user_id, type, amount, category, date } = req.body;

  const { data, error } = await supabase
    .from("transactions")
    .insert([{ user_id, type, amount, category, date }])
    .select();

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json({
    message: "Transaction added",
    transaction: data[0],
  });
};

// Get all transactions
exports.getTransactions = async (req, res) => {
  const user_id = req.params.user_id;

  const { data, error } = await supabase
    .from("transactions")
    .select("*")
    .eq("user_id", user_id)
    .order("date", { ascending: false });

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json(data);
};

// Dashboard summary
exports.getSummary = async (req, res) => {
  const user_id = req.params.user_id;

  const { data, error } = await supabase
    .from("transactions")
    .select("type, amount")
    .eq("user_id", user_id);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  let totalIncome = 0;
  let totalExpense = 0;

  data.forEach((item) => {
    if (item.type === "income") totalIncome += Number(item.amount);
    else totalExpense += Number(item.amount);
  });

  res.json({
    totalIncome,
    totalExpense,
    balance: totalIncome - totalExpense,
  });
};