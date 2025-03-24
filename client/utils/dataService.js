const USERS_FILE = "/dummydata/users.json";

//Fetch users from the JSON file
async function getUsers() {
  try {
    const response = await fetch(USERS_FILE);
    if (!response.ok) throw new Error("Failed to fetch users");
    return await response.json();
  } catch (error) {
    console.error("Error loading users:", error);
    return [];
  }
}


// Check if user already exists
async function checkUserExists(email) {
  const users = await getUsers();
  return users.some(user => user.email === email);
}

function addUser(newUser) {
  const users = getUsers();
  console.log("Users before adding:", users); // Debugging line

  if (!Array.isArray(users)) {
    console.error("Error: users is not an array!", users);
    return;
  }

  const newUserId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;

  const formattedUser = {
    id: newUserId,
    fullName: `${newUser.first_name} ${newUser.last_name}`,
    email: newUser.email,
    password: newUser.password, 
  };

  users.push(formattedUser); // <-- Error happens here if `users` is not an array

  localStorage.setItem("usersData", JSON.stringify(users));

  return formattedUser;
}



// Authenticate user
async function authenticateUser(email, password) {
  const users = await getUsers();
  return users.find(user => user.email === email && user.password === password);
}

// Validate user input
function validateUserInput(user) {
  if (!user.first_name || !user.last_name || !user.email || !user.password) {
    throw new Error("All fields are required");
  }

  if (!validateEmail(user.email)) {
    throw new Error("Invalid email address");
  }

  if (user.password.length < 6) {
    throw new Error("Password must be at least 6 characters long");
  }
}

// Validate email format
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function updateUserProfile(user) {
  localStorage.setItem("profile_full_name", user.full_name || "");
  localStorage.setItem("profile_email", user.email || "");

}
export { getUsers, addUser, authenticateUser, checkUserExists, validateUserInput, validateEmail, updateUserProfile };


