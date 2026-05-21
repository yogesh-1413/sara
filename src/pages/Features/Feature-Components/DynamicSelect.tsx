import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Sidebar from './SideBar';
import Footer from '../../../componets/Footer_FIn';
import ModuleDisplay from './ModuleDisplay';
import Sidebar2 from './Sidebar2';
import TopicExplainer from './TopicExplainer';

// Full hierarchy: School → Branch → Semester → Subjects
const schoolData: Record<
  string,
  Record<
    string,
    Record<string, string[]>
  >
> = {
  //SCHOOL OF COMPUTING
  'School of Computing': {
    CSE: {
      // '1st Sem': [''],
      '2nd Sem': ['Basic-EEE[BEEE]', 'Calculus-T&T[CTT]', 'Discrete-Math-Structures[DMS]', 'JAVA[OOPJ]', 'Professional-Ethics&HV[PEHV]'],
      // '3rd Sem': [''],
      '4th Sem': ['Artificial-Intelligence[AI]', 'Computer-Networks[CN]', 'Design-Analysis&Algorithms[DAA]', 'Software Engineering[SE]'],
      // '5th Sem': [''],
      '6th Sem': ['Object-Oriented-Modeling-and-Design[OOMD]', 'Artificial-Neural-Networks[ANN]', 'Mobile-Application-Development[MAD]', 'Cyber-Security-Essentials[CSE]'],
      // '7th Sem': [''],
      // '8th Sem': [''],
    },
    IT: {
      // '1st Sem': [''],
      '2nd Sem': ['Basic-EEE[BEEE]', 'Calculus-T&T[CTT]', 'Discrete-Math-Structures[DMS]', 'JAVA[OOPJ]', 'Python-Programming[PP]'],
      // '3rd Sem': [''],
      '4th Sem': ['Data-Mining[DM]', 'Computer-Networks[CN]', 'Design-Analysis&Algorithms[DAA]',],
      // '5th Sem': [''],
      '6th Sem': ['Artificial-Intelligence[AI]', 'Deep-Learning[DL]', 'Distributed-Systems[DS]', 'Software-Testing&QA[STQA]', 'Computer-Architecture & Organization[CAO]'],
      // '7th Sem': [''],
      // '8th Sem': [''],
    },
    DS: {
      // '1st Sem': [''],
      '2nd Sem': ['JAVA[OOPJ]', 'Digital-Logic-Design[DLD]', 'Basic-EEE[BEEE]', 'Matrix-Theory[MTLA]', 'Physics-for-Computing[PC]'],
      // '3rd Sem': [''],
      '4th Sem': ['Computer-Networks[CN]', 'Theory-of-Computation[TOC]', 'R-Programming[RP]', 'Software Engineering[SE]'],
      // '5th Sem': [''],
      '6th Sem': ['Artificial-Intelligence[AI]', 'Distributed-Systems[DS]', 'Deep-Learning[DL]', 'Software-Testing&QA[STQA]', 'Computer-Architecture & Organization[CAO]'],
      // '7th Sem': [''],
      // '8th Sem': [''],
    },
    AIML: {
      // '1st Sem': [''],
      '2nd Sem': ['JAVA[OOPJ]', 'Digital-Logic-Design[DLD]', 'Basic-EEE[BEEE]', 'Matrix-Theory[MTLA]', 'Physics-for-Computing[PC]'],
      // '3rd Sem': [''],
      '4th Sem': ['Computer-Networks[CN]', 'Theory-of-Computation[TOC]', 'Artificial-Intelligence[AI]', 'Software Engineering[SE]'],
      // '5th Sem': [''],
      '6th Sem': ['Cloud-Computing[CC]', 'Deep-Learning[DL]', 'Compiler-Design[CD]'],
      // '7th Sem': [''],
      // '8th Sem': [''],
    },
    CS: {
      // '1st Sem': [''],
      '2nd Sem': ['JAVA[OOPJ]', 'Digital-Logic-Design[DLD]', 'Basic-EEE[BEEE]', 'Matrix-Theory[MTLA]', 'Physics-for-Computing[PC]'],
      // '3rd Sem': [''],
      '4th Sem': ['Data-Mining[DM]', 'Internet-of-Things[IOT]', 'Theory-of-Computation[TOC]', 'Software Engineering[SE]'],
      // '5th Sem': [''],
      '6th Sem': ['Computer-Architecture & Organization[CAO]', 'Cryptography-and-Network-Security[CNS]', 'Ethical-Hacking[EH]', 'Web-Application-Security[WAS]'],
      // '7th Sem': [''],
      // '8th Sem': [''],
    },

  },
  //SCHOOL OF ENGINEERING

  // 'School of Engineering': {
  //   CIVIL: {
  //     '1st Sem': [''],
  //     '2nd Sem': ['Civil-Engg-Materials-&-Concrete-Tech[CEMCT]', 'Programming-in-C-&-Data-Structures[PCDS]', 'Basic-EEE[BEEE]', 'Transformation-Techniques&Linear-Algebra[TTLA]',],
  //     '3rd Sem': [''],
  //     '4th Sem': ['Hydrology & Water Resources Engineering[HWRE]', 'Structural Analysis[SA]', 'Fire Engineering[FE]', 'Sustainable Engineering[SE]', 'Soil Mechanics[SM]'],
  //     '5th Sem': [''],
  //     '6th Sem': ['Steel Structures[SS]', 'Geospatial Technologies[GT]'],
  //     '7th Sem': [''],
  //     '8th Sem': [''],
  //   },
  //   ECE: {
  //     '1st Sem': [''],
  //     '2nd Sem': ['Data Structures And Algorithms[DSA]', 'Engineering-Chemistry[EC]', 'Sensors&Measuring-Instruments[SMT]', 'Semiconductors-Devices&Circuits[SDC]', 'Transformation-Techniques&Linear-Algebra[TTLA]',],
  //     '3rd Sem': [''],
  //     '4th Sem': ['Probability and Stochastic Processes[PSP]', 'Linear-IC-Applications[LICA]', 'VLSI-System-Designs[VLSI]', 'Analog Communications[AC]'],
  //     '5th Sem': [''],
  //     '6th Sem': ['Satellite-Communications[SC]', 'Antennas&Propagations[AP]', 'Digital-Signal-Processing[DSP]', 'Embedded-Systems[ES]'],
  //     '7th Sem': [''],
  //     '8th Sem': [''],
  //   },
  //   EEE: {
  //     '1st Sem': [''],
  //     '2nd Sem': ['Data Structures And Algorithms[DSA]', 'Semiconductors-Devices&Circuits[SDC]', 'Transformation-Techniques&Linear-Algebra[TTLA]',],
  //     '3rd Sem': [''],
  //     '4th Sem': ['Transmission and Distribution[TD]', 'Electrical Machines-2[EM2]', 'Control Systems[CS]', 'Data Structures And Algorithms[DSA]'],
  //     '5th Sem': [''],
  //     '6th Sem': ['Interfacing with Microcontollers[IWM]', 'Power Electronics[PE]', 'Power System Analysis[PSA]'],
  //     '7th Sem': [''],
  //     '8th Sem': [''],
  //   },
  //   MECH: {
  //     '1st Sem': [''],
  //     '2nd Sem': ['Basic-EEE[BEEE]', 'Transformation-Techniques&Linear-Algebra[TTLA]', 'Programming-in-C-&-Data-Structures[PCDS]', 'Manufacturing-Technology[MT]', 'Engineering-Workshop[EW]'],
  //     '3rd Sem': [''],
  //     '4th Sem': ['FLUID-MECHANICS[FM]', 'DYNAMICS-OF-MACHINERY[DOM]', 'THERMAL-ENGINEERING[TE]'],
  //     '5th Sem': [''],
  //     '6th Sem': ['OPERATIONS-RESEARCH[OR]', 'DESIGN-OF-TRANSMISSION-SYSTEMS[DTS]', 'COMPUTER-AIDED-DESIGN-AND-MANUFACTURING[CADM]'],
  //     '7th Sem': [''],
  //     '8th Sem': [''],
  //   },
  //   EIE: {
  //     '1st Sem': [''],
  //     '2nd Sem': ['Data Structures And Algorithms[DSA]', 'Engineering-Chemistry[EC]', 'Sensors&Transducers[ST]', 'Semiconductors-Devices&Circuits[SDC]', 'Transformation-Techniques&Linear-Algebra[TTLA]'],
  //     '3rd Sem': [''],
  //     '4th Sem': ['Microelecricalmechanical-Systems[MS]', 'Linear-IC-Applications[LICA]', 'VLSI-System-Designs[VLSI]', 'Industrial-Instrumentation[II]', 'Linear-Control-Systems[LCS]'],
  //     '5th Sem': [''],
  //     '6th Sem': ['Wireless-Sensor-Networks[WSN]', 'Powerplant-Instrumentation[PI]', 'Programmable-Logic-Controllers[PLC]', 'Digital-Signal-Processing[DSP]', 'Embedded-Systems[ES]'],
  //     '7th Sem': [''],
  //     '8th Sem': [''],
  //   },
  // },
  // 'School of Pharmaceutical Sciences': {
  //     B_Pharm: {
  //     '1st Sem': ['Pharmaceutical Chemistry', 'Pharmacognosy'],
  //     '2nd Sem': ['Pharmaceutics', 'Pharmacology'],
  //     '3rd Sem': ['Medicinal Chemistry', 'Pharmaceutical Analysis'],
  //     '4th Sem': ['Biochemistry', 'Clinical Pharmacy'],
  //     '5th Sem': ['Pharmaceutical Biotechnology', 'Quality Assurance'],
  //     '6th Sem': ['Pharmacovigilance', 'Regulatory Affairs'],
  //   },
  //   M_Pharm: {
  //     '1st Sem': ['Advanced Organic Chemistry', 'Pharmaceutical Formulations'],
  //     '2nd Sem': ['Pharmacokinetics', 'Drug Design'],
  //     '3rd Sem': ['Clinical Research', 'Pharmaceutical Marketing'],
  //     '4th Sem': ['Pharmaceutical Technology', 'Biopharmaceutics'],
  //   },
  //   Pharm_D: {
  //     '1st Sem': ['Pharmaceutical Chemistry', 'Pharmacognosy'],
  //     '2nd Sem': ['Pharmaceutics', 'Pharmacology'],
  //     '3rd Sem': ['Medicinal Chemistry', 'Pharmaceutical Analysis'],
  //     '4th Sem': ['Biochemistry', 'Clinical Pharmacy'],
  //     '5th Sem': ['Pharmaceutical Biotechnology', 'Quality Assurance'],
  //     '6th Sem': ['Pharmacovigilance', 'Regulatory Affairs'],
  //   },
  // },
};

