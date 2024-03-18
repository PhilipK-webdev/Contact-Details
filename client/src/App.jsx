import { Routes, Route } from "react-router-dom";
import ContactsPage from "./pages/contactsPage";
import EditOrCreateUser from "./pages/editOrCreateUser";
function App() {
  return (
    <Routes>
      <Route path="/contacts/:id" element={<EditOrCreateUser />}></Route>
      <Route path="/contacts/new" element={<EditOrCreateUser />}></Route>
      <Route path="/contacts" element={<ContactsPage />}></Route>
      <Route path="/" element={<ContactsPage />}></Route>
    </Routes>
  );
}

export default App;
