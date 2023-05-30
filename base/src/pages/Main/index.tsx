import './styles.css';
import Header from '../../components/Header';
import TeacherCard from '../../components/TeacherCard';
import api from '../../services/api';
import { useState, useEffect } from 'react';
import Teacher from '../../types/Teacher';

function Main() {
  const [allTeaachers, setAllTeachers] = useState<Teacher[]>([]);

  const loadTeachers = async () => {
    try {
      const response = await api.get('/teachers');

      setAllTeachers([...response.data]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadTeachers();
  }, []);

  return (
    <div className='container'>
      <Header />
      <div className='main-teachers'>
        {allTeaachers.map((teacher) => (
          <TeacherCard
            key={teacher.id}
            teacher={teacher}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
