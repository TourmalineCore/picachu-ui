import axios from 'axios';
import { API_ROOT } from '../config';

export const api = axios.create({
  baseURL: API_ROOT,
});
