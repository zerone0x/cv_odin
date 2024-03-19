import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [PersonalInfo, setPersonal] = useState({
    name: name,
    email: email,
    phone: phone,
  });
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [companyInfo, setCompanyInfo] = useState([
    {
      company: company,
      position: position,
      startDate: startDate,
      endDate: endDate,
      id: 0,
    },
  ]);
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [graduationDate, setGraduationDate] = useState("");
  const [education, setEducation] = useState([
    { school: school, degree: degree, graduationDate: graduationDate, id: 0 },
  ]);

  function AddEducation(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEducation([
      ...education,
      { school: "", degree: "", graduationDate: "", id: education.length },
    ]);
  }

  function deleteEducation(index: number) {
    if (education.length === 1) {
      setEducation([
        {
          school: school,
          degree: degree,
          graduationDate: graduationDate,
          id: 0,
        },
      ]);
    } else {
      setEducation(education.filter((item) => item.id !== index));
    }
  }

  function updateEducation(e: React.FormEvent<HTMLFormElement>, index: number) {
    e.preventDefault();
    setEducation(
      education.map((item) => {
        if (item.id === index) {
          return {
            school: school,
            degree: degree,
            graduationDate: graduationDate,
            id: index,
          };
        } else {
          return item;
        }
      })
    );
  }

  function AddCompanyInfo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setCompanyInfo([
      ...companyInfo,
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        id: companyInfo.length,
      },
    ]);
  }
  function deleteCompanyInfo(index:number) {
    if (companyInfo.length === 1) {
      setCompanyInfo([
        {
          company: company,
          position: position,
          startDate: startDate,
          endDate: endDate,
          id: 0,
        },
      ]);
    } else {
      setCompanyInfo(companyInfo.filter((item) => item.id !== index));
    }
  }

  function updateCompanyInfo(e: React.FormEvent<HTMLFormElement>, index: number) {
    e.preventDefault();
    setCompanyInfo(
      companyInfo.map((item) => {
        if (item.id === index) {
          return {
            company: company,
            position: position,
            startDate: startDate,
            endDate: endDate,
            id: index,
          };
        } else {
          return item;
        }
      })
    );
  }

  function AddPersonalInfo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPersonal({ name: name, email: email, phone: phone });
  }
  function handleNameChange(name: string) {
    setName(name);
  }
  function handleEmailChange(email: string) {
    setEmail(email);
  }
  function handlePhoneChange(phone: string) {
    setPhone(phone);
  }

  interface PersonalInfoType {
    name: string;
    email: string;
    phone: string;
  }
  interface CompanyInfoType {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    id: number;
  }

  function Display({ pInfo, companyInfo}: {pInfo: PersonalInfoType, companyInfo: CompanyInfoType[]}) {
    return (
      <div className="Display">
        <h1>Resume</h1>
        <div>
          <h2>Personal information</h2>
          <p>Name: {pInfo.name}</p>
          <p>Email:{pInfo.email}</p>
          <p>Phone:{pInfo.phone}</p>
        </div>
        <div>
          <h2>Experience</h2>
          <div>
            {companyInfo.map((item: CompanyInfoType, index) => {
              return (
                <div key={index}>
                  <p>Company: {item.company}</p>
                  <p>Position: {item.position}</p>
                  <p>Start Date: {item.startDate}</p>
                  <p>End Date: {item.endDate}</p>
                </div>
              );
            })}{" "}
          </div>
        </div>
        <div>
          <h2>Education</h2>
          <div>
            {education.map((item, index) => {
              return (
                <div key={index}>
                  <p>School: {item.school}</p>
                  <p>Degree: {item.degree}</p>
                  <p>Graduation Date: {item.graduationDate}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="App-header">
      <h1>CV Generator</h1>
      <div className="Sidebar">
        <Personal
          AddPersonalInfo={AddPersonalInfo}
          onSetName={handleNameChange}
          onSetEmail={handleEmailChange}
          onSetPhone={handlePhoneChange}
        />
        <Exp
          updateCompanyInfo={updateCompanyInfo}
          deleteCompanyInfo={deleteCompanyInfo}
          companyInfo={companyInfo}
          AddCompanyInfo={AddCompanyInfo}
          setEndDate={setEndDate}
          setStartDate={setStartDate}
          setPosition={setPosition}
          setCompany={setCompany}
        />
        <Edu
          education={education}
          AddEducation={AddEducation}
          deleteEducation={deleteEducation}
          updateEducation={updateEducation}
          setSchool={setSchool}
          setDegree={setDegree}
          setGraduationDate={setGraduationDate}
        />
      </div></div>
      <Display pInfo={PersonalInfo} companyInfo={companyInfo} />
    </div>
  );
}

interface EducationItem{
  school: string;
  degree: string;
  graduationDate: string;
  id: number;
}
interface EduType {
  education: EducationItem[];
  AddEducation: (e: React.FormEvent<HTMLFormElement>) => void;
  deleteEducation: (index: number) => void;
  updateEducation: (e: React.FormEvent<HTMLFormElement>, index: number) => void;
  setSchool: (school: string) => void;
  setDegree: (degree: string) => void;
  setGraduationDate: (graduationDate: string) => void;
}
function Edu({
  education,
  AddEducation,
  deleteEducation,
  updateEducation,
  setSchool,
  setDegree,
  setGraduationDate,
}: EduType) {
  return (
    <>
      {education.map((_, index) => {
        return (
          <div className="Edu" key={index}>
            <form
              onSubmit={(e) => {
                updateEducation(e, index);
              }}
            >
              <label htmlFor="school">School:</label>
              <input
                type="text"
                id="school"
                name="school"
                onChange={(e) => {
                  setSchool(e.target.value);
                }}
              ></input>
              <label htmlFor="degree">Degree:</label>
              <input
                type="text"
                id="degree"
                name="degree"
                onChange={(e) => {
                  setDegree(e.target.value);
                }}
              ></input>
              <label htmlFor="graduationDate">Graduation Date:</label>
              <input
                type="date"
                id="graduationDate"
                name="graduationDate"
                onChange={(e) => {
                  setGraduationDate(e.target.value);
                }}
              ></input>
              <button type="button">Edit </button>
              <button type="submit">Add</button>
              <button
                type="button"
                onClick={() => {
                  deleteEducation(index);
                }}
              >
                Delete
              </button>
              <button type="button" onClick={AddEducation}>
                Add new
              </button>
            </form>
          </div>
        );
      })}
    </>
  );
}
interface CompanyInfoType {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  id: number;
}
interface ExpType {
  updateCompanyInfo: (e: React.FormEvent<HTMLFormElement>, index: number) => void;
  deleteCompanyInfo: (index: number) => void;
  companyInfo: CompanyInfoType[];
  AddCompanyInfo: (e: React.FormEvent<HTMLFormElement>) => void;
  setEndDate: (endDate: string) => void;
  setStartDate: (startDate: string) => void;
  setPosition: (position: string) => void;
  setCompany: (company: string) => void;
}

function Exp({
  updateCompanyInfo,
  deleteCompanyInfo,
  companyInfo,
  AddCompanyInfo,
  setEndDate,
  setStartDate,
  setPosition,
  setCompany,
}: ExpType) {
  return (
    <>
      {companyInfo.map((_, index) => {
        console.log(index);
        return (
          <div className="Exp" key={index}>
            <form
              onSubmit={(e) => {
                updateCompanyInfo(e, index);
              }}
            >
              <label htmlFor="company">Company:</label>
              <input
                type="text"
                id="company"
                name="company"
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
              ></input>
              <label htmlFor="position">Position:</label>
              <input
                type="text"
                id="position"
                name="position"
                onChange={(e) => {
                  setPosition(e.target.value);
                }}
              ></input>
              <label htmlFor="startDate">Start Date:</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                onChange={(e) => {
                  setStartDate(e.target.value);
                }}
              ></input>
              <label htmlFor="endDate">End Date:</label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                onChange={(e) => {
                  setEndDate(e.target.value);
                }}
              ></input>
              <button type="button">Edit </button>
              <button type="submit">Add</button>
              <button
                type="button"
                onClick={() => {
                  deleteCompanyInfo(index);
                }}
              >
                Delete
              </button>
              <button type="button" onClick={AddCompanyInfo}>
                Add new
              </button>
            </form>
          </div>
        );
      })}
    </>
  );
}
interface PersonalType {
  AddPersonalInfo: (e: React.FormEvent<HTMLFormElement>) => void;
  onSetName: (name: string) => void;
  onSetEmail: (email: string) => void;
  onSetPhone: (phone: string) => void;
}
function Personal({ AddPersonalInfo, onSetName, onSetEmail, onSetPhone }: PersonalType) {
  return (
    <div className="Personal">
      <form onSubmit={AddPersonalInfo}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => onSetName(e.target.value)}
        ></input>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => onSetEmail(e.target.value)}
        ></input>
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          onChange={(e) => onSetPhone(e.target.value)}
        ></input>
        <button type="button">Edit </button>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
