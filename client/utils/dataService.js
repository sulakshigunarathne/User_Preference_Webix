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

  const newUserId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;

  const formattedUser = {
    id: newUserId,
    fullName: `${newUser.first_name} ${newUser.last_name}`,
    email: newUser.email,
    password: newUser.password,
  };

  // Store the user in sessionStorage with email as the key
  sessionStorage.setItem(newUser.email, JSON.stringify(formattedUser));

  console.log("User added to session storage:", formattedUser);
}


async function authenticateUser(email, password) {

  // Check if the user is already logged in (in sessionStorage)
  const storedUserData = JSON.parse(sessionStorage.getItem("currentLoggedin"));
  //console.log("storedUserEmail",storedUserData.email );
  //console.log("storedUserPassword",storedUserData.password);

  if (storedUserData && storedUserData.email === email && storedUserData.password === password) {
    //console.log("entered storedUserData");
    return storedUserData; // User is authenticated from session storage
  }
  else if (storedUserData && storedUserData.email === email && storedUserData.password !== password) {
    return "invalid_password"; // Password does not match
  }

  // If user is not found in sessionStorage, check the JSON file (fetch from 'dummydata' directory)
  const users = await getUsers(); // Fetch users from JSON file
  const user = users.find(u => u.email === email && u.password === password); // Search for the user

  if (user) {
    if (user.password === password) {
      // console.log("User found in JSON data");
      sessionStorage.setItem("currentLoggedin", JSON.stringify({ email: user.email, password: user.password })); // Store credentials
      return user; 
    } else {
      console.log("Invalid password (JSON data)");
      return "invalid_password"; 
    }
  }


  return null; 
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

async function checkUserByEmail(email) {
  try {
    const users = await getUsers();
    // Check if any user matches the given email
    return users.find(user => user.email === email);
  } catch (error) {
    console.error("Error checking user by email:", error);
    return null;
  }
}

export { getUsers, addUser, authenticateUser, checkUserExists, validateUserInput, validateEmail, updateUserProfile, checkUserByEmail };


