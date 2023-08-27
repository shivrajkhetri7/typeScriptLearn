enum Roles {
  Admin = "Admin",
  User = "User",
}

type userSchema = {
  username: string;
  passwords: string;
  role: Roles;
};

const userLoign1 = {
  username: "shivraj",
  passwords: "adawdqw",
  role: Roles.Admin,
};

const userLoign2 = {
  username: "Meghana",
  passwords: "edqawdeqwed",
  role: Roles.User,
};

const isAdmin = (userLoign1: userSchema): boolean => {
  if (userLoign1.role == "Admin") {
    return true;
  } else {
    return false;
  }
};
console.log("user 1 ", userLoign1);
console.log("user 2 ", userLoign2);

console.log("isAdmin", isAdmin(userLoign2));
