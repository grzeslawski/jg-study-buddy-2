import { useCallback } from 'react';
import axios from 'axios';
import { useError } from './useError';

const studentsAPI = axios.create({});

studentsAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const useStudents = () => {
  const { dispatchError } = useError();

  const getGroups = useCallback(async () => {
    try {
      const result = await studentsAPI.get('/groups');
      return result.data.groups;
    } catch (e) {
      dispatchError('Sorry, groups not found, please try again');
    }
  }, [dispatchError]);

  const getStudentById = useCallback(
    async (studentId) => {
      try {
        const result = await studentsAPI.get(`/students/${studentId}`);
        return result.data.students;
      } catch (e) {
        console.log(e);
        dispatchError('Sorry, students not found, please try again');
      }
    },
    [dispatchError]
  );

  const getStudentsByGroup = useCallback(
    async (groupId) => {
      try {
        const result = await studentsAPI.get(`/groups/${groupId}`);
        return result.data.students;
      } catch (e) {
        dispatchError('Sorry, students in this group not found, please try again');
      }
    },
    [dispatchError]
  );

  const findStudents = async (searchPhrase) => {
    try {
      const { data } = await studentsAPI.post(`/students/search`, {
        searchPhrase,
      });
      return data;
    } catch (e) {
      dispatchError('Sorry, student not found, please try again');
    }
  };

  return {
    getGroups,
    getStudentsByGroup,
    getStudentById,
    findStudents,
  };
};
