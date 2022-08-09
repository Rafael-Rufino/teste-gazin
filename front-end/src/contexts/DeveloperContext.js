import { createContext, useState } from "react";
import FormModal from "../components/FormModal";
import { useAxios } from "../hooks/useAxios";
import api from "../services/api";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const { data, mutate } = useAxios("developers");

  const [openFormModal, setOpenFormModal] = useState(false);

  const [id, setId] = useState(false);
  const [level, setLevel] = useState("");
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [hobby, setHobby] = useState("");

  function handleEdit(id, name, gender, birthDate, age, hobby, level) {
    setLevel(level);
    setName(name);
    setBirthDate(birthDate);
    setGender(gender);
    setAge(age);
    setHobby(hobby);
    setOpenFormModal(true);
    setId(id);
    setOpenFormModal(true);
  }

  function handleAdd() {
    setOpenFormModal(true);
  }

  function handleClose() {
    if (level) {
      setLevel("");
    }
    if (name) {
      setName("");
    }
    if (birthDate) {
      setBirthDate("");
    }
    if (age) {
      setAge(0);
    }
    if (hobby) {
      setHobby("");
    }
    if (gender) {
      setGender("");
    }

    setOpenFormModal(false);
  }

  function handleLevel(e) {
    setLevel(e.target.value);
  }
  function handleName(e) {
    setName(e.target.value);
  }
  function handleBirthDate(date) {
    setBirthDate(date.target.value);
  }

  function handleGender(e) {
    setGender(e.target.value);
  }
  function handleAge(e) {
    setAge(e.target.value);
  }
  function handleHobby(e) {
    setHobby(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const developer = {
      name,
      gender,
      birthDate,
      age,
      hobby,
      level,
    };
    console.log(developer);
    if (id) {
      api.put(`developers/${id}`, developer);
      const updateDevelopers = {
        developers: data.developers?.map((developer) => {
          if (developer._id === id) {
            return { ...developer, name, gender, birthDate, age, hobby, level };
          }
          return developer;
        }),
      };
      mutate(updateDevelopers, false);
    } else {
      api.post("developers", developer);
      const updateDevelopers = {
        developers: [...data.developers, developer],
      };

      mutate(updateDevelopers, false);
    }
    setOpenFormModal(false);
  }

  function handleDelete(id) {
    api.delete(`developers/${id}`);
    const updateDeveloper = {
      developers: data.developers?.filter((item) => item._id !== id),
    };
    mutate(updateDeveloper, false);
  }

  return (
    <AuthContext.Provider
      value={{
        name,
        gender,
        birthDate,
        age,
        hobby,
        level,
        handleClose,
        handleSubmit,
        handleName,
        handleLevel,
        handleGender,
        handleBirthDate,
        handleAge,
        handleHobby,
        setId,
        id,
        handleEdit,
        handleAdd,
        handleDelete,
      }}
    >
      {children}
      {openFormModal && <FormModal />}
    </AuthContext.Provider>
  );
}