const DynamicSelect: React.FC = () => {
  const [selectedSchool, setSelectedSchool] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedModule, setSelectedModule] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedModule2, setSelectedModule2] = useState('');
  const [selectedSubject2, setSelectedSubject2] = useState('');


  const branches = selectedSchool ? Object.keys(schoolData[selectedSchool]) : [];
  const semesters =
    selectedSchool && selectedBranch
      ? Object.keys(schoolData[selectedSchool][selectedBranch])
      : [];
  const subjects =
    selectedSchool && selectedBranch && selectedSemester
      ? schoolData[selectedSchool][selectedBranch][selectedSemester]
      : [];

  // function sendToGemini(message: string) {
  //   console.log("Sending message to Gemini:", message);
  //   // later you can replace this with actual API calling logic
  // }


  return (
    < div className='bg-gray-200 dark:bg-[#1f1f1f] transition-all duration-300 ease-in-out '>
      <div className='flex max-h-full bg-gray-200 dark:bg-[#1f1f1f] transition-all duration-300 ease-in-out rounded-xl'>
        <div className="flex  gap-4 max-w-full p-5  mx-auto bg-gray-200 shadow-md dark:bg-[#2c2c2c] transition-all duration-300 ease-in-out rounded-xl ">
          <label className="block text-black mb-2 dark:text-gray-200 transition-all duration-300 ease-in-out  ">
            Select School
            <select className=" px-2 py-2 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent dark:focus:ring-orange-600 dark:bg-[#1f1f1f] dark:text-white transition-all duration-300 ease-in-out"
              value={selectedSchool}
              onChange={(e) => {
                setSelectedSchool(e.target.value);
                setSelectedBranch('');
                setSelectedSemester('');
                setSelectedSubject('');
              }}

            >
              <option value="">-- Select School --</option>
              {Object.keys(schoolData).map((school) => (
                <option key={school} value={school}>
                  {school}
                </option>
              ))}
            </select>
          </label>

          <label className="block text-black mb-2 dark:text-gray-200 transition-all duration-300 ease-in-out  ">
            Select Branch
            <select className=" px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent dark:focus:ring-orange-600 dark:bg-[#1f1f1f] dark:text-white transition-all duration-300 ease-in-out"
              value={selectedBranch}
              onChange={(e) => {
                setSelectedBranch(e.target.value);
                setSelectedSemester('');
                setSelectedSubject('');
              }}
              disabled={!selectedSchool}

            >
              <option value="">-- Select Branch --</option>
              {branches.map((branch) => (
                <option key={branch} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </label>


          <label className="block text-black mb-2 dark:text-gray-200 transition-all duration-300 ease-in-out  ">
            Select Semester
            <select className=" px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent dark:focus:ring-orange-600 dark:bg-[#1f1f1f] dark:text-white transition-all duration-300 ease-in-out"
              value={selectedSemester}
              onChange={(e) => {
                setSelectedSemester(e.target.value);
                setSelectedSubject('');
              }}
              disabled={!selectedBranch}
            >
              <option value="">-- Select Semester --</option>
              {semesters.map((sem) => (
                <option key={sem} value={sem}>
                  {sem}
                </option>
              ))}
            </select>
          </label>


          <label className="block text-black mb-2 dark:text-gray-200 transition-all duration-300 ease-in-out justify-center">
            Select Subject
            <select className=" px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent dark:focus:ring-orange-600 dark:bg-[#1f1f1f] dark:text-white transition-all duration-300 ease-in-out"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              disabled={!selectedSemester}
            >
              <option value="">-- Select Subject --</option>
              {subjects.map((subj) => (
                <option key={subj} value={subj}>
                  {subj}
                </option>
              ))}
            </select>
          </label>
          <div className='items-center'>
            <SearchBar
              onSubjectSelect={(subject: string) => {
                setSelectedSubject(subject); // Update the selected subject when one is clicked
              }}
            />
          </div>


        </div>
      </div>
      <div className="flex  min-h-screen min-w-30 bg-gray-200 dark:bg-[#1f1f1f] transition-all duration-300 ease-in-out p-4">
        <Sidebar subject={selectedSubject}
          onModuleClick={setSelectedModule} />
        <div className="flex-1 overflow-auto mx-1.5">
          <ModuleDisplay moduleName={selectedModule} />
        </div>
      </div>
      <div>
        <p className='mx-10 my-10 font-bold text-3xl text-blue-600 dark:text-orange-600 text-center'>Sara AI's Summarizer & Explanation</p>
        <div className="flex min-h-screen w-full my-2 bg-gray-200 dark:bg-[#1f1f1f] transition-all duration-300 ease-in-out p-4">

          <div className="w-64 bg-gray-200 dark:bg-[#1f1f1f] rounded-xl flex min-h-screen min-w-30 bg-gray-200 dark:bg-[#1f1f1f] transition-all duration-300 ease-in-out p-4">
            <Sidebar2
              subject={selectedSubject}
              onTopicClick={(topicName, moduleName, subjectName) => {
                console.log("Topic:", topicName);
                console.log("Module:", moduleName);
                console.log("Subject:", subjectName);

                setSelectedTopic(topicName);
                setSelectedModule2(moduleName);
                setSelectedSubject(subjectName);
              }} module={''} />
          </div>


          <div className="flex-grow ">
            {selectedTopic && selectedModule && selectedSubject && (
              <TopicExplainer
                topic={selectedTopic}
                module={selectedModule2}
                subject={selectedSubject}
              />
            )}
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default DynamicSelect;
