import { Routes, Route } from "react-router-dom";
import ContactsPage from "./pages/contactsPage";
import CreateUser from "./pages/createUser";
import EditUser from "./components/EditUser";
function App() {
  return (
    <Routes>
      <Route path="/contacts/:id" element={<EditUser />}></Route>
      <Route path="/contacts/new" element={<CreateUser />}></Route>
      <Route path="/contacts" element={<ContactsPage />}></Route>
      <Route path="/" element={<ContactsPage />}></Route>
    </Routes>
  );
}

export default App;
