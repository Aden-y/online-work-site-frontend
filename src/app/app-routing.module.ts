import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { RegisterClientComponent } from './views/register-client/register-client.component';
import { FreelancerComponent } from './views/freelancer/freelancer.component';
import { ClientComponent } from './views/client/client.component';
import { PostJobComponent } from './views/client/post-job/post-job.component';
import { AuthService } from './services/auth.service';
import { GuestService } from './services/guest.service';
import { JobDetalisComponent } from './views/jobs/job-detalis/job-detalis.component';
import { AvailableJobsComponent } from './views/freelancer/jobs/available-jobs/available-jobs.component';
import { OrdersInProgressComponent } from './views/freelancer/jobs/orders-in-progress/orders-in-progress.component';
import { OrdersCompletedComponent } from './views/freelancer/jobs/orders-completed/orders-completed.component';
import { OrdersCancelledComponent } from './views/freelancer/jobs/orders-cancelled/orders-cancelled.component';
import { OrdersInBiddingComponent } from './views/freelancer/jobs/orders-in-bidding/orders-in-bidding.component';
import { FreelancerMessagesComponent } from './views/freelancer/freelancer-messages/freelancer-messages.component';
import { FreelancerNotificationsComponent } from './views/freelancer/freelancer-notifications/freelancer-notifications.component';
import { GettingStartedComponent } from './views/getting-started/getting-started.component';
import { FAQComponent } from './views/faq/faq.component';
import { ClientJobsInBiddingComponent } from './views/client/client-jobs-in-bidding/client-jobs-in-bidding.component';
import { ClientJobsInProcessComponent } from './views/client/client-jobs-in-process/client-jobs-in-process.component';
import { ClientJobsCompletedComponent } from './views/client/client-jobs-completed/client-jobs-completed.component';
import { ClientJobsCancelledComponent } from './views/client/client-jobs-cancelled/client-jobs-cancelled.component';
import { BidsComponent } from './views/client/bids/bids.component';
import { SubmissionsComponent } from './views/client/submissions/submissions.component';
import { MessagesComponent } from './views/messages/messages.component';
import { OrderMessagesComponent } from './views/order-messages/order-messages.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent, canActivate: [GuestService]},
  {path: 'register', component: RegisterComponent, canActivate: [GuestService]},
  {path: 'register-client', component: RegisterClientComponent, canActivate: [GuestService]},
  {path: 'freelancer', component: FreelancerComponent, canActivate: [AuthService]},
  {path: 'client', component: ClientComponent, canActivate: [AuthService]},
  {path: 'order-messages/:id', component: OrderMessagesComponent, canActivate: [AuthService]},
  {path: 'messages', component: MessagesComponent, canActivate: [AuthService]},
  {path: 'jobs/post', component: PostJobComponent, canActivate: [AuthService]},
  {path: 'jobs/details/:id', component: JobDetalisComponent, canActivate: [AuthService]},
  {path: 'freelancer/jobs/find', component: AvailableJobsComponent, canActivate: [AuthService]},
  {path: 'freelancer/jobs/in-process', component: OrdersInProgressComponent, canActivate: [AuthService]},
  {path: 'freelancer/jobs/completed', component: OrdersCompletedComponent, canActivate: [AuthService]},
  {path: 'freelancer/jobs/cancelled', component: OrdersCancelledComponent, canActivate: [AuthService]},
  {path: 'freelancer/jobs/in-bidding', component: OrdersInBiddingComponent, canActivate: [AuthService]},
  {path: 'freelancer/messages', component: FreelancerMessagesComponent, canActivate: [AuthService]},
  {path: 'freelancer/notifications', component: FreelancerNotificationsComponent, canActivate: [AuthService]},
  {path: 'help/getting-started', component: GettingStartedComponent, canActivate: [AuthService]},
  {path: 'help/faq', component: FAQComponent, canActivate: [AuthService]},
  {path: 'client/jobs/in-bidding', component: ClientJobsInBiddingComponent, canActivate: [AuthService]},
  {path: 'client/jobs/in-process', component: ClientJobsInProcessComponent, canActivate: [AuthService]},
  {path: 'client/jobs/completed', component: ClientJobsCompletedComponent, canActivate: [AuthService]},
  {path: 'client/jobs/cancelled', component: ClientJobsCancelledComponent, canActivate: [AuthService]},
  {path: 'client/jobs/bids/:id', component: BidsComponent, canActivate: [AuthService]},
  {path: 'client/jobs/submissions/:id', component: SubmissionsComponent, canActivate: [AuthService]},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
