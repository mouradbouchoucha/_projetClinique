import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public patients: any = [
    {
      patientName: 'Richard Wilson',
      patient_id: 'P0016',
      apptDate: 'Sat May 23 2020 13:35:47 GMT+0530 (India Standard Time)',
      purpose: 'General',
      type: 'New patient',
      email: 'richard@example.com',
      phone: '+1 923 782 4575',
      amount: 150,
      status: 0,
    },
    {
      patientName: 'Richard Wilson',
      patient_id: 'P0001',
      email: 'richard@example.com',
      apptDate: 'Sat May 23 2020 13:35:47 GMT+0530 (India Standard Time)',
      purpose: 'General',
      type: 'Old patient',
      phone: '+1 828 632 9170',
      amount: 200,
      status: 0,
    },
    {
      patientName: 'Richard Wilson',
      patient_id: 'P0002',
      email: 'richard@example.com',
      apptDate: 'Sat May 23 2020 13:35:47 GMT+0530 (India Standard Time)',
      purpose: 'General',
      type: 'New patient',
      phone: '+1 828 632 9170',
      amount: 350,
      status: 0,
    },
    {
      patientName: 'Richard Wilson',
      email: 'richard@example.com',
      patient_id: 'P0003',
      apptDate: 'Sat May 23 2020 13:35:47 GMT+0530 (India Standard Time)',
      purpose: 'General',
      type: 'New patient',
      amount: 400,
      status: 0,
    },
  ];

  messages:any = '';
  SERVER_URL: string = 'http://localhost:8080/api/';
  public message: BehaviorSubject<String> = new BehaviorSubject<String>('');
  constructor(public http: HttpClient) {
    this.message = new BehaviorSubject(this.messages);
  }

  nextmessage(data:any) {
    this.message.next(data);
  }

  getJSON(): Observable<any> {
    // return this.http.get("./assets/data.json");
    return this.patients;
  }

  update(id:any, status:any, list:any) {
    let filter = list.filter((a:any) => a.patient_id === id);
    if (filter.length != 0) {
      filter['status'] = status;
    }
  }

  getSpeciality() {
    return this.http.get(this.SERVER_URL + 'specialityList');
  }

  createSpeciality(data:any) {
    return this.http.post(`${this.SERVER_URL + 'specialityList'}`, data);
  }

  updateSpeciality(data:any, id:any) {
    return this.http.put(`${this.SERVER_URL + 'specialityList'}/${id}`, data);
  }

  deleteSpeciality(id:any) {
    return this.http.delete(`${this.SERVER_URL + 'specialityList'}/${id}`);
  }

  getDoctors() {
    return this.http.get(this.SERVER_URL + 'doctors');
  }
  getSearchDoctors() {
    return this.http.get(this.SERVER_URL + 'searchDoctor');
  }

  getDoctorDetails(id:any) {
    return this.http.get(`${this.SERVER_URL + 'doctors'}/${id}`);
  }

  getAppointments() {
    return this.http.get(this.SERVER_URL + 'appointments');
  }

  updateAppointment(data:any, id:any) {
    return this.http.put(`${this.SERVER_URL + 'appointments'}/${id}`, data);
  }

  getpatients() {
    return this.http.get(this.SERVER_URL + 'patients');
  }

  createBlogs(data:any) {
    return this.http.post(`${this.SERVER_URL + 'blogs'}`, data);
  }

  getBlogs() {
    return this.http.get(this.SERVER_URL + 'blogs');
  }

  getBlogsDetails(id:any) {
    return this.http.get(`${this.SERVER_URL + 'blogs'}/${id}`);
  }

  updateBlog(data:any, id:any) {
    return this.http.put(`${this.SERVER_URL + 'blogs'}/${id}`, data);
  }

  deleteBlog(id:any) {
    return this.http.delete(`${this.SERVER_URL + 'blogs'}/${id}`);
  }

  createDoctor(data:any) {
    return this.http.post(`${this.SERVER_URL + 'doctors'}`, data);
  }

  createPatient(data:any) {
    return this.http.post(`${this.SERVER_URL + 'patients'}`, data);
  }

  getPatientDetails(id:any) {
    return this.http.get(`${this.SERVER_URL + 'patients'}/${id}`);
  }

  createAppointment(params:any) {
    return this.http.post(`${this.SERVER_URL + 'appointments'}`, params);
  }

  getFav() {
    return this.http.get(this.SERVER_URL + 'favourites');
  }

  createFav(params:any) {
    return this.http.post(this.SERVER_URL + 'favourites', params);
  }

  getComments() {
    return this.http.get(this.SERVER_URL + 'comments');
  }

  createComment(params:any) {
    return this.http.post(this.SERVER_URL + 'comments', params);
  }

  deleteFav(id:any) {
    return this.http.delete(`${this.SERVER_URL + 'favourites'}/${id}`);
  }

  getTransactions() {
    return this.http.get(this.SERVER_URL + 'transactions');
  }

  deleteTransaction(id:any) {
    return this.http.delete(`${this.SERVER_URL + 'transactions'}/${id}`);
  }

  getReviews() {
    return this.http.get(this.SERVER_URL + 'reviews');
  }

  deleteReview(id:any) {
    return this.http.delete(`${this.SERVER_URL + 'reviews'}/${id}`);
  }

  getProducts() {
    return this.http.get(this.SERVER_URL + 'products');
  }

  deleteProduct(id:any) {
    return this.http.delete(`${this.SERVER_URL + 'products'}/${id}`);
  }

  getCategories() {
    return this.http.get(this.SERVER_URL + 'categories');
  }

  deleteCategory(id:any) {
    return this.http.delete(`${this.SERVER_URL + 'categories'}/${id}`);
  }

  getOrders() {
    return this.http.get(this.SERVER_URL + 'orders');
  }

  deleteOrder(id:any) {
    return this.http.delete(`${this.SERVER_URL + 'orders'}/${id}`);
  }

  getPharmacyReports() {
    return this.http.get(this.SERVER_URL + 'pharmacy_reports');
  }

  deletePharmacyReports(id:any) {
    return this.http.delete(`${this.SERVER_URL + 'pharmacy_reports'}/${id}`);
  }

  getPurchase() {
    return this.http.get(this.SERVER_URL + 'purchase');
  }

  deletePurchase(id:any) {
    return this.http.delete(`${this.SERVER_URL + 'purchase'}/${id}`);
  }

  getSales() {
    return this.http.get(this.SERVER_URL + 'sales');
  }

  deleteSale(id:any) {
    return this.http.delete(`${this.SERVER_URL + 'sale'}/${id}`);
  }
  getPharmacyTransactions() {
    return this.http.get(this.SERVER_URL + 'pharmacy_transactions');
  }

  deletePharmacyTransactions(id:any) {
    return this.http.delete(`${this.SERVER_URL + 'pharmacy_transactions'}/${id}`);
  }

  getPharmacy() {
    return this.http.get(this.SERVER_URL + 'pharmacy');
  }

  deletePharmacy(id:any) {
    return this.http.delete(`${this.SERVER_URL + 'pharmacy'}/${id}`);
  }
}
